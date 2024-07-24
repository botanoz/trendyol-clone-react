import React from 'react';

const CampaignBanners = () => {
  const campaigns = [
    { id: 1, title: 'Kozmetik Günleri', image: 'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723200342_KozmetikteFlasUrunler3013075mobile.jpg' },
    { id: 2, title: 'Moda Festivali', image: 'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723210456_YvesSaintLaurentBeauty3013112mobile.jpg' },
    { id: 3, title: 'Elektronik İndirimleri', image: 'https://cdn.dsmcdn.com/ty1438/pimWidgetApi/mobile_20240723210352_VictoriasSecret3013124mobile.jpg' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 cursor-pointer">
      {campaigns.map((campaign) => (
        <div key={campaign.id} className="relative overflow-hidden rounded-lg cursor-pointer">
          <img src={campaign.image} alt={campaign.title} className="w-full h-auto transition-transform duration-300 hover:scale-105 cursor-pointer" />

        </div>
      ))}
    </div>
  );
};

export default CampaignBanners;
