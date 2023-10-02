import React from 'react'
import './MostPopular.css'
import Cards from './Cards'
export const MostPopular = () => {
  return (
    <>
        <section className='popular top'>
          <div className='full-container'>
              <div className="heading">
                <h1>Most Popular Hotel</h1>
                <div className="line"></div>
              </div>

              <div className='content'>
                <Cards />
              </div>
          </div>
        </section>
    </>
  )
}
