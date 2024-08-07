import React from "react"
import data from "./data"
import "./Gallery.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Gallery = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
  }
  return (
    <div>
      <section className='collection'>
        <div className='container top'>
          <Slider {...settings} style={{overflow: 'hidden'}}>
            {data.map((value,index) => {
              return (
                <div className='box' key={index}>
                  <img src={value.cover} alt='d'  />
                </div>
              )
            })}
          </Slider>
        </div>
      </section>
    </div>
  )
}

export default Gallery