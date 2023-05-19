import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';
import BestSell from '../BestSell/BestSell';
import OurOffer from '../OurOffer/OurOffer';

const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <PhotoGallery></PhotoGallery>
           <ShopByCategory></ShopByCategory>
           <BestSell></BestSell>
           <OurOffer></OurOffer>
        </div>
    );
};

export default Home;