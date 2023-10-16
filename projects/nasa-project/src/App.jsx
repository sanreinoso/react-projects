import { useEffect, useState } from "react";
import "./App.css";
const API_KEY = "<NASA_API_KEY>";
const QUERY_PARAM_API_KEY = `?api_key=${API_KEY}`
const NATURAL_DATES_AVAILABLE  = 'https://api.nasa.gov/EPIC/api/natural/available' + QUERY_PARAM_API_KEY
const NASA_ENPOINT_APOD_URL = 'https://api.nasa.gov/planetary/apod' + QUERY_PARAM_API_KEY
const CAT_ENDPOINT_FACT_URL = "https://catfact.ninja/fact";

export function App() {
    const [dates, setDates] = useState();
    const [identifier, setIdentifier] = useState();
    const [imageUrl, setImageUrl] = useState();

    // use Effect recuperar fechas disponibles
    useEffect(() => {
        fetch(NATURAL_DATES_AVAILABLE)
            .then((res) => res.json())
            .then((res) => {
                const datesArray = res.slice(Math.max(res.length - 5, 1))
                setDates(datesArray)
            });
    }, []);

    //use effect para cambiar la imagen cada vez que hay una nueva fechas
    useEffect(() => {
        if (!dates) return;

        var randomDate = dates[Math.floor(Math.random()*dates.length)]
        const EARTH_IMAGES_DATE_URL = `https://epic.gsfc.nasa.gov/api/natural/date/${randomDate}`

        fetch(EARTH_IMAGES_DATE_URL)
            .then((res) => res.json())
            .then((res) => {
                const {image, identifier } = res[Math.floor(Math.random() * res.length)]
                setIdentifier(identifier)

                const year = randomDate.split("-")[0]
                const month = randomDate.split("-")[1]
                const day = randomDate.split("-")[2]

                setImageUrl(`https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${day}/png/${image}.png`)

            });
    }, [dates]);

    return (
            <main>
                <h1> Project NASA - 1</h1>
                <section>
                    {identifier && <p>{identifier}</p>}
                    { imageUrl && <img src={imageUrl} alt='' />}
                </section>
            </main>
    );
}
