import { Filters } from "./Filters"

export function Header({changeFilters}) {
  return (
    <div>
      <h3> Mi Tienda de libros (ಠಿ_ಠ) </h3>
      <Filters onChange={changeFilters}/>
    </div>
  )
}