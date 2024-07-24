import React, { useState } from 'react';
import { Search, Heart, ShoppingCart, User, ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showLoginOptions, setShowLoginOptions] = useState(false);
  const navigate =useNavigate()

  return (
    <header className="bg-white text-black">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Web Header */}
        <div className="hidden md:block">
          <div className="flex justify-end space-x-4 text-xs py-1">
            <a href="/indirim-kuponlarim" className="hover:text-orange-500">İndirim Kuponlarım</a>
            <a href="/satici-ol" className="hover:text-orange-500">Trendyol'da Satış Yap</a>
            <a href="/yardim" className="hover:text-orange-500">Yardım & Destek</a>
          </div>
          <div className="flex items-center justify-between py-4">
            <h1 onClick={()=> navigate("/")} className="text-4xl font-semibold text-black cursor-pointer">trendyol</h1>
            <div className="flex-grow mx-12">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                  className="w-full p-3 pl-3 pr-4 rounded-sm text-sm text-black border border-gray-100 bg-gray-100 focus:border-orange-500 focus:outline-none"
                />
                <Search className="absolute right-3 top-3 text-orange-500" size={20} />
              </div>
            </div>
            <div className="flex items-center space-x-8 text-sm">
              <div 
                className="flex items-center cursor-pointer group relative"
                onMouseEnter={() => setShowLoginOptions(true)}
                onMouseLeave={() => setShowLoginOptions(false)}
              >
                <User className="text-gray-500 group-hover:text-orange-500 mr-1" size={24} />
                <span onClick={()=> navigate("/giris")} className="group-hover:text-orange-500">Giriş Yap</span>
                <ChevronDown className="text-gray-500 group-hover:text-orange-500 ml-1" size={16} />
                {showLoginOptions && (
                  <div className="absolute top-full right-0 bg-white border border-gray-200 rounded-sm shadow-md py-2 w-32 z-50">
                    <a href="/giris" className="block px-4 py-2 hover:bg-gray-100">Giriş Yap</a>
                    <a href="/giris" className="block px-4 py-2 hover:bg-gray-100">Üye Ol</a>
                  </div>
                )}
              </div>
              <div className="flex items-center cursor-pointer group">
                <Heart className="text-gray-500 group-hover:text-orange-500 mr-1" size={24} />
                <span onClick={()=> navigate("/giris")} className="group-hover:text-orange-500">Favorilerim</span>
              </div>
              <div className="flex items-center cursor-pointer group">
                <ShoppingCart className="text-gray-500 group-hover:text-orange-500 mr-1" size={24} />
                <span onClick={()=> navigate("/giris")} className="group-hover:text-orange-500">Sepetim</span>
              </div>
            </div>
          </div>
        </div>
        {/* Mobile and Tablet Header */}
        <div className="block md:hidden">
          <div className="flex justify-end space-x-4 text-xs py-1">
            {/* Small Header for Mobile */}
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-4">
                <User className="text-gray-500" size={24} />
                <Heart className="text-gray-500" size={24} />
                <ShoppingCart className="text-gray-500" size={24} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center py-4">
            <div className="flex-grow">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                  className="w-full p-3 pl-10 pr-4 rounded-sm text-sm text-black border border-gray-100 bg-gray-100 focus:border-orange-500 focus:outline-none"
                />
                <Search className="absolute right-3 top-3 text-orange-500" size={20} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
