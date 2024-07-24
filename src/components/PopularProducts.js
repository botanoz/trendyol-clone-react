import React, { useState, useEffect } from 'react';
import productsData from '../data/products.json';
import { useNavigate } from 'react-router-dom';

const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);
const navigate = useNavigate()
  useEffect(() => {
    setPopularProducts(productsData.filter(product => product.isPopular));
  }, []);

  const ProductCard = ({ product }) => (
    <div onClick={()=> navigate("/product-detail")} className="cursor-pointer border rounded-lg p-4 hover:shadow-md transition-all duration-300 group">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
      <h3 className="text-sm font-medium mb-2 h-12 overflow-hidden group-hover:text-orange-500">{product.name}</h3>
      <div className="flex items-center mb-2">
        <span className="text-yellow-400 mr-1">{'★'.repeat(Math.floor(product.rating))}</span>
        <span className="text-gray-500 text-xs">({product.reviews})</span>
      </div>
      <p className="text-orange-500 font-bold mb-2">{product.price}</p>
      {product.freeShipping && (
        <span className="text-green-600 text-xs">Ücretsiz Kargo</span>
      )}
    </div>
  );

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Popüler Ürünler</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {popularProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;