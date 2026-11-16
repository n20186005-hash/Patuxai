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
  'wat-si-muang': {
    query: 'Wat Si Muang Setthathirath Road Vientiane Laos', address: 'Setthathirath Road, Vientiane, Laos', minutes: '30–60', source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
    en: { name: 'Wat Si Muang', category: 'Active Buddhist temple', subject: 'Vientiane temple associated with the city pillar', history: 'Wat Si Muang is linked to the city pillar (Lak Meuang) and to stories of the city’s founding. It remains an active place of worship rather than only a historic exhibit.', architecture: 'Its richly decorated shrine interiors, Buddha figures and ritual spaces differ from the open monument grounds of Patuxai.', culture: 'Visitors may encounter offerings and prayer rituals, which should be observed quietly and respectfully.', caution: 'Dress modestly and avoid interrupting ceremonies; confirm photography permissions.' },
    zh: { name: '西孟寺 Wat Si Muang', category: '仍在使用的佛教寺院', subject: '与万象城柱信仰相关的寺院', history: '西孟寺与万象城柱（Lak Meuang）及城市建立的民间传说有关，至今仍是当地民众参拜祈福的宗教空间。', architecture: '装饰精美的佛殿、佛像和礼拜区与凯旋门的开放式纪念空间形成对照。', culture: '常可见供品及祈祷仪式，理解仪礼比匆忙打卡更有意义。', caution: '衣着端庄，勿干扰参拜；拍摄前先征求许可。' },
    lo: { name: 'ວັດສີເມືອງ', category: 'ວັດພຸດທີ່ຍັງໃຊ້ງານ', subject: 'ວັດທີ່ຜູກພັນກັບຫຼັກເມືອງວຽງຈັນ', history: 'ວັດສີເມືອງຜູກພັນກັບຫຼັກເມືອງ ແລະ ຕຳນານການສ້າງນະຄອນ. ຍັງເປັນບ່ອນໄຫວ້ພະຂອງຊາວບ້ານ.', architecture: 'ພຣະວິຫານ ຮູບພະ ແລະ ລວດລາຍປະດັບເປັນຈຸດເດັ່ນ.', culture: 'ຜູ້ຄົນມາຖວາຍເຄື່ອງບູຊາ ແລະ ສວດມົນຢູ່ເປັນປະຈຳ.', caution: 'ແຕ່ງກາຍສຸພາບ ແລະ ບໍ່ລົບກວນພິທີ.' },
  },
  'wat-ong-teu': {
    query: 'Wat Ong Teu Mahawihan Setthathirath Road Vientiane Laos', address: 'Setthathirath Road, central Vientiane, Laos', minutes: '30–50', source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
    en: { name: 'Wat Ong Teu Mahawihan', category: 'Buddhist temple', subject: 'A major bronze Buddha in the historic centre', history: 'The temple is known for its large bronze Buddha associated with the sixteenth-century Lan Xang kingdom. The site remains part of Vientiane’s monastic landscape.', architecture: 'A substantial seated Buddha, ornate timber work and a roofed worship hall form the main visual focus.', culture: 'Religious learning and worship give the temple a different rhythm from the commercial streets outside.', caution: 'Observe worship etiquette, avoid flash near ceremonies and check public access locally.' },
    zh: { name: '翁德寺 Wat Ong Teu', category: '佛教寺院', subject: '以大型青铜佛像闻名的万象古寺', history: '翁德寺因与16世纪澜沧王国有关的大型青铜佛像而闻名，仍是万象佛教寺院网络的一部分。', architecture: '重点观察庄严的坐佛、精美木构和覆盖佛殿的传统屋顶。', culture: '僧众生活和礼拜活动使这处寺院有别于外面的商业街道。', caution: '遵守参拜礼仪，举行仪式时避免闪光灯，并现场核实访客区域。' },
    lo: { name: 'ວັດອົງຕື້ມະຫາວິຫານ', category: 'ວັດພຸດ', subject: 'ວັດພະອົງຕື້ໃນເມືອງເກົ່າ', history: 'ວັດອົງຕື້ຂຶ້ນຊື່ດ້ານພະພຸດທະຮູບສຳລິດອົງໃຫຍ່ ຊຶ່ງມີປະຫວັດຜູກພັນກັບລ້ານຊ້າງ.', architecture: 'ພະນັ່ງສຳລິດ ວຽກໄມ້ແກະສະຫຼັກ ແລະ ຫຼັງຄາວິຫານເປັນຈຸດສຳຄັນ.', culture: 'ວັດຍັງເປັນບ່ອນຮຽນຮູ້ ແລະ ໄຫວ້ພະ.', caution: 'ຮັກສາມາລະຍາດທາງສາສະໜາ ແລະ ກວດກາການເຂົ້າຊົມ.' },
  },
  'vientiane-night-market': {
    query: 'Vientiane Night Market Quai Fa Ngum Mekong Laos', address: 'Quai Fa Ngum, Mekong riverside, Vientiane, Laos', minutes: '45–90', source: 'https://www.tourismlaos.org/2022/03/07/9-things-to-do-in-vientiane-capital/',
    en: { name: 'Vientiane Night Market', category: 'Evening riverside market', subject: 'Stalls and evening walks by the Mekong', history: 'The riverside market reflects the growth of visitor-oriented retail along the Mekong promenade rather than the history of a single ancient monument.', architecture: 'Rows of temporary stalls, lights and walking lanes transform the public riverfront as vendors set up for the evening.', culture: 'Browsing souvenirs and clothing is part of an evening walk; individual stalls and merchandise change frequently.', caution: 'Check the day’s stall operation and keep belongings secure in crowded paths.' },
    zh: { name: '万象湄公河夜市', category: '河畔夜间市集', subject: '湄公河沿岸的夜市与傍晚散步', history: '湄公河夜市体现万象河岸旅游商业的发展，不是一座有单一始建年份的古迹。', architecture: '临时摊位、灯光和步行通道在傍晚让公共河岸转变成活跃的购物空间。', culture: '服饰、纪念品与河畔散步相结合，各摊位经营内容经常变化。', caution: '实际摆摊日期与时段以现场为准，拥挤时妥善保管物品。' },
    lo: { name: 'ຕະຫຼາດກາງຄືນວຽງຈັນ', category: 'ຕະຫຼາດແລງຮິມຂອງ', subject: 'ຮ້ານຄ້າ ແລະ ທາງຍ່າງຕອນແລງຮິມແມ່ນ້ຳຂອງ', history: 'ຕະຫຼາດກາງຄືນສະທ້ອນການຄ້າແລະທ່ອງທ່ຽວຕາມແຄມຂອງ ບໍ່ແມ່ນໂບຮານສະຖານ.', architecture: 'ຕອນແລງມີແຜງຂາຍ ໄຟ ແລະ ທາງຍ່າງໃນເຂດຮິມນ້ຳ.', culture: 'ຄົນມາຍ່າງ ຊື້ເສື້ອຜ້າ ແລະ ຂອງຝາກ.', caution: 'ກວດກາເວລາຮ້ານເປີດ ແລະ ຮັກສາຊັບສິນ.' },
  },
  'buddha-park': {
    query: 'Buddha Park Xieng Khuan Vientiane Laos', address: 'Thadeua Road, Xieng Khuan, southeast of Vientiane, Laos', minutes: '90–150', source: 'https://www.tourismlaos.org/central-provinces/vientiane-capital/',
    en: { name: 'Buddha Park (Xieng Khuan)', category: 'Sculpture garden', subject: 'Surreal Buddhist and Hindu figures southeast of Vientiane', history: 'Buddha Park was developed in the twentieth century by the spiritual teacher Bunleua Sulilat, bringing Buddhist and Hindu imagery into one outdoor sculpture landscape.', architecture: 'Concrete sculptures include an immense reclining Buddha and fantastic figures, offering a striking contrast to the formal geometry of Patuxai.', culture: 'The park is a creative religious-art environment; visitors should distinguish the artist’s vision from conventional temple architecture.', caution: 'It is outside central Vientiane: allow separate road travel and verify entry fees and opening time.' },
    zh: { name: '佛陀公园 Xieng Khuan', category: '宗教雕塑花园', subject: '万象东南郊融合佛教与印度教意象的雕塑园', history: '佛陀公园由宗教思想家 Bunleua Sulilat 于20世纪营建，将佛教和印度教的图像汇集在一处露天雕塑园中。', architecture: '混凝土卧佛与奇幻神像是主要看点，与凯旋门整齐的纪念建筑形成鲜明对比。', culture: '这里展现创作者的独特宗教艺术构想，不宜将所有雕塑都解释为传统寺院建筑。', caution: '公园位于市区外，需另外安排公路交通，并现场核实门票及开放时间。' },
    lo: { name: 'ສວນພຸດທະ ຊຽງຄວນ', category: 'ສວນປະຕິມາກຳ', subject: 'ສວນຮູບປັ້ນພຸດ ແລະ ຮິນດູທາງໃຕ້ອອກຂອງວຽງຈັນ', history: 'ສວນພຸດທະຖືກສ້າງໃນສະຕະວັດທີ 20 ໂດຍ ບຸນເຫຼືອ ສຸລິລາດ ໂດຍປະສົມຮູບພຸດ ແລະ ຮິນດູ.', architecture: 'ຮູບພະນອນອົງໃຫຍ່ ແລະ ປະຕິມາກຳຄອນກຣີດຮູບແປກໆເປັນຈຸດເດັ່ນ.', culture: 'ສວນສະທ້ອນວິໄສທັດສິລະປະທາງສາສະໜາຂອງຜູ້ສ້າງ.', caution: 'ຢູ່ນອກເມືອງ ຕ້ອງເຜື່ອເວລາລົດ ແລະ ກວດກາຄ່າເຂົ້າ.' },
  },
};

