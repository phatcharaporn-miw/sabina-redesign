
export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  discount?: number;
  collection: typeof COLLECTIONS[number]['name'] | null;
  tint: string;
  colors: { hex: string; name: string }[];
  img: string;

}

export interface RecentProduct {
  id: number;
  name: string;
  brand: string;
  price: number;
  salePrice?: number;
  tint: string;
  img: string;
  collection: typeof COLLECTIONS[number]['name'] | null;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Sabina x Momorei กางเกงขายาว',
    brand: 'SABINA',
    price: 990,
    collection: "Special Collection",
    tint: '#EDE0D4',
    colors: [
      { hex: '#eb5858', name: 'Rose' },
      { hex: '#94b3cd', name: 'Dusty Blue' },
      { hex: '#1C1C1C', name: 'Onyx' },
    ],
    img: '/img/sabina-momorei1.jpg',
  },
  {
    id: 2,
    name: 'เสื้อกล้าม',
    brand: 'SABINA',
    price: 790,
    collection: 'Bra Tops',
    tint: '#E8DDD5',
    colors: [
      { hex: '#94b3cd', name: 'Dusty Blue' },
      { hex: '#E8B4A8', name: 'Blush' },
      { hex: '#817d85', name: 'Gray' },
      { hex: '#EEDFCC', name: 'Cream' },
    ],
    img: '/img/sabina-tanktop.jpg',
  },
  {
    id: 3,
    name: 'เซ็ตชุดนอน เสื้อแขนสั้น กางเกงขาสั้น',
    brand: 'SABINA',
    price: 1390,
    salePrice: 1112,
    discount: 20,
    collection: 'Sleepwear',
    tint: '#E0D5CE',
    colors: [
      { hex: '#EEDFCC', name: 'Cream' },
      { hex: '#94b3cd', name: 'Dusty Blue' },
    ],
    img: '/img/sabina-pajamas.jpg',
  },
  {
    id: 4,
    name: 'เซ็ตชุดนอน เสื้อแขนสั้น กางเกงขาสั้น UNISEX',
    brand: 'SABINA',
    price: 1190,
    salePrice: 952,
    discount: 20,
    collection: 'Sleepwear',
    tint: '#EAE0D8',
    colors: [
      { hex: '#1C1C1C', name: 'Onyx' },
      { hex: '#817d85', name: 'Gray' },
    ],
    img: '/img/sabina-unisex.jpg',
  },
  {
    id: 5,
    name: 'PIPATCHARA x SABINA เสื้อยืดทรงโอเวอร์ไซซ์',
    brand: 'SABINA',
    price: 1890,
    salePrice: 1512,
    discount: 20,
    collection: 'Special Collection',
    tint: '#E6DBD3',
    colors: [
      { hex: '#E8B4A8', name: 'Blush'},
      { hex: '#D4AC90', name: 'Nude' },
      { hex: '#EEDFCC', name: 'Cream' },
    ],
    img: '/img/sabina-pipatchara.jpg',
  },
  {
    id: 6,
    name: 'Mad Moiselle Fall 25 บอดี้สูท',
    brand: 'SABINA',
    price: 1590,
    salePrice:1113,
    discount: 30,
    collection: 'Mad Moiselle',
    tint: '#DDD3CC',
    colors: [
      { hex: '#EEDFCC', name: 'Cream' },
      { hex: '#C2AEC8', name: 'Lilac' },
    ],
    img: '/img/bodysuit.jpg',
  },
  {
    id: 7,
    name: 'Butterbear x Sabina เสื้อกีฬา Unisex',
    brand: 'SABINA',
    price: 1490,
    salePrice: 450,
    discount: 70,
    collection: 'Special Collection',
    tint: '#F0E5DD',
    colors: [
      { hex: '#1C1C1C', name: 'Onyx' },
      { hex: '#F5EDE4', name: 'Ivory' },
    ],
    img: '/img/butterbear.jpg',
  },
  {
    id: 8,
    name: 'Sabina x Aprilpoolday เดรส Lana',
    brand: 'SABINA',
    price: 2390,
    salePrice:550,
    discount: 77,
    collection: 'Special Collection',
    tint: '#E3D9D2',
    colors: [
      { hex: '#F5EDE4', name: 'Ivory' },
    ],
    img: '/img/april-poolday.jpg',
  },
  {
    id: 9,
    name: 'SABINA | Care Bears บอดี้สูท',
    brand: 'SABINA',
    price: 1590,
    salePrice:450,
    discount: 72,
    collection: 'Special Collection',
    tint: '#E3D9D2',
    colors: [
      { hex: '#F5EDE4', name: 'Ivory' },
    ],
    img: '/img/carebears.jpg',
  },
]

export const RECENT_PRODUCTS: RecentProduct[] = [
  { id: 101, name: 'Sabina x Momorei กางเกงขายาว', brand: 'SABINA', price: 990, tint: '#E8DDD5', img: '/img/sabina-momorei1.jpg', collection: 'Special Collection' },
  { id: 102, name: 'เสื้อกล้าม', brand: 'SABINA', price: 790, tint: '#E6DBD3', img: '/img/sabina-tanktop.jpg', collection: 'Bra Tops' },
  { id: 103, name: 'เซ็ตชุดนอน เสื้อแขนสั้น กางเกงขาสั้น', brand: 'SABINA', price: 1112, salePrice: 1390, tint: '#EDE0D4', img: '/img/sabina-pajamas.jpg', collection: 'Sleepwear' },
]

export const CUP_SIZES = ['AA', 'A', 'B', 'C', 'D', 'DD', 'E', 'F', 'G']
export const BAND_SIZES = ['28', '30', '32', '34', '36', '38', '40', '42']

export const STYLES = [
  { label: 'เดรส', count: 7 },
  { label: 'เสื้อ', count: 24 },
  { label: 'บอดี้สูท', count: 6 },
  { label: 'กางเกง/กระโปรง', count: 12 },
  { label: 'ชุดนอน', count: 9 },
]

export const COLOR_FILTERS = [
  { hex: '#F5EDE4', name: 'Ivory' },
  { hex: '#E8B4A8', name: 'Blush' },
  { hex: '#eb5858', name: 'Rose' },
  { hex: '#C2AEC8', name: 'Dusty Lilac' },
  { hex: '#D4AC90', name: 'Nude' },
  { hex: '#A8B9A4', name: 'Sage' },
  { hex: '#817d85', name: 'Gray' },
  { hex: '#1C1C1C', name: 'Onyx' },
  { hex: '#EEDFCC', name: 'Cream' },
  { hex: '#94b3cd', name: 'Dusty Blue' },
]

export const COLLECTIONS = [
  {
    name: 'Special Collection',
  },
  {
    name: 'Mad Moiselle',
  },
  {
    name: 'Bra Tops',
  },
  {
    name: 'Sleepwear',
  },

]
