import React from 'react'

const AboutCard = () => {
  return (
    <>
        <div className="about-card mtop flex-space">
            <div className="row row1">
                <h4>About Us</h4>
                <h1>
                    We <span> Provide Solution </span> to grow your business
                </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque est magni molestiae fugit odio voluptas corporis, aliquam adipisci ratione officia! Perspiciatis quam placeat eos accusantium, saepe possimus alias debitis!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum cumque est magni molestiae fugit odio voluptas corporis, aliquam adipisci ratione officia! Perspiciatis quam placeat eos accusantium, saepe possimus alias debitis!</p>
                <button className="secondary-btn">
                    Explore More <i className="fas fa-long-arrow-alt-right"></i>
                </button>
            </div>
            <div className="row image">
                <img src="/images/about-img-1.jpg" alt="" />
            </div>
        </div>
    </>
  )
}

export default AboutCard