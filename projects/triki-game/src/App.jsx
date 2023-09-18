import { useState } from "react";
import { Square } from "./components/Square";
import { TURNS, WINNER_COMBOS } from "./constanst";
import { checkWinnerFrom, checkEndGame } from "./logic/logic";
import { WinnerModal } from "./components/WinnerModal";
import { saveGameToStorage, resteGameStorage } from "./logic/storage";
import "./App.css";


function App() {
    const [board, setBoard] = useState(() => {
      if (window.localStorage.getItem('board')) {
        return JSON.parse(window.localStorage.getItem('board'))
      }
      return Array(9).fill(null);
    });

    const [actualTurn, setActualTurn] = useState(() => {
      return window.localStorage.getItem('turn') ?? TURNS.X
    });

    // null: No hay un ganador ^ false: Hubo empate
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        if (board[index] || winner) return;

        // Obtener todas las propiedades del board en una nueva variable
        const newBoard = [...board];

        // En el index que llega como parametro, se cambia el valor por el
        // del turno actual
        newBoard[index] = actualTurn;

        // Cambiamos el estado de todo el board, useState(..)
        setBoard(newBoard);

        // Actualizamos el turno por el siguiente
        const newTurn = actualTurn == TURNS.X ? TURNS.O : TURNS.X;
        setActualTurn(newTurn);
        saveGameToStorage({newBoard: newBoard, newTurn: newTurn});

        // Revisar si ya hay un ganador, si existe lo guardamos
        const newWinner = checkWinnerFrom(newBoard);
        if (newWinner) {
            setWinner(newWinner);
        } else if(checkEndGame(newBoard)) {
          setWinner(false)
        }
    };

    const resetGame = () => {
      setBoard(Array(9).fill(null))
      setActualTurn(TURNS.X)
      setWinner(null)

      resteGameStorage();
    }

    return (
        <main className="board">
            <h1>Juego del Triki </h1>
            <button onClick={resetGame}>Reset el juego</button>
            <section className="game">
                {board.map((_, index) => {
                    return (
                        <Square key={index} index={index} updateBoard={updateBoard} >
                            {board[index]}
                        </Square>
                    );
                })}
            </section>
            <section className="turn">
                <Square isSelected={actualTurn == TURNS.X}>{TURNS.X}</Square>
                <Square isSelected={actualTurn == TURNS.O}>{TURNS.O}</Square>
            </section>

            <WinnerModal winner={winner} resetGame={resetGame}/>
        </main>
    );
}

export default App;
