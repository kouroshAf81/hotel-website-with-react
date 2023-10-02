import React from 'react'
import './Gallery.css'
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import Card from './Card'
import GalleryData from './GalleryData'
const Gallery = () => {
  return (
    <>
        <HeadTitle />
        <section className='gallery top'>
            <div className="container grid">
                {GalleryData.map((value) => {
                    return <Card images={value.src} title={value.title} />
                })}
            </div>
        </section>
    </>
  )
}

export default Gallery  