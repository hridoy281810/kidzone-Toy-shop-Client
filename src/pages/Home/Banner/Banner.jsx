import React from 'react';
import cover1 from '../../../assets/cever/tcever1.png'
import cover2 from '../../../assets/cever/tcover 2.png'
import cover3 from '../../../assets/cever/tcover 3.png'
import './Banner.css'
const Banner = () => {
  return (
    <div className="carousel w-full banner-responsive" >
      <div id="slide1" className="carousel-item relative w-full">
        <div className="hero h-[500px] bg-pink-100   ">
          <div className="hero-content flex-col lg:flex-row-reverse padding-banner ">
            <img src={cover1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-pink-600 leading-tight">CHOOSE THE <br /> BEST TEDDY BEAR <br /> FOR YOUR BABY</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <div className="hero h-[500px] bg-pink-100   ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img src={cover3} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-pink-600 leading-tight">CHOOSE THE <br /> BEST TEDDY BEAR <br /> FOR YOUR BABY</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <div className="hero h-[500px] bg-pink-100   ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img src={cover2} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-pink-600 leading-tight">CHOOSE THE <br /> BEST TEDDY BEAR <br /> FOR YOUR BABY</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <div className="hero h-[500px] bg-pink-100   ">
          <div className="hero-content flex-col lg:flex-row-reverse ">
            <img src={cover1} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-pink-600 leading-tight">CHOOSE THE <br /> BEST TEDDY BEAR <br /> FOR YOUR BABY</h1>
              <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="absolute  flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;