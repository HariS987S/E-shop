import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/HotAccessoriesMenu.css"

const HotAccessoriesMenu = () => {
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
