import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 mt-12 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">Trendyol</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/about" className="hover:text-orange-500">Biz Kimiz</a></li>
              <li><a href="/careers" className="hover:text-orange-500">Kariyer</a></li>
              <li><a href="/contact" className="hover:text-orange-500">İletişim</a></li>
              <li><a href="/sell-on-trendyol" className="hover:text-orange-500">Trendyol'da Satış Yap</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Yardım</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/faq" className="hover:text-orange-500">Sıkça Sorulan Sorular</a></li>
              <li><a href="/live-help" className="hover:text-orange-500">Canlı Yardım</a></li>
              <li><a href="/how-to-return" className="hover:text-orange-500">Nasıl İade Edebilirim</a></li>
              <li><a href="/user-guide" className="hover:text-orange-500">İşlem Rehberi</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Kampanyalar</h3>
            <ul className="text-sm space-y-2">
              <li><a href="/active-campaigns" className="hover:text-orange-500">Aktif Kampanyalar</a></li>
              <li><a href="/elite-membership" className="hover:text-orange-500">Elite Üyelik</a></li>
              <li><a href="/gift-ideas" className="hover:text-orange-500">Hediye Fikirleri</a></li>
              <li><a href="/trendyol-deals" className="hover:text-orange-500">Trendyol Fırsatları</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Sosyal Medya</h3>
            <ul className="text-sm space-y-2">
              <li><a href="https://www.facebook.com/Trendyol" className="hover:text-orange-500">Facebook</a></li>
              <li><a href="https://www.instagram.com/trendyolcom" className="hover:text-orange-500">Instagram</a></li>
              <li><a href="https://twitter.com/trendyol" className="hover:text-orange-500">Twitter</a></li>
              <li><a href="https://www.youtube.com/trendyol" className="hover:text-orange-500">Youtube</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-sm text-gray-600">
          <p>©2024 DSM Grup Danışmanlık İletişim ve Satış Tic.A.Ş.-Her Hakkı Saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;