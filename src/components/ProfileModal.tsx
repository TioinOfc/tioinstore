
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { User, LogOut, Shield, History } from "lucide-react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onAuthClick: () => void;
  onLogout: () => void;
  onOrdersClick: () => void;
}

const ProfileModal = ({ isOpen, onClose, isLoggedIn, onAuthClick, onLogout, onOrdersClick }: ProfileModalProps) => {
  const handleRechargeHistory = () => {
    onClose();
    onOrdersClick();
  };

  const handleLogout = () => {
    onLogout();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-cyan-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            {isLoggedIn ? 'Profile' : 'Login Required'}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center">
            {isLoggedIn ? 'Manage your account' : 'Please login to access your profile'}
          </DialogDescription>
        </DialogHeader>
        
        {isLoggedIn ? (
          <div className="space-y-4">
            <div className="bg-black/20 rounded-lg p-4 border border-cyan-500/20 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-white">John Doe</h3>
              <p className="text-gray-300 text-sm">john.doe@example.com</p>
            </div>
            
            <div className="space-y-2">
              <Button
                onClick={handleRechargeHistory}
                variant="outline"
                className="w-full justify-start border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/10"
              >
                <History size={16} className="mr-2" />
                Recharge History
              </Button>
              
              <Button
                onClick={() => {}}
                variant="outline"
                className="w-full justify-start border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/10"
              >
                <Shield size={16} className="mr-2" />
                Privacy Policy
              </Button>
              
              <Button
                onClick={handleLogout}
                variant="outline"
                className="w-full justify-start border-red-500/50 text-red-400 hover:bg-red-400/10"
              >
                <LogOut size={16} className="mr-2" />
                Logout
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <User className="text-white" size={24} />
            </div>
            <p className="text-gray-300 mb-4">You need to login first to access your profile.</p>
            <Button 
              onClick={() => {
                onClose();
                onAuthClick();
              }}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
            >
              Login / Sign Up
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProfileModal;
