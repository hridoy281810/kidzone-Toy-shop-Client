import React from 'react';
import Banner from '../Banner/Banner';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import ShopByCategory from '../ShopByCategory/ShopByCategory';

const Home = () => {
    return (
        <div >
           <Banner></Banner>
           <PhotoGallery></PhotoGallery>
           <ShopByCategory></ShopByCategory>
        </div>
    );
};

export default Home;