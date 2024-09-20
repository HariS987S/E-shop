import React from 'react'
import ProductReviewCard from './ProductReviewCard.js'
import '../styles/ProductReviews.css'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const ProductReviews = ({ ProductReviews }) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(
      () => {
         gsap.from('.ProductReviews div', { 
             y: 40, 
             duration:1, 
             delay:0.3, 
             opacity:0, 
             stagger: 0.3,
             scrollTrigger: {
                 trigger: ".ProductReviews div",
                 scroller:"body",
                 // scrub: 1,
 
             }  
         }); 
      }
     );
    return (
        <div className='ProductReviews'>
            {ProductReviews.map((item, index) => (
                <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
            ))}
        </div>
    )
}

export default ProductReviews
