import React from 'react'
import './styles.css'
import Button from '../button'

function Header() {
  return (
    <header>
      <h1>UnyFood</h1>

      <nav>
        <ul>
          <li>Categorias</li>
          <li>Restaurantes</li>
          <li>Informações</li>
          <li>Cadastre-se</li>
          <li>

            <Button title='Entrar' />

          </li>
        </ul>
      </nav>

    </header>
  )
}

export default Header