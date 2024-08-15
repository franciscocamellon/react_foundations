import React from 'react'
import './styles.css'
import RESTAURANTS from './mock'
import RestaurantCard from '../restaurant-card'

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
      <p className='see_more'>Ver mais</p>
    </div>
  )
}

export default Restaurants
