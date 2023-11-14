import './App.css'
import { productos  as initialProducts } from './mocks/products.json'
import { useState } from 'react'
import { Products } from './componentes/Products'

function App() {
  const [products, setProducts] = useState(initialProducts)

  return (
    <Products products={products}/>
  )
}

export default App;
