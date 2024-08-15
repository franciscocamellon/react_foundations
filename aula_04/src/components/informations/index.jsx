import React from 'react'
import './styles.css'
import Button from '../button'
import INFORMATION from './mock';

function Informations() {
  return (
    <div className='informations_container'>
      <h3>Informações</h3>
      <div className='container_cards_info'>
        {
          INFORMATION.map((item) => (
            <CardInfo
              title={item.title}
              text={item.text}
              img={item.img} />
          ))
        }
      </div>
    </div>

  )
}

export default Informations

function CardInfo(props) {
  return (
    <div className='card_info'>
      <img src={props.img} />
      <div>
        <p>{props.title}</p>
        <p>{props.text}</p>
        <Button title='Saiba mais' />
      </div>
    </div>
  )
}