import React from 'react'
import '../style.css'
import location from '../images/location.svg'

const Card = (props) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <img className='card-img' src={props.imageUrl} alt='travelImg' />
        <div className='card-description'>
          <div className='card-location'>
            <img src={location} alt='location' />
            <span>{props.location}</span>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1 className='card-title'>{props.title}</h1>
          <h4 className='card-date'>{props.startDate} - {props.endDate}</h4>
          <p className='card-content'>{props.description}</p>
        </div>
      </div>
    </div>
  )
}

export default Card