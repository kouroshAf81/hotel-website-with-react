import React from 'react'
import AboutCard from './AboutCard'
import './About.css'
import HeadTitle from '../../common/HeadTitle/HeadTitle'

const About = () => {
    return (
        <>
            <HeadTitle />
            <section className='about top'>
                <div className="container">
                    <AboutCard />
                </div>
            </section>

            <section className="features top">
                <div className="container aboutCard flex-space">
                    <div className="row row1">
                        <h1>
                            Our <span>Features</span>
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Eumcumque est magni molestiae
                            fugit odio voluptas corporis, aliquam adipisci ratione officia! Perspiciatis quam placeat eos accusantium, saepe possimus alias debitis!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque est magni molestiae fugit odio voluptas corporis, aliquam adipisci ratione officia! Perspiciatis quam placeat eos accusantium, saepe possimus alias debitis!</p>
                        <button className="secondary-btn">
                            Explore More <i className="fas fa-long-arrow-alt-right"></i>
                        </button>
                    </div>
                    <div className="row image">
                        <img src="/images/feature-img-1.jpg" alt="" style={{ marginTop: '10px' }} />
                        <div className="control-btn">
                            <button className="prev">
                                <i className="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About