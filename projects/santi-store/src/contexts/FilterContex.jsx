import { createContext, useState } from 'react' 

//Contexto
export const FilterContext = createContext();

//Provider
export function FiltersProvider ({ children}) {
  const [filters, setFilters] = useState({
    category: 'all', 
    minPrice: 0
  });

	return (
		<FilterContext.Provider value={{
        filters,
        setFilters
			}}>
			{children}
		</FilterContext.Provider>
	)
}