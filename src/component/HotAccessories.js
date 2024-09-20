import React from 'react'
import HotItemCard from "./HotItemCard.js"
import "../styles/HotAccessories.css"

const HotAccessories = ({ music, musicCover, smartDevice, smartDeviceCover, lifeStyle, lifeStyleCover, mobileAccessories, mobileAccessoriesCover, home, homeCover }) => {
    return (
        <div className="HotAccessories">
            <div>
                <img src={musicCover || smartDeviceCover || lifeStyleCover || mobileAccessoriesCover || homeCover} alt="musi" />

            </div>
            <div>
                {
                    music && music.map((item, index) => (
                        < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    smartDevice && smartDevice.map((item, index) => (
                        < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    home && home.map((item, index) => (
                        < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
                {
                    lifeStyle && lifeStyle.map((item, index) => (
                        < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }

                {
                    mobileAccessories && mobileAccessories.map((item, index) => (
                        < HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                    ))
                }
            </div>
        </div>
    )
}
// key={item.image} name={item.name} price={item.price} image={item.image} index={index}
export default HotAccessories
