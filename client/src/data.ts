/**
 * 汝瓷数字博物馆核心数据
 */

export interface Porcelain {
  id: string;
  name: string;
  category: 'daily' | 'display' | 'ritual'; // 分类：日用、陈设、礼仪
  shape: string; // 器型：水仙盆、温碗、碟、洗、瓶等
  color: 'sky-blue' | 'powder-blue' | 'egg-blue' | 'pea-green' | 'moon-white'; // 色系
  size: string;
  collection: string; // 馆藏机构
  description: string;
  imageUrl: string;
  features: string[];
}

export interface Category {
  id: string;
  name: string;
  description?: string;
}

export interface Color {
  id: string;
  name: string;
  hex: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: 'daily', name: '日用器皿', description: '宋代文人雅士日常生活中的精致器物。' },
  { id: 'display', name: '陈设雅玩', description: '用于书房陈设、插花观赏的艺术精品。' },
  { id: 'ritual', name: '礼仪祭祀', description: '承袭古礼，用于祭祀或重大典礼的庄重之器。' },
];

export const SHAPES: string[] = [
  '水仙盆', '温碗', '洗', '碟', '盘', '瓶', '尊', '盏托'
];

export const COLORS: Color[] = [
  { id: 'sky-blue', name: '天青', hex: '#87B0C1', description: '雨过天青云破处' },
  { id: 'powder-blue', name: '粉青', hex: '#A8C5D1', description: '色泽柔和，温润如玉' },
  { id: 'egg-blue', name: '卵青', hex: '#D4E5ED', description: '釉质莹润，色如鸭蛋' },
  { id: 'pea-green', name: '豆青', hex: '#9CA3AF', description: '青中泛绿，生机盎然' },
  { id: 'moon-white', name: '月白', hex: '#F5F3F0', description: '洁白如月，素雅静谧' },
];

