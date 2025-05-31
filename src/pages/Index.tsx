
import { useState } from "react";
import RechargeHeader from "../components/RechargeHeader";
import RechargeCard from "../components/RechargeCard";
import PurchaseModal from "../components/PurchaseModal";
import AuthModal from "../components/AuthModal";
import BottomNavigation from "../components/BottomNavigation";
import OrdersModal from "../components/OrdersModal";
import ProfileModal from "../components/ProfileModal";
import UPIPaymentModal from "../components/UPIPaymentModal";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showOrdersModal, setShowOrdersModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [diamondPackType, setDiamondPackType] = useState<'small' | 'normal'>('small');

  const smallDiamondPackages = [
    { id: 1, diamonds: 5, originalPrice: 20, price: 15, popular: false },
    { id: 2, diamonds: 11, originalPrice: 30, price: 20, popular: false },
  ];

  const normalDiamondPackages = [
    { id: 3, diamonds: 22, originalPrice: 40, price: 35, popular: false },
    { id: 4, diamonds: 56, originalPrice: 100, price: 85, popular: true },
    { id: 5, diamonds: 112, originalPrice: 170, price: 160, popular: false },
    { id: 6, diamonds: 172, originalPrice: 299, price: 280, popular: false },
    { id: 7, diamonds: 344, originalPrice: 599, price: 560, popular: false },
    { id: 8, diamonds: 706, originalPrice: 1199, price: 1120, popular: false },
  ];

  const currentDiamondPackages = diamondPackType === 'small' ? smallDiamondPackages : normalDiamondPackages;

  const passes = [
    {
      id: 'weekly',
      name: 'Weekly Diamond Pass',
      description: 'Get diamonds daily for 7 days',
      price: 374,
      benefits: ['10 Diamonds daily', 'Exclusive avatar border', '7-day duration'],
      image: '💎'
    },
    {
      id: 'starlight',
      name: 'Starlight Member',
      description: 'Premium monthly membership',
      price: 749,
      benefits: ['Exclusive skins', 'Daily rewards', 'Special privileges'],
      image: '⭐'
    },
    {
      id: 'starlight-premium',
      name: 'Starlight Premium',
      description: 'Ultimate monthly experience',
      price: 1499,
      benefits: ['All Starlight benefits', 'Exclusive emotes', 'Premium rewards'],
      image: '👑'
    }
  ];

  const handlePurchase = (item) => {
    if (!isLoggedIn) {
      setShowAuthModal(true);
      setSelectedItem(item);
      return;
    }
    setSelectedItem(item);
    setShowPurchaseModal(true);
  };

  const handleLogin = (credentials) => {
    setIsLoggedIn(true);
    toast({
      title: "Login Successful!",
      description: "Welcome to Tioin Store!",
    });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  const confirmPurchase = () => {
    setShowPurchaseModal(false);
    setShowUPIModal(true);
  };

  return (
    <div className="min-h-screen relative">
      {/* Background with 80% visibility */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/a0ca66ab-c649-41a0-9151-5862d13d943b.png')`
        }}
      />
      <div className="fixed inset-0 bg-blue-900/20" />

      <div className="relative z-10">
        <RechargeHeader 
          isLoggedIn={isLoggedIn} 
          onAuthClick={() => setShowAuthModal(true)}
        />
        
        <div className="container mx-auto px-4 py-8 pb-32">
          {/* Diamond Packages Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <span className="text-cyan-400 animate-pulse text-4xl">💎</span>
                Diamond Packages
              </h2>
              <p className="text-gray-200">Choose your diamond package and dominate the battlefield!</p>
            </div>
            
            {/* Diamond Pack Type Selector */}
            <div className="flex justify-center mb-6">
              <div className="bg-black/30 backdrop-blur-sm rounded-xl p-1 border border-cyan-500/30">
                <button
                  onClick={() => setDiamondPackType('small')}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    diamondPackType === 'small'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Small Diamond Pack
                </button>
                <button
                  onClick={() => setDiamondPackType('normal')}
                  className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                    diamondPackType === 'normal'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  Normal Diamond Pack
                </button>
              </div>
            </div>
            
            {/* Grid layout for diamond packages */}
            <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto">
              {currentDiamondPackages.map((pkg) => (
                <div 
                  key={pkg.id}
                  className={`relative bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm rounded-xl p-4 border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
                    pkg.popular 
                      ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' 
                      : 'border-gray-600 hover:border-cyan-400/50'
                  }`}
                  onClick={() => handlePurchase(pkg)}
                >
                  {pkg.popular && (
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        POPULAR
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                      <span className="text-white text-2xl">💎</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pkg.diamonds} Diamonds</h3>
                    </div>
                  </div>

                  <div className="bg-gray-600/50 rounded-lg px-3 py-1 mb-3 text-center">
                    <span className="text-gray-300 text-sm">Discount</span>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-red-500 line-through text-sm">₹{pkg.originalPrice}</span>
                      <span className="text-black font-bold text-lg">₹{pkg.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Passes and Memberships Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Premium Memberships</h2>
              <p className="text-gray-200">Unlock exclusive rewards and privileges!</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {passes.map((pass) => (
                <div
                  key={pass.id}
                  className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 hover:border-cyan-400/70 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => handlePurchase(pass)}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{pass.image}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{pass.name}</h3>
                    <p className="text-gray-300 text-sm">{pass.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    {pass.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-200">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25">
                    ₹{pass.price}
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Order Information Section */}
          <section className="mt-12">
            <div className="bg-gradient-to-br from-gray-800/90 to-gray-700/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-600 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">🎮</span>
                </div>
                <h3 className="text-xl font-bold text-white">Order Information</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Enter User ID</label>
                  <input 
                    type="text" 
                    placeholder="Enter User ID"
                    className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm mb-2">Enter Server ID</label>
                  <input 
                    type="text" 
                    placeholder="Enter Server ID"
                    className="w-full bg-white rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <BottomNavigation 
        isLoggedIn={isLoggedIn}
        onOrdersClick={() => setShowOrdersModal(true)}
        onProfileClick={() => setShowProfileModal(true)}
      />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
      />

      <OrdersModal
        isOpen={showOrdersModal}
        onClose={() => setShowOrdersModal(false)}
        isLoggedIn={isLoggedIn}
        onAuthClick={() => setShowAuthModal(true)}
      />

      <ProfileModal
        isOpen={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        isLoggedIn={isLoggedIn}
        onAuthClick={() => setShowAuthModal(true)}
        onLogout={handleLogout}
        onOrdersClick={() => setShowOrdersModal(true)}
      />

      <PurchaseModal
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        onConfirm={confirmPurchase}
        item={selectedItem}
      />

      <UPIPaymentModal
        isOpen={showUPIModal}
        onClose={() => setShowUPIModal(false)}
        item={selectedItem}
      />
    </div>
  );
};

export default Index;
