
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Upload, MessageCircle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface UPIPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: any;
}

const UPIPaymentModal = ({ isOpen, onClose, item }: UPIPaymentModalProps) => {
  const [screenshot, setScreenshot] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setScreenshot(file);
      toast({
        title: "Screenshot uploaded!",
        description: "Your payment screenshot has been saved.",
      });
    }
  };

  const sendToWhatsApp = () => {
    const message = `Payment completed for ${item?.diamonds ? `${item.diamonds} diamonds` : item?.name} - ₹${item?.price}. Screenshot uploaded.`;
    const whatsappUrl = `https://wa.me/918118929332?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };

  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-cyan-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">UPI Payment</DialogTitle>
        </DialogHeader>
        
        <div className="text-center space-y-4">
          <div className="bg-black/20 rounded-xl p-4 border border-cyan-500/20">
            <h3 className="text-lg font-bold mb-2">
              {item.diamonds 
                ? `${item.diamonds}${item.bonus ? ` +${item.bonus}` : ''} Diamonds`
                : item.name
              }
            </h3>
            <div className="text-2xl font-bold text-cyan-400 mb-4">
              ₹{item.price}
            </div>
          </div>

          {/* QR Code */}
          <div className="bg-white rounded-xl p-4 mx-auto w-fit">
            <img 
              src="/lovable-uploads/5fe7b8e6-0666-44e3-9df4-90efad7d9b73.png" 
              alt="UPI QR Code" 
              className="w-48 h-48 mx-auto"
            />
          </div>

          <p className="text-sm text-gray-300">
            Scan the QR code with any UPI app to pay ₹{item.price}
          </p>

          {/* Screenshot Upload */}
          <div className="space-y-3">
            <p className="text-sm font-medium">Upload Payment Screenshot:</p>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-cyan-500/30 border-dashed rounded-lg cursor-pointer bg-black/20 hover:bg-black/30 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                <p className="text-sm text-gray-400">
                  {screenshot ? screenshot.name : "Click to upload screenshot"}
                </p>
              </div>
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleFileUpload}
              />
            </label>
          </div>

          <Button 
            onClick={sendToWhatsApp}
            disabled={!screenshot}
            className="w-full bg-green-500 hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <MessageCircle size={16} />
            Send to WhatsApp
          </Button>

          <p className="text-xs text-gray-400">
            After payment, upload screenshot and send to WhatsApp for verification
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UPIPaymentModal;
