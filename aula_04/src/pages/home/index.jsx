import React from 'react'
import Header from '../../components/header'
import Search from '../../components/search'
import CardCategory from '../../components/card-category'
import './styles.css'
import Restaurants from '../../components/restaurants'
import Informations from '../../components/informations'
import Footer from '../../components/footer'


function Home() {
  return (

    <>
      <Header />
      <Search />

      <div className='home_container_category'>
        <CardCategory title='Comidas' />
        <CardCategory title='Bebidas' />
      </div>

      <Restaurants />
      <Informations />
      <Footer />
    </>
  )
}

export default Home