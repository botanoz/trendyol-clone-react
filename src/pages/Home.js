import React from 'react'
import FeaturedItems from '../components/FeaturedItems'
import FlashProducts from '../components/FlashProducts'
import PopularProducts from '../components/PopularProducts'
import CampaignBanners from '../components/CampaignBanners'
import HighlightedSections from '../components/HighlightedSections'

function Home() {
  return (
   <>
          <FeaturedItems />
          <CampaignBanners/>
          <HighlightedSections/>
          <FlashProducts />
          <PopularProducts />
   </>
  )
}

export default Home