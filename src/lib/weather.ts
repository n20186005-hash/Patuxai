// Shared weather logic for Patuxai (Vientiane). Used both at build time
// (server-side snapshot in WeatherSection) and at runtime (Cloudflare Worker
// /api/weather endpoint that proxies + caches the upstream forecast).
//
// This module deliberately contains NO mentions of the data source, pricing,
// or API keys — those are implementation details the visitor never sees.

export const WEATHER_LAT = 17.9705363;
export const WEATHER_LON = 102.6139707;
export const WEATHER_TZ = 'Asia/Bangkok';

export function buildWeatherUrl(): string {
  const params = [
    `latitude=${WEATHER_LAT}`,
    `longitude=${WEATHER_LON}`,
    'current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m',
    'daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max,uv_index_max',
    `timezone=${WEATHER_TZ}`,
    'wind_speed_unit=kmh',
    'forecast_days=7',
  ].join('&');
  return `https://api.open-meteo.com/v1/forecast?${params}`;
}

export interface WeatherNow {
  temp: number;
  feels: number;
  humidity: number;
  windKmh: number;
  windDir: number;
  code: number;
  precip: number;
}

export interface WeatherDay {
  date: string; // YYYY-MM-DD
  code: number;
  tmax: number;
  tmin: number;
  precipProb: number;
  windKmh: number;
  uv: number;
}

export interface WeatherData {
  now: WeatherNow;
  days: WeatherDay[];
  fetchedAt: string;
  // Official meteorological warnings (typhoon, rainstorm, heat, etc.).
  // Open-Meteo has no alert feed, so this is normally empty; the shape is
  // kept so a real alerts source can be plugged in without UI changes.
  warnings: string[];
}

