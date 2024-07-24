import React, { useState, useEffect, useRef } from 'react';
import categoriesData from '../data/categories.json';
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileCategory, setActiveMobileCategory] = useState(null);
  const navRef = useRef(null);
  const subCategoryRef = useRef(null);
  const navigate = useNavigate()
  useEffect(() => {
    setCategories(categoriesData);
  }, []);

  const handleMouseEnter = (category) => {
    setActiveCategory(category.name);
  };

  const handleMouseLeave = (e) => {
    const isNode = (node) => node instanceof Node;
    const navContains = navRef.current && isNode(e.relatedTarget) && navRef.current.contains(e.relatedTarget);
    const subContains = subCategoryRef.current && isNode(e.relatedTarget) && subCategoryRef.current.contains(e.relatedTarget);
    if (!navContains && !subContains) {
      setActiveCategory(null);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleMobileCategory = (category) => {
    setActiveMobileCategory(activeMobileCategory === category ? null : category);
  };

  return (
    <>
      {/* Web Navigation */}
      <nav className="bg-white shadow-sm relative hidden md:block" ref={navRef} onMouseLeave={handleMouseLeave}>
        <div className="max-w-screen-xl mx-auto px-4">
          <ul className="flex justify-between py-3 text-sm overflow-x-auto whitespace-nowrap">
            {categories.map((category, index) => (
              <li 
                key={index} 
                className="relative group px-2"
                onMouseEnter={() => handleMouseEnter(category)}
              >
                <span className="hover:text-orange-500 cursor-pointer">{category.name}</span>
              </li>
            ))}
          </ul>
        </div>
        {activeCategory && (
          <div 
            className="absolute left-0 right-0 bg-white shadow-lg z-40"
            ref={subCategoryRef}
            onMouseLeave={handleMouseLeave}
          >
            <div className="max-w-screen-xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 py-6 px-4">
                {categories.find(cat => cat.name === activeCategory)?.subCategories.map((subCategory, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-gray-800 mb-2">{subCategory.name}</h3>
                    <ul>
                      {subCategory.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer mb-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile and Tablet Navigation */}
      <nav className="bg-white shadow-sm relative md:hidden">
        <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center py-3">
          <div onClick={()=> navigate("/")} className="text-4xl font-bold cursor-pointer">trendyol</div>
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <div className="bg-white shadow-lg z-40">
            <div className="max-w-screen-xl mx-auto py-6 px-4">
              <ul className="flex flex-col">
                {categories.map((category, index) => (
                  <li key={index} className="group py-2">
                    <div onClick={() => toggleMobileCategory(category.name)} className="flex justify-between items-center cursor-pointer">
                      <span className="hover:text-orange-500">{category.name}</span>
                      <svg className={`w-4 h-4 transform transition-transform ${activeMobileCategory === category.name ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                    {activeMobileCategory === category.name && (
                      <ul className="pl-4 mt-2">
                        {category.subCategories.map((subCategory, subIndex) => (
                          <li key={subIndex} className="py-1">
                            <h3 className="font-bold text-gray-800 mb-2">{subCategory.name}</h3>
                            <ul>
                              {subCategory.items.map((item, itemIndex) => (
                                <li key={itemIndex} className="text-sm text-gray-600 hover:text-orange-500 cursor-pointer mb-1">
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
