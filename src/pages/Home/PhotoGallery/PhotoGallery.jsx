import React from 'react';
import img1 from '../../../assets/photo/1collection.jpg'
import img2 from '../../../assets/photo/2collection.jpg'
import img3 from '../../../assets/photo/3collection.jpg'
import img4 from '../../../assets/photo/4collection.jpg'
import img5 from '../../../assets/photo/5collection.jpg'
import img6 from '../../../assets/photo/6collection.png'
import img7 from '../../../assets/photo/7collac.png'
// import img8 from '../../assets/photo/9colla.png'
// import img10 from '../../assets/photo/collaction10.png'

const PhotoGallery = () => {
    return (
       <>
       {/* <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img  style={{height: '400px'}} src={img1} className="w-full" />
    <img style={{height: '400px'}} src={img2} className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img style={{height: '400px'}} src={img3}  className="w-full" />
    <img style={{height: '400px'}} src={img4}  className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
  <img style={{height: '400px'}} src={img5}  className="w-full" />
  <img style={{height: '400px'}} src={img6}  className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
  <img style={{height: '400px'}} src={img7}  className="w-full" />
  <img style={{height: '400px'}} src={img8}  className="w-full" />
  </div>
</div>  */}
{/* <div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div> */}

 <div className='mt-24 mb-24'>
   <h2 className='text-center text-4xl text-pink-600 font-bold mb-8'>PHOTO GALLERY</h2>
 <div className='md:grid grid-cols-2 gap-5 '>
 <div>
 <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}   src={img1}  className="" />
 </div>
<div className=' grid h-full grid-cols-2 gap-5'>

<div className='grid grid-rows-2 gap-5'>
 <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}  src={img2}   />
 <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}  src={img4}   />
 </div>
 <div className='grid grid-rows-2 gap-5'>
 <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}   src={img3}   />
 <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}   src={img5}   />
 </div>
</div>
 </div>
 <div className='md:grid grid-cols-2 gap-5 mt-5'>
  
   <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}  src={img7}   />
   <img style={{border: '2px solid #ffc0cb', borderRadius: '15px'}}  src={img6}   />



 </div>
 </div>
       </>
    );
};

export default PhotoGallery;