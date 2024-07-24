import React, { useState } from 'react';
import { Star, Heart, ChevronRight, Truck, CreditCard } from 'lucide-react';

const ProductDetail = ({ product }) => {
  const fakeProductData = {
    name: "STOP Forte Leke Çıkarıcı",
    price: 150,
    discountedPrice: 135,
    rating: 3.9,
    reviewCount: 20857,
    questionCount: 2461,
    favoriteCount: 931033,
    description: "Çok Amaçlı Temizlik Spreyi",
    volume: "750 ML",
    seller: "BOTAN ÖZALP",
    images: [
      "https://picsum.photos/seed/main/400/400",
      "https://picsum.photos/seed/thumb1/100/100",
      "https://picsum.photos/seed/thumb2/100/100"
    ],
    categoryRank: 1,
    stock: 100,
    shippingInfo: "2 gün içinde",
    campaignInfo: "200 TL ve Üzeri Kargo Bedava (Satıcı Karşılar)",
    installmentOption: "3 Al 2 Öde",
    breadcrumbs: ["Trendyol", "Supermarket", "Ev Bakım ve Temizlik", "Çamaşır Yıkama Ürünleri", "Çamaşır Leke Çıkarıcılar"],
    corporateInvoice: "Kurumsal Faturaya Uygun. İncele",
    maxOrderQuantity: 10
  };

  const productData = product || fakeProductData;
  const [selectedImage, setSelectedImage] = useState(0);

  const {
    name,
    price,
    discountedPrice,
    rating,
    reviewCount,
    questionCount,
    favoriteCount,
    description,
    volume,
    seller,
    images,
    categoryRank,
    stock,
    shippingInfo,
    campaignInfo,
    installmentOption,
    breadcrumbs,
    corporateInvoice,
    maxOrderQuantity
  } = productData;

  return (
    <div className="container mx-auto px-4 py-4">
      {breadcrumbs && (
        <div className="text-xs breadcrumbs text-gray-500 mb-4">
          <ul className="flex flex-wrap items-center">
            {breadcrumbs.map((item, index) => (
              <React.Fragment key={index}>
                {index > 0 && <ChevronRight className="w-3 h-3 mx-1" />}
                <li>{item}</li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4 flex flex-col md:flex-row gap-8">
          {/* Ürün Görselleri */}
          <div className="md:w-2/5">
            <div className="relative mb-4">
              <img src={images[selectedImage]} alt={name} className="w-full rounded-lg" />
              {categoryRank === 1 && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  EN ÇOK SATAN
                </div>
              )}
            </div>
            <div className="flex gap-2">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${name} ${index + 1}`}
                  className={`w-16 h-16 rounded-md cursor-pointer ${selectedImage === index ? 'border-2 border-orange-500' : ''}`}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </div>
            {description && volume && (
              <div className="mt-4 bg-blue-100 p-4 rounded-lg">
                <h3 className="font-bold text-blue-800">{description}</h3>
                <p className="text-blue-700">{volume}</p>
              </div>
            )}
          </div>

          {/* Ürün Bilgileri */}
          <div className="md:w-3/5">
            {categoryRank && (
              <div className="bg-yellow-100 text-yellow-800 p-2 rounded-lg mb-4 text-sm">
                {`${name} kategorisinde en çok satılan ${categoryRank}. ürün`}
              </div>
            )}
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            {rating && (
              <div className="flex items-center mb-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'} fill-current`} />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">{rating} | {reviewCount} Değerlendirme</span>
              </div>
            )}
            {(questionCount || favoriteCount) && (
              <div className="flex items-center text-sm text-gray-500 mb-4">
                {questionCount && <span>{questionCount} Soru & Cevap</span>}
                {questionCount && favoriteCount && <span className="mx-2">|</span>}
                {favoriteCount && <span>{favoriteCount} Favori</span>}
              </div>
            )}
            <p className="text-3xl font-bold mb-2">{price.toFixed(2)} TL</p>

            {discountedPrice && (
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Çok Al, Az Öde!</h3>
                <div className="flex gap-4 text-sm">
                  <div className="border p-2 rounded">
                    <p>1 x {price.toFixed(2)} TL</p>
                  </div>
                  <div className="border p-2 rounded">
                    <p>2 x {discountedPrice.toFixed(2)} TL = {(discountedPrice * 2).toFixed(2)} TL</p>
                  </div>
                </div>
              </div>
            )}

            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-bold mb-4 transition duration-300">
              Sepete Ekle
            </button>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              {shippingInfo && (
                <div className="flex items-center">
                  <Truck className="w-4 h-4 mr-2" />
                  <p>Tahmini Kargoya Teslim: {shippingInfo}</p>
                </div>
              )}
              <button className="flex items-center text-gray-500 hover:text-red-500">
                <Heart className="w-5 h-5 mr-1" />
                <span>Koleksiyona Ekle</span>
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Öne Çıkan Özellikler:</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                {seller && <li>Bu ürün {seller} tarafından gönderilecektir.</li>}
                {stock && <li>Kampanya fiyatından satılmak üzere {stock} adetten fazla stok sunulmuştur.</li>}
                <li>İncelemiş olduğunuz ürünün satış fiyatını satıcı belirlemektedir.</li>
                {maxOrderQuantity && (
                  <li>Bu üründen en fazla {maxOrderQuantity} adet sipariş verilebilir. {maxOrderQuantity} adetin üzerindeki siparişleri Trendyol iptal etme hakkını saklı tutar.</li>
                )}
              </ul>
            </div>

            <button className="text-blue-600 hover:underline text-sm">
              ÜRÜNÜN TÜM ÖZELLİKLERİ
            </button>
          </div>
        </div>

        {/* Sağ Kenar Çubuğu */}
        <div className="lg:w-1/4">
          {corporateInvoice && (
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">Kurumsal Fatura</h3>
              <p className="text-sm text-blue-600 hover:underline cursor-pointer">{corporateInvoice}</p>
            </div>
          )}

          {campaignInfo && (
            <div className="border rounded-lg p-4 mb-4">
              <h3 className="font-bold mb-2">ÜRÜNÜN KAMPANYALARI</h3>
              <div className="flex items-center text-sm">
                <Truck className="w-4 h-4 mr-2 text-orange-500" />
                <p>{campaignInfo}</p>
              </div>
            </div>
          )}

          {installmentOption && (
            <div className="border rounded-lg p-4 mb-4">
              <div className="flex items-center text-sm mb-2">
                <CreditCard className="w-4 h-4 mr-2 text-blue-500" />
                <p>{installmentOption}</p>
              </div>
            </div>
          )}

          <div className="border rounded-lg p-4">
            <h3 className="font-bold mb-2">KARGO</h3>
            <div className="flex justify-between items-center text-sm">
              <span>Ücretsiz Kargo</span>
              <span className="text-green-600 font-bold">Bedava</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;