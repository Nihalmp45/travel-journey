import React from 'react'
import './mainsection.css'

function Mainsection(props) {
  return (
    <div className='main-section'>
          <img className='image' src={`../${props.imageUrl}`}></img>
          <div className='location-details'>
          <span className='country'>{props.location}</span>
          <span className='gap'>view in google maps</span>

          <h1 className='heading'>{props.title}</h1>
          <h4 className='date'>{props.startDate}{props.endDate}</h4>

          <p className='description'>{props.description}</p>
          </div>
    </div>
  )
}

export default Mainsection