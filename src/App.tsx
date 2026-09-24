import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategorySection } from './components/CategorySection';
import { ProductGrid } from './components/ProductGrid';
import { TopAccessories } from './components/TopAccessories';
import { PromoBanners } from './components/PromoBanners';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TrustStrip } from './components/TrustStrip';
import { StoreLocationSection } from './components/StoreLocationSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

// Pages
import { MobilesPage } from './pages/MobilesPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { DealsPage } from './pages/DealsPage';
import { BrandsPage } from './pages/BrandsPage';
import { SupportPage } from './pages/SupportPage';
import { ContactPage } from './pages/ContactPage';
import { WishlistPage } from './pages/WishlistPage';
import { AboutPage } from './pages/AboutPage';

import { PRODUCTS } from './data/products';
import { Product, CartItem, PageRoute } from './types';
import { CheckCircle2, ShoppingBag } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // Cart & Wishlist state
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('jm_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jm_wishlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jm_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Sync wishlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('jm_wishlist', JSON.stringify(wishlist));
    } catch (e) {
      console.error(e);
    }
  }, [wishlist]);

  // Toast notification helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add to cart
  const handleAddToCart = (
    product: Product, 
    quantity = 1, 
    selectedColor?: string, 
    selectedStorage?: string, 
    selectedRam?: string
  ) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (i) => i.product.id === product.id && 
               i.selectedColor === (selectedColor || product.colors[0]?.name) &&
               i.selectedStorage === (selectedStorage || product.storageOptions?.[0])
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += quantity;
        return next;
      } else {
        return [
          ...prev,
          {
            product,
            quantity,
            selectedColor: selectedColor || product.colors[0]?.name,
            selectedStorage: selectedStorage || product.storageOptions?.[0],
            selectedRam: selectedRam || product.ramOptions?.[0]
          }
        ];
      }
    });

    showToast(`Added "${product.name}" to cart`);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    setCart((prev) => 
      prev.map((i) => i.product.id === productId ? { ...i, quantity } : i)
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => prev.filter((i) => i.product.id !== productId));
    showToast('Removed item from cart');
  };

  const handleClearCart = () => {
    setCart([]);
  };

  // Toggle wishlist
  const handleToggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.includes(product.id);
      if (exists) {
        showToast(`Removed "${product.name}" from wishlist`);
        return prev.filter((id) => id !== product.id);
      } else {
        showToast(`Added "${product.name}" to wishlist`);
        return [...prev, product.id];
      }
    });
  };

  // Quick direct checkout from modal
  const handleDirectCheckout = (
    product: Product, 
    quantity: number, 
    selectedColor?: string, 
    selectedStorage?: string, 
    selectedRam?: string
  ) => {
    handleAddToCart(product, quantity, selectedColor, selectedStorage, selectedRam);
    setIsCheckoutOpen(true);
  };

  // Search submit
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      setCurrentPage('mobiles');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Filtered products for search or general listing
  const searchedProducts = searchTerm.trim()
    ? PRODUCTS.filter((p) => 
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : PRODUCTS;

  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-900 selection:bg-blue-100 selection:text-blue-900 font-sans overflow-x-hidden">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-20 right-4 sm:right-8 z-50 bg-[#0F2747] text-white text-xs font-semibold py-2.5 px-4 rounded-2xl shadow-xl flex items-center gap-2 border border-blue-800 animate-in fade-in slide-in-from-top-2 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header */}
      <Header
        currentPage={currentPage}
        setCurrentPage={(page) => {
          setCurrentPage(page);
          if (page !== 'mobiles') setSearchTerm('');
        }}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        openCart={() => setIsCartOpen(true)}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* Main View Switcher */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            {/* Search active notice banner if any */}
            {searchTerm.trim() && (
              <div className="bg-blue-50 py-3 px-4 text-center text-xs text-[#1557A6] font-semibold border-b border-blue-100">
                Searching for: "{searchTerm}" — <button onClick={() => setSearchTerm('')} className="underline cursor-pointer">Clear Search</button>
              </div>
            )}

            {/* 1. Hero Section */}
            <Hero
              onShopMobiles={() => {
                setCurrentPage('mobiles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreDeals={() => {
                setCurrentPage('deals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onSelectProductById={(id) => {
                const found = PRODUCTS.find((p) => p.id === id);
                if (found) setSelectedProduct(found);
              }}
            />

            {/* 2. Category Section */}
            <CategorySection
              selectedCategory={selectedCategory}
              onSelectCategory={(catId) => {
                setSelectedCategory(catId);
                const el = document.getElementById('featured-grid');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 3. Featured Products Grid */}
            <div id="featured-grid">
              <ProductGrid
                products={searchedProducts}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
                onAddToCart={(p) => handleAddToCart(p, 1)}
                onViewDetails={(p) => setSelectedProduct(p)}
                wishlistIds={wishlist}
                onToggleWishlist={handleToggleWishlist}
                title="Featured Mobiles & Accessories"
                subtitle="Genuine smartphones, guaranteed PTA approval, and verified original accessories in Khichi Wala"
              />
            </div>

            {/* 4. Top Selling Accessories */}
            <TopAccessories
              products={PRODUCTS}
              onAddToCart={(p) => handleAddToCart(p, 1)}
              onViewDetails={(p) => setSelectedProduct(p)}
              wishlistIds={wishlist}
              onToggleWishlist={handleToggleWishlist}
              onViewAllAccessories={() => {
                setCurrentPage('accessories');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 5. Promotional Banners */}
            <PromoBanners
              onShopMobiles={() => {
                setCurrentPage('mobiles');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onShopAccessories={() => {
                setCurrentPage('accessories');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              onExploreDeals={() => {
                setCurrentPage('deals');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 6. Why Choose Us */}
            <WhyChooseUs />

            {/* 7. Trust Strip */}
            <TrustStrip />

            {/* 8. Physical Store Location Section */}
            <StoreLocationSection />

            {/* 9. Newsletter Subscription */}
            <Newsletter />
          </>
        )}

        {currentPage === 'mobiles' && (
          <MobilesPage
            products={searchedProducts}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={(p) => setSelectedProduct(p)}
            wishlistIds={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'accessories' && (
          <AccessoriesPage
            products={PRODUCTS}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={(p) => setSelectedProduct(p)}
            wishlistIds={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'deals' && (
          <DealsPage
            products={PRODUCTS}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={(p) => setSelectedProduct(p)}
            wishlistIds={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'brands' && (
          <BrandsPage
            products={PRODUCTS}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={(p) => setSelectedProduct(p)}
            wishlistIds={wishlist}
            onToggleWishlist={handleToggleWishlist}
          />
        )}

        {currentPage === 'store-location' && (
          <div className="py-6">
            <StoreLocationSection />
          </div>
        )}

        {currentPage === 'support' && <SupportPage />}

        {currentPage === 'contact' && <ContactPage />}

        {currentPage === 'wishlist' && (
          <WishlistPage
            products={PRODUCTS}
            wishlistIds={wishlist}
            onAddToCart={(p) => handleAddToCart(p, 1)}
            onViewDetails={(p) => setSelectedProduct(p)}
            onToggleWishlist={handleToggleWishlist}
            onStartShopping={() => {
              setCurrentPage('mobiles');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentPage === 'about' && <AboutPage />}
      </main>

      {/* Global Footer */}
      <Footer onNavigate={(page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }} />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        isWishlisted={selectedProduct ? wishlist.includes(selectedProduct.id) : false}
        onToggleWishlist={handleToggleWishlist}
        onDirectCheckout={handleDirectCheckout}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={() => setIsCheckoutOpen(true)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        onOrderSuccess={handleClearCart}
      />

    </div>
  );
}