export const PORCELAINS: Porcelain[] = [
  {
    id: 'lotus-bowl',
    name: '北宋汝窑青瓷莲花式温碗',
    category: 'daily',
    shape: '温碗',
    color: 'sky-blue',
    size: '高10.1-10.5cm 口径15.9-16.2cm',
    collection: '台北故宫博物院',
    description: '此件莲花式温碗是同型器中举世唯一的传世品，十瓣莲花口如绽放的莲花，温碗是盛行于晚唐至宋代的温酒器具。',
    imageUrl: '/images/lIMw2QhshwD4.jpg',
    features: ['十瓣莲花口', '五细小支钉痕', '釉色匀净'],
  },
  {
    id: 'narcissus-basin-1',
    name: '北宋汝窑青瓷水仙盆（养心殿）',
    category: 'display',
    shape: '水仙盆',
    color: 'sky-blue',
    size: '高6.1cm 口纵15.8cm 口横23.1cm',
    collection: '台北故宫博物院',
    description: '椭圆形盆、侈口、深壁、平底凸出一圈窄边稜、四足、足呈云头形；全器满釉不露胎，仅在器底留下五个支钉痕。',
    imageUrl: '/images/O79FVrUjk6Jq.jpg',
    features: ['云头形四足', '五支钉烧成', '传世极品'],
  },
  {
    id: 'narcissus-basin-2',
    name: '北宋汝窑青瓷水仙盆（重华宫）',
    category: 'display',
    shape: '水仙盆',
    color: 'sky-blue',
    size: '高5.7cm 口纵15.1cm 口横22.9cm',
    collection: '台北故宫博物院',
    description: '椭圆形、侈口嵌铜釦、浅壁、平底外缘多一圈边稜、下接四足、足呈云头形。通体施天青色釉，周缘与稜角釉薄处现出浅粉色光泽。',
    imageUrl: '/images/DaVzEGrfSr3u.jpg',
    features: ['嵌铜釦', '六支钉烧成', '釉色莹润'],
  },
  {
    id: 'narcissus-basin-3',
    name: '北宋汝窑青瓷水仙盆（无纹）',
    category: 'display',
    shape: '水仙盆',
    color: 'sky-blue',
    size: '高6.9cm 口纵16.4cm 口径23cm',
    collection: '台北故宫博物院',
    description: '这件汝窑水仙盆以天青、纯净、无开片的清朗釉色著名于世。椭圆形、侈口、深壁、平底、四足、足呈云头形。',
    imageUrl: '/images/7hhQQwP1WuAS.webp',
    features: ['天青无纹', '云头形四足', '六支钉'],
  },
  {
    id: 'paper-mallet-vase',
    name: '北宋汝窑「奉华」青瓷纸槌瓶',
    category: 'display',
    shape: '瓶',
    color: 'sky-blue',
    size: '高22.4cm 口径4.4cm',
    collection: '台北故宫博物院',
    description: '圆口、直长颈、斜宽肩；平底、底有五个支钉痕，刻有乾隆戊戌年御题。',
    imageUrl: '/images/6OgYSj8TMU5U.jpg',
    features: ['奉华铭文', '纸槌形', '长颈'],
  },
  {
    id: 'paper-mallet-vase-2',
    name: '北宋汝窑青瓷纸槌瓶（慈宁花园）',
    category: 'display',
    shape: '瓶',
    color: 'powder-blue',
    size: '高20.4cm 口径4.0cm',
    collection: '台北故宫博物院',
    description: '此瓶原为盘口，后因口沿损伤，刻意磨平，故成直口露胎；长颈、折肩、直腹、底微敛，底有五支钉痕。',
    imageUrl: '/images/muMOcokONlei.jpg',
    features: ['长颈', '折肩', '五支钉'],
  },
  {
    id: 'round-washer',
    name: '北宋汝窑「甲」字青瓷圆洗',
    category: 'daily',
    shape: '洗',
    color: 'powder-blue',
    size: '高3.8cm 口径15.8cm',
    collection: '台北故宫博物院',
    description: '侈圆口、浅壁、平底、圈足外撇。足心还刻有一篆书「甲」字，为古时的上等文物。',
    imageUrl: '/images/OCbk86CpSQ6c.jpg',
    features: ['甲字铭文', '冰裂纹', '满釉支烧'],
  },
  {
    id: 'small-washer',
    name: '北宋汝窑青瓷椭圆小洗',
    category: 'daily',
    shape: '洗',
    color: 'sky-blue',
    size: '高2.8cm 口纵9.7cm 口横14.3cm',
    collection: '台北故宫博物院',
    description: '椭圆形，口微敛；器内隐约有两隻鱼龙相对；平稳无足，足底凹入成一圈形，内有三支痕。',
    imageUrl: '/images/N8od08ADQd8M.jpg',
    features: ['椭圆形', '鱼龙纹', '三支钉'],
  },
  {
    id: 'plate-1',
    name: '北宋汝窑「甲」字青瓷盘',
    category: 'daily',
    shape: '盘',
    color: 'sky-blue',
    size: '高3.7cm 口径15.7cm',
    collection: '台北故宫博物院',
    description: '侈圆口、浅弧形壁、平底、圈足微外撇。底部有五支烧痕，底周有五枚支烧痕，中心镌刻一「甲」字铭。',
    imageUrl: '/images/OCbk86CpSQ6c.jpg',
    features: ['甲字铭文', '五支钉', '釉色纯净'],
  },
  {
    id: 'plate-2',
    name: '北宋汝窑「甲」字青瓷盘（永寿宫）',
    category: 'daily',
    shape: '盘',
    color: 'powder-blue',
    size: '高3.2-3.7cm 口径14.9cm',
    collection: '台北故宫博物院',
    description: '敞口、弧形圆壁；平底、圈足微外撇。底部有五支钉痕，中心刻有「甲」字篆款。',
    imageUrl: '/images/N8od08ADQd8M.jpg',
    features: ['甲字篆款', '弧形壁', '五支钉'],
  },
  {
    id: 'plate-3',
    name: '北宋汝窑青瓷盘（古董房）',
    category: 'daily',
    shape: '盘',
    color: 'sky-blue',
    size: '高4.6cm 口径21.5cm',
    collection: '台北故宫博物院',
    description: '敛圆口、浅弧形壁、平底、圈足略高且外撇。底部有五支钉痕，乾隆皇帝借《周礼考工记》中的"薛暴"一词来描述本件釉色不纯现象。',
    imageUrl: '/images/muMOcokONlei.jpg',
    features: ['大口径', '五支钉', '乾隆御题'],
  },
  {
    id: 'disc-1',
    name: '北宋汝窑「丙」字青瓷碟',
    category: 'daily',
    shape: '碟',
    color: 'sky-blue',
    size: '高3.3cm 口径13.0cm',
    collection: '台北故宫博物院',
    description: '侈圆口、镶铜釦、壁稍深、平底、圈足微外撇。底有三细小支钉痕；内周壁积釉处，有冰裂纹。',
    imageUrl: '/images/O79FVrUjk6Jq.jpg',
    features: ['丙字铭文', '冰裂纹', '三支钉'],
  },
  {
    id: 'disc-2',
    name: '北宋汝窑「丙蔡」铭青瓷碟',
    category: 'daily',
    shape: '碟',
    color: 'powder-blue',
    size: '高1.5cm 口径10.9cm',
    collection: '台北故宫博物院',
    description: '圆口、浅壁、壁呈微弧形；平底、无足，底部有三细小支钉痕。底心刻「蔡」、「丙」二字。',
    imageUrl: '/images/DaVzEGrfSr3u.jpg',
    features: ['丙蔡铭文', '浅壁', '三支钉'],
  },
  {
    id: 'disc-3',
    name: '北宋汝窑青瓷碟（古董房）',
    category: 'daily',
    shape: '碟',
    color: 'sky-blue',
    size: '高3.2cm 口径13.4-13.7cm',
    collection: '台北故宫博物院',
    description: '侈圆口、镶嵌铜扣；斜壁、平底、圈足外撇；底部有三细小支钉。',
    imageUrl: '/images/7hhQQwP1WuAS.webp',
    features: ['镶铜扣', '斜壁', '三支钉'],
  },
  {
    id: 'disc-4',
    name: '北宋汝窑青瓷碟（养心殿）',
    category: 'daily',
    shape: '碟',
    color: 'powder-blue',
    size: '高3.2cm 口径13.1cm',
    collection: '台北故宫博物院',
    description: '侈圆口、浅壁、壁呈圆形、平底、圈足微外撇。底部有三支钉痕，并刻有乾隆丙午年御题。',
    imageUrl: '/images/6OgYSj8TMU5U.jpg',
    features: ['乾隆御题', '浅壁', '三支钉'],
  },
  {
    id: 'disc-5',
    name: '北宋汝窑「奉华」铭青瓷洗',
    category: 'daily',
    shape: '碟',
    color: 'sky-blue',
    size: '高2.3cm 口径12.7cm',
    collection: '台北故宫博物院',
    description: '浅圆口、口沿镶铜扣；弧形浅壁、平底无足；底有三支钉痕，并有「奉华」二字刻于盘底中心。',
    imageUrl: '/images/muMOcokONlei.jpg',
    features: ['奉华铭文', '镶铜扣', '三支钉'],
  },
  {
    id: 'goblet-vase',
    name: '北宋汝窑青瓷胆瓶',
    category: 'display',
    shape: '瓶',
    color: 'sky-blue',
    size: '高17.9cm 口径3.2cm',
    collection: '台北故宫博物院',
    description: '圆口镶有鎏金铜釦、直颈，圆球型腹、平底、矮圈足外撇。底心去除一圈釉，刻有乾隆乙末年御题。',
    imageUrl: '/images/OCbk86CpSQ6c.jpg',
    features: ['胆瓶形', '鎏金铜釦', '乾隆御题'],
  },
];
