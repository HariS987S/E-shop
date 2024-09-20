import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const HotAccessoriesMenu = () => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    useGSAP(
      () => {
         gsap.from('.HotAccessoriesMenu a', { 
             y: 40, 
             duration:1, 
             delay:0.3, 
             opacity:0, 
             stagger: 0.3,
             scrollTrigger: {
                 trigger: ".HotAccessoriesMenu a",
                 scroller:"body",
                 // scrub: 1,
 
             }  
         }); 
      }
     );
    return (
        <div className="HotAccessoriesMenu">
            <Link className="HotAccessoriesLink" to="/music">Music Store</Link>
            <Link className="HotAccessoriesLink" to="/SmartDevice">Smart Device</Link>
            <Link className="HotAccessoriesLink" to="/Home">Home</Link>
            <Link className="HotAccessoriesLink" to="/LifeStyle">LifeStyle</Link>
            <Link className="HotAccessoriesLink" to="/MobileAccessories">Mobile Accessories</Link>
        </div>
    )
}

export default HotAccessoriesMenu
