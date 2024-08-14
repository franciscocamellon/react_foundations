import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import './App.css'
import img1 from './imgs/img1.png'
import img2 from './imgs/img2.png'
import img3 from './imgs/img3.png'
import img4 from './imgs/img4.png'
import img5 from './imgs/img5.png'

function App() {

    var images = [img1, img2, img3, img4, img5]

    return (
        <div>
            <Header />
            <h2 className='subtitle'>Fast-food Infnet</h2>
            <div className='container-cards'>
                <Card img={img1} title={'Feijoada'} description={'Um prato típico brasileiro'} />
                <Card img={img2} title={'Moqueca'} description={'Um prato típico do Espírito Santo'} />
                <Card img={img3} title={'Coxinha'} description={'Um salgadinho típico brasileiro'} />
                <Card img={img4} title={'Cheescake'} description={'Uma sobremesa saborosa'} />
                <Card img={img5} title={'Coca cola'} description={'O refrigerante preferido'} />
            </div>
            <Footer description='Todos os direitos reservados - 2024' />

        </div>
    )
}

export default App;