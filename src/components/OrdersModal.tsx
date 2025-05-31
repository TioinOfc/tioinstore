
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface OrdersModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onAuthClick: () => void;
}

const OrdersModal = ({ isOpen, onClose, isLoggedIn, onAuthClick }: OrdersModalProps) => {
  const mockOrders = [
    { id: 1, item: "56 Diamonds", price: "₹85", date: "2025-01-15", status: "Completed" },
    { id: 2, item: "112 Diamonds", price: "₹160", date: "2025-01-10", status: "Completed" },
    { id: 3, item: "Starlight Member", price: "₹749", date: "2025-01-05", status: "Completed" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gradient-to-br from-blue-900 to-cyan-900 border-cyan-500/30 text-white max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-center">
            {isLoggedIn ? 'Recharge History' : 'Login Required'}
          </DialogTitle>
          <DialogDescription className="text-gray-300 text-center">
            {isLoggedIn ? 'Your recent purchases' : 'Please login to view your orders'}
          </DialogDescription>
        </DialogHeader>
        
        {isLoggedIn ? (
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {mockOrders.map((order) => (
              <div key={order.id} className="bg-black/20 rounded-lg p-4 border border-cyan-500/20">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-cyan-400">{order.item}</h3>
                  <span className="text-green-400 text-sm">{order.status}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-300">
                  <span>{order.date}</span>
                  <span className="font-bold text-white">{order.price}</span>
                </div>
              </div>
            ))}
            {mockOrders.length === 0 && (
              <div className="text-center text-gray-400 py-8">
                No orders found
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-300 mb-4">You need to login first to view your order history.</p>
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

export default OrdersModal;
