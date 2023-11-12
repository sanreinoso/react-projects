# Mis Primeros Pasos en React

¡Bienvenido a mi repositorio de React donde he realizado varios proyectos simples para aprender los conceptos básicos!


## Carpetas de los proyectos 💻

| Número | Proyecto | Código 
| --- | --- | --- 
| `01` | Twitter Follow Card | [Ver](projects/twitter-follow-card/) 
| `02` | Tic Tac Toe | [Ver](projects/triki-game/) 
| `03` | Mouse Hunting | [Ver](projects/mouse-hunting/) 
| `04` | Nasa project | [Ver](projects/nasa-project/) 


## Proyectos

### Triki-game

**Descripción:** Este proyecto es un simple juego de "Tic Tac Toe" (Triki) implementado en React. Utiliza el hook `useState` para administrar el estado del juego y `localStorage` para recordar el estado del juego entre sesiones. 

**Fecha de Culminación:** 16 de Septiembre

***

### Twitter-follow-card
**Descripción:** En este proyecto, he creado un componente que imita el comportamiento de una tarjeta de seguidores de Twitter. Utilicé el hook `useEffect` para realizar un efecto secundario al renderizar el componente. 

**Fecha de Culminación:** 2 de Septiembre
***

### Mouse Hunting
**Descripción:** En este proyecto, usamos el hook de react **useEffect**. Con el hook controlamos la suscripción a los eventos en el DOM, en este caso estaremos escuchando el evento *pointermove*  Para el cual dejo las siguientes notas.

1. **Array vacío [ ]:** Se ejecuta el **useEffect()** una sola vez, solo cuando se monta el componente
2. **Array con dependencias [dep1, dep2, dep3, …]:** Ejecutará el método useEffect() cuando cambie alguna de sus dependencias o cuando se monta el componente
3. **No se especifica el Array undefined** Se ejecuta cada vez que se renderiza el componente. 



**Fecha de Culminación:** 3 de Octubre
***

### Nasa project
**Descripción:** En este proyecto, aprendemos como crear un **custom hook**, el cual permite encapsular una funcionalidad que se podra utilizar en cualquier componente de la aplicación. Usamos la API open source de la Nasa https://api.nasa.gov/.


**Fecha de Culminación:** 18 de Octubre
***

### Santi Movies
**Descripción:** Nuevo proyecto de React para aprender como se hacen peticiones y fetching de datos desde mi web. Usamos la API open source http://www.omdbapi.com/  
1. Se crea una input para hacer la busqueda de peliculas y se recarga cada vez que se pide una nueva. 
2. Creación de custom hooks y organización de la logica fuera de los componentes.
3. Se hace uso de los nuevos hooks *useRef*, *useMemo*, *useCallback*  
4. Aplicamos la tecnica de _debounce_, permite que una función se ejecute solo después de que haya pasado un cierto período de tiempo sin que ocurran eventos adicionales 
5. Formulario de forma controlado y No controlada.

**Fecha de Culminación:** 12 de Noviembre
***


