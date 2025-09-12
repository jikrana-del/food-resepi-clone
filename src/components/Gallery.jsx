import img_1 from '../assets/img-1.jpg'
import img_2 from '../assets/img-2.jpg'
import img_3 from '../assets/img-3.avif'
import img_4 from '../assets/img-4.avif'
import img_5 from '../assets/img-5.avif'
import img_6 from '../assets/img-6.avif'
import img_7 from '../assets/img-7.avif'
import img_8 from '../assets/img7.avif'
import img_9 from '../assets/img-8.avif'
import img_10 from '../assets/img-9.avif'
import img_11 from '../assets/img-10.avif'
import img_12 from '../assets/img-11.avif'
import img_13 from '../assets/img-12.avif'
import img_14 from '../assets/img-13.webp'
import img_15 from '../assets/img-14.avif'
import img_16 from '../assets/img-15.jpg'
import img_17 from '../assets/img-16.avif'
import img_18 from '../assets/img-17.webp'
import img_19 from '../assets/img-18.jpg'
import img_20 from '../assets/img-19.jpg'
import img_21 from '../assets/img-20.jpg'



function Gallery() {
  const PhotoArray = [img_1, img_2, img_3, img_4, img_5, img_6, img_7, img_8, img_9, img_10, img_11, img_12, img_13, img_14, img_15, img_16, img_17, img_18, img_19, img_20, img_21,]
  return (
    <div className='photo-gellery animate__backInDown animate__animated'>
   {PhotoArray.map((photo,idx)=>{
    return <div key={idx} className='photos'>
      <img src={photo} alt="Photo" className='photo' width='200px' height='100px'/>
    </div>
   })}
   </div>
  )
}

export default Gallery