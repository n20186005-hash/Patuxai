import type { Lang } from './ui';

type Section = { heading: string; paragraphs?: string[]; points?: string[] };
type Topic = { title: string; description: string; h1: string; lead: string; cardTitle: string; cardDesc: string; lastUpdated: string; sections: Section[] };
export const extraTopics: Record<Lang, Record<string, Topic>> = {
  en: {
    historyArchitecture: {
      title: 'Patuxai History & Architecture | Lao Victory Gate in Vientiane', description: 'Explore Patuxai’s construction, memorial meaning, five towers, decorative motifs and city views in Vientiane.',
      h1: 'Patuxai history and architecture', lead: 'A commemorative arch with a distinctly Lao visual language: look closely at the towers, ceiling and ornament before climbing.', cardTitle: 'History & architecture', cardDesc: 'Why the Victory Gate looks different from a European triumphal arch.', lastUpdated: 'November 2026',
      sections: [
        { heading: 'Why was Patuxai built?', paragraphs: ['The monument was constructed during the 1950s and 1960s to commemorate people who fought for Lao independence. Its name means “Victory Gate.” The setting at the end of Lane Xang Avenue makes it a civic landmark as well as a memorial.', 'Construction is commonly dated to 1957–1968. Descriptions of the precise dedication and construction history differ between publications, so treat very specific historical claims with care.'] },
        { heading: 'What to look for', points: ['The monumental arches frame long views along Lane Xang Avenue.', 'The central tower and four smaller towers create a silhouette associated with Lao architecture.', 'Ceiling reliefs and ornamental patterns draw on Lao Buddhist and mythological imagery, including kinnari and naga motifs.', 'The upper levels, when open, reveal the street grid and low-rise skyline of Vientiane.'] },
        { heading: 'Is it the Arc de Triomphe of Laos?', paragraphs: ['Patuxai is often nicknamed the “Lao Arc de Triomphe” because of its large arches and commemorative purpose. The comparison is a useful starting point, but its decorative program, tower forms and urban context are Lao rather than a direct copy of the Paris monument.'] },
        { heading: 'Suggested observation route', points: ['Start across the fountain plaza for an uninterrupted view of the full elevation.', 'Walk beneath the arch and inspect the ceiling details without blocking pedestrians.', 'Circle the monument to compare the towers and reliefs from different sides.', 'If the tower staircase is operating, confirm admission and closing time on site before going up.'] },
      ],
    },
    namePronunciation: {
      title: 'Patuxai or Patuxay? Name, Meaning & Pronunciation', description: 'Learn what Patuxai means, why Patuxay and Victory Gate are used, and how to identify the monument in Lao, English and Chinese.',
      h1: 'Patuxai, Patuxay and Victory Gate', lead: 'Different spellings lead to the same landmark in central Vientiane.', cardTitle: 'Name & pronunciation', cardDesc: 'Patuxai, Patuxay and the Lao name explained.', lastUpdated: 'November 2026',
      sections: [
        { heading: 'Names used for the monument', points: ['Lao: ປະຕູໄຊ', 'Common English romanizations: Patuxai and Patuxay', 'English descriptive name: Victory Gate or Victory Monument', 'Chinese: 万象凯旋门 / 寮國凱旋門'] },
        { heading: 'Meaning and pronunciation', paragraphs: ['The Lao word combines a term for “gate” with one for “victory.” In English travel writing it is commonly sounded out roughly as “pa-too-sai”; romanization is approximate and local speech should be the model.', 'The final syllable may appear as “xai” or “xay” in Latin letters. These are alternative renderings rather than separate attractions.'] },
        { heading: 'How to search for it', paragraphs: ['For maps and transport, use the specific landmark “Patuxai Monument, Vientiane” or its Lao name rather than only “Victory Monument,” which can refer to landmarks in other cities. The map link below points to this monument.'] },
        { heading: 'Visitor note', points: ['Save the map location before leaving your hotel.', 'Show the Lao spelling ປະຕູໄຊ if a driver does not recognize the English spelling.', 'The public plaza and an optional climb inside the monument are different experiences; check access separately.'] },
      ],
    },
    nearbyAttractions: {
      title: 'Things to Do Near Patuxai | Vientiane Walking Route', description: 'Plan a Vientiane outing around Patuxai, That Dam, the Presidential Palace area, Wat Si Saket and the riverside.',
      h1: 'Attractions near Patuxai', lead: 'Use the Victory Gate as a starting point for a flexible half-day in Vientiane.', cardTitle: 'Nearby attractions', cardDesc: 'Build a central Vientiane itinerary with individual map searches.', lastUpdated: 'November 2026',
      sections: [
        { heading: 'A practical sequence', points: ['Patuxai: begin at the monument and fountain plaza; allow time to view the carvings.', 'That Dam (Black Stupa): continue toward the older central streets for a contrasting historic landmark.', 'Wat Si Saket: visit the temple complex for its courtyard and Buddha imagery; confirm visiting hours and dress requirements.', 'Presidential Palace exterior: appreciate the streetscape from permitted public viewpoints; do not assume the palace is open for tours.', 'Mekong riverside: finish with a later-day walk, allowing for heat and changing traffic.'] },
        { heading: 'How much time?', paragraphs: ['Allow about 30–60 minutes at Patuxai itself, depending on photography and whether upper-level access is available. The wider sequence is better treated as a half-day outing with transport or rest breaks rather than a strict timed walking tour.'] },
        { heading: 'Getting between places', paragraphs: ['Distances and pedestrian conditions vary with your exact route. Check crossings, weather and each attraction’s own map listing before setting out. Use a taxi or ride service if midday heat makes the longer stretches uncomfortable.'] },
        { heading: 'Independent map searches', points: ['That Dam: https://www.google.com/maps/search/?api=1&query=That+Dam+Vientiane', 'Wat Si Saket: https://www.google.com/maps/search/?api=1&query=Wat+Si+Saket+Vientiane', 'Presidential Palace: https://www.google.com/maps/search/?api=1&query=Presidential+Palace+Vientiane', 'Mekong riverside: https://www.google.com/maps/search/?api=1&query=Mekong+Riverside+Vientiane'] },
      ],
    },
  },
  zh: {
    historyArchitecture: { title: '万象凯旋门历史与建筑｜Patuxai 景点指南', description: '了解老挝万象凯旋门的建造背景、纪念意义、五座塔楼和老挝传统装饰。', h1: '凯旋门的历史与建筑', lead: '从拱门、塔楼到天花装饰，观察这座纪念建筑如何融合本土文化。', cardTitle: '历史与建筑', cardDesc: '了解纪念碑的建造背景与建筑细节。', lastUpdated: '2026年11月', sections: [
      { heading: '为何建造凯旋门？', paragraphs: ['万象凯旋门建于20世纪50至60年代，纪念争取老挝独立的人们。“Patuxai”意为“胜利之门”，位于澜沧大道的城市轴线上。', '资料通常将建造时期记为1957至1968年；若涉及更细致的历史年份，建议同时核对不同史料。'] },
      { heading: '建筑观察重点', points: ['从喷泉广场观察拱门与澜沧大道的对称景观。', '中央塔楼与四角塔楼形成具有老挝特色的屋顶轮廓。', '抬头观察天花浮雕、莲花、那伽蛇神与紧那罗等装饰。', '若观景层开放，登高可观察万象市街道布局。'] },
      { heading: '为什么被称为老挝的凯旋门？', paragraphs: ['因纪念用途与大型拱门形态，游客常将其与巴黎凯旋门比较；但塔楼和装饰纹样体现老挝建筑传统，并非简单复制欧洲建筑。'] },
      { heading: '建议参观顺序', points: ['先在广场远观正面全景。', '走入拱门下观察天花雕饰。', '绕建筑一周比较不同立面的细节。', '准备登塔前在现场核实开放与票价。'] },
    ] },
    namePronunciation: { title: 'Patuxai 与 Patuxay 有何不同？｜名称与读音', description: '解释万象凯旋门的老挝语名称、英文拼写 Patuxai／Patuxay、胜利之门含义和搜寻方式。', h1: 'Patuxai、Patuxay 与胜利之门', lead: '不同拼写指向万象市中心的同一座纪念碑。', cardTitle: '名称与读音', cardDesc: '认识老挝语、英文与中文名称。', lastUpdated: '2026年11月', sections: [
      { heading: '常见名称', points: ['老挝语：ປະຕູໄຊ', '英文音译：Patuxai、Patuxay', '英文意译：Victory Gate、Victory Monument', '中文：万象凯旋门、老挝凯旋门'] },
      { heading: '名字含义与读音', paragraphs: ['老挝语原名结合了“门”与“胜利”的意思。英语读音可粗略理解为“pa-too-sai”，但罗马字母只能近似表现当地发音。', '末尾的 xai 和 xay 是不同的转写习惯，并不表示两个景点。'] },
      { heading: '地图搜索建议', paragraphs: ['请使用“Patuxai Monument, Vientiane”或老挝语名称确认定位；单独搜索“Victory Monument”可能指向其他城市的纪念碑。'] },
      { heading: '出发前', points: ['提前收藏本页的景点专属地图链接。', '司机不熟悉英文时可出示“ປະຕູໄຊ”。', '广场散步与纪念碑内部登塔是不同的体验，开放情况需分别核实。'] },
    ] },
    nearbyAttractions: { title: '万象凯旋门附近景点｜半日游路线与交通', description: '串联万象凯旋门、黑塔、沙格庙、主席府外观与湄公河滨河区域，规划万象半日游。', h1: '凯旋门附近景点与路线', lead: '以凯旋门为起点，安排灵活的万象市区半日游。', cardTitle: '周边景点', cardDesc: '串联万象市区的历史建筑与河滨步道。', lastUpdated: '2026年11月', sections: [
      { heading: '建议行程', points: ['万象凯旋门：从喷泉广场欣赏建筑与雕饰。', '黑塔 That Dam：前往市区老街，了解另一处历史地标。', '沙格庙 Wat Si Saket：欣赏佛教建筑与庭院，留意着装与开放时间。', '主席府外观：仅从允许的公共区域观看建筑外立面，不应假定内部开放参观。', '湄公河滨河：傍晚沿河散步，留意天气和交通状况。'] },
      { heading: '预留多少时间？', paragraphs: ['凯旋门本身通常可以安排约30至60分钟；是否登塔、拍照及现场开放状况会影响停留时间。串联其他地点建议预留半天与中途休息。'] },
      { heading: '交通与地图', paragraphs: ['各地点之间的实际步行距离取决于路线与路口；炎热时段可考虑叫车。地图请分别搜索景点名称，避免所有按钮误指向凯旋门。'] },
      { heading: '景点独立地图搜索', points: ['黑塔：https://www.google.com/maps/search/?api=1&query=That+Dam+Vientiane', '沙格庙：https://www.google.com/maps/search/?api=1&query=Wat+Si+Saket+Vientiane', '主席府：https://www.google.com/maps/search/?api=1&query=Presidential+Palace+Vientiane', '湄公河滨河：https://www.google.com/maps/search/?api=1&query=Mekong+Riverside+Vientiane'] },
    ] },
  },
  lo: {
    historyArchitecture: { title: 'ປະຫວັດ ແລະ ສະຖາປັດຕະຍະກຳປະຕູໄຊ', description: 'ຮຽນຮູ້ປະຫວັດການກໍ່ສ້າງ ຫໍຄອຍ ແລະ ລວດລາຍປະຕູໄຊໃນວຽງຈັນ.', h1: 'ປະຫວັດ ແລະ ສະຖາປັດຕະຍະກຳ', lead: 'ສຳຫຼວດປະຕູໂຄ້ງ ຫໍຄອຍ ແລະ ລວດລາຍອັນເປັນເອກະລັກຂອງລາວ.', cardTitle: 'ປະຫວັດ ແລະ ສະຖາປັດຕະຍະກຳ', cardDesc: 'ຮູ້ຈັກຄວາມໝາຍແລະລາຍລະອຽດຂອງອະນຸສາວະລີ.', lastUpdated: 'ພະຈິກ 2026', sections: [
      { heading: 'ເປັນຫຍັງຈຶ່ງສ້າງປະຕູໄຊ?', paragraphs: ['ປະຕູໄຊກໍ່ສ້າງໃນຊ່ວງທົດສະວັດ 1950–1960 ເພື່ອລະນຶກເຖິງຜູ້ຕໍ່ສູ້ເພື່ອເອກະລາດຂອງລາວ. ຊື່ “ປະຕູໄຊ” ໝາຍເຖິງປະຕູແຫ່ງໄຊຊະນະ.', 'ແຫຼ່ງຂໍ້ມູນທົ່ວໄປລະບຸຊ່ວງການກໍ່ສ້າງ 1957–1968; ລາຍລະອຽດປີສະເພາະຄວນກວດກາຈາກຫຼາຍແຫຼ່ງ.'] },
      { heading: 'ຈຸດທີ່ຄວນສັງເກດ', points: ['ປະຕູໂຄ້ງແລະທິວທັດຕາມຖະໜົນລ້ານຊ້າງ.', 'ຫໍຄອຍກາງ ແລະ ຫໍຄອຍສີ່ມຸມ.', 'ລວດລາຍນາກ ກິນນະລີ ແລະ ດອກບົວ.', 'ວິວຕົວເມືອງຈາກຊັ້ນເທິງ ເມື່ອເປີດໃຫ້ຂຶ້ນ.'] },
      { heading: 'ປະຕູໄຊກັບປະຕູໄຊປາຣີ', paragraphs: ['ຮູບຊົງປະຕູໂຄ້ງເຮັດໃຫ້ມີການປຽບທຽບກັບ Arc de Triomphe ທີ່ປາຣີ, ແຕ່ລວດລາຍແລະຫໍຄອຍຂອງປະຕູໄຊສະທ້ອນສິລະປະລາວ.'] },
      { heading: 'ເສັ້ນທາງຊົມ', points: ['ເລີ່ມຈາກລານນ້ຳພຸເພື່ອເບິ່ງຮູບລວມ.', 'ຊົມລວດລາຍໃຕ້ປະຕູໂຄ້ງ.', 'ຍ່າງອ້ອມອາຄານເພື່ອເບິ່ງທຸກດ້ານ.', 'ກວດກາເວລາເປີດ ແລະ ຄ່າເຂົ້າກ່ອນຂຶ້ນຫໍ.'] },
    ] },
    namePronunciation: { title: 'Patuxai ຫຼື Patuxay? ຊື່ແລະການອອກສຽງ', description: 'ຄວາມໝາຍຂອງຊື່ປະຕູໄຊ ແລະ ວິທີຄົ້ນຫາສະຖານທີ່.', h1: 'ປະຕູໄຊ: Patuxai ແລະ Patuxay', lead: 'ຊື່ທັງສອງແມ່ນການຂຽນພາສາອັງກິດຂອງສະຖານທີ່ດຽວກັນ.', cardTitle: 'ຊື່ ແລະ ການອອກສຽງ', cardDesc: 'ຄວາມໝາຍຂອງຊື່ໃນຫຼາຍພາສາ.', lastUpdated: 'ພະຈິກ 2026', sections: [
      { heading: 'ຊື່ທີ່ໃຊ້ທົ່ວໄປ', points: ['ພາສາລາວ: ປະຕູໄຊ', 'ພາສາອັງກິດ: Patuxai ຫຼື Patuxay', 'ຊື່ແປພາສາອັງກິດ: Victory Gate', 'ພາສາຈີນ: 万象凯旋门'] },
      { heading: 'ຄວາມໝາຍ', paragraphs: ['“ປະຕູ” ໝາຍເຖິງທາງເຂົ້າ ແລະ “ໄຊ” ໝາຍເຖິງໄຊຊະນະ. ການຂຽນ xai ແລະ xay ເປັນການຖອດສຽງຕ່າງກັນ ບໍ່ແມ່ນອະນຸສາວະລີຄົນລະແຫ່ງ.'] },
      { heading: 'ຄົ້ນຫາໃນແຜນທີ່', paragraphs: ['ໃຊ້ຊື່ “Patuxai Monument, Vientiane” ຫຼື “ປະຕູໄຊ” ເພື່ອຫຼີກລ້ຽງສັບສົນກັບອະນຸສາວະລີຢູ່ເມືອງອື່ນ.'] },
      { heading: 'ກ່ອນເດີນທາງ', points: ['ບັນທຶກຈຸດໝາຍໃນ Google Maps.', 'ສະແດງຊື່ພາສາລາວໃຫ້ຄົນຂັບລົດ.', 'ກວດກາການເປີດຊັ້ນເທິງແຍກຈາກລານສາທາລະນະ.'] },
    ] },
    nearbyAttractions: { title: 'ສະຖານທີ່ທ່ຽວໃກ້ປະຕູໄຊ ໃນວຽງຈັນ', description: 'ວາງແຜນທ່ຽວປະຕູໄຊ ທາດດຳ ວັດສີສະເກດ ແລະ ແຄມຂອງ.', h1: 'ທ່ຽວບ່ອນໃກ້ປະຕູໄຊ', lead: 'ໃຊ້ປະຕູໄຊເປັນຈຸດເລີ່ມຂອງການທ່ຽວວຽງຈັນເຄິ່ງມື້.', cardTitle: 'ສະຖານທີ່ໃກ້ຄຽງ', cardDesc: 'ແຜນທ່ຽວຈຸດສຳຄັນໃນວຽງຈັນ.', lastUpdated: 'ພະຈິກ 2026', sections: [
      { heading: 'ແຜນທ່ຽວແນະນຳ', points: ['ປະຕູໄຊ: ຊົມອາຄານ ແລະ ລານນ້ຳພຸ.', 'ທາດດຳ: ຊົມອະນຸສອນສະຖານໃນເຂດເມືອງເກົ່າ.', 'ວັດສີສະເກດ: ຊົມວັດ ແລະ ຮູບພຣະພຸດທະຮູບ; ກວດກາເວລາເປີດ.', 'ພາຍນອກທຳນຽບປະທານ: ຊົມຈາກຈຸດສາທາລະນະທີ່ອະນຸຍາດ.', 'ແຄມແມ່ນ້ຳຂອງ: ຍ່າງຫຼິ້ນຕອນແລງ.'] },
      { heading: 'ຕ້ອງໃຊ້ເວລາເທົ່າໃດ?', paragraphs: ['ຢູ່ປະຕູໄຊປະມານ 30–60 ນາທີຕາມການຖ່າຍຮູບແລະການເປີດຫໍຄອຍ. ສຳລັບຫຼາຍຈຸດຄວນຈັດເວລາເຄິ່ງມື້ ພ້ອມພັກລະຫວ່າງທາງ.'] },
      { heading: 'ການເດີນທາງ', paragraphs: ['ກວດກາລະຍະທາງແລະທາງຂ້າມຖະໜົນໃນແຜນທີ່. ຖ້າອາກາດຮ້ອນສາມາດໃຊ້ລົດຮັບຈ້າງ.'] },
      { heading: 'ຄົ້ນຫາແຜນທີ່ແຍກແຕ່ລະບ່ອນ', points: ['ທາດດຳ: https://www.google.com/maps/search/?api=1&query=That+Dam+Vientiane', 'ວັດສີສະເກດ: https://www.google.com/maps/search/?api=1&query=Wat+Si+Saket+Vientiane', 'ທຳນຽບປະທານ: https://www.google.com/maps/search/?api=1&query=Presidential+Palace+Vientiane', 'ແຄມຂອງ: https://www.google.com/maps/search/?api=1&query=Mekong+Riverside+Vientiane'] },
    ] },
  },
};
