import { useEffect, useState } from 'react'


// custom hook que devuelve una imagen
export function useEarthImage( { dates }) {
  const [imageUrl, setImageUrl] = useState();
  const [identifier, setIdentifier] = useState();
  
  //use effect para cambiar la imagen cada vez que hay una nueva fechas
  useEffect(() => {
      if (!dates) return;

      var randomDate = dates[Math.floor(Math.random() * dates.length)];
      const EARTH_IMAGES_DATE_URL = `https://epic.gsfc.nasa.gov/api/natural/date/${randomDate}`;

      fetch(EARTH_IMAGES_DATE_URL)
          .then((res) => res.json())
          .then((res) => {
              const { image, identifier } = res[Math.floor(Math.random() * res.length)];
              setIdentifier(identifier);

              const year = randomDate.split("-")[0];
              const month = randomDate.split("-")[1];
              const day = randomDate.split("-")[2];

              setImageUrl(`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${image}.png`);
          });
  }, [dates]);
  
  return { imageUrl, identifier }
}