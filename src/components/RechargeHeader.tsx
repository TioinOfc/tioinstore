
import { Diamond, Phone, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

interface RechargeHeaderProps {
  isLoggedIn: boolean;
  onAuthClick: () => void;
}

const RechargeHeader = ({ isLoggedIn, onAuthClick }: RechargeHeaderProps) => {
  return (
    <div className="relative bg-black/30 backdrop-blur-sm">
      <header className="border-b border-cyan-400/30">
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
              {/* Login/Signup or User Info */}
              {isLoggedIn ? (
                <div className="flex items-center gap-3">
                  <div className="bg-black/30 rounded-xl px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
                    <Diamond className="text-cyan-400" size={16} />
                    <span className="text-white font-semibold">1,247</span>
                  </div>
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="text-white" size={16} />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Button
                    onClick={onAuthClick}
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-blue-900 transition-colors"
                  >
                    <LogIn size={16} className="mr-1" />
                    Login
                  </Button>
                  <Button
                    onClick={onAuthClick}
                    size="sm"
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white"
                  >
                    Sign Up
                  </Button>
                </div>
              )}
              
              {/* WhatsApp Help */}
              <a 
                href="https://wa.me/918118929332" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 transition-colors rounded-xl px-3 py-2 flex items-center gap-2 text-white text-sm font-medium"
              >
                <Phone size={16} />
                Help: 8118929332
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default RechargeHeader;
