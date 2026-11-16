import type { Lang } from './ui';
import type { NearbyPlace } from './nearbyPlaces';

type Text = [string, string, string, string, string]; // name, place-specific introduction, history, features, practical note
type Site = { q: string; address: string; minutes: number; source: string; en: Text; zh: Text; lo: Text };
const tourism = 'https://www.tourismlaos.org/central-provinces/vientiane-capital/';
const sites: Record<string, Site> = {
  'wat-inpeng': {
    q: 'Wat Inpeng Setthathirath Road Vientiane Laos', address: 'Setthathirath Road, Chanthabouly, Vientiane, Laos', minutes: 35, source: 'https://kpl.gov.la/EN/detail.aspx?id=19215',
    en: ['Wat Inpeng', 'A working Buddhist temple along the historic Setthathirath corridor.', 'The temple belongs to the network of old-town monasteries still used for worship; nearby Wat Ong Teu is associated with processions visiting Inpeng.', 'Look at the layered shrine roofs, decorative gables and the contrast between temple grounds and the busy road.', 'Enter quietly, dress respectfully and follow any ceremonial restrictions.'],
    zh: ['因彭寺 Wat Inpeng', '塞塔提腊路上的在用佛教寺院。', '因彭寺属于万象老城区仍在使用的寺院群，附近翁德寺的宗教巡游也与这里有联系。', '留意层叠佛殿屋顶、华丽山墙，以及宁静寺院与繁忙街道之间的对比。', '安静入内、衣着得体；举行仪式时遵守现场限制。'],
    lo: ['ວັດອິນແປງ', 'ວັດພຸດທີ່ຍັງໃຊ້ງານຢູ່ຖະໜົນເຊດຖາທິລາດ.', 'ວັດອິນແປງເປັນສ່ວນໜຶ່ງຂອງກຸ່ມວັດເກົ່າໃນກາງເມືອງ ແລະ ມີພິທີທາງສາສະໜາຮ່ວມກັບວັດໃກ້ຄຽງ.', 'ສັງເກດຫຼັງຄາວິຫານ ໜ້າບັນ ແລະ ລານວັດທີ່ສະຫງົບ.', 'ແຕ່ງກາຍສຸພາບ ແລະ ບໍ່ລົບກວນພິທີ.'],
  },
  'wat-mixay': {
    q: 'Wat Mixay Setthathirath Road Vientiane Laos', address: 'Setthathirath Road, Chanthabouly, Vientiane, Laos', minutes: 35, source: tourism,
    en: ['Wat Mixay', 'An ornate inner-city monastery near Vientiane’s old commercial streets.', 'Wat Mixay is one of several neighbourhood temples that preserve the everyday religious character of the historic centre.', 'The richly decorated entrance, guardian figures and multi-tiered hall roof reward a slow walk around the permitted courtyard.', 'Watch for worshippers and avoid treating the temple as an unattended photo set.'],
    zh: ['米赛寺 Wat Mixay', '靠近万象旧商业街的装饰华美寺院。', '米赛寺与周围古寺共同保存了万象历史中心日常宗教生活的面貌。', '重点观察装饰入口、守护塑像与多层佛殿屋顶，在允许区域慢慢欣赏。', '留意参拜者，拍照勿打扰寺院日常活动。'],
    lo: ['ວັດມີໄຊ', 'ວັດປະດັບສວຍງາມໃກ້ຖະໜົນການຄ້າເກົ່າ.', 'ວັດມີໄຊແມ່ນໜຶ່ງໃນວັດຊຸມຊົນທີ່ສືບຕໍ່ຊີວິດທາງສາສະໜາຂອງກາງວຽງຈັນ.', 'ຊົມປະຕູ ຮູບປັ້ນຜູ້ພິທັກ ແລະ ຫຼັງຄາວິຫານ.', 'ເຄົາລົບຜູ້ມາໄຫວ້ພະ ແລະ ຖ່າຍຮູບຢ່າງສຸພາບ.'],
  },
  'wat-chan': {
    q: 'Wat Chan Quai Fa Ngum Vientiane Laos', address: 'Quai Fa Ngum, Chanthabouly, Vientiane, Laos', minutes: 35, source: tourism,
    en: ['Wat Chan', 'A Buddhist temple close to the Mekong riverfront.', 'Wat Chan sits within the historic riverside neighbourhood where religious buildings, guesthouses and commercial lanes meet.', 'Compare its decorated worship hall and compact compound with the open promenade toward the river.', 'Respect prayer areas; combine a temple visit with a riverside walk.'],
    zh: ['赞寺 Wat Chan', '靠近湄公河畔的佛教寺院。', '赞寺位于万象历史河岸街区，周围有传统寺院、住宿与商业巷道。', '可对比寺内装饰性佛殿、紧凑院落和不远处开阔的河岸步道。', '尊重礼拜区域，适合与河畔散步串联。'],
    lo: ['ວັດຈັນ', 'ວັດພຸດຢູ່ໃກ້ແຄມແມ່ນ້ຳຂອງ.', 'ວັດຈັນຢູ່ໃນຍ່ານເກົ່າຮິມຂອງ ບ່ອນທີ່ວັດ ບ້ານພັກ ແລະ ຖະໜົນການຄ້າຢູ່ໃກ້ກັນ.', 'ສັງເກດວິຫານ ລານວັດ ແລະ ພື້ນທີ່ຮິມນ້ຳ.', 'ເຄົາລົບພື້ນທີ່ສວດມົນ ແລະ ສາມາດຍ່າງຕໍ່ໄປແຄມຂອງ.'],
  },
  'wat-haysoke': {
    q: 'Wat Haysoke Setthathirath Vientiane Laos', address: 'Setthathirath Road, Chanthabouly, Vientiane, Laos', minutes: 35, source: tourism,
    en: ['Wat Haysoke', 'A traditional temple beside the lively streets of central Vientiane.', 'This active monastery belongs to the group of old-town temples visited on a walk along Setthathirath Road.', 'The ornamental roofline, gateway and Buddhist images are the main details to observe from public areas.', 'Give worshippers space and check whether the main hall welcomes visitors.'],
    zh: ['海索寺 Wat Haysoke', '位于万象繁华市中心的传统佛寺。', '这处在用寺院属于塞塔提腊路沿线老城区寺院群，适合以步行方式串联。', '留意华丽屋脊、寺门与佛教造像，从开放区域欣赏建筑细节。', '为参拜者保留空间，佛殿能否入内以现场为准。'],
    lo: ['ວັດໄຮໂສກ', 'ວັດດັ້ງເດີມທ່າມກາງຖະໜົນກາງວຽງຈັນ.', 'ວັດໄຮໂສກເປັນວັດທີ່ຍັງໃຊ້ງານ ແລະ ຢູ່ໃນເສັ້ນທາງຍ່າງຊົມວັດເກົ່າ.', 'ສັງເກດຫຼັງຄາ ປະຕູວັດ ແລະ ຮູບພະພຸດ.', 'ບໍ່ລົບກວນຜູ້ໄຫວ້ພະ ແລະ ກວດກາການເຂົ້າວິຫານ.'],
  },
  'lao-cultural-hall': {
    q: 'Lao National Cultural Hall Samsenthai Road Vientiane Laos', address: 'Samsenthai Road, Chanthabouly, Vientiane, Laos', minutes: 25, source: tourism,
    en: ['Lao National Cultural Hall', 'A civic performance venue in central Vientiane.', 'This modern cultural institution hosts public events and performances rather than functioning as an open-air historical ruin.', 'Observe the formal exterior and its relationship to the streetscape; interior access depends on events.', 'Consult the event schedule before expecting a performance or entering the auditorium.'],
    zh: ['老挝国家文化宫', '万象市中心的公共演出文化场所。', '这座现代文化设施举办活动与表演，并非可随时自由进入的历史古迹。', '可观察庄重外立面与周边街景，内部是否开放通常取决于活动安排。', '若计划欣赏表演，请先查询节目及入场安排。'],
    lo: ['ຫໍວັດທະນະທຳແຫ່ງຊາດ', 'ສະຖານທີ່ຈັດສະແດງວັດທະນະທຳໃນກາງວຽງຈັນ.', 'ອາຄານວັດທະນະທຳສະໄໝໃໝ່ແຫ່ງນີ້ໃຊ້ຈັດງານ ແລະ ການສະແດງ.', 'ຊົມຮູບຊົງດ້ານນອກ; ການເຂົ້າພາຍໃນຂຶ້ນກັບງານ.', 'ກວດກາຕາຕະລາງງານ ແລະ ປີ້ກ່ອນເຂົ້າ.'],
  },
  'lao-textile-museum': {
    q: 'Lao Textile Museum Vientiane Laos', address: 'Ban Nongtha, Chanthabouly, Vientiane, Laos', minutes: 60, source: 'https://www.visitlaos.org/explore-laos/vientiane/',
    en: ['Lao Textile Museum', 'A collection devoted to Lao weaving and traditional cloth.', 'The museum introduces textile techniques and patterns through looms and displayed fabrics, highlighting craft knowledge preserved across generations.', 'Look for differences in weaving structures, colours and the working tools used to produce cloth.', 'It is outside the busiest old-town blocks; verify access and arrange a separate ride.'],
    zh: ['老挝纺织博物馆', '介绍老挝织布工艺与传统布料的专题场所。', '博物馆通过织机、布料和传统花纹，展示不同世代传承的纺织知识与手艺。', '留意织法结构、颜色搭配及制作布料的工具差异。', '不在最繁华的老城区街段，建议单独安排交通并核实入场。'],
    lo: ['ພິພິທະພັນຜ້າລາວ', 'ສະຖານທີ່ສະແດງການທໍຜ້າ ແລະ ຜ້າພື້ນເມືອງ.', 'ພິພິທະພັນສະແດງກີ່ທໍຜ້າ ລວດລາຍ ແລະ ຄວາມຮູ້ຊ່າງທີ່ສືບທອດມາ.', 'ສັງເກດລາຍຜ້າ ສີ ແລະ ເຄື່ອງມືທໍຜ້າ.', 'ຢູ່ຫ່າງຈາກຍ່ານເກົ່າ; ກວດກາເວລາເຂົ້າຊົມ ແລະ ຈັດລົດໄປ.'],
  },
  'presidential-palace': {
    q: 'Presidential Palace Lane Xang Setthathirath Vientiane Laos', address: 'Lane Xang Avenue and Setthathirath Road, Vientiane, Laos', minutes: 20, source: 'https://www.visitlaos.org/explore-laos/vientiane/',
    en: ['Presidential Palace', 'A prominent state building at a central Vientiane junction.', 'The palace occupies a significant civic site in the capital; it is a functioning state property, not an open visitor museum.', 'The formal façade and landscaped approach are best viewed from permitted public streets.', 'Do not attempt to enter secured grounds or photograph where signs prohibit it.'],
    zh: ['万象主席府', '位于万象核心路口的重要国家建筑。', '主席府是首都具有象征意义的公务建筑，并不是向游客常规开放的博物馆。', '适合从允许停留的公共道路观察庄重外立面和前方绿化景观。', '不要进入警戒区域；遵守现场禁止摄影标志。'],
    lo: ['ຫໍຄຳ', 'ອາຄານລັດທີ່ໂດດເດັ່ນຢູ່ສີ່ແຍກກາງວຽງຈັນ.', 'ຫໍຄຳເປັນອາຄານທາງລັດຖະການ ບໍ່ແມ່ນພິພິທະພັນເປີດໃຫ້ເຂົ້າທົ່ວໄປ.', 'ສາມາດຊົມດ້ານໜ້າອາຄານຈາກຖະໜົນສາທາລະນະ.', 'ຢ່າເຂົ້າເຂດຫວງຫ້າມ ແລະ ເຄົາລົບປ້າຍຫ້າມຖ່າຍຮູບ.'],
  },
  'nam-phou-fountain': {
    q: 'Nam Phou Fountain Vientiane Laos', address: 'Nam Phou Square, Chanthabouly, Vientiane, Laos', minutes: 25, source: tourism,
    en: ['Nam Phou Fountain', 'A familiar public square and meeting point in downtown Vientiane.', 'The fountain plaza is a long-standing urban landmark in the café and restaurant district, shaped by changing city life rather than a single religious foundation.', 'The fountain, paved square and surrounding façades offer views of the city at human scale.', 'Traffic and businesses change; use pedestrian crossings and check whether the fountain is running.'],
    zh: ['南普喷泉广场', '万象市中心常见的会面地点和公共广场。', '喷泉广场长期是咖啡馆与餐饮街区中的城市地标，见证了日常商业生活的变化。', '喷泉、铺装广场和周边街面适合观察亲切尺度的万象城景。', '留意路口交通，喷泉是否喷水以现场为准。'],
    lo: ['ນ້ຳພຸ', 'ລານສາທາລະນະແລະບ່ອນນັດພົບກາງວຽງຈັນ.', 'ລານນ້ຳພຸເປັນຈຸດໝາຍໃນຍ່ານຮ້ານກາເຟ ແລະ ຮ້ານອາຫານມາດົນນານ.', 'ຊົມນ້ຳພຸ ລານປູພື້ນ ແລະ ອາຄານຮອບຂ້າງ.', 'ລະວັງລົດຕາມຖະໜົນ ແລະ ກວດກາວ່ານ້ຳພຸເປີດຫຼືບໍ່.'],
  },
};

