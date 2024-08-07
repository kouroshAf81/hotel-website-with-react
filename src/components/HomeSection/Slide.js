import React, { useState } from 'react'

const Slide = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length - 1

  const nextSlide = () => {
    setCurrent(current === length ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length : current - 1)
  }

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }
  return (
    <>
      <section className='slider'>
        <div className='control-btn'>
          <button className='prev' onClick={prevSlide}>
            <i className='fas fa-caret-left'></i>
          </button>
          <button className='next' onClick={nextSlide}>
            <i className='fas fa-caret-right'></i>
          </button>
        </div>
        {slides.map((slide, index) => {
          return (
            <div key={index} className={index === current ? 'slide active' : 'slide'}>
              {index === current && <img src={slide.images} alt="Home img" />}
            </div>
          )
        })}
      </section>
      <section className="slide-form">
        <div className="container">
          <h2>Enjoy Your Holiday</h2>
          <span>Search and Book Hotel</span>
          
          <form action="">
            <input type="text" placeholder='Search City' name='' id='' />
            <div className="flex-space">
              <input type="date" placeholder='Check In' />
              <input type="date" placeholder='Check Out' />
            </div>
            <div className="flex-space">
              <input type="number" placeholder='Adult(s)(+18)' />
              <input type="number" placeholder='Children(0 - 17)' />
            </div>
            <input type="number" placeholder='Rooms' />
            <input type="submit" value='Search' className='submit' />
          </form>
        </div>
      </section>
    </>
  )
}

export default Slide