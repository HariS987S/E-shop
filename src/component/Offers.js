import React from 'react'
import Offer from './Offer'
import "../styles/Offers.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


const Offers = ({ offer }) => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
   useGSAP(
     () => {
        gsap.from('.offersSection a', { 
            y: 40, 
            duration:1, 
            delay:0.3, 
            opacity:0, 
            stagger: 0.3,
            scrollTrigger: {
                trigger: ".offersSection a",
                scroller:"body",
                // scrub: 1,

            }  
        }); 
     }
    );
    return (
        <div className='offersSection'>
            {
                offer.map((item, index) => (
                    <Offer key={item.image} index={index} src={item.image} link={item.url} />
                ))
            }
        </div>
    )
}

export default Offers
