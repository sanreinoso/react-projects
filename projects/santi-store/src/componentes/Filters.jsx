import { useId, useState } from 'react'
import './Filters.css'

export function Filters({onChange}) {
  const [minPrice, setMinPrice] = useState(10);
  const [category, setCategory] = useState('all');
  const minPriceFilterId = useId();
  const categoryFilterId = useId();

  const handleChangeMinPrice = (event) => {
    setMinPrice(event.target.value)
    onChange( prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  const handleChangeCategory = (event) => {

    setCategory(event.target.value)
    onChange( prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }

  return (
    <section className="filters">
      <div>
        <label htmlFor={minPriceFilterId}> Precio </label>
        <input type="range" id={minPriceFilterId} min="0" max="1000" onChange={handleChangeMinPrice} />
        <span> ${minPrice} </span>
      </div>

      <div>
        <label htmlFor={categoryFilterId}> Categoría </label>
        <select id={categoryFilterId} className="selector" onChange={handleChangeCategory}>
          <option value="all"> Todas </option>
          <option value="skincare"> Cuidado para la piel </option>
          <option value="laptops"> Computadoras </option>
          <option value="smartphones"> Celulares </option>
          <option value="fragrances"> Perfumes </option>
        </select>
      </div>
    </section>
  )
}