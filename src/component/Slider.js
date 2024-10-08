import React from 'react'
import { Carousel, CarouselItem } from 'react-bootstrap'
import '../styles/bootstrap.min.css'
import Offer from './Offer'

const Slider = ({ start }) => {
    return (
        <Carousel fade>
            {
                start.map((item) => (
                    <Carousel.Item>
                        <img className="d-block w-100" src={item} alt=" first slide" />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Slider
