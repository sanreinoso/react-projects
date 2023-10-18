import { useEffect, useState } from "react";
import { useEarthImage } from '../hooks/useEarthImage.js'
import { useAvailableDates } from "../hooks/useAvailableDates.js";
import "./App.css";

export function App() {
    const { dates, refreshDates } = useAvailableDates()
    const { imageUrl, identifier } = useEarthImage({dates});

    const handleClick = () =>  {
        refreshDates()
    }

    return (
        <main>
            <h1> Project NASA - 1</h1>
            <button onClick={handleClick}> Press button to change image </button>
            <section>
                {identifier && <p>{identifier}</p>}
                {imageUrl && <img src={imageUrl} alt="" />}
            </section>
        </main>
    );
}
