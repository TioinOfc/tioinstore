
import { useState } from "react";
import { Diamond } from "lucide-react";
import RechargeHeader from "../components/RechargeHeader";
import RechargeCard from "../components/RechargeCard";
import PurchaseModal from "../components/PurchaseModal";
import AuthModal from "../components/AuthModal";
import BottomNavigation from "../components/BottomNavigation";
import UPIPaymentModal from "../components/UPIPaymentModal";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUPIModal, setShowUPIModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const diamondPackages = [
    { id: 1, diamonds: 86, bonus: 0, price: 149, popular: false },
    { id: 2, diamonds: 172, bonus: 0, price: 299, popular: false },
    { id: 3, diamonds: 344, bonus: 31, price: 599, popular: false },
    { id: 4, diamonds: 706, bonus: 74, price: 1199, popular: true },
    { id: 5, diamonds: 1412, bonus: 176, price: 2399, popular: false },
    { id: 6, diamonds: 2195, bonus: 293, price: 3749, popular: false },
    { id: 7, diamonds: 3688, bonus: 532, price: 5999, popular: false },
    { id: 8, diamonds: 7375, bonus: 1225, price: 11999, popular: false },
  ];

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

  const confirmPurchase = () => {
    setShowPurchaseModal(false);
    setShowUPIModal(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-cyan-900 to-blue-800 relative">
      {/* Enhanced background with better visibility */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{
          backgroundImage: `url('/lovable-uploads/e5d9771d-e17e-44f4-b60e-e893aec35365.png')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-cyan-900/70 to-blue-800/70" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-300 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-blue-500 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <RechargeHeader 
          isLoggedIn={isLoggedIn} 
          onAuthClick={() => setShowAuthModal(true)}
        />
        
        <div className="container mx-auto px-4 py-8 pb-24">
          {/* Diamond Packages Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Diamond className="text-cyan-400 animate-pulse" size={32} />
                Diamond Packages
              </h2>
              <p className="text-gray-300">Choose your diamond package and dominate the battlefield!</p>
            </div>
            
            {/* Horizontal scrollable diamond grid */}
            <div className="overflow-x-auto pb-4">
              <div className="flex gap-4 min-w-max">
                {diamondPackages.map((pkg) => (
                  <div key={pkg.id} className="flex-shrink-0 w-64">
                    <RechargeCard
                      title={`${pkg.diamonds}${pkg.bonus > 0 ? ` +${pkg.bonus}` : ''}`}
                      subtitle="Diamonds"
                      price={pkg.price}
                      popular={pkg.popular}
                      icon="💎"
                      onClick={() => handlePurchase(pkg)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Passes and Memberships Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Premium Memberships</h2>
              <p className="text-gray-300">Unlock exclusive rewards and privileges!</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {passes.map((pass) => (
                <div
                  key={pass.id}
                  className="bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400/70 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer hover:shadow-lg hover:shadow-cyan-500/25"
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
        </div>
      </div>

      <BottomNavigation />

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLogin={handleLogin}
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
