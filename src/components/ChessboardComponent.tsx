"use client";

import Chessboard from "@chrisoakman/chessboard2"; // Updated to use chessboard2
import { useEffect } from "react"; // Import useEffect for side effects

const ChessboardComponent = () => {
  useEffect(() => {
    const board = Chessboard("board"); // Initialize the chessboard
    board.start(); // Start with the initial position
  }, []);

  return (
    <div id="board" style={{ width: "400px" }}></div> // Chessboard div
  );
};

export default ChessboardComponent; // Export the component
