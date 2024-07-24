import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import featuredItemsData from '../data/featuredItems.json';

const FeaturedItems = () => {
  const [featuredItems, setFeaturedItems] = useState([]);

  useEffect(() => {
    setFeaturedItems(featuredItemsData);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  };

  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} flex items-center justify-center bg-white shadow-md rounded-full w-10 h-10 absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
        onClick={onClick}
      >
        <span className="text-gray-600 text-2xl">&rsaquo;</span>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={`${className} flex items-center justify-center bg-white shadow-md rounded-full w-10 h-10 absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
        onClick={onClick}
      >
        <span className="text-gray-600 text-2xl">&lsaquo;</span>
      </div>
    );
  }

  return (
    <div className="my-6 border-b pb-6">
      <Slider {...settings}>
        {featuredItems.map((item, index) => (
          <div key={index} className="text-center px-0.5 group cursor-pointer">
            <div className="w-20 h-20 mx-auto rounded-full bg-gray-100 flex items-center justify-center mb-2 group-hover:border-2 group-hover:border-orange-500 transition-all duration-300">
              <img src={`https://picsum.photos/100/100?random=${index}`} alt={item.name} className="w-16 h-16 object-cover rounded-full" />
            </div>
            <span className="text-xs group-hover:text-orange-500 transition-colors duration-300">{item.name}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeaturedItems;
