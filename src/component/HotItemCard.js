import React from 'react'
import "../styles/HotItemCard.css"

const HotItemCard = ({ name, price, image, index }) => {
    return (
        <div className='HotItemCard'>
            {console.log(image)}
            <img src={image} alt={`${index} products`} />
            <p>{name}</p>
            <span>{price}</span>
        </div>
    )

}
export default HotItemCard
