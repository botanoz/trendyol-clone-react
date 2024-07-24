import React, { useState, useEffect, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import productsData from '../data/products.json';
import { useNavigate } from 'react-router-dom';

const FlashProducts = () => {
  const [flashProducts, setFlashProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      // Simulating an API call
      await new Promise(resolve => setTimeout(resolve, 500));
      setFlashProducts(productsData.filter(product => product.isFlash));
      setLoading(false);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(0);
    }
  }, [flashProducts]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]
  };

  const ProductCard = ({ product }) => (
    <div className="px-2 group">
      <div onClick={() => navigate("/product-detail")} className="bg-white rounded-lg p-4 transition-all duration-300 group-hover:shadow-lg cursor-pointer">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
        <h3 className="text-sm font-medium mb-2 h-10 overflow-hidden group-hover:text-orange-500">{product.name}</h3>
        <p className="text-orange-500 font-bold">{product.price}</p>
        <p className="text-green-600 text-sm">{product.discount} İndirim</p>
      </div>
    </div>
  );

  if (loading) {
    return <div className="my-8 bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-white">Flaş Ürünler Yükleniyor...</h2>
    </div>;
  }

  return (
    <div className="my-8">
      <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4 text-white">Flaş Ürünler</h2>
        <Slider ref={sliderRef} {...settings} className="product-slider">
          {flashProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FlashProducts;
