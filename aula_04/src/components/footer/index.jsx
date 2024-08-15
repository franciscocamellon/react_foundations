import React from 'react'
import './styles.css'
import Button from '../button'
import linkedin from '../../imgs/linkedin.png'
import insta from '../../imgs/instagram.png'

function Footer() {
  return (
    <div className='container_footer'>
      <p>Todos os direitos reservados</p>
      <div className='container_logos'>
        <img src={linkedin} />
        <img src={insta} />
      </div>
    </div>
  )
}

export default Footer