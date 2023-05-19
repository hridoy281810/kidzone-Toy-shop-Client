import React from 'react';
import img1 from '../../../assets/photo/1collection.jpg'
import img2 from '../../../assets/photo/2collection.jpg'
import img3 from '../../../assets/photo/3collection.jpg'
import img4 from '../../../assets/photo/4collection.jpg'
import img5 from '../../../assets/photo/5collection.jpg'
import img6 from '../../../assets/photo/6collection.png'
import img7 from '../../../assets/photo/7collac.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const PhotoGallery = () => {
  AOS.init();
  return (
    <div className='mt-24 mb-24 container'>
      <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>PHOTO GALLERY</h2>
      <div className='md:grid grid-cols-2 gap-5 '>
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" >
          <img style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img1} className="" />
        </div>
        <div className=' grid h-full grid-cols-2 gap-5'>
          <div data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500" className='grid grid-rows-2 gap-5'>
            <img style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img2} />
            <img style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img4} />
          </div>
          <div data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" className='grid grid-rows-2 gap-5'>
            <img style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img3} />
            <img style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img5} />
          </div>
        </div>
      </div>
      <div className='md:grid grid-cols-2 gap-5 mt-5'>
        <img data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img7} />
        <img data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" style={{ border: '2px solid #ffc0cb', borderRadius: '15px' }} src={img6} />
      </div>
    </div>

  );
};

export default PhotoGallery;