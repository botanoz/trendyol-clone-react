import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  const handleNavigation = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/20 to-transparent transform -skew-y-12"></div>
        {Array.from({ length: 50 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute bg-yellow-500 w-1 h-1 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>
      
      {/* Content */}
      <div className="z-10 text-center">
        <h1 className="text-8xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Aradığın içeriğe şu an ulaşılamıyor.</p>
        <p className="text-lg mb-8">Hemen ayrılma, aşağıdakilere göz atmak ister misin?</p>
        
        {/* Search Bar */}
        <div className="flex items-center justify-center mb-8">
          <input 
            type="text" 
            placeholder="Aradığınız ürün veya markayı yazınız" 
            className="bg-white text-black px-4 py-2 rounded-l-full w-64"
          />
          <button onClick={handleNavigation} className="bg-green-500 text-white px-4 py-2 rounded-r-full">
            ARA
          </button>
        </div>
        
        {/* Continue Shopping Button */}
        <button onClick={handleNavigation} className="bg-blue-600 text-white px-6 py-2 rounded-full mb-8">
          Alışverişe Devam Et
        </button>
        
        {/* Category Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {[
            "ÇOK SATANLAR", "EN BEĞENİLENLER", "24 SAATTE KARGO", "EN YENİ GELENLER",
            "KARGO BEDAVA", "EN ÇOK SEPETE EKLENENLER", "EN ÇOK FAVORİLENENLER", "EN ÇOK FİYATI DÜŞENLER",
            "EN ÇOK BAKILAN ÜRÜNLER", "EN ÇOK ARANANLAR", "BİRLİKTE ALABİLECEĞİN ÜRÜNLER", "SEPETTE İNDİRİMDEKİ ÜRÜNLER"
          ].map((category, index) => (
            <button key={index} onClick={handleNavigation} className="bg-white text-black px-4 py-2 rounded-full text-xs">
              {category}
            </button>
          ))}
        </div>
      </div>
      
   
     
    </div>
  );
};

export default NotFound;
