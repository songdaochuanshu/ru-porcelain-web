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

export const CATEGORIES = [
  { id: 'daily', name: '日用器皿', description: '宋代文人雅士日常生活中的精致器物。' },
  { id: 'display', name: '陈设雅玩', description: '用于书房陈设、插花观赏的艺术精品。' },
  { id: 'ritual', name: '礼仪祭祀', description: '承袭古礼，用于祭祀或重大典礼的庄重之器。' },
];

export const SHAPES = [
  '水仙盆', '温碗', '洗', '碟', '盘', '瓶', '尊', '盏托'
];

export const COLORS = [
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
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/5hmdyP2CR2fx6xHnFPhU4N/lotus-bowl-D6FWWrETBvpQM4TiSQrdus.webp',
    features: ['十瓣莲花口', '五细小支钉痕', '釉色匀净'],
  },
  {
    id: 'narcissus-basin',
    name: '北宋汝窑青瓷水仙盆',
    category: 'display',
    shape: '水仙盆',
    color: 'sky-blue',
    size: '高6.1cm 口纵15.8cm 口横23.1cm',
    collection: '台北故宫博物院',
    description: '椭圆形盆、侈口、深壁、平底凸出一圈窄边稜、四足、足呈云头形；全器满釉不露胎。',
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/5hmdyP2CR2fx6xHnFPhU4N/narcissus-basin-LG8j7MRbofZBDLCbTDU8By.webp',
    features: ['云头形四足', '天青无纹', '传世极品'],
  },
  {
    id: 'paper-mallet-vase',
    name: '北宋汝窑「奉华」青瓷纸槌瓶',
    category: 'display',
    shape: '瓶',
    color: 'sky-blue',
    size: '高22.4cm 口径4.4cm',
    collection: '台北故宫博物院',
    description: '圆口、直长颈、斜宽肩；平底、底有五个支钉痕，刻有“奉华”二字。',
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/5hmdyP2CR2fx6xHnFPhU4N/vase-D6FWWrETBvpQM4TiSQrdus.webp',
    features: ['奉华铭文', '纸槌形', '长颈'],
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
    imageUrl: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629083491/5hmdyP2CR2fx6xHnFPhU4N/washer-LG8j7MRbofZBDLCbTDU8By.webp',
    features: ['甲字铭文', '冰裂纹', '满釉支烧'],
  }
];
