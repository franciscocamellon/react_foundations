import React from 'react'
import './styles.css'
import Button from '../button'

function Search() {
  return (
    <section className='search_container'>
      <h2>Nosso objetivo é servir você!</h2>

      <div className='container_input'>
        <input />
        <Button title='Encontrar' />
      </div>
    </section>

  )
}

export default Search