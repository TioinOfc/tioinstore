
import { Diamond, Phone } from "lucide-react";

const RechargeHeader = () => {
  return (
    <div 
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.8), rgba(59, 130, 246, 0.8)), url('/lovable-uploads/e5d9771d-e17e-44f4-b60e-e893aec35365.png')`
      }}
    >
      <header className="backdrop-blur-sm border-b border-cyan-400/30">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
                <Diamond className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white drop-shadow-lg">Tioin Store</h1>
                <p className="text-cyan-200 text-sm">Mobile Legends - Diamond Recharge Center</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="bg-black/30 rounded-xl px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                <Diamond className="text-cyan-400" size={16} />
                <span className="text-white font-semibold">1,247</span>
              </div>
              <a 
                href="https://wa.me/918118929332" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 transition-colors rounded-xl px-3 py-2 flex items-center gap-2 text-white text-sm font-medium"
              >
                <Phone size={16} />
                Help: 8118929332
              </a>
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RechargeHeader;
