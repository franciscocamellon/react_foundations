import React from 'react'
import './styles.css'
import img from '../../imgs/img1.svg';

function CardCategory(props) {

  var cardColor = props.cardColor
  var title = props.title
  var buttonTitle = props.buttonTitle
  var productImg = props.productImg

  return (
    <div
      className='card_category_container'
      style={{
        backgroundColor: title === 'Comidas' ? '#ED1C16' : '#009432',
      }}>
      <div className='content'>
        <p>{title}</p>
        <button>Ver opções</button>
      </div>

      <div>
        <img src={img} />
      </div>
    </ div>
  )
}

export default CardCategory