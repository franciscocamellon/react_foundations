import React from 'react'
import noPicture from '../imgs/no-picture-available.png'
import './card.css'

function Card(props) {
  var img = props.img;
  var title = props.title;
  var description = props.description;
  return (
    <>
      <div className='card'>
        <img src={img ? img : noPicture} width={100} />
        <p>{title ? title : 'Invalid title!'}</p>
        <p className='description'>{description ? description : 'Invalid description!'}</p>
      </div>
    </>
  )
}

export default Card