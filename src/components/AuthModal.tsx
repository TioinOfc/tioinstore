
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Phone, Mail, Lock, User } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (credentials: any) => void;
}

const AuthModal = ({ isOpen, onClose, onLogin }: AuthModalProps) => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
    onClose();
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    alert('Password reset link sent to your email/phone!');
    setShowForgotPassword(false);
  };

  if (showForgotPassword) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-cyan-500/30 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl text-center">Forgot Password</DialogTitle>
            <DialogDescription className="text-gray-300 text-center">
              Enter your email or phone to reset password
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleForgotPassword} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
              <Input
                type={loginMethod === 'email' ? 'email' : 'tel'}
                placeholder={`Enter your ${loginMethod}`}
                className="pl-10 bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                required
              />
            </div>

            <div className="flex gap-2">
              <Button 
                type="submit"
                className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
              >
                Send Reset Link
              </Button>
              <Button 
                type="button"
                variant="outline"
                onClick={() => setShowForgotPassword(false)}
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                Back
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-cyan-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            {isSignUp ? 'Create Account' : 'Welcome Back'}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center">
            {isSignUp ? 'Sign up to start purchasing diamonds' : 'Login to continue your purchase'}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Login Method Toggle */}
          <div className="flex bg-black/20 rounded-lg p-1">
            <button
              type="button"
              onClick={() => setLoginMethod('email')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                loginMethod === 'email' 
                  ? 'bg-cyan-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Mail size={16} className="inline mr-2" />
              Email
            </button>
            <button
              type="button"
              onClick={() => setLoginMethod('phone')}
              className={`flex-1 py-2 px-3 rounded-md text-sm font-medium transition-colors ${
                loginMethod === 'phone' 
                  ? 'bg-cyan-500 text-white' 
                  : 'text-gray-300 hover:text-white'
              }`}
            >
              <Phone size={16} className="inline mr-2" />
              Phone
            </button>
          </div>

          {/* Full Name Field (only for signup) */}
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                className="pl-10 bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
          )}

          {/* Email or Phone Input */}
          {loginMethod === 'email' ? (
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={16} />
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="pl-10 bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
          ) : (
            <div className="relative">
              <Phone className="absolute left-3 top-3 text-gray-400" size={16} />
              <Input
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="pl-10 bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
          )}

          {/* Password Field */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
            <Input
              type="password"
              placeholder={isSignUp ? "Create password" : "Enter your password"}
              value={formData.password}
              onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
              className="pl-10 bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
              required
            />
          </div>

          {/* Confirm Password (only for signup) */}
          {isSignUp && (
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400" size={16} />
              <Input
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                className="pl-10 bg-black/20 border-cyan-500/30 text-white placeholder:text-gray-400"
                required
              />
            </div>
          )}

          <Button 
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
          >
            {isSignUp ? 'Create Account' : 'Login'}
          </Button>

          {/* Forgot Password Link (only for login) */}
          {!isSignUp && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowForgotPassword(true)}
                className="text-cyan-400 hover:text-cyan-300 text-sm"
              >
                Forgot password?
              </button>
            </div>
          )}

          <p className="text-center text-sm text-gray-300">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="ml-1 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              {isSignUp ? 'Login' : 'Sign up'}
            </button>
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