// WMO weather interpretation codes → label + emoji icon, per language.
const CODE_INFO: Record<number, Record<string, { label: string; icon: string }>> = {
  0:  { lo: { label: 'ທ້ອງຟ້າໂປລ່ງ', icon: '☀️' }, en: { label: 'Clear sky', icon: '☀️' }, zh: { label: '晴', icon: '☀️' } },
  1:  { lo: { label: 'ເກືອບໂປລ່ງ', icon: '🌤️' }, en: { label: 'Mainly clear', icon: '🌤️' }, zh: { label: '晴间多云', icon: '🌤️' } },
  2:  { lo: { label: 'ເມຄບາງສ່ວນ', icon: '⛅' }, en: { label: 'Partly cloudy', icon: '⛅' }, zh: { label: '局部多云', icon: '⛅' } },
  3:  { lo: { label: 'ເມຄປົກຫຸ້ມ', icon: '☁️' }, en: { label: 'Overcast', icon: '☁️' }, zh: { label: '阴', icon: '☁️' } },
  45: { lo: { label: 'ຫມອກ', icon: '🌫️' }, en: { label: 'Fog', icon: '🌫️' }, zh: { label: '雾', icon: '🌫️' } },
  48: { lo: { label: 'ຫມອກແຂັງ', icon: '🌫️' }, en: { label: 'Rime fog', icon: '🌫️' }, zh: { label: '雾凇', icon: '🌫️' } },
  51: { lo: { label: 'ຝົນພິມເລັກນ້ອຍ', icon: '🌦️' }, en: { label: 'Light drizzle', icon: '🌦️' }, zh: { label: '小毛毛雨', icon: '🌦️' } },
  53: { lo: { label: 'ຝົນພິມ', icon: '🌦️' }, en: { label: 'Drizzle', icon: '🌦️' }, zh: { label: '毛毛雨', icon: '🌦️' } },
  55: { lo: { label: 'ຝົນພິມໜັກ', icon: '🌧️' }, en: { label: 'Dense drizzle', icon: '🌧️' }, zh: { label: '浓毛毛雨', icon: '🌧️' } },
  56: { lo: { label: 'ຝົນພິມແຂັງ', icon: '🌧️' }, en: { label: 'Freezing drizzle', icon: '🌧️' }, zh: { label: '冻毛毛雨', icon: '🌧️' } },
  57: { lo: { label: 'ຝົນພິມແຂັງໜັກ', icon: '🌧️' }, en: { label: 'Freezing drizzle', icon: '🌧️' }, zh: { label: '强冻毛毛雨', icon: '🌧️' } },
  61: { lo: { label: 'ຝົນຕົກເລັກນ້ອຍ', icon: '🌧️' }, en: { label: 'Light rain', icon: '🌧️' }, zh: { label: '小雨', icon: '🌧️' } },
  63: { lo: { label: 'ຝົນຕົກປານກາງ', icon: '🌧️' }, en: { label: 'Rain', icon: '🌧️' }, zh: { label: '中雨', icon: '🌧️' } },
  65: { lo: { label: 'ຝົນຕົກໜັກ', icon: '🌧️' }, en: { label: 'Heavy rain', icon: '🌧️' }, zh: { label: '大雨', icon: '🌧️' } },
  66: { lo: { label: 'ຝົນແຂັງ', icon: '🌧️' }, en: { label: 'Freezing rain', icon: '🌧️' }, zh: { label: '冻雨', icon: '🌧️' } },
  67: { lo: { label: 'ຝົນແຂັງໜັກ', icon: '🌧️' }, en: { label: 'Heavy freezing rain', icon: '🌧️' }, zh: { label: '强冻雨', icon: '🌧️' } },
  71: { lo: { label: 'ຫິມະຕົກເລັກນ້ອຍ', icon: '🌨️' }, en: { label: 'Light snow', icon: '🌨️' }, zh: { label: '小雪', icon: '🌨️' } },
  73: { lo: { label: 'ຫິມະຕົກ', icon: '🌨️' }, en: { label: 'Snow', icon: '🌨️' }, zh: { label: '中雪', icon: '🌨️' } },
  75: { lo: { label: 'ຫິມະຕົກໜັກ', icon: '❄️' }, en: { label: 'Heavy snow', icon: '❄️' }, zh: { label: '大雪', icon: '❄️' } },
  77: { lo: { label: 'ເມັດຫິມະ', icon: '🌨️' }, en: { label: 'Snow grains', icon: '🌨️' }, zh: { label: '米雪', icon: '🌨️' } },
  80: { lo: { label: 'ຝົນຕົກເປັນໄລຍະ', icon: '🌦️' }, en: { label: 'Rain showers', icon: '🌦️' }, zh: { label: '阵雨', icon: '🌦️' } },
  81: { lo: { label: 'ຝົນຕົກເປັນໄລຍະ', icon: '🌧️' }, en: { label: 'Rain showers', icon: '🌧️' }, zh: { label: '阵雨', icon: '🌧️' } },
  82: { lo: { label: 'ຝົນຕົກແຮງ', icon: '⛈️' }, en: { label: 'Violent showers', icon: '⛈️' }, zh: { label: '强阵雨', icon: '⛈️' } },
  85: { lo: { label: 'ຫິມະຕົກເປັນໄລຍະ', icon: '🌨️' }, en: { label: 'Snow showers', icon: '🌨️' }, zh: { label: '阵雪', icon: '🌨️' } },
  86: { lo: { label: 'ຫິມະຕົກແຮງ', icon: '❄️' }, en: { label: 'Heavy snow showers', icon: '❄️' }, zh: { label: '强阵雪', icon: '❄️' } },
  95: { lo: { label: 'ຟ້າຄະນອງ', icon: '⛈️' }, en: { label: 'Thunderstorm', icon: '⛈️' }, zh: { label: '雷阵雨', icon: '⛈️' } },
  96: { lo: { label: 'ຟ້າຄະນອງລູກເຫບ', icon: '⛈️' }, en: { label: 'Thunderstorm w/ hail', icon: '⛈️' }, zh: { label: '雷阵雨伴冰雹', icon: '⛈️' } },
  99: { lo: { label: 'ຟ້າຄະນອງແຮງ', icon: '⛈️' }, en: { label: 'Severe thunderstorm', icon: '⛈️' }, zh: { label: '强雷暴', icon: '⛈️' } },
};

export type Lang = 'lo' | 'en' | 'zh';

export function weatherCodeInfo(code: number, lang: Lang) {
  return CODE_INFO[code]?.[lang] ?? CODE_INFO[3][lang];
}

export function kmhToBeaufort(kmh: number): number {
  const steps = [1, 6, 12, 20, 29, 39, 50, 62, 75, 89, 103, 118];
  for (let i = 0; i < steps.length; i++) {
    if (kmh < steps[i]) return i;
  }
  return 12;
}

export function windName(level: number, lang: Lang): string {
  // level 0..12 (Beaufort). Provide a short human label.
  const names: Record<Lang, string[]> = {
    lo: ['ສະຫງົບ', 'ຄົນລົມເລັກນ້ອຍ', 'ລົມເລັກນ້ອຍ', 'ລົມອ່ອນ', 'ລົມປານກາງ', 'ລົມປານກາງ', 'ລົມແຮງ', 'ລົມແຮງ', 'ລົມແຮງຫຼາຍ', 'ພະຍຸ', 'ພະຍຸແຮງ', 'ພະຍຸແຮງຫຼາຍ', 'ພະຍຸເຮັດລາຍ'],
    en: ['Calm', 'Light air', 'Light breeze', 'Gentle breeze', 'Moderate breeze', 'Fresh breeze', 'Strong breeze', 'Near gale', 'Gale', 'Strong gale', 'Storm', 'Violent storm', 'Hurricane'],
    zh: ['无风', '软风', '轻风', '微风', '和风', '清劲风', '强风', '疾风', '大风', '烈风', '狂风', '暴风', '飓风'],
  };
  return names[lang][Math.min(level, 12)];
}

