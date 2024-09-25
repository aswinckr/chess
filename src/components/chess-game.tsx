"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Chess, Square as ChessSquare, Piece as ChessPiece } from "chess.js"; // Import the Chess class and types from chess.js

// Chess piece SVG components
const King = ({ color }: { color: "white" | "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color === "white" ? "#000" : "#fff"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22.5 11.63V6M20 8h5" strokeLinejoin="miter" />
      <path
        d="M22.5 25s4.5-7.5 3-10.5c0 0-1-2.5-3-2.5s-3 2.5-3 2.5c-1.5 3 3 10.5 3 10.5"
        fill={color}
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path
        d="M11.5 37c5.5 3.5 15.5 3.5 21 0v-7s9-4.5 6-10.5c-4-6.5-13.5-3.5-16 4V27v-3.5c-3.5-7.5-13-10.5-16-4-3 6 5 10 5 10V37z"
        fill={color}
      />
      <path d="M11.5 30c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0m-21 3.5c5.5-3 15.5-3 21 0" />
    </g>
  </svg>
);

const Queen = ({ color }: { color: "white" | "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <g
      fill={color}
      fillRule="evenodd"
      stroke={color === "white" ? "#000" : "#fff"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM24.5 7.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM41 12a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM16 8.5a2 2 0 1 1-4 0 2 2 0 1 1 4 0zM33 9a2 2 0 1 1-4 0 2 2 0 1 1 4 0z" />
      <path
        d="M9 26c8.5-1.5 21-1.5 27 0l2-12-7 11V11l-5.5 13.5-3-15-3 15-5.5-14V25L7 14l2 12z"
        strokeLinecap="butt"
      />
      <path
        d="M9 26c0 2 1.5 2 2.5 4 1 1.5 1 1 .5 3.5-1.5 1-1.5 2.5-1.5 2.5-1.5 1.5.5 2.5.5 2.5 6.5 1 16.5 1 23 0 0 0 1.5-1 0-2.5 0 0 .5-1.5-1-2.5-.5-2.5-.5-2 .5-3.5 1-2 2.5-2 2.5-4-8.5-1.5-18.5-1.5-27 0z"
        strokeLinecap="butt"
      />
      <path d="M11.5 30c3.5-1 18.5-1 22 0M12 33.5c6-1 15-1 21 0" fill="none" />
    </g>
  </svg>
);

const Rook = ({ color }: { color: "white" | "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <g
      fill={color}
      fillRule="evenodd"
      stroke={color === "white" ? "#000" : "#fff"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M9 39h27v-3H9v3zM12 36v-4h21v4H12zM11 14V9h4v2h5V9h5v2h5V9h4v5"
        strokeLinecap="butt"
      />
      <path d="M34 14l-3 3H14l-3-3" />
      <path d="M31 17v12.5H14V17" strokeLinecap="butt" strokeLinejoin="miter" />
      <path d="M31 29.5l1.5 2.5h-20l1.5-2.5" />
      <path d="M11 14h23" fill="none" strokeLinejoin="miter" />
    </g>
  </svg>
);

const Bishop = ({ color }: { color: "white" | "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color === "white" ? "#000" : "#fff"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g fill={color} strokeLinecap="butt">
        <path d="M9 36c3.39-.97 10.11.43 13.5-2 3.39 2.43 10.11 1.03 13.5 2 0 0 1.65.54 3 2-.68.97-1.65.99-3 .5-3.39-.97-10.11.46-13.5-1-3.39 1.46-10.11.03-13.5 1-1.354.49-2.323.47-3-.5 1.354-1.94 3-2 3-2z" />
        <path d="M15 32c2.5 2.5 12.5 2.5 15 0 .5-1.5 0-2 0-2 0-2.5-2.5-4-2.5-4 5.5-1.5 6-11.5-5-15.5-11 4-10.5 14-5 15.5 0 0-2.5 1.5-2.5 4 0 0-.5.5 0 2z" />
        <path d="M25 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 1 1 5 0z" />
      </g>
      <path
        d="M17.5 26h10M15 30h15m-7.5-14.5v5M20 18h5"
        strokeLinejoin="miter"
      />
    </g>
  </svg>
);

const Knight = ({ color }: { color: "white" | "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <g
      fill="none"
      fillRule="evenodd"
      stroke={color === "white" ? "#000" : "#fff"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 10c10.5 1 16.5 8 16 29H15c0-9 10-6.5 8-21" fill={color} />
      <path
        d="M24 18c.38 2.91-5.55 7.37-8 9-3 2-2.82 4.34-5 4-1.042-.94 1.41-3.04 0-3-1 0 .19 1.23-1 2-1 0-4.003 1-4-4 0-2 6-12 6-12s1.89-1.9 2-3.5c-.73-.994-.5-2-.5-3 1-1 3 2.5 3 2.5h2s.78-1.992 2.5-3c1 0 1 3 1 3"
        fill={color}
      />
      <path
        d="M9.5 25.5a.5.5 0 1 1-1 0 .5.5 0 1 1 1 0zM14.933 15.75a.5 1.5 30 1 1-.866-.5.5 1.5 30 1 1 .866.5z"
        fill={color === "white" ? "#000" : "#fff"}
        strokeWidth="1.49997"
      />
    </g>
  </svg>
);

const Pawn = ({ color }: { color: "white" | "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="45"
    height="45"
    viewBox="0 0 45 45"
  >
    <path
      d="M22.5 9c-2.21 0-4 1.79-4 4 0 .89.29 1.71.78 2.38C17.33 16.5 16 18.59 16 21c0 2.03.94 3.84 2.41 5.03-3 1.06-7.41 5.55-7.41 13.47h23c0-7.92-4.41-12.41-7.41-13.47 1.47-1.19 2.41-3 2.41-5.03 0-2.41-1.33-4.5-3.28-5.62.49-.67.78-1.49.78-2.38 0-2.21-1.79-4-4-4z"
      fill={color}
      stroke={color === "white" ? "#000" : "#fff"}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

type Piece = {
  type: "king" | "queen" | "rook" | "bishop" | "knight" | "pawn";
  color: "white" | "black";
};

type Square = Piece | null;

export function ChessGame() {
  const [game, setGame] = useState(new Chess()); // Initialize the Chess game
  const [selectedPiece, setSelectedPiece] = useState<{
    row: number;
    col: number;
  } | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<"white" | "black">(
    "white"
  );

  const handleSquareClick = (row: number, col: number) => {
    const square = (String.fromCharCode(97 + col) + (8 - row)) as ChessSquare; // Convert to chess notation and cast to ChessSquare
    if (selectedPiece) {
      const fromSquare = (String.fromCharCode(97 + selectedPiece.col) +
        (8 - selectedPiece.row)) as ChessSquare;
      const move = game.move({ from: fromSquare, to: square });
      if (move) {
        setGame(new Chess(game.fen())); // Update the game state
        setSelectedPiece(null);
        setCurrentPlayer(currentPlayer === "white" ? "black" : "white");
      } else {
        setSelectedPiece(null);
      }
    } else {
      const piece = game.get(square);
      if (piece && piece.color === currentPlayer[0]) {
        setSelectedPiece({ row, col });
      }
    }
  };

  const renderPiece = (piece: ChessPiece) => {
    switch (piece.type) {
      case "k":
        return <King color={piece.color === "w" ? "white" : "black"} />;
      case "q":
        return <Queen color={piece.color === "w" ? "white" : "black"} />;
      case "r":
        return <Rook color={piece.color === "w" ? "white" : "black"} />;
      case "b":
        return <Bishop color={piece.color === "w" ? "white" : "black"} />;
      case "n":
        return <Knight color={piece.color === "w" ? "white" : "black"} />;
      case "p":
        return <Pawn color={piece.color === "w" ? "white" : "black"} />;
    }
  };

  return (
    <Card className="p-4">
      <div className="grid grid-cols-8 gap-0 w-96 h-96">
        {game.board().map((row, rowIndex) =>
          row.map((square, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`w-12 h-12 flex items-center justify-center ${
                (rowIndex + colIndex) % 2 === 0 ? "bg-gray-200" : "bg-gray-400"
              } ${
                selectedPiece?.row === rowIndex &&
                selectedPiece?.col === colIndex
                  ? "border-2 border-blue-500"
                  : ""
              }`}
              onClick={() => handleSquareClick(rowIndex, colIndex)}
            >
              {square && renderPiece(square)}
            </div>
          ))
        )}
      </div>
      <div className="mt-4 text-center">Current player: {currentPlayer}</div>
    </Card>
  );
}
