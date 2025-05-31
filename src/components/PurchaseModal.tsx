
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Diamond } from "lucide-react";

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: any;
}

const PurchaseModal = ({ isOpen, onClose, onConfirm, item }: PurchaseModalProps) => {
  if (!item) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-cyan-500/30 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-center flex items-center justify-center gap-2">
            <Diamond className="text-cyan-400" size={24} />
            Confirm Purchase
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center">
            Please confirm your purchase details
          </DialogDescription>
        </DialogHeader>
        
        <div className="bg-black/20 rounded-xl p-4 my-4 border border-cyan-500/20">
          <div className="text-center">
            <div className="text-2xl mb-2">
              {item.diamonds ? '💎' : item.image}
            </div>
            <h3 className="text-lg font-bold mb-2">
              {item.diamonds 
                ? `${item.diamonds}${item.bonus ? ` +${item.bonus}` : ''} Diamonds`
                : item.name
              }
            </h3>
            {item.description && (
              <p className="text-gray-300 text-sm mb-2">{item.description}</p>
            )}
            <div className="text-2xl font-bold text-cyan-400">
              ₹{item.price}
            </div>
          </div>
        </div>
        
        <DialogFooter className="gap-2">
          <Button 
            variant="outline" 
            onClick={onClose}
            className="border-gray-600 text-gray-300 hover:bg-gray-800"
          >
            Cancel
          </Button>
          <Button 
            onClick={onConfirm}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400"
          >
            Purchase Now
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseModal;
