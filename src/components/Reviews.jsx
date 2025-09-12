import { useState } from 'react'
import girl_1 from '../assets/girl-1.avif'
import girl_4 from '../assets/girl-4.avif'
import man_1 from '../assets/man-1.avif'
import man_2 from '../assets/man-2.avif'
import { CiHeart } from "react-icons/ci";
function Reviews() {

  const reviews = [
    {
      src: girl_1,
      mes: 'The Food Was fresh, hot, and super tasty! Delivery Was on time. Definitely ordering again.',
      reating: 5
    },
    {
      src: girl_4,
      mes: 'I Loved the variety and quality. Customer support was also very helpful. 5 stars!.',
      reating: 5
    },
    {
      src: man_1,
      mes: 'Affordable and delicious. The best onlne food service in the city!',
      reating: 5
    },
    {
      src: man_2,
      mes: 'Fast delivery, clean packaging, and aamazing flavors. Highly recommended!',
      reating: 4
    }
  ]
  const [counts, setCounts] = useState(Array(reviews.length).fill(0))

  const HendelHeart = (index) => {
    const updatedCounts = [...counts];
    console.log(updatedCounts);

    updatedCounts[index] += 1;
    setCounts(updatedCounts)
  }
  return (

    <div style={{ marginTop: "100px" }}>
      <center>
        <h1>Customer Reviews</h1>
      </center>
      <section className='review-section'>

        {reviews.map((review, idx) => {
          return <div className='review-contain  animate__backInDown animate__animated'>
            <center>
              <img src={review.src} alt="" className='review-img' />
            </center>
            <p>{review.mes}</p>
            <div className='review-star'>
              <span>{'★'.repeat(review.reating)}{'☆'.repeat(5 - review.reating)} </span>
              <span className='heart' onClick={() => HendelHeart(idx)}>{counts[idx] > 0 ? '❤️' : <CiHeart />}  {counts[idx]}</span>
            </div>
          </div>
        })}
      </section>
    </div>
  )
}

export default Reviews