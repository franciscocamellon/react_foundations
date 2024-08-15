import React from 'react'
import './styles.css'

function RestaurantCard(props) {
  return (
    <div className='restaurant_card'>
      <div className='avatar' style={{ backgroundColor: props.color }} />

      <div className='content_info'>
        <p>{props.title}</p>
        <p>{props.category}</p>
      </div>
    </div>
  )
}

export default RestaurantCard