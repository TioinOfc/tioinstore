
import { Home, Package, User } from "lucide-react";

const BottomNavigation = () => {
  const navItems = [
    { icon: Home, label: 'Home', active: true },
    { icon: Package, label: 'Orders', active: false },
    { icon: User, label: 'Profile', active: false }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900/95 to-cyan-900/95 backdrop-blur-lg border-t border-cyan-500/30 z-50">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
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
    </div>
  );
};

export default BottomNavigation;