export function compass(lang: Lang): string[] {
  return lang === 'lo'
    ? ['ເໜືອ', 'ອຽດເໜືອອອກ', 'ອອກ', 'ອຽດອອກລຸ່ມ', 'ລຸ່ມ', 'ອຽດລຸ່ມຕະວັນຕົກ', 'ຕະວັນຕົກ', 'ອຽດຕະວັນຕົກເໜືອ']
    : lang === 'zh'
      ? ['北', '东北', '东', '东南', '南', '西南', '西', '西北']
      : ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
}

export function windDirectionText(deg: number, lang: Lang): string {
  const dirs = compass(lang);
  return dirs[Math.round(deg / 45) % 8];
}

export function uvLevel(uv: number, lang: Lang): { label: string; level: 'low' | 'mod' | 'high' | 'vhigh' | 'extreme' } {
  if (uv < 3) return { label: lang === 'zh' ? '低' : lang === 'lo' ? 'ຕ່ຳ' : 'Low', level: 'low' };
  if (uv < 6) return { label: lang === 'zh' ? '中等' : lang === 'lo' ? 'ປານກາງ' : 'Moderate', level: 'mod' };
  if (uv < 8) return { label: lang === 'zh' ? '高' : lang === 'lo' ? 'ສູງ' : 'High', level: 'high' };
  if (uv < 11) return { label: lang === 'zh' ? '很高' : lang === 'lo' ? 'ສູງຫຼາຍ' : 'Very high', level: 'vhigh' };
  return { label: lang === 'zh' ? '极高' : lang === 'lo' ? 'ສູງສຸດ' : 'Extreme', level: 'extreme' };
}

// Normalize the upstream JSON into a flat, render-friendly shape.
export function normalize(data: any): WeatherData | null {
  if (!data || !data.current || !data.daily) return null;
  const now: WeatherNow = {
    temp: data.current.temperature_2m,
    feels: data.current.apparent_temperature,
    humidity: data.current.relative_humidity_2m,
    windKmh: data.current.wind_speed_10m,
    windDir: data.current.wind_direction_10m,
    code: data.current.weather_code,
    precip: data.current.precipitation ?? 0,
  };
  const d = data.daily;
  const days: WeatherDay[] = (d.time || []).map((date: string, i: number) => ({
    date,
    code: d.weather_code?.[i],
    tmax: d.temperature_2m_max?.[i],
    tmin: d.temperature_2m_min?.[i],
    precipProb: d.precipitation_probability_max?.[i] ?? 0,
    windKmh: d.wind_speed_10m_max?.[i] ?? 0,
    uv: d.uv_index_max?.[i] ?? 0,
  }));
  return { now, days, fetchedAt: new Date().toISOString(), warnings: [] };
}

// --- Tourist-facing advice engine ------------------------------------------
// Translates raw weather signals into concrete, actionable suggestions for
// visitors. Conditions are evaluated independently and combined (multi-select):
// the UI only renders categories that end up non-empty, so a calm mild day
// shows far less than a stormy one. Patuxai is an urban monument, so the
// guidance is tuned to city / open-deck sightseeing; the same engine can be
// extended per attraction type (beach, mountain, river…) by adding branches.

const LIGHT_RAIN = new Set([51, 53, 55, 61, 80]);
const HEAVY_RAIN = new Set([63, 65, 66, 67, 81, 82]);
const STORM = new Set([95, 96, 99]);
const FOG = new Set([45, 48]);
const CLEAR = new Set([0, 1]);
const OVERCAST = 3;

export interface Advice {
  outfit: string[];   // 出行穿搭
  activity: string[]; // 游玩安排
  items: string[];    // 随身物品
  risks: string[];    // 风险提醒 (condition-based, amber)
  warnings: string[]; // 气象预警 (official, red, top priority)
}

function dedupe(arr: string[]): string[] {
  return Array.from(new Set(arr)).filter(Boolean);
}

