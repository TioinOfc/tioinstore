
import { Diamond } from "lucide-react";

const RechargeHeader = () => {
  return (
    <header className="bg-gradient-to-r from-purple-800/80 to-blue-800/80 backdrop-blur-lg border-b border-purple-500/30">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Diamond className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Mobile Legends</h1>
              <p className="text-cyan-300 text-sm">Bang Bang - Recharge Center</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="bg-black/30 rounded-xl px-4 py-2 flex items-center gap-2">
              <Diamond className="text-cyan-400" size={16} />
              <span className="text-white font-semibold">1,247</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default RechargeHeader;
