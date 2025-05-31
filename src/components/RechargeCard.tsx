
interface RechargeCardProps {
  title: string;
  subtitle: string;
  price: number;
  popular?: boolean;
  icon: string;
  onClick: () => void;
}

const RechargeCard = ({ title, subtitle, price, popular, icon, onClick }: RechargeCardProps) => {
  return (
    <div 
      className={`relative bg-gradient-to-br from-blue-800/50 to-cyan-800/50 backdrop-blur-lg rounded-2xl p-4 border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
        popular 
          ? 'border-cyan-400 shadow-lg shadow-cyan-400/25' 
          : 'border-cyan-500/30 hover:border-cyan-400/50'
      }`}
      onClick={onClick}
    >
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            POPULAR
          </div>
        </div>
      )}
      
      <div className="text-center">
        <div className="text-3xl mb-2">{icon}</div>
        <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{subtitle}</p>
        
        <button className={`w-full font-bold py-2 px-3 rounded-xl transition-all duration-300 ${
          popular
            ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-300 hover:to-blue-400'
            : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500'
        }`}>
          ₹{price}
        </button>
      </div>
    </div>
  );
};

export default RechargeCard;
