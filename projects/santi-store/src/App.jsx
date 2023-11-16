import './App.css'
import { productos  as initialProducts } from './mocks/products.json'
import { useContext, useState } from 'react'
import { Products } from './componentes/Products'
import { Header } from './componentes/Header'
import { Footer } from './componentes/Footer'
import { FilterContext } from './contexts/FilterContex.jsx'

function useFiltersHook() {
  const { filters, setFilters } = useContext(FilterContext);

  /**
   * Filtramos un arreglo de productos de acuerdo a sus filtros
   * @param {*} products 
   * @returns filtered products 
   */
  function filterProducts (products) {
    return products.filter( p => {
      return (
        p.price >= filters.minPrice &&
        (
          filters.category === 'all' || 
          filters.category === p.category
        )
      )
    })
  }

  return { filterProducts, setFilters}

}

function App() {
  const [products, setProducts] = useState(initialProducts)
  const { filterProducts, setFilters} = useFiltersHook()

  const filteredProducts = filterProducts(products)
  const handleChange = (filters) => {
    setFilters(filters)
  }

  return (
    <>
      <Header changeFilters={setFilters}></Header>
      <Products products={filteredProducts}/>
      <Footer></Footer>
    </>
  )
}

export default App;
