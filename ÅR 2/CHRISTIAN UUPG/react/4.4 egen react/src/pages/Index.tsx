
import './App.css'
import Product from '../components/Product'

function Home() {
  return (
    <div className='page'>
      <div className='items'>
      <Product/>
      <Product/>
      <Product/>
      <Product/>
      </div>
    </div>
  )
}

export default Home
