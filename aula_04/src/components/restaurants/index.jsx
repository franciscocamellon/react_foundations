import React from 'react'
import './styles.css'
import RESTAURANTS from './mock'

function Restaurants() {
  return (
    <div className='restaurants_container'>
      <h3>Conheça nossos restaurantes</h3>
      <div className='container_cards'>
        {
          RESTAURANTS.map((item) => (
            <RestaurantCard
              key={item.id}
              title={item.title}
              category={item.category}
              color={item.color} />
          ))
        }
      </div>


    </div>
  )
}

export default Restaurants


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
