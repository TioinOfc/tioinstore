
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
      className={`relative bg-gradient-to-br from-purple-800/50 to-blue-800/50 backdrop-blur-lg rounded-2xl p-4 border transition-all duration-300 hover:transform hover:scale-105 cursor-pointer ${
        popular 
          ? 'border-yellow-400 shadow-lg shadow-yellow-400/25' 
          : 'border-purple-500/30 hover:border-cyan-400/50'
      }`}
      onClick={onClick}
    >
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full">
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
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-300 hover:to-orange-400'
            : 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-400 hover:to-blue-400'
        }`}>
          ${price}
        </button>
      </div>
    </div>
  );
};

export default RechargeCard;
