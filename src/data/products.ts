import { Product } from '../types';
import heroImg from '../assets/images/hero_smartphones_showcase_1790176958726.jpg';
import storeImg from '../assets/images/storefront_mobile_shop_1790176980346.jpg';
import flagshipImg from '../assets/images/phone_flagship_titanium_1790176997674.jpg';
import earbudsImg from '../assets/images/accessories_earbuds_pro_1790177010272.jpg';

export const BUSINESS_INFO = {
  name: "Jinnah Mobile's",
  tagline: "Quality Mobiles & Genuine Accessories in Khichi Wala",
  phone: "03239036568",
  phoneFormatted: "0323 9036568",
  phoneTel: "+923239036568",
  whatsapp: "03239036568",
  whatsappInternational: "+923239036568",
  whatsappUrl: "https://wa.me/923239036568",
  location: "8XH5+H7G, Fort Abbas - Haroonabad Rd, Khichi Wala, Pakistan",
  area: "Khichi Wala, Punjab, Pakistan",
  mapDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=8XH5%2BH7G%2C+Khichi+Wala%2C+Pakistan",
  hours: "Monday - Sunday: 9:00 AM - 10:00 PM",
  heroImage: heroImg,
  storeImage: storeImg,
  flagshipImage: flagshipImg,
  earbudsImage: earbudsImg,
};

export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'grid', count: 20 },
  { id: 'flagship', name: 'Flagship Phones', icon: 'smartphone', count: 5 },
  { id: 'midrange', name: 'Mid-Range Phones', icon: 'layers', count: 6 },
  { id: 'budget', name: 'Budget Phones', icon: 'tag', count: 4 },
  { id: 'gaming', name: 'Gaming Phones', icon: 'gamepad-2', count: 2 },
  { id: 'camera', name: 'Camera Phones', icon: 'camera', count: 4 },
  { id: '5g', name: '5G Phones', icon: 'wifi', count: 12 },
  { id: 'accessories', name: 'Accessories', icon: 'headphones', count: 11 },
];

export const BRANDS = [
  'All Brands',
  'Samsung',
  'Apple',
  'Xiaomi',
  'Redmi',
  'OnePlus',
  'Vivo',
  'Oppo',
  'Realme',
  'Infinix',
  'Tecno',
  'Jinnah Pro Audio'
];

