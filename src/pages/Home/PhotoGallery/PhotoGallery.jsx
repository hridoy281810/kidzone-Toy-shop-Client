
import React, { useEffect } from 'react';
import img1 from '../../../assets/photo/1collection.jpg';
import img2 from '../../../assets/photo/2collection.jpg';
import img3 from '../../../assets/photo/3collection.jpg';
import img4 from '../../../assets/photo/4collection.jpg';
import img5 from '../../../assets/photo/5collection.jpg';
import img6 from '../../../assets/photo/6collection.png';
import img7 from '../../../assets/photo/7collac.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mt-24 mb-24 container gallery">
      <h2 className="text-center text-4xl text-pink-600 font-bold mb-8">PHOTO GALLERY</h2>
      <div className="grid md:grid-cols-2 gap-5 ">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img
            className="w-full max-w-full border-2 border-pink-600 rounded-lg"
            src={img1}
            alt="Photo 1" />
        </div>
        <div className="grid md:h-full md:grid-cols-2 gap-5">
          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
            className="grid grid-rows-2 gap-5"
          >
            <img
              className="max-w-full border-2 border-pink-600 rounded-lg"
              src={img2}
              alt="Photo 2"
            />
            <img
              className="max-w-full border-2 border-pink-600 rounded-lg"
              src={img4}
              alt="Photo 4"
            />
          </div>
          <div
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className="grid grid-rows-2 gap-5"
          >
            <img
              className="max-w-full border-2 border-pink-600 rounded-lg"
              src={img3}
              alt="Photo 3"
            />
            <img
              className="max-w-full border-2 border-pink-600 rounded-lg"
              src={img5}
              alt="Photo 5"
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="max-w-full border-2 border-pink-600 rounded-lg"
          src={img7}
          alt="Photo 7"
        />
        <img
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="max-w-full border-2 border-pink-600 rounded-lg"
          src={img6}
          alt="Photo 6"
        />
      </div>
    </div>
  );
};

export default PhotoGallery;
