import React from 'react';

const HighlightedSections = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div className="font-source-sans bg-green-100 text-green-800 tracking-widest p-4 rounded text-center font-extrabold cursor-pointer">Sepete En Çok Eklenenler</div>
      <div className="bg-orange-100 text-orange-800 p-4 rounded text-center tracking-widest font-extrabold cursor-pointer">En Çok Öne Çıkanlar</div>
      <div className="font-source-sans text-red-800 bg-red-100 p-4 rounded text-center tracking-widest font-extrabold cursor-pointer">Flaş Ürünler</div>
    </div>
  );
};

export default HighlightedSections;
