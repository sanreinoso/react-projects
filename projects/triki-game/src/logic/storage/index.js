export const saveGameToStorage = ({ newBoard, newTurn }) => {
    // guardar partida en localstorage
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);
};

export const resteGameStorage = () => {
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
};