export function buildAdvice(
  d: WeatherData,
  t: Record<string, string>,
  warnings: string[] = d.warnings,
): Advice {
  const today = d.days[0];
  const tmax = today.tmax;
  const tmin = today.tmin;
  const diff = tmax - tmin;
  const precipProb = today.precipProb;
  const uv = today.uv;
  const bf = kmhToBeaufort(today.windKmh);
  const code = today.code;
  const nowCode = d.now.code;

  const isStorm = STORM.has(code) || STORM.has(nowCode);
  const isHeavy = HEAVY_RAIN.has(code);
  const isLight = LIGHT_RAIN.has(code);
  const isFog = FOG.has(code);
  const isClear = CLEAR.has(code);
  const isOvercast = code === OVERCAST;

  const outfit: string[] = [];
  const activity: string[] = [];
  const items: string[] = [];
  const risks: string[] = [];

  // --- Risk (highest priority, shown in red/amber) -----------------------
  if (isStorm) {
    risks.push(t.stormRisk);
    activity.push(t.stormActivity);
  } else if (isHeavy) {
    risks.push(t.heavyRainRisk);
    activity.push(t.heavyRainActivity);
    items.push(t.heavyRainItems);
  }
  if (bf >= 7) {
    risks.push(t.wind7Risk);
    activity.push(t.wind7Activity);
  }
  if (isFog) {
    risks.push(t.fogRisk);
    activity.push(t.fogActivity);
    items.push(t.fogItems);
  }

  // --- Precipitation probability ----------------------------------------
  if (precipProb >= 60 && !isStorm && !isHeavy) {
    outfit.push(t.pProbHighOutfit);
    activity.push(t.pProbHighActivity);
    items.push(t.pProbHighItems);
  }
  if (isLight && !isStorm) {
    outfit.push(t.lightRainOutfit);
    activity.push(t.lightRainActivity);
    items.push(t.lightRainItems);
  }

  // --- Heat & UV ---------------------------------------------------------
  if (tmax >= 32) {
    outfit.push(t.hotOutfit);
    activity.push(t.hotActivity);
    items.push(t.hotItems);
  }
  if (uv >= 5) {
    outfit.push(t.uvOutfit);
    items.push(t.uvItems);
  }

  // --- Temperature swings & cold ----------------------------------------
  if (diff > 8) outfit.push(t.bigDiffOutfit);
  if (tmax <= 10) {
    outfit.push(t.coldOutfit);
    items.push(t.coldItems);
  }

  // --- Wind (moderate) ---------------------------------------------------
  if (bf === 5 || bf === 6) {
    outfit.push(t.wind56Outfit);
    activity.push(t.wind56Activity);
    items.push(t.wind56Items);
  }

  // --- Clear / overcast --------------------------------------------------
  if (isClear) {
    outfit.push(t.clearOutfit);
    activity.push(t.clearActivity);
    items.push(t.clearItems);
  }
  if (isOvercast) {
    outfit.push(t.overcastOutfit);
    activity.push(t.overcastActivity);
  }

  // --- Comfortable fallback ---------------------------------------------
  if (outfit.length === 0) outfit.push(t.comfortOutfit);
  if (activity.length === 0) activity.push(t.comfortActivity);

  return {
    outfit: dedupe(outfit),
    activity: dedupe(activity),
    items: dedupe(items),
    risks: dedupe(risks),
    warnings: dedupe(warnings),
  };
}

// Fetch + normalize, resilient to network failures (returns null on error).
export async function fetchWeather(): Promise<WeatherData | null> {
  try {
    const res = await fetch(buildWeatherUrl(), { signal: AbortSignal.timeout?.(8000) } as any);
    if (!res.ok) return null;
    return normalize(await res.json());
  } catch {
    return null;
  }
}

// Derive plain signals the UI can turn into localized advice.
export interface WeatherSignals {
  hot: boolean;        // day max high
  cold: boolean;       // day min low
  humid: boolean;
  maxRainProb: number;
  rainy: boolean;      // any day heavy rain
  storm: boolean;      // thunderstorm in forecast
  windy: boolean;      // strong wind day
  uvHigh: boolean;     // any day very high/extreme UV
  comfortable: boolean;
}

export function analyze(d: WeatherData): WeatherSignals {
  const maxT = Math.max(...d.days.map((x) => x.tmax));
  const minT = Math.min(...d.days.map((x) => x.tmin));
  const maxRain = Math.max(...d.days.map((x) => x.precipProb));
  const maxWind = Math.max(...d.days.map((x) => x.windKmh));
  const maxUv = Math.max(...d.days.map((x) => x.uv));
  const codes = d.days.map((x) => x.code);
  const storm = codes.some((c) => c >= 95);
  const heavyRain = codes.some((c) => (c >= 65 && c <= 67) || c === 82 || c === 99);
  return {
    hot: maxT >= 34,
    cold: minT <= 16,
    humid: d.now.humidity >= 75,
    maxRainProb: maxRain,
    rainy: heavyRain || maxRain >= 70,
    storm,
    windy: maxWind >= 40,
    uvHigh: maxUv >= 8,
    comfortable: maxT < 32 && maxRain < 40 && !storm,
  };
}
