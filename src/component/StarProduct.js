import React from 'react'
import "../styles/StarProduct.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const StarProduct = ({ starProduct }) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(
      () => {
         gsap.from('.starProducts div', { 
             y: 40, 
             duration:1, 
             delay:0.3, 
             opacity:0, 
             stagger: 0.3,
             scrollTrigger: {
                 trigger: ".starProducts div",
                 scroller:"body",
                 // scrub: 1,
 
             }  
         }); 
      }
     );
    return (
        <div className="starProducts">
            <div><a href={starProduct[0].url}><img src={starProduct[0].image} alt="1st Product" /></a></div>
            <div>
                <a href={starProduct[1].url}><img src={starProduct[1].image} alt="1st Product" /></a>
                <a href={starProduct[2].url}><img src={starProduct[2].image} alt="1st Product" /></a>
                <a href={starProduct[3].url}><img src={starProduct[3].image} alt="1st Product" /></a>
            </div>
        </div>
    )
}

export default StarProduct