export const PRODUCTS: Product[] = [
  // Flagships
  {
    id: 'samsung-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra 5G',
    brand: 'Samsung',
    category: 'flagship',
    categoryLabel: 'Flagship',
    isAccessory: false,
    price: 439999,
    originalPrice: 459999,
    rating: 4.9,
    reviewsCount: 48,
    image: flagshipImg,
    description: 'Samsung Galaxy S25 Ultra redefines mobile intelligence with Snapdragon 8 Elite, built-in S-Pen, quad telephoto camera system with 200MP main sensor, and aerospace-grade titanium frame.',
    shortDescription: '12GB RAM | 256GB / 512GB | 200MP Camera | Snapdragon 8 Elite',
    features: [
      '6.8-inch Dynamic AMOLED 2X 120Hz Display',
      '200MP Quad Camera with 100x Space Zoom',
      'Qualcomm Snapdragon 8 Elite (3nm)',
      '5000mAh Battery with 45W Fast Charging',
      'Integrated S Pen with Air Actions',
      'Official PTA Approved / 1 Year Official Warranty'
    ],
    specs: {
      display: '6.8" QHD+ Dynamic AMOLED 2X, 120Hz, Gorilla Armor',
      processor: 'Snapdragon 8 Elite for Galaxy',
      camera: '200MP Main + 50MP 5x Telephoto + 10MP 3x + 50MP Ultra-wide',
      battery: '5000mAh, 45W wired, 15W wireless',
      storage: '256GB / 512GB UFS 4.0',
      ram: '12GB LPDDR5X',
      os: 'Android 15 with One UI 7',
      network: '5G Dual SIM (Nano-SIM and eSIM)',
      warranty: '1 Year Brand Warranty / PTA Approved'
    },
    colors: [
      { name: 'Titanium Blue', hex: '#37474F' },
      { name: 'Titanium Black', hex: '#1C1C1E' },
      { name: 'Titanium Silver', hex: '#C0C0C0' }
    ],
    storageOptions: ['256GB', '512GB'],
    ramOptions: ['12GB'],
    inStock: true,
    isDeal: true,
    badge: 'Flagship Elite'
  },
  {
    id: 'iphone-16-pro',
    name: 'Apple iPhone 16 Pro Max',
    brand: 'Apple',
    category: 'flagship',
    categoryLabel: 'Flagship',
    isAccessory: false,
    price: 489999,
    originalPrice: 510000,
    rating: 4.9,
    reviewsCount: 62,
    image: heroImg,
    description: 'iPhone 16 Pro Max features a stunning Grade 5 Titanium design with new Camera Control, 48MP Fusion camera system, and the trailblazing Apple A18 Pro chip with all-day battery life.',
    shortDescription: '8GB RAM | 256GB / 512GB | 48MP Fusion | A18 Pro Chip',
    features: [
      '6.9-inch Super Retina XDR with ProMotion 120Hz',
      'A18 Pro Bionic with 6-core GPU',
      'New Dedicated Camera Control Button',
      '48MP Fusion + 48MP Ultra Wide + 12MP 5x Telephoto',
      '4685mAh Longest iPhone Battery Ever',
      'PTA Approved / Available for In-Store Pickup in Khichi Wala'
    ],
    specs: {
      display: '6.9" Super Retina XDR OLED, 1-120Hz ProMotion',
      processor: 'Apple A18 Pro (3nm)',
      camera: '48MP Main + 48MP Ultra Wide + 12MP 5x Telephoto',
      battery: 'Up to 33 hours video playback, MagSafe wireless',
      storage: '256GB / 512GB / 1TB',
      ram: '8GB Unified Memory',
      os: 'iOS 18',
      network: '5G Dual eSIM / Nano-SIM',
      warranty: '1 Year Apple Official Warranty'
    },
    colors: [
      { name: 'Desert Titanium', hex: '#C5A992' },
      { name: 'Natural Titanium', hex: '#9E9A93' },
      { name: 'Black Titanium', hex: '#2C2B29' }
    ],
    storageOptions: ['256GB', '512GB'],
    ramOptions: ['8GB'],
    inStock: true,
    isDeal: false,
    badge: 'Popular'
  },
  {
    id: 'xiaomi-15-pro',
    name: 'Xiaomi 15 Pro 5G Leica',
    brand: 'Xiaomi',
    category: 'flagship',
    categoryLabel: 'Flagship',
    isAccessory: false,
    price: 269999,
    originalPrice: 285000,
    rating: 4.8,
    reviewsCount: 31,
    image: flagshipImg,
    description: 'Engineered with Leica professional optical lenses, Qualcomm Snapdragon 8 Elite, and a massive 6100mAh silicon-carbon battery with 90W HyperCharge.',
    shortDescription: '16GB RAM | 512GB | Leica Triple 50MP | 6100mAh Battery',
    features: [
      '6.73-inch 2K 120Hz LTPO AMOLED with 3200 nits peak',
      'Leica Summilux Triple 50MP Optical Camera',
      'Snapdragon 8 Elite Processor',
      '6100mAh Silicon-Carbon Battery, 90W HyperCharge',
      'Dragon Crystal Glass 2.0 Protection'
    ],
    specs: {
      display: '6.73" 2K OLED 120Hz LTPO, Dolby Vision',
      processor: 'Snapdragon 8 Elite',
      camera: '50MP 1" Main + 50MP Periscope 5x + 50MP Ultra-wide',
      battery: '6100mAh, 90W wired, 50W wireless',
      storage: '512GB UFS 4.0',
      ram: '16GB LPDDR5X',
      os: 'HyperOS 2.0 based on Android 15',
      network: '5G Dual Nano-SIM',
      warranty: '1 Year Brand Warranty'
    },
    colors: [
      { name: 'Emerald Green', hex: '#2E4C38' },
      { name: 'Titanium Gray', hex: '#4A5568' },
      { name: 'Obsidian Black', hex: '#1A202C' }
    ],
    storageOptions: ['512GB'],
    ramOptions: ['16GB'],
    inStock: true,
    isDeal: true,
    badge: 'Leica Optics'
  },
  {
    id: 'oneplus-13',
    name: 'OnePlus 13 5G Hasselblad',
    brand: 'OnePlus',
    category: 'flagship',
    categoryLabel: 'Flagship',
    isAccessory: false,
    price: 249999,
    originalPrice: 265000,
    rating: 4.8,
    reviewsCount: 29,
    image: heroImg,
    description: 'The OnePlus 13 delivers blistering performance with Snapdragon 8 Elite, Hasselblad 50MP triple cameras, IP69 dust and high-pressure water resistance, and a 6000mAh battery with 100W SUPERVOOC.',
    shortDescription: '16GB RAM | 512GB | Hasselblad Triple 50MP | 100W SUPERVOOC',
    features: [
      '6.82-inch 2K 120Hz Oriental Screen',
      'Triple 50MP Hasselblad Camera System',
      'Qualcomm Snapdragon 8 Elite',
      '6000mAh Glacier Battery with 100W Charging',
      'IP68 & IP69 Water and Dust Resistance'
    ],
    specs: {
      display: '6.82" 2K QHD+ ProXDR 120Hz LTPO',
      processor: 'Snapdragon 8 Elite',
      camera: '50MP Sony LYT-808 + 50MP Periscope 3x + 50MP Ultra-wide',
      battery: '6000mAh, 100W SuperVOOC, 50W AIRVOOC',
      storage: '512GB',
      ram: '16GB',
      os: 'OxygenOS 15 based on Android 15',
      network: '5G Dual SIM',
      warranty: '1 Year Warranty'
    },
    colors: [
      { name: 'Midnight Black', hex: '#1F2937' },
      { name: 'Arctic Dawn', hex: '#E5E7EB' },
      { name: 'Emerald Velvet', hex: '#064E3B' }
    ],
    storageOptions: ['512GB'],
    ramOptions: ['16GB'],
    inStock: true,
    isDeal: false,
    badge: '100W Charging'
  },

  // Mid-Range & Camera
  {
    id: 'samsung-a55',
    name: 'Samsung Galaxy A55 5G',
    brand: 'Samsung',
    category: 'midrange',
    categoryLabel: 'Mid-Range',
    isAccessory: false,
    price: 134999,
    originalPrice: 142000,
    rating: 4.7,
    reviewsCount: 84,
    image: flagshipImg,
    description: 'Premium metal frame, Gorilla Glass Victus+, 50MP OIS camera, and IP67 water resistance make the Galaxy A55 Pakistan’s best-selling premium mid-ranger.',
    shortDescription: '8GB RAM | 256GB | 50MP OIS | Metal Frame & IP67',
    features: [
      '6.6-inch Super AMOLED 120Hz Vision Booster Display',
      '50MP OIS Main Camera with 4K Video',
      'Exynos 1480 (4nm) with AMD Xclipse GPU',
      '5000mAh Battery with 25W Fast Charging',
      'Samsung Knox Vault Security'
    ],
    specs: {
      display: '6.6" Super AMOLED, 120Hz, 1000 nits',
      processor: 'Exynos 1480 (4nm)',
      camera: '50MP OIS + 12MP Ultra-wide + 5MP Macro',
      battery: '5000mAh, 25W fast charging',
      storage: '256GB expandable via microSD',
      ram: '8GB',
      os: 'Android 14 / One UI 6.1 (4 OS Upgrades guaranteed)',
      network: '5G Dual SIM',
      warranty: '1 Year Official Samsung Pakistan Warranty'
    },
    colors: [
      { name: 'Awesome Navy', hex: '#1E3A8A' },
      { name: 'Awesome Iceblue', hex: '#93C5FD' },
      { name: 'Awesome Lilac', hex: '#C084FC' }
    ],
    storageOptions: ['256GB'],
    ramOptions: ['8GB'],
    inStock: true,
    isDeal: true,
    badge: 'Best Seller'
  },
  {
    id: 'redmi-note-14-pro-plus',
    name: 'Redmi Note 14 Pro+ 5G',
    brand: 'Redmi',
    category: 'camera',
    categoryLabel: 'Camera Phone',
    isAccessory: false,
    price: 119999,
    originalPrice: 128000,
    rating: 4.8,
    reviewsCount: 52,
    image: heroImg,
    description: 'Exceptional camera powerhouse featuring 200MP OIS sensor, curved 1.5K 120Hz AMOLED display, IP68 water resistance, and 120W HyperCharge.',
    shortDescription: '12GB RAM | 256GB | 200MP OIS | 120W HyperCharge',
    features: [
      '6.67-inch 1.5K Curved AMOLED 120Hz',
      '200MP Ultra-Clear OIS Camera',
      'Snapdragon 7s Gen 3 Processor',
      '6200mAh High-Density Battery with 90W Charging',
      'King Kong Structural Armor Drop Resistance'
    ],
    specs: {
      display: '6.67" 1.5K Curved AMOLED, 120Hz, 3000 nits',
      processor: 'Snapdragon 7s Gen 3',
      camera: '200MP OIS + 8MP Ultra-wide + 2MP Macro',
      battery: '6200mAh, 90W fast charging',
      storage: '256GB',
      ram: '12GB',
      os: 'Xiaomi HyperOS',
      network: '5G Dual SIM',
      warranty: '1 Year Official Warranty'
    },
    colors: [
      { name: 'Star Sand Cyan', hex: '#0D9488' },
      { name: 'Midnight Dark', hex: '#111827' },
      { name: 'Porcelain White', hex: '#F9FAFB' }
    ],
    storageOptions: ['256GB'],
    ramOptions: ['12GB'],
    inStock: true,
    isDeal: true,
    badge: '200MP Camera'
  },
  {
    id: 'oppo-reno-12',
    name: 'Oppo Reno 12 5G AI Phone',
    brand: 'Oppo',
    category: 'midrange',
    categoryLabel: 'Mid-Range',
    isAccessory: false,
    price: 129999,
    originalPrice: 135000,
    rating: 4.6,
    reviewsCount: 37,
    image: flagshipImg,
    description: 'Futuristic fluid ripple design with Oppo AI Studio, 50MP Sony portrait camera with OIS, splash touch technology, and 80W SUPERVOOC charging.',
    shortDescription: '12GB RAM | 256GB | AI Portrait Studio | 80W SUPERVOOC',
    features: [
      '6.7-inch Quad-Curved AMOLED 120Hz',
      'Sony LYT-600 50MP Main with OIS',
      'MediaTek Dimensity 7300-Energy (4nm)',
      '5000mAh Battery with 80W Flash Charge',
      'Splash Touch & High Strength Alloy Frame'
    ],
    specs: {
      display: '6.7" Quad-Curved OLED, 120Hz, 1200 nits',
      processor: 'Dimensity 7300-Energy',
      camera: '50MP OIS Sony + 8MP Ultra-wide + 2MP Macro',
      battery: '5000mAh, 80W SuperVOOC',
      storage: '256GB',
      ram: '12GB + up to 12GB virtual expansion',
      os: 'ColorOS 14.1 on Android 14',
      network: '5G Dual SIM',
      warranty: '1 Year Oppo Pakistan Warranty'
    },
    colors: [
      { name: 'Astro Silver', hex: '#D1D5DB' },
      { name: 'Matte Brown', hex: '#78350F' },
      { name: 'Sunset Pink', hex: '#F472B6' }
    ],
    storageOptions: ['256GB'],
    ramOptions: ['12GB'],
    inStock: true,
    isDeal: false,
    badge: 'AI Portrait'
  },
  {
    id: 'realme-13-pro-plus',
    name: 'Realme 13 Pro+ 5G Monet Gold',
    brand: 'Realme',
    category: 'camera',
    categoryLabel: 'Camera Phone',
    isAccessory: false,
    price: 139999,
    originalPrice: 149999,
    rating: 4.7,
    reviewsCount: 41,
    image: heroImg,
    description: 'First ever Sony LYT-701 sensor with Sony LYT-600 Periscope telephoto camera, inspiration from Claude Monet masterpieces, and 80W Ultra Charge.',
    shortDescription: '12GB RAM | 512GB | Dual Sony Sensors | Monet Design',
    features: [
      'Dual Sony Lytia Flagship Camera Sensors',
      'Monet-Inspired Miracle Shining Glass',
      '6.7-inch 120Hz Curved Vision Display',
      '5200mAh Massive Battery + 80W Fast Charge',
      'Snapdragon 7s Gen 2 Performance'
    ],
    specs: {
      display: '6.7" FHD+ Curved OLED, 120Hz, 2000 nits',
      processor: 'Snapdragon 7s Gen 2',
      camera: '50MP Sony LYT-701 OIS + 50MP Periscope 3x + 8MP Ultra-wide',
      battery: '5200mAh, 80W wired',
      storage: '512GB',
      ram: '12GB',
      os: 'realme UI 5.0 on Android 14',
      network: '5G Dual SIM',
      warranty: '1 Year Warranty'
    },
    colors: [
      { name: 'Monet Gold', hex: '#F59E0B' },
      { name: 'Emerald Green', hex: '#047857' }
    ],
    storageOptions: ['512GB'],
    ramOptions: ['12GB'],
    inStock: true,
    isDeal: true,
    badge: 'Periscope Zoom'
  },

  // Gaming & Budget
  {
    id: 'infinix-gt-20-pro',
    name: 'Infinix GT 20 Pro 5G Cyber Mecha',
    brand: 'Infinix',
    category: 'gaming',
    categoryLabel: 'Gaming Phone',
    isAccessory: false,
    price: 79999,
    originalPrice: 84999,
    rating: 4.7,
    reviewsCount: 93,
    image: flagshipImg,
    description: 'Official PUBG Mobile tournament device featuring Cyber Mecha LED lighting, Pixelworks X5 Turbo dedicated gaming display chip, and 120FPS smooth gameplay.',
    shortDescription: '12GB RAM | 256GB | Dimensity 8200 Ultimate | 120FPS Gaming',
    features: [
      'Dedicated Pixelworks X5 Turbo Gaming Display Chip',
      'MediaTek Dimensity 8200 Ultimate 4nm Processor',
      'Interactive Mecha Loop LED Light on Back',
      '144Hz Bezel-less FHD+ AMOLED Display',
      'Bypass Charging for zero battery degradation while gaming'
    ],
    specs: {
      display: '6.78" FHD+ AMOLED, 144Hz, 1300 nits peak',
      processor: 'Dimensity 8200 Ultimate (4nm)',
      camera: '108MP OIS Main + 2MP Macro + 2MP Depth',
      battery: '5000mAh, 45W wired, Bypass Charge support',
      storage: '256GB UFS 3.1',
      ram: '12GB LPDDR5X (+ 12GB Extended)',
      os: 'XOS 14 for GT (Clean, no bloatware)',
      network: '5G Dual SIM',
      warranty: '1 Year Carlcare Pakistan Warranty'
    },
    colors: [
      { name: 'Mecha Silver', hex: '#9CA3AF' },
      { name: 'Mecha Blue', hex: '#2563EB' },
      { name: 'Mecha Orange', hex: '#EA580C' }
    ],
    storageOptions: ['256GB'],
    ramOptions: ['12GB'],
    inStock: true,
    isDeal: true,
    badge: 'Official PUBG'
  },
  {
    id: 'poco-x6-pro',
    name: 'Poco X6 Pro 5G Speed',
    brand: 'Xiaomi',
    category: 'gaming',
    categoryLabel: 'Gaming Phone',
    isAccessory: false,
    price: 94999,
    originalPrice: 99999,
    rating: 4.8,
    reviewsCount: 76,
    image: heroImg,
    description: 'An absolute performance monster packing the Dimensity 8300-Ultra chip, LiquidCool Technology 2.0, and 1.5K Flow AMOLED screen for unbeatable speed in its price segment.',
    shortDescription: '12GB RAM | 512GB | Dimensity 8300-Ultra | 67W Turbo',
    features: [
      'MediaTek Dimensity 8300-Ultra (AnTuTu score 1.46M+)',
      'CrystalRes 1.5K Flow AMOLED 120Hz display',
      '64MP Triple Camera with OIS',
      '5000mAh Battery with 67W Turbo Charge (In-box charger)'
    ],
    specs: {
      display: '6.67" 1.5K Flow AMOLED, 120Hz, Dolby Vision',
      processor: 'Dimensity 8300-Ultra (4nm)',
      camera: '64MP OIS + 8MP Ultra-wide + 2MP Macro',
      battery: '5000mAh, 67W fast charging',
      storage: '512GB UFS 4.0',
      ram: '12GB LPDDR5X',
      os: 'Xiaomi HyperOS',
      network: '5G Dual SIM',
      warranty: '1 Year Official Warranty'
    },
    colors: [
      { name: 'Poco Yellow', hex: '#FACC15' },
      { name: 'Racing Black', hex: '#18181B' },
      { name: 'Speed Grey', hex: '#64748B' }
    ],
    storageOptions: ['512GB'],
    ramOptions: ['12GB'],
    inStock: true,
    isDeal: false,
    badge: 'Speed King'
  },

  // Budget category
  {
    id: 'tecno-spark-30',
    name: 'Tecno Spark 30 Pro Transformers Edition',
    brand: 'Tecno',
    category: 'budget',
    categoryLabel: 'Budget Phone',
    isAccessory: false,
    price: 38999,
    originalPrice: 42000,
    rating: 4.6,
    reviewsCount: 54,
    image: flagshipImg,
    description: 'Exceptional value featuring 108MP camera, 120Hz AMOLED display, stereo dual speakers with Dolby Atmos, and rugged drop resistance.',
    shortDescription: '8GB RAM | 128GB / 256GB | 108MP Ultra Camera | 120Hz AMOLED',
    features: [
      '6.78-inch 120Hz Eye-Care AMOLED Screen',
      '108MP Clear Main Camera with 3x Lossless Zoom',
      'MediaTek Helio G100 Gaming Processor',
      'Dual Stereo Speakers with Dolby Atmos & Hi-Res',
      '5000mAh Battery with 33W Fast Charge'
    ],
    specs: {
      display: '6.78" FHD+ AMOLED, 120Hz, 1700 nits peak',
      processor: 'Helio G100 6nm',
      camera: '108MP Main + AI auxiliary',
      battery: '5000mAh, 33W fast charge',
      storage: '256GB',
      ram: '8GB (+8GB Extended)',
      os: 'HiOS 14 based on Android 14',
      network: '4G LTE Dual SIM',
      warranty: '1 Year Carlcare Warranty'
    },
    colors: [
      { name: 'Optimus Prime Blue', hex: '#1D4ED8' },
      { name: 'Obsidian Edge', hex: '#1E293B' }
    ],
    storageOptions: ['256GB'],
    ramOptions: ['8GB'],
    inStock: true,
    isDeal: true,
    badge: 'Top Budget'
  },
  {
    id: 'redmi-14c',
    name: 'Redmi 14C Starry Design',
    brand: 'Redmi',
    category: 'budget',
    categoryLabel: 'Budget Phone',
    isAccessory: false,
    price: 33999,
    originalPrice: 36000,
    rating: 4.5,
    reviewsCount: 48,
    image: heroImg,
    description: 'Sleek 8.22mm ultra-slim body with starry glass back, huge 6.88-inch 120Hz immersive display, and 50MP AI dual camera.',
    shortDescription: '6GB RAM | 128GB | 6.88" 120Hz Screen | 5160mAh Battery',
    features: [
      '6.88-inch 120Hz Fluid Display with TUV Rheinland eye protection',
      '50MP AI Dual Camera system',
      'Helio G81-Ultra Octa-core Processor',
      '5160mAh Long-lasting Battery + 18W Fast Charging'
    ],
    specs: {
      display: '6.88" HD+ 120Hz Display',
      processor: 'MediaTek Helio G81-Ultra',
      camera: '50MP Main + AI secondary',
      battery: '5160mAh, 18W charging',
      storage: '128GB',
      ram: '6GB',
      os: 'Xiaomi HyperOS',
      network: '4G LTE Dual SIM',
      warranty: '1 Year Brand Warranty'
    },
    colors: [
      { name: 'Starry Blue', hex: '#2563EB' },
      { name: 'Sage Green', hex: '#6EE7B7' },
      { name: 'Midnight Black', hex: '#111827' }
    ],
    storageOptions: ['128GB'],
    ramOptions: ['6GB'],
    inStock: true,
    isDeal: false,
    badge: 'Affordable'
  },
  {
    id: 'infinix-smart-9',
    name: 'Infinix Smart 9 Essential',
    brand: 'Infinix',
    category: 'budget',
    categoryLabel: 'Budget Phone',
    isAccessory: false,
    price: 24999,
    originalPrice: 26999,
    rating: 4.4,
    reviewsCount: 38,
    image: flagshipImg,
    description: 'The most reliable entry-level smartphone with 120Hz punch-hole display, stereo dual speakers, and 4-year fluency guarantee.',
    shortDescription: '4GB RAM | 64GB | 120Hz Punch-Hole | Dual Speakers',
    features: [
      '120Hz Punch-Hole Display with Dynamic Bar notifications',
      'Dual Stereo Speakers with 300% Ultra Volume',
      'Helio G81 Octa-core Processor',
      '5000mAh Battery with Type-C Charging'
    ],
    specs: {
      display: '6.7" HD+ 120Hz Punch-Hole',
      processor: 'Helio G81 Octa-core',
      camera: '13MP Dual AI Camera',
      battery: '5000mAh, Type-C charging',
      storage: '64GB expandable up to 2TB',
      ram: '4GB (+ 4GB Extended)',
      os: 'XOS 14 based on Android 14 (Go Edition)',
      network: '4G LTE Dual SIM',
      warranty: '1 Year Carlcare Warranty'
    },
    colors: [
      { name: 'Metallic Black', hex: '#1E293B' },
      { name: 'Neo Titanium', hex: '#94A3B8' },
      { name: 'Mint Green', hex: '#A7F3D0' }
    ],
    storageOptions: ['64GB'],
    ramOptions: ['4GB'],
    inStock: true,
    isDeal: false,
    badge: 'Best Value'
  },

  // ACCESSORIES
  {
    id: 'jinnah-pro-anc-earbuds',
    name: 'Jinnah Pro Sound ANC Wireless Earbuds',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 4499,
    originalPrice: 5999,
    rating: 4.9,
    reviewsCount: 112,
    image: earbudsImg,
    description: 'Premium true wireless earbuds featuring Active Noise Cancellation up to 35dB, 13mm titanium dynamic drivers with deep bass, low-latency gaming mode, and 38 hours playback with the wireless charging case.',
    shortDescription: '35dB Active Noise Cancellation | 38H Total Playtime | 13mm Titanium Drivers',
    features: [
      'Active Noise Cancellation (ANC) & Transparency mode',
      'Quad ENC microphones for crystal-clear phone calls in traffic',
      '13mm Titanium-coated dynamic bass drivers',
      'Bluetooth 5.4 with auto instant pairing',
      'Up to 38 hours battery with USB-C quick charge',
      'IPX5 sweat and splash resistance'
    ],
    specs: {
      battery: '7 hours single charge + 31 hours case (38h total)',
      warranty: '6 Months Replacement Warranty at Khichi Wala Store',
      compatibility: 'Compatible with iPhone, Samsung, Xiaomi, and all Bluetooth devices'
    },
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Midnight Matte Black', hex: '#18181B' }
    ],
    inStock: true,
    isDeal: true,
    badge: 'Customer Favorite'
  },
  {
    id: 'gan-65w-fast-charger',
    name: '65W GaN Super Fast Charger (Dual Type-C + USB-A)',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 3850,
    originalPrice: 4500,
    rating: 4.8,
    reviewsCount: 78,
    image: heroImg,
    description: 'Next-generation Gallium Nitride (GaN III) compact wall adapter. Powers laptops, iPhones, Samsung Super Fast Charging 2.0 (45W), and Xiaomi fast charging without heat.',
    shortDescription: '65W GaN Tech | Powers Laptops & Phones | Dual PD 3.0 + QC 4.0',
    features: [
      'Gallium Nitride (GaN III) high-efficiency technology',
      'Charges Samsung S25/S24 Ultra at full 45W Super Fast 2.0',
      'Charges iPhone 16/15 to 60% in 30 minutes',
      'Compact foldable pin design with active multi-protection safety'
    ],
    specs: {
      warranty: '6 Months Replacement Warranty',
      compatibility: 'Universal (PD3.0, PPS, QC4.0+, AFC, FCP)'
    },
    colors: [
      { name: 'Arctic White', hex: '#FFFFFF' },
      { name: 'Space Gray', hex: '#4B5563' }
    ],
    inStock: true,
    isDeal: true,
    badge: 'GaN Fast Tech'
  },
  {
    id: 'powerbank-20000-22w',
    name: '20,000mAh 22.5W Fast Charging Power Bank with LED',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 5499,
    originalPrice: 6200,
    rating: 4.7,
    reviewsCount: 95,
    image: heroImg,
    description: 'High-capacity 20,000mAh portable battery with digital LED percentage display, dual USB outputs, and 20W PD Type-C bi-directional charging. Charges a phone 4 to 5 times.',
    shortDescription: '20000mAh High Capacity | 22.5W Two-Way Fast Charge | Digital LED Display',
    features: [
      '20,000mAh A-Grade Lithium Polymer Battery',
      'Digital LED percentage readout',
      'Supports 22.5W Huawei SuperCharge & 20W Apple PD',
      'Triple output: charge up to 3 devices simultaneously',
      'Airline approved safe battery'
    ],
    specs: {
      battery: '20,000mAh / 74Wh Li-Polymer',
      warranty: '6 Months Local Store Warranty',
      compatibility: 'All USB-C, Lightning, and Micro-USB smartphones'
    },
    colors: [
      { name: 'Matte Black', hex: '#111827' },
      { name: 'Pearl White', hex: '#F3F4F6' }
    ],
    inStock: true,
    isDeal: false,
    badge: 'Travel Essential'
  },
  {
    id: 'screen-protector-9h',
    name: '9H Diamond Tempered Glass Screen Protector',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 650,
    originalPrice: 850,
    rating: 4.9,
    reviewsCount: 210,
    image: flagshipImg,
    description: 'Ultra-tough 9H hardness tempered glass with oleophobic anti-fingerprint coating and edge-to-edge full coverage. Free professional application at our Khichi Wala store!',
    shortDescription: '9H Hardness | Edge-to-Edge Protection | Anti-Smudge Coating',
    features: [
      '0.33mm ultra-thin 9H Japanese tempered glass',
      'Anti-shatter explosion-proof film',
      'Oleophobic nano-coating repels oil, fingerprints and water',
      'Case-friendly precision bevelled 2.5D edges',
      'Free in-store installation in Khichi Wala'
    ],
    specs: {
      warranty: 'Guaranteed bubble-free fit on pickup',
      compatibility: 'Available for iPhone, Samsung, Xiaomi, Infinix, Tecno, Vivo, Oppo'
    },
    colors: [
      { name: 'Clear HD', hex: '#E0F2FE' },
      { name: 'Privacy Matte', hex: '#334155' }
    ],
    inStock: true,
    isDeal: false,
    badge: 'Free In-Store Fit'
  },
  {
    id: 'type-c-100w-braided-cable',
    name: '100W Braided USB-C to USB-C Fast Charging Cable (1.5m)',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 999,
    originalPrice: 1350,
    rating: 4.8,
    reviewsCount: 140,
    image: heroImg,
    description: 'High-durability nylon braided Type-C cable with smart E-Marker chip supporting up to 100W Power Delivery and 480Mbps high-speed data transfer.',
    shortDescription: '100W Power Delivery | E-Marker Smart Chip | 25,000+ Bend Lifespan',
    features: [
      'Supports up to 20V/5A 100W super fast charging',
      'Built-in intelligent E-Marker chip protects battery longevity',
      'Reinforced zinc alloy connector shells with anti-fray strain relief',
      'Tangle-free military-grade braided nylon exterior'
    ],
    specs: {
      warranty: '6 Months Replacement Warranty',
      compatibility: 'All Type-C laptops, tablets, and smartphones'
    },
    colors: [
      { name: 'Navy Blue Braided', hex: '#1E40AF' },
      { name: 'Space Black Braided', hex: '#18181B' }
    ],
    inStock: true,
    isDeal: true,
    badge: '100W Fast Charge'
  },
  {
    id: 'smart-watch-ultra-amoled',
    name: 'Smart Watch Ultra 2 (AMOLED + BT Calling)',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 6999,
    originalPrice: 8500,
    rating: 4.7,
    reviewsCount: 65,
    image: earbudsImg,
    description: 'Stunning 2.04-inch AMOLED display with Always-On Display, Bluetooth calling with high-clarity speaker, heart rate and SpO2 monitoring, and 100+ sport tracking modes.',
    shortDescription: '2.04" AMOLED Display | High Clarity BT Calling | IP68 Waterproof',
    features: [
      '2.04" Vivid AMOLED Display with 60Hz refresh rate',
      'One-tap Bluetooth calling with dial pad and recent call logs',
      '24/7 Heart rate, SpO2 blood oxygen, and sleep monitoring',
      'Includes 2 stylish straps: Titanium metal link and silicone sport band',
      'Up to 7 days normal usage on a single magnetic charge'
    ],
    specs: {
      battery: '350mAh, 5-7 days typical use',
      warranty: '6 Months Store Warranty',
      compatibility: 'Android 5.0+ and iOS 10.0+'
    },
    colors: [
      { name: 'Titanium Silver with Orange Band', hex: '#F97316' },
      { name: 'Stealth Black with Black Band', hex: '#1F2937' }
    ],
    inStock: true,
    isDeal: true,
    badge: 'AMOLED Display'
  },
  {
    id: 'magnetic-car-mount',
    name: '360° Magnetic Rotating Dashboard Phone Holder',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 1299,
    originalPrice: 1600,
    rating: 4.8,
    reviewsCount: 44,
    image: flagshipImg,
    description: 'Heavy-duty 6x N52 neodymium magnetic phone mount with 3M adhesive base and smooth 360-degree aluminum alloy swivel ball for bumpy road stability.',
    shortDescription: '6x N52 Strong Neodymium Magnets | 360° Free Rotation | All Cars',
    features: [
      '6 built-in ultra-strong N52 neodymium magnets',
      'Does not interfere with cellular GPS or wireless signal',
      'Genuine 3M heat-resistant VHB automotive adhesive',
      'Compatible with all smartphones including heavy Pro Max models'
    ],
    specs: {
      warranty: 'Guaranteed adhesive grip & magnetic hold',
      compatibility: 'Universal for all car dashboards'
    },
    colors: [
      { name: 'Gunmetal Gray', hex: '#4B5563' },
      { name: 'Matte Black', hex: '#111827' }
    ],
    inStock: true,
    isDeal: false,
    badge: 'Strong Grip'
  },
  {
    id: 'shockproof-armor-case',
    name: 'Shockproof Matte Translucent Armor Case',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 950,
    originalPrice: 1200,
    rating: 4.8,
    reviewsCount: 165,
    image: heroImg,
    description: 'Military grade 10ft drop tested protective phone case featuring matte anti-smudge translucent backplate, air-cushioned corners, and raised camera bevels.',
    shortDescription: 'Military Grade Drop Test | Anti-Fingerprint Matte | Raised Camera Lip',
    features: [
      'Airbag corner bumpers absorb 95% of shock impact',
      'Raised 1.5mm camera ring keeps lenses safe from scratches',
      'Skin-friendly frosted matte back resists oils and fingerprints',
      'Independent tactile metallic buttons for crisp clicks'
    ],
    specs: {
      warranty: 'Perfect fit guarantee for your exact phone model',
      compatibility: 'Models for iPhone, Samsung, Xiaomi, Redmi, Tecno, Infinix, Vivo, Oppo'
    },
    colors: [
      { name: 'Smoke Black', hex: '#1F2937' },
      { name: 'Navy Blue', hex: '#1E3A8A' },
      { name: 'Forest Green', hex: '#14532D' }
    ],
    inStock: true,
    isDeal: false,
    badge: 'Drop Protection'
  },
  {
    id: 'deep-bass-handsfree',
    name: 'Hi-Res Stereo Deep Bass Type-C & 3.5mm Handsfree',
    brand: 'Jinnah Pro Audio',
    category: 'accessories',
    categoryLabel: 'Accessories',
    isAccessory: true,
    price: 850,
    originalPrice: 1100,
    rating: 4.6,
    reviewsCount: 89,
    image: earbudsImg,
    description: 'Tangle-resistant braided handsfree with built-in DAC audio decoder chip for Type-C phones, HD voice microphone, and responsive inline volume slider.',
    shortDescription: 'Built-in Digital DAC Chip | HD Voice Microphone | Ergonomic In-Ear Fit',
    features: [
      'Digital Type-C DAC chip compatible with Samsung, Xiaomi, OnePlus, iPhone 15/16',
      '14.2mm large composite diaphragm speaker delivers deep punchy bass',
      'High-definition noise reduction condenser mic for calls',
      'Durable oxygen-free copper core wire'
    ],
    specs: {
      warranty: 'Store replacement guarantee on check',
      compatibility: 'Type-C and 3.5mm options available'
    },
    colors: [
      { name: 'Clean White', hex: '#F9FAFB' },
      { name: 'Charcoal Black', hex: '#18181B' }
    ],
    inStock: true,
    isDeal: false,
    badge: 'Clear Audio'
  }
];

export const FORMAT_PKR = (num: number): string => {
  return 'Rs. ' + num.toLocaleString('en-PK');
};

export const CREATE_WHATSAPP_LINK = (productName?: string, price?: number, qty: number = 1): string => {
  if (!productName) {
    const defaultText = `Hello Jinnah Mobile's! I am contacting you regarding your mobile phones and accessories in Khichi Wala. Please share details and availability.`;
    return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(defaultText)}`;
  }
  const text = `Hello Jinnah Mobile's, I am interested in ${productName} (Price: ${FORMAT_PKR(price || 0)}, Qty: ${qty}). Please provide availability and order details for Khichi Wala pickup / delivery.`;
  return `${BUSINESS_INFO.whatsappUrl}?text=${encodeURIComponent(text)}`;
};
