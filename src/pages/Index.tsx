
import { useState } from "react";
import { Diamond } from "lucide-react";
import RechargeHeader from "../components/RechargeHeader";
import RechargeCard from "../components/RechargeCard";
import PurchaseModal from "../components/PurchaseModal";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const diamondPackages = [
    { id: 1, diamonds: 86, bonus: 0, price: 1.99, popular: false },
    { id: 2, diamonds: 172, bonus: 0, price: 3.99, popular: false },
    { id: 3, diamonds: 344, bonus: 31, price: 7.99, popular: false },
    { id: 4, diamonds: 706, bonus: 74, price: 15.99, popular: true },
    { id: 5, diamonds: 1412, bonus: 176, price: 31.99, popular: false },
    { id: 6, diamonds: 2195, bonus: 293, price: 49.99, popular: false },
    { id: 7, diamonds: 3688, bonus: 532, price: 79.99, popular: false },
    { id: 8, diamonds: 7375, bonus: 1225, price: 159.99, popular: false },
  ];

  const passes = [
    {
      id: 'weekly',
      name: 'Weekly Diamond Pass',
      description: 'Get diamonds daily for 7 days',
      price: 4.99,
      benefits: ['10 Diamonds daily', 'Exclusive avatar border', '7-day duration'],
      image: '💎'
    },
    {
      id: 'starlight',
      name: 'Starlight Member',
      description: 'Premium monthly membership',
      price: 9.99,
      benefits: ['Exclusive skins', 'Daily rewards', 'Special privileges'],
      image: '⭐'
    },
    {
      id: 'starlight-premium',
      name: 'Starlight Premium',
      description: 'Ultimate monthly experience',
      price: 19.99,
      benefits: ['All Starlight benefits', 'Exclusive emotes', 'Premium rewards'],
      image: '👑'
    }
  ];

  const handlePurchase = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const confirmPurchase = () => {
    toast({
      title: "Purchase Successful!",
      description: selectedItem.diamonds 
        ? `${selectedItem.diamonds} diamonds have been added to your account!`
        : `${selectedItem.name} activated successfully!`,
    });
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-pink-400 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-cyan-400 rounded-full opacity-20 animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-400 rounded-full opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10">
        <RechargeHeader />
        
        <div className="container mx-auto px-4 py-8">
          {/* Diamond Packages Section */}
          <section className="mb-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-2">
                <Diamond className="text-cyan-400 animate-pulse" size={32} />
                Diamond Packages
              </h2>
              <p className="text-gray-300">Choose your diamond package and dominate the battlefield!</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {diamondPackages.map((pkg) => (
                <RechargeCard
                  key={pkg.id}
                  title={`${pkg.diamonds}${pkg.bonus > 0 ? ` +${pkg.bonus}` : ''}`}
                  subtitle="Diamonds"
                  price={pkg.price}
                  popular={pkg.popular}
                  icon="💎"
                  onClick={() => handlePurchase(pkg)}
                />
              ))}
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
                  className="bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer"
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
                    ${pass.price}
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <PurchaseModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmPurchase}
        item={selectedItem}
      />
    </div>
  );
};

export default Index;
