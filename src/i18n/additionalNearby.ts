import type { Lang } from './ui';
import type { NearbyPlace } from './nearbyPlaces';

type Locale = { name: string; category: string; subject: string; history: string; architecture: string; culture: string; caution: string };
type Entry = { query: string; address: string; minutes: string; source: string; en: Locale; zh: Locale; lo: Locale };
const entries: Record<string, Entry> = {
  'ho-phra-keo': {
    query: 'Haw Phra Kaew Museum Setthathirath Road Vientiane Laos', address: 'Setthathirath Road, Vientiane, Laos', minutes: '45–75', source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
    en: { name: 'Haw Phra Kaew', category: 'Historic temple museum', subject: 'A former royal temple opposite Wat Si Saket', history: 'King Setthathirath established the original royal temple in the sixteenth century to house the Emerald Buddha. The sacred image later moved to Thailand; the present building reflects subsequent reconstruction.', architecture: 'Look for the elevated terrace, steep tiered roof, carved doorway elements and carefully arranged Buddhist sculpture.', culture: 'The museum setting connects royal ritual history with Lao Buddhist art.', caution: 'Check museum opening sessions and any photography restrictions at the entrance.' },
    zh: { name: '玉佛寺博物馆 Haw Phra Kaew', category: '历史寺院博物馆', subject: '沙格庙对面的昔日王室寺院', history: '塞塔提腊王于16世纪兴建原寺供奉玉佛；玉佛后来移往泰国。如今可见建筑经历后世重建，不能把所有结构都视作16世纪原物。', architecture: '留意高台基、层叠屋顶、雕花门饰和陈列的佛教造像。', culture: '这处博物馆串联万象王室礼仪史与老挝佛教艺术。', caution: '入场前现场核实博物馆开放时段与摄影规定。' },
    lo: { name: 'ຫໍພະແກ້ວ', category: 'ພິພິທະພັນວັດເກົ່າ', subject: 'ອະດີດວັດຫຼວງຢູ່ກົງຂ້າມວັດສີສະເກດ', history: 'ພະເຈົ້າໄຊເສດຖາທິລາດສ້າງວັດເດີມໃນສະຕະວັດທີ 16 ເພື່ອປະດິດສະຖານພະແກ້ວ. ຕໍ່ມາພະແກ້ວຖືກຍ້າຍໄປໄທ ແລະ ອາຄານຜ່ານການບູລະນະ.', architecture: 'ສັງເກດຖານຍົກສູງ ຫຼັງຄາຫຼາຍຊັ້ນ ແລະ ລວດລາຍໄມ້.', culture: 'ພິພິທະພັນສະທ້ອນສິລະປະພຸດ ແລະ ປະຫວັດລາຊະສຳນັກ.', caution: 'ກວດກາເວລາເປີດ ແລະ ກົດຖ່າຍຮູບຢູ່ປະຕູ.' },
  },
  'chao-anouvong-park': {
    query: 'Chao Anouvong Park Mekong River Vientiane Laos', address: 'Mekong riverside promenade, Vientiane, Laos', minutes: '30–60', source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
    en: { name: 'Chao Anouvong Park', category: 'Riverside public park', subject: 'A Mekong promenade and monument to King Anouvong', history: 'The park commemorates King Anouvong, the nineteenth-century ruler associated with Vientiane’s resistance to Siam. His modern statue faces the Mekong.', architecture: 'A broad paved riverside landscape opens views across the river and places the monument at the centre of a public plaza.', culture: 'Locals stroll, exercise and gather toward evening; the park is a living civic space rather than an enclosed monument.', caution: 'Stay clear of river edges and check for temporary events.' },
    zh: { name: '昭阿努公园 Chao Anouvong Park', category: '湄公河畔公共公园', subject: '湄公河步道与昭阿努王纪念像', history: '公园纪念19世纪与万象抵抗暹罗历史相关的昭阿努王；现代塑像面向湄公河。', architecture: '宽阔铺装步道、河岸开放空间和纪念雕像构成主要景观，适合观察河对岸风光。', culture: '傍晚常有散步、运动与聚会的人群，是万象日常生活的一部分。', caution: '注意河边安全，并现场核实节庆活动或临时管制。' },
    lo: { name: 'ສວນເຈົ້າອານຸວົງ', category: 'ສວນສາທາລະນະຮິມຂອງ', subject: 'ທາງຍ່າງຮິມແມ່ນ້ຳຂອງ ແລະ ຮູບປັ້ນເຈົ້າອານຸວົງ', history: 'ສວນນີ້ລະນຶກເຖິງເຈົ້າອານຸວົງ ກະສັດວຽງຈັນໃນສະຕະວັດທີ 19. ຮູບປັ້ນຫັນໜ້າໄປຫາແມ່ນ້ຳຂອງ.', architecture: 'ລານກວ້າງ ທາງຍ່າງຮິມນ້ຳ ແລະ ອະນຸສາວະລີເປັນຈຸດເດັ່ນ.', culture: 'ຊາວເມືອງມາຍ່າງ ອອກກຳລັງກາຍ ແລະ ພົບປະກັນຕອນແລງ.', caution: 'ລະວັງຂອບແມ່ນ້ຳ ແລະ ກວດກາງານພິເສດ.' },
  },
  'cope-visitor-centre': {
    query: 'COPE Visitor Centre Khou Vieng Road Vientiane Laos', address: 'Khou Vieng Road, Vientiane, Laos', minutes: '60–90', source: 'https://copelaos.org/',
    en: { name: 'COPE Visitor Centre', category: 'Educational exhibition', subject: 'Understanding UXO and rehabilitation in Laos', history: 'COPE supports rehabilitation services and raises awareness of the enduring impact of unexploded ordnance left from conflicts in Laos.', architecture: 'Interpretive displays, prosthetics and documentary materials focus on people rather than monumental architecture.', culture: 'The exhibition asks visitors to consider disability inclusion, recovery and the human cost of unexploded ordnance.', caution: 'The exhibits include sensitive historical material; check current opening hours directly with COPE.' },
    zh: { name: 'COPE 游客中心', category: '公益教育展览', subject: '了解老挝未爆弹与康复援助', history: 'COPE 支持康复服务，并向游客介绍战争遗留未爆炸弹药对老挝社会造成的长期影响。', architecture: '展览以义肢、文字影像和人物故事为核心，不属于传统纪念性建筑。', culture: '参访有助于理解残障平等、康复工作与未爆弹问题的现实影响。', caution: '展览涉及敏感历史内容；请直接向 COPE 核实开放时间。' },
    lo: { name: 'ສູນຢ້ຽມຢາມ COPE', category: 'ນິທັດສະການການສຶກສາ', subject: 'ຮຽນຮູ້ເລື່ອງລະເບີດບໍ່ທັນແຕກ ແລະ ການຟື້ນຟູ', history: 'COPE ສະໜັບສະໜູນວຽກງານຟື້ນຟູ ແລະ ໃຫ້ຄວາມຮູ້ກ່ຽວກັບຜົນກະທົບຈາກລະເບີດບໍ່ທັນແຕກໃນລາວ.', architecture: 'ນິທັດສະການມີສື່ ອຸປະກອນຊ່ວຍກາຍ ແລະ ເລື່ອງລາວຂອງຜູ້ຄົນ.', culture: 'ສູນນີ້ເນັ້ນສິດທິຄົນພິການ ແລະ ການຟື້ນຟູຊຸມຊົນ.', caution: 'ເນື້ອຫາບາງສ່ວນລະອຽດອ່ອນ; ກວດກາເວລາເປີດກັບ COPE.' },
  },
};

const shared = {
  en: { hours: 'Check current visiting hours on site', admission: 'Check current admission arrangements', manager: 'The operator or relevant local public authority manages access and upkeep; consult the site for current arrangements.', visit: 'Plan this as a separate stop and check the route from Patuxai before setting out.', route: ['Locate the signed entrance or public access area.', 'Explore the principal features and interpretation.', 'Pause for photos where allowed.', 'Continue to another city-centre attraction.'], etiquette: ['Respect site rules and any religious practices.', 'Ask before photographing people.', 'Avoid restricted areas.'], photo: ['Wide view showing the setting', 'Architectural or exhibition detail where permitted'], lodging: 'A central Vientiane base helps connect attractions by short rides.', review: 'Check up-to-date reviews on the individual map listing.', faq: [['How long should I allow?', 'Allow the suggested time, then adjust to your interests.'], ['Where is the location?', 'Use the specific Google Maps search link on this page.']] },
  zh: { hours: '开放情况请现场核实', admission: '票价及入场安排请现场核实', manager: '该地点的开放及维护由其运营方或相关公共管理部门负责，实际参观安排以现场公告为准。', visit: '建议作为独立行程安排，从凯旋门出发前先查看交通与地图。', route: ['先抵达标示的入口或公共参观区域。', '依次观察主要建筑或展览内容。', '在允许拍摄的位置记录细节。', '再前往下一处万象市区景点。'], etiquette: ['遵守现场管理规则并尊重宗教活动。', '拍摄人物前征求同意。', '不要进入限制区域。'], photo: ['拍摄包含周边环境的全景', '在允许范围内记录建筑或展览细节'], lodging: '住在万象市中心较便于串联景点及使用短途交通。', review: '可通过本页独立 Google 地图链接查看近期评价。', faq: [['建议预留多久？', '可先按页面建议时间规划，再根据兴趣调整。'], ['如何找到准确位置？', '使用本页该景点独立的 Google 地图搜索链接。']] },
  lo: { hours: 'ກວດກາເວລາເປີດຢູ່ໜ້າງານ', admission: 'ກວດກາຄ່າເຂົ້າຢູ່ໜ້າງານ', manager: 'ຜູ້ດຳເນີນງານ ຫຼື ໜ່ວຍງານທ້ອງຖິ່ນທີ່ກ່ຽວຂ້ອງດູແລການເຂົ້າຊົມ. ກວດກາປະກາດຢູ່ໜ້າງານ.', visit: 'ວາງແຜນເປັນຈຸດແວ່ແຍກ ແລະ ກວດກາເສັ້ນທາງຈາກປະຕູໄຊ.', route: ['ໄປຫາທາງເຂົ້າທີ່ອະນຸຍາດ.', 'ຊົມຈຸດເດັ່ນ ແລະ ຂໍ້ມູນ.', 'ຖ່າຍຮູບໃນບ່ອນທີ່ອະນຸຍາດ.', 'ໄປສະຖານທີ່ຕໍ່ໄປ.'], etiquette: ['ເຄົາລົບລະບຽບ ແລະ ພິທີທາງສາສະໜາ.', 'ຂໍອະນຸຍາດກ່ອນຖ່າຍຮູບຄົນ.', 'ຢ່າເຂົ້າເຂດຫວງຫ້າມ.'], photo: ['ຖ່າຍຮູບກວ້າງຂອງສະຖານທີ່', 'ຖ່າຍລາຍລະອຽດທີ່ອະນຸຍາດ'], lodging: 'ພັກໃນກາງວຽງຈັນສະດວກຕໍ່ການໄປຫຼາຍບ່ອນ.', review: 'ກວດກາຄຳເຫັນປັດຈຸບັນໃນ Google Maps.', faq: [['ຄວນໃຊ້ເວລາເທົ່າໃດ?', 'ໃຊ້ເວລາຕາມຄຳແນະນຳແລະປັບຕາມຄວາມສົນໃຈ.'], ['ຢູ່ໃສ?', 'ໃຊ້ລິ້ງ Google Maps ສຳລັບສະຖານທີ່ນີ້.']] },
};

export const additionalNearbySlugs = Object.keys(entries);
export function getAdditionalNearby(slug: string, lang: Lang): NearbyPlace | undefined {
  const e = entries[slug]; if (!e) return undefined;
  const t = e[lang], s = shared[lang];
  return { slug, name: t.name, tagline: t.subject, description: `${t.name}: ${t.subject}. ${t.history}`, address: e.address, mapQuery: e.query,
    category: t.category, hours: s.hours, admission: s.admission, time: `${e.minutes} ${lang === 'en' ? 'minutes' : lang === 'zh' ? '分钟' : 'ນາທີ'}`,
    manager: s.manager, intro: t.subject, history: t.history, architecture: t.architecture, culture: t.culture,
    highlights: [t.history, t.architecture, t.culture], visit: `${s.visit} ${t.caution}`, route: s.route, etiquette: s.etiquette,
    photo: s.photo, lodging: s.lodging, review: s.review, faqs: s.faq, source: e.source };
}
