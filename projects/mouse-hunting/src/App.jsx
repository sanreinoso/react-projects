import { useState, useEffect } from "react";
import "./App.css";

function FollowMouse() {
    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Pointer move
    useEffect(() => {
        console.log("Effect Enabled: ", enabled);

        const handleMove = (event) => {
            const { clientX, clientY } = event;
            setPosition({ x: clientX, y: clientY });
        };

        // Hacemos esto solo cuando quiero seguir el puntero.
        if (enabled) {
            window.addEventListener("pointermove", handleMove);
        }

        if (!enabled) {
            setPosition({ x: 0, y: 0 });
        }

        return () => {
            console.log("Cleanup!!!");
            window.removeEventListener("pointermove", handleMove);
        };
    }, [enabled]);

    // Change body class, no cursor
    useEffect(() => {
        document.body.classList.toggle("no-cursor", enabled);

        return () => {
            document.body.classList.remove("no-cursor");
        };
    }, [enabled]);

    return (
        <>
            <h1> Mouse Hunting </h1>
            <div
                style={{
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    border: "1px solid #fff",
                    borderRadius: "50%",
                    opacity: 0.8,
                    pointerEvents: "none",
                    left: -25,
                    top: -25,
                    width: 50,
                    height: 50,
                    transform: `translate(${position.x}px, ${position.y}px)`,
                }}
            />
            <button onClick={() => setEnabled(!enabled)}>
                {enabled ? "Activado el effect" : "Desactivado el effectt"}
            </button>
        </>
    );
}

function App() {
    return (
        <main>
            <FollowMouse></FollowMouse>
        </main>
    );
}

export default App;
