export interface Product {
  id: string;
  name: string;
  brand: string;
  category: 'flagship' | 'midrange' | 'budget' | 'gaming' | 'camera' | '5g' | 'accessories';
  categoryLabel: string;
  isAccessory: boolean;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  imageFallback?: string;
  gallery?: string[];
  description: string;
  shortDescription: string;
  features: string[];
  specs?: {
    display?: string;
    processor?: string;
    camera?: string;
    battery?: string;
    storage?: string;
    ram?: string;
    os?: string;
    network?: string;
    warranty?: string;
    compatibility?: string;
  };
  colors: { name: string; hex: string }[];
  storageOptions?: string[];
  ramOptions?: string[];
  inStock: boolean;
  isDeal?: boolean;
  badge?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedStorage?: string;
  selectedRam?: string;
}

export interface FilterState {
  search: string;
  category: string;
  brand: string;
  maxPrice: number;
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
}

export type PageRoute = 
  | 'home' 
  | 'mobiles' 
  | 'accessories' 
  | 'brands' 
  | 'deals' 
  | 'product-detail' 
  | 'cart' 
  | 'checkout' 
  | 'wishlist' 
  | 'about' 
  | 'contact' 
  | 'support' 
  | 'store-location';
