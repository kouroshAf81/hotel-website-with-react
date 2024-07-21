import React from 'react'
import {Link} from 'react-router-dom'
const Dcard = ({item: { id, image, title, desc, sidepara, paraImage_one, paraImage_two}}) => {
    return(
        <>
        <Link to={`/singlepage/${id}`} className='blogItem-link'>
            <div className="items">
                <div className="img">
                    <img src={image} alt="" onClick={()=> console.log('click')}/>
                    <i className="fas fa-external-link-alt"></i>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Dcard 