const shared = {
  en: { hours: 'Check current visiting hours on site', admission: 'Check current admission arrangements', manager: 'The operator or relevant local public authority manages access and upkeep; consult the site for current arrangements.', visit: 'Plan this as a separate stop and check the route from Patuxai before setting out.', route: ['Locate the signed entrance or public access area.', 'Explore the principal features and interpretation.', 'Pause for photos where allowed.', 'Continue to another city-centre attraction.'], etiquette: ['Respect site rules and any religious practices.', 'Ask before photographing people.', 'Avoid restricted areas.'], photo: ['Wide view showing the setting', 'Architectural or exhibition detail where permitted'], lodging: 'A central Vientiane base helps connect attractions by short rides.', review: 'Check up-to-date reviews on the individual map listing.', faq: [['How long should I allow?', 'Allow the suggested time, then adjust to your interests.'], ['Where is the location?', 'Use the specific Google Maps search link on this page.']] },
  zh: { hours: '开放情况请现场核实', admission: '票价及入场安排请现场核实', manager: '该地点的开放及维护由其运营方或相关公共管理部门负责，实际参观安排以现场公告为准。', visit: '建议作为独立行程安排，从凯旋门出发前先查看交通与地图。', route: ['先抵达标示的入口或公共参观区域。', '依次观察主要建筑或展览内容。', '在允许拍摄的位置记录细节。', '再前往下一处万象市区景点。'], etiquette: ['遵守现场管理规则并尊重宗教活动。', '拍摄人物前征求同意。', '不要进入限制区域。'], photo: ['拍摄包含周边环境的全景', '在允许范围内记录建筑或展览细节'], lodging: '住在万象市中心较便于串联景点及使用短途交通。', review: '可通过本页独立 Google 地图链接查看近期评价。', faq: [['建议预留多久？', '可先按页面建议时间规划，再根据兴趣调整。'], ['如何找到准确位置？', '使用本页该景点独立的 Google 地图搜索链接。']] },
  lo: { hours: 'ກວດກາເວລາເປີດຢູ່ໜ້າງານ', admission: 'ກວດກາຄ່າເຂົ້າຢູ່ໜ້າງານ', manager: 'ຜູ້ດຳເນີນງານ ຫຼື ໜ່ວຍງານທ້ອງຖິ່ນທີ່ກ່ຽວຂ້ອງດູແລການເຂົ້າຊົມ. ກວດກາປະກາດຢູ່ໜ້າງານ.', visit: 'ວາງແຜນເປັນຈຸດແວ່ແຍກ ແລະ ກວດກາເສັ້ນທາງຈາກປະຕູໄຊ.', route: ['ໄປຫາທາງເຂົ້າທີ່ອະນຸຍາດ.', 'ຊົມຈຸດເດັ່ນ ແລະ ຂໍ້ມູນ.', 'ຖ່າຍຮູບໃນບ່ອນທີ່ອະນຸຍາດ.', 'ໄປສະຖານທີ່ຕໍ່ໄປ.'], etiquette: ['ເຄົາລົບລະບຽບ ແລະ ພິທີທາງສາສະໜາ.', 'ຂໍອະນຸຍາດກ່ອນຖ່າຍຮູບຄົນ.', 'ຢ່າເຂົ້າເຂດຫວງຫ້າມ.'], photo: ['ຖ່າຍຮູບກວ້າງຂອງສະຖານທີ່', 'ຖ່າຍລາຍລະອຽດທີ່ອະນຸຍາດ'], lodging: 'ພັກໃນກາງວຽງຈັນສະດວກຕໍ່ການໄປຫຼາຍບ່ອນ.', review: 'ກວດກາຄຳເຫັນປັດຈຸບັນໃນ Google Maps.', faq: [['ຄວນໃຊ້ເວລາເທົ່າໃດ?', 'ໃຊ້ເວລາຕາມຄຳແນະນຳແລະປັບຕາມຄວາມສົນໃຈ.'], ['ຢູ່ໃສ?', 'ໃຊ້ລິ້ງ Google Maps ສຳລັບສະຖານທີ່ນີ້.']] },
};

