import React from 'react'
import './footer.css'

function Footer(props) {

  var description = props.description

  return (
    <>
      <footer className='footer'>
        <p>{description || 'Created by CAMELLonCASE'}</p>
      </footer>
    </>
  )
}

export default Footer