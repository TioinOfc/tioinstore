
import { Home, Package, User, Phone } from "lucide-react";

interface BottomNavigationProps {
  isLoggedIn: boolean;
  onOrdersClick: () => void;
  onProfileClick: () => void;
}

const BottomNavigation = ({ isLoggedIn, onOrdersClick, onProfileClick }: BottomNavigationProps) => {
  const navItems = [
    { icon: Home, label: 'Home', active: true, onClick: () => {} },
    { icon: Package, label: 'Orders', active: false, onClick: onOrdersClick },
    { icon: User, label: 'Profile', active: false, onClick: onProfileClick }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900/95 to-cyan-900/95 backdrop-blur-lg border-t border-cyan-500/30 z-50">
      {/* Help Button */}
      <div className="text-center py-2 border-b border-cyan-500/20">
        <a 
          href="https://wa.me/918118929332" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 transition-colors rounded-lg px-4 py-2 text-white text-sm font-medium"
        >
          <Phone size={16} />
          Need help? Contact us on 8118929332
        </a>
      </div>
      
      {/* Navigation Items */}
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={item.onClick}
            className={`flex flex-col items-center py-2 px-4 rounded-lg transition-all duration-300 ${
              item.active 
                ? 'text-cyan-400 bg-cyan-400/20' 
                : 'text-gray-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <item.icon size={20} />
            <span className="text-xs mt-1 font-medium">{item.label}</span>
          </button>
        ))}
      </div>
      
      {/* Copyright */}
      <div className="text-center py-2 text-xs text-gray-400">
        © 2025 Tioin Store. All Rights Reserved.
      </div>
    </div>
  );
};

export default BottomNavigation;