export const additionalNearbySlugs = Object.keys(entries);
const managers: Record<string, Record<Lang, string>> = {
  'ho-phra-keo': { en: 'Haw Phra Kaew is a former royal temple now used as a museum. Cultural-site staff oversee exhibition access and the care of displayed Buddhist sculpture; visitors must follow the museum’s opening and photography rules.', zh: '玉佛寺曾是万象王室寺院，如今作为博物馆展示佛教艺术。展品维护及游客入场由文化场馆管理人员负责，实际开放时间和摄影规定应以馆方公告为准。', lo: 'ຫໍພະແກ້ວເປັນອະດີດວັດຫຼວງທີ່ໃຊ້ເປັນພິພິທະພັນ. ພະນັກງານດູແລສິ່ງສະແດງ ແລະ ກົດການເຂົ້າຊົມ.' },
  'chao-anouvong-park': { en: 'Chao Anouvong Park is a public riverside park centred on the king’s monument. City public-space authorities oversee the paths and landscape, while temporary events and nearby vendors have their own operating arrangements.', zh: '昭阿努公园是设有昭阿努王纪念像的湄公河畔公共绿地。步道和景观维护涉及万象市公共空间管理部门；临时活动及附近商贩另有各自的经营安排。', lo: 'ສວນເຈົ້າອານຸວົງເປັນສວນສາທາລະນະຮິມຂອງ. ພາກສ່ວນດູແລພື້ນທີ່ເມືອງຮັບຜິດຊອບທາງຍ່າງແລະພູມສັນຖານ; ການຈັດງານອາດມີຂໍ້ກຳນົດແຍກ.' },
  'cope-visitor-centre': { en: 'COPE Visitor Centre is operated in connection with COPE’s rehabilitation and unexploded-ordnance education work. Its team manages the exhibits, visitor access and interpretation rather than a municipal monument authority.', zh: 'COPE 游客中心与 COPE 的康复援助、未爆弹公众教育工作相连，由项目及场馆团队维护展览、讲解与参观安排，并非普通市政纪念碑。', lo: 'ສູນຢ້ຽມຢາມ COPE ຜູກພັນກັບວຽກຟື້ນຟູ ແລະ ໃຫ້ຄວາມຮູ້ເລື່ອງລະເບີດບໍ່ທັນແຕກ. ທີມງານ COPE ດູແລນິທັດສະການແລະຜູ້ຢ້ຽມຢາມ.' },
  'wat-si-muang': { en: 'Wat Si Muang remains an active Buddhist temple associated with Vientiane’s city-pillar tradition. Its monastic community manages religious observance and the accessible worship space; visitors should follow temple instructions.', zh: '西孟寺至今仍是与万象城柱信仰密切相关的佛教寺院。驻寺僧众负责宗教活动与礼拜区域秩序；游客应根据寺方公告参观。', lo: 'ວັດສີເມືອງຍັງເປັນວັດທີ່ຜູກພັນກັບຫຼັກເມືອງ. ຄະນະສົງດູແລພິທີແລະພື້ນທີ່ໄຫວ້ພະ.' },
  'wat-ong-teu': { en: 'Wat Ong Teu Mahawihan is an active monastery and important Buddhist learning centre. The temple community oversees worship and visitor conduct around the celebrated bronze Buddha and hall.', zh: '翁德寺是仍在使用的佛教寺院及宗教学习场所。寺院僧团维护礼佛活动，并管理大型青铜佛像与佛殿周边的参观秩序。', lo: 'ວັດອົງຕື້ມະຫາວິຫານເປັນວັດແລະບ່ອນຮຽນຮູ້ທາງພຸດທະສາສະໜາ. ຄະນະສົງດູແລການໄຫວ້ພະແລະຜູ້ຢ້ຽມຢາມ.' },
  'vientiane-night-market': { en: 'Vientiane Night Market consists of changing independent stalls along the public Mekong riverfront. Vendors run their own businesses; municipal public-space arrangements may affect stall placement and pedestrian access.', zh: '万象湄公河夜市由河岸公共空间内的众多独立摊商组成，各摊主自行经营。摊位位置、行人通道和临时活动还受到城市公共空间管理安排影响。', lo: 'ຕະຫຼາດກາງຄືນວຽງຈັນມີແຜງຂາຍຫຼາຍຮ້ານຕາມຮິມຂອງ. ຜູ້ຂາຍດູແລຮ້ານຕົນ ແລະ ພື້ນທີ່ສາທາລະນະມີການຈັດການຂອງເມືອງ.' },
  'buddha-park': { en: 'Buddha Park (Xieng Khuan) is a managed outdoor sculpture attraction, not an ordinary functioning monastery. Park staff oversee entry, paths and visitor conduct around the works of Bunleua Sulilat; current arrangements are posted at its entrance.', zh: '佛陀公园（香昆）是以 Bunleua Sulilat 创作的宗教雕塑为核心的户外景区，并非普通在用寺院。园区工作人员负责入场、步道与雕塑参观秩序，具体规定以入口公告为准。', lo: 'ສວນພຸດທະຊຽງຄວນເປັນສວນປະຕິມາກຳກາງແຈ້ງ ບໍ່ແມ່ນວັດທົ່ວໄປ. ພະນັກງານສວນດູແລຄ່າເຂົ້າ ທາງຍ່າງ ແລະ ການຊົມຮູບປັ້ນ.' },
};
const detailedRoutes: Record<string, Record<Lang, string[]>> = {
  'ho-phra-keo': {
    en: ['Approach the former royal temple from Setthathirath Road.', 'Study the elevated terrace, roofline and entrance carvings.', 'Visit the permitted sculpture displays without touching them.', 'Cross to Wat Si Saket for a contrasting cloister experience.'],
    zh: ['从塞塔提腊路进入昔日王室寺院。', '观察高台、屋顶层次与入口雕饰。', '在允许范围内欣赏佛教造像，不触摸展品。', '再前往对面的沙格庙比较回廊建筑。'],
    lo: ['ເຂົ້າຈາກຖະໜົນເຊດຖາທິລາດ.', 'ສັງເກດຖານສູງ ຫຼັງຄາ ແລະ ປະຕູແກະສະຫຼັກ.', 'ຊົມຮູບພະໃນເຂດທີ່ເປີດ.', 'ໄປຕໍ່ວັດສີສະເກດ.'],
  },
  'chao-anouvong-park': {
    en: ['Enter the open riverside park from the city side.', 'Approach the King Anouvong statue and read any interpretation.', 'Walk the promenade for wide Mekong views.', 'Finish toward the night market area if stalls are operating.'],
    zh: ['从城市街道一侧进入河畔公园。', '走近昭阿努王雕像并阅读现场说明。', '沿步道欣赏湄公河开阔景观。', '若夜市营业，可继续前往摊位区。'],
    lo: ['ເຂົ້າສວນຈາກດ້ານເມືອງ.', 'ຊົມຮູບປັ້ນເຈົ້າອານຸວົງ.', 'ຍ່າງຕາມທາງແຄມຂອງ.', 'ໄປຕໍ່ເຂດຕະຫຼາດແລງຖ້າເປີດ.'],
  },
  'cope-visitor-centre': {
    en: ['Find the visitor-centre entrance on Khou Vieng Road.', 'Begin with the displays introducing the UXO problem.', 'Spend time with the rehabilitation and prosthetics stories.', 'Pause to reflect, then continue without photographing sensitive displays against the rules.'],
    zh: ['从 Khou Vieng Road 找到访客中心入口。', '先阅读介绍老挝未爆弹问题的展览。', '再观察康复工作与义肢相关的真实故事。', '留出思考时间，并遵守敏感展品的拍摄限制。'],
    lo: ['ຊອກຫາທາງເຂົ້າຢູ່ຖະໜົນຄູວຽງ.', 'ເລີ່ມຊົມຂໍ້ມູນລະເບີດບໍ່ທັນແຕກ.', 'ອ່ານເລື່ອງການຟື້ນຟູແລະຂາທຽມ.', 'ເຄົາລົບກົດຖ່າຍຮູບໃນນິທັດສະການ.'],
  },
  'wat-si-muang': {
    en: ['Approach the temple from Setthathirath Road.', 'Observe the offerings and city-pillar associations respectfully.', 'Study the ornate shrine interior only where access is permitted.', 'Continue to the COPE Visitor Centre or riverside by a suitable route.'],
    zh: ['从塞塔提腊路前往寺院。', '尊重当地城柱信仰与供奉活动。', '在允许的区域欣赏佛殿及装饰。', '再按实际交通前往 COPE 中心或河岸。'],
    lo: ['ເຂົ້າວັດຈາກຖະໜົນເຊດຖາທິລາດ.', 'ເຄົາລົບການບູຊາຫຼັກເມືອງ.', 'ຊົມວິຫານໃນເຂດທີ່ອະນຸຍາດ.', 'ໄປຕໍ່ສູນ COPE ຫຼື ແຄມຂອງ.'],
  },
  'wat-ong-teu': {
    en: ['Enter the permitted courtyard from Setthathirath Road.', 'Observe the roof details and hall entrance.', 'View the famous large seated bronze Buddha respectfully.', 'Continue along the old-town temple walk toward Wat Inpeng.'],
    zh: ['从塞塔提腊路进入可开放院落。', '细看屋顶装饰及佛殿入口。', '安静欣赏寺中著名的大型青铜坐佛。', '沿老城寺院路线继续前往因彭寺。'],
    lo: ['ເຂົ້າລານວັດຈາກຖະໜົນເຊດຖາທິລາດ.', 'ຊົມຫຼັງຄາແລະປະຕູວິຫານ.', 'ເບິ່ງພະອົງຕື້ດ້ວຍຄວາມເຄົາລົບ.', 'ຍ່າງຕໍ່ໄປວັດອິນແປງ.'],
  },
  'vientiane-night-market': {
    en: ['Arrive near Quai Fa Ngum in the evening.', 'Walk the public aisles between souvenir and clothing stalls.', 'Compare prices and ask before photographing vendors.', 'Finish with the riverside promenade without blocking pedestrian flow.'],
    zh: ['傍晚抵达 Quai Fa Ngum 河岸一带。', '沿开放通道逛服饰和纪念品摊位。', '比较价格，拍摄摊商前征求同意。', '沿河岸步道结束行程，留意人流。'],
    lo: ['ໄປເຂດຖະໜົນເຈົ້າຟ້າງຸ່ມຕອນແລງ.', 'ຍ່າງຊົມແຜງເສື້ອຜ້າແລະຂອງຝາກ.', 'ຖາມລາຄາແລະຂໍອະນຸຍາດຖ່າຍຮູບ.', 'ຍ່າງຕໍ່ຕາມທາງຮິມຂອງ.'],
  },
  'buddha-park': {
    en: ['Allow road time to Xieng Khuan outside central Vientiane.', 'Begin with an overview of the outdoor sculpture field.', 'View the large reclining Buddha and fantastic figures from permitted paths.', 'Return toward the city before transport becomes difficult.'],
    zh: ['预留前往万象东南郊香昆的乘车时间。', '先了解露天雕塑区整体布局。', '沿允许步道欣赏巨型卧佛和奇幻神像。', '留意回城交通，勿等到难以叫车时才离开。'],
    lo: ['ເຜື່ອເວລາລົດໄປຊຽງຄວນນອກເມືອງ.', 'ເບິ່ງພາບລວມສວນປະຕິມາກຳ.', 'ຊົມພະນອນແລະຮູບປັ້ນຕາມທາງທີ່ເປີດ.', 'ກວດກາລົດກັບເມືອງກ່ອນອອກ.'],
  },
};
export function getAdditionalNearby(slug: string, lang: Lang): NearbyPlace | undefined {
  const e = entries[slug]; if (!e) return undefined;
  const t = e[lang], s = shared[lang];
  return { slug, name: t.name, tagline: t.subject, description: `${t.name}: ${t.subject}. ${t.history}`, address: e.address, mapQuery: e.query,
    category: t.category, hours: s.hours, admission: s.admission, time: `${e.minutes} ${lang === 'en' ? 'minutes' : lang === 'zh' ? '分钟' : 'ນາທີ'}`,
    manager: managers[slug]?.[lang] ?? s.manager, intro: t.subject, history: t.history, architecture: t.architecture, culture: t.culture,
    highlights: [t.history, t.architecture, t.culture], visit: `${s.visit} ${t.caution}`, route: detailedRoutes[slug]?.[lang] ?? s.route, etiquette: s.etiquette,
    photo: s.photo, lodging: s.lodging, review: s.review, faqs: s.faq, source: e.source };
}
