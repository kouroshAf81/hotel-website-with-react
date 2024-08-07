import React from 'react'
import { Link } from 'react-router-dom'

const BlogCard = ({item : { id, date, category, title, cover, para, desc }}) => {
  return (
    <>
      <div className='items'>
        <Link to={`/blogsingle/${id}`} className='blogItem-link'>
        <div className="img">
          <img src={cover} alt="" />
        </div>
        <div className="category flex-space">
          <span> {date} </span>
          <label> {category} </label>
        </div>
        <div className="details">
          <h3> {title} </h3>
          <p> {para} </p>
        </div>
        <div className='readmore'>
          READ MORE <i className='fa fa-long-arrow-alt-right'></i>
        </div>
        </Link>
      </div>
    </>
  )
}

export default BlogCard