export const moreNearbySlugs = Object.keys(sites);
export function getMoreNearby(slug: string, lang: Lang): NearbyPlace | undefined {
  const site = sites[slug]; if (!site) return undefined;
  const [name, intro, history, architecture, caution] = site[lang];
  const local = lang === 'zh' ? {
    hours: '开放时段按现场公告核实', admission: '如需入场，请现场核实收费', manager: '该地点由所属寺院、场馆或相关公共机构负责日常维护与开放管理。',
    visit: '建议先确认入口，再从主体外观逐步观察内部允许参观的区域。',
    route: ['从凯旋门出发，按本页定位抵达景点附近。', `先观察${name}的街道或周边环境。`, '沿开放参观路线欣赏建筑、展品或公共空间。', '在允许区域拍照，再连接邻近万象景点。'],
    etiquette: ['尊重现场开放范围、居民及礼拜活动。', '未经允许不进入内部或管制区域。', '出行前现场核实门票与开放时间。'],
    photo: ['入口与周围街景的整体构图', '建筑立面、雕饰或公共空间细节'], lodging: '选择万象市中心住宿，方便串联老城步行路线与短途车程。',
    review: '最新游客评价及数量请参阅该地点自己的 Google 地图页面。', faq: [['怎么安排游览？', '可作为从凯旋门出发的半日市区行程中的一站。'], ['需要提前买票吗？', '入场规则可能变化，请直接查看场馆或现场公告。']],
  } : lang === 'lo' ? {
    hours: 'ກວດກາເວລາເປີດຢູ່ສະຖານທີ່', admission: 'ກວດກາຄ່າເຂົ້າຢູ່ສະຖານທີ່', manager: 'ວັດ ສະຖາບັນ ຫຼື ໜ່ວຍງານທີ່ກ່ຽວຂ້ອງດູແລສະຖານທີ່.',
    visit: 'ກວດກາທາງເຂົ້າ ແລະ ຍ່າງຊົມໃນເຂດທີ່ອະນຸຍາດ.',
    route: ['ເດີນທາງຈາກປະຕູໄຊຕາມແຜນທີ່.', `ຊົມບໍລິເວນຮອບ ${name}.`, 'ຊົມອາຄານ ຫຼື ນິທັດສະການໃນເຂດທີ່ເປີດ.', 'ຖ່າຍຮູບຕາມກົດ ແລະ ໄປຈຸດອື່ນ.'],
    etiquette: ['ເຄົາລົບຊາວບ້ານ ແລະ ພິທີທາງສາສະໜາ.', 'ຢ່າເຂົ້າເຂດຫວງຫ້າມ.', 'ກວດກາຄ່າເຂົ້າ ແລະ ເວລາເປີດ.'],
    photo: ['ພາບລວມທາງເຂົ້າ ແລະ ຖະໜົນ', 'ລາຍລະອຽດອາຄານ ຫຼື ພື້ນທີ່ສາທາລະນະ'], lodging: 'ພັກໃນກາງວຽງຈັນສະດວກສຳລັບທ່ຽວຫຼາຍຈຸດ.',
    review: 'ກວດກາຄຳເຫັນປັດຈຸບັນໃນ Google Maps ຂອງສະຖານທີ່.', faq: [['ວາງແຜນແນວໃດ?', 'ຈັດໃສ່ເສັ້ນທາງຄຶ່ງມື້ໃນວຽງຈັນໄດ້.'], ['ຕ້ອງຊື້ປີ້ບໍ?', 'ກວດກາລະບຽບທີ່ສະຖານທີ່.']],
  } : {
    hours: 'Verify current visiting hours at the site', admission: 'Confirm admission or access charges on arrival', manager: 'The temple, venue operator or relevant public agency oversees access and upkeep.',
    visit: 'Find the correct entrance and explore the exterior before entering areas explicitly open to visitors.',
    route: ['Travel from Patuxai using this place’s own map location.', `Observe the surroundings of ${name}.`, 'Explore accessible architecture, displays or public spaces.', 'Take permitted photographs before continuing to another stop.'],
    etiquette: ['Respect local residents, worshippers and site rules.', 'Do not enter restricted or private areas.', 'Check current hours and fees before visiting.'],
    photo: ['A wide view including the entrance and streetscape', 'Architectural decoration or public-space details'], lodging: 'Central Vientiane is a practical base for linking old-town walks and short rides.',
    review: 'Read recent visitor opinions on the specific Google Maps place listing.', faq: [['How can I fit this into a route?', 'Include it in a half-day exploration of central Vientiane.'], ['Do I need advance admission?', 'Check directly with the venue or current on-site notices.']],
  };
  return { slug, name, tagline: intro, description: `${intro} ${history}`, address: site.address, mapQuery: site.q,
    category: lang === 'zh' ? '万象文化与城市景点' : lang === 'lo' ? 'ສະຖານທີ່ວັດທະນະທຳວຽງຈັນ' : 'Vientiane culture and city sights',
    hours: local.hours, admission: local.admission, time: `${site.minutes} ${lang === 'zh' ? '分钟' : lang === 'lo' ? 'ນາທີ' : 'minutes'}`,
    manager: local.manager, intro, history, architecture, culture: caution, highlights: [history, architecture, caution], visit: local.visit,
    route: local.route, etiquette: local.etiquette, photo: local.photo, lodging: local.lodging, review: local.review,
    faqs: local.faq, source: site.source };
}
