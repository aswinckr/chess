"use client";

import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import Image from "next/image";
import queenSvg from "../public/images/queen.svg"; // Import the queen SVG

const ChessBoard = () => {
  const [game, setGame] = useState(new Chess());

  const onDrop = (sourceSquare: string, targetSquare: string) => {
    const gameCopy = new Chess(game.fen());
    const move = gameCopy.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for simplicity
    });

    if (move === null) return false; // illegal move

    setGame(gameCopy);
    return true;
  };

  // Custom piece rendering object
  const customPieces = {
    wQ: ({ squareWidth }: { squareWidth: number }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: squareWidth,
          height: squareWidth,
        }}
      >
        <Image
          src={queenSvg}
          alt="queen"
          width={squareWidth * 0.8} // Adjusted size to be 80% of the square width
          height={squareWidth * 0.8} // Adjusted size to be 80% of the square width
        />
      </div>
    ),
    bQ: ({ squareWidth }: { squareWidth: number }) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: squareWidth,
          height: squareWidth,
        }}
      >
        <Image
          src={queenSvg}
          alt="queen"
          width={squareWidth * 0.8} // Adjusted size to be 80% of the square width
          height={squareWidth * 0.8} // Adjusted size to be 80% of the square width
        />
      </div>
    ),
  };

  const customSquareStyles = {
    a1: { backgroundColor: "#E8EDF9" },
    b1: { backgroundColor: "#B7C0D8" },
    c1: { backgroundColor: "#E8EDF9" },
    d1: { backgroundColor: "#B7C0D8" },
    e1: { backgroundColor: "#E8EDF9" },
    f1: { backgroundColor: "#B7C0D8" },
    g1: { backgroundColor: "#E8EDF9" },
    h1: { backgroundColor: "#B7C0D8" },
    a2: { backgroundColor: "#B7C0D8" },
    b2: { backgroundColor: "#E8EDF9" },
    c2: { backgroundColor: "#B7C0D8" },
    d2: { backgroundColor: "#E8EDF9" },
    e2: { backgroundColor: "#B7C0D8" },
    f2: { backgroundColor: "#E8EDF9" },
    g2: { backgroundColor: "#B7C0D8" },
    h2: { backgroundColor: "#E8EDF9" },
    a3: { backgroundColor: "#E8EDF9" },
    b3: { backgroundColor: "#B7C0D8" },
    c3: { backgroundColor: "#E8EDF9" },
    d3: { backgroundColor: "#B7C0D8" },
    e3: { backgroundColor: "#E8EDF9" },
    f3: { backgroundColor: "#B7C0D8" },
    g3: { backgroundColor: "#E8EDF9" },
    h3: { backgroundColor: "#B7C0D8" },
    a4: { backgroundColor: "#B7C0D8" },
    b4: { backgroundColor: "#E8EDF9" },
    c4: { backgroundColor: "#B7C0D8" },
    d4: { backgroundColor: "#E8EDF9" },
    e4: { backgroundColor: "#B7C0D8" },
    f4: { backgroundColor: "#E8EDF9" },
    g4: { backgroundColor: "#B7C0D8" },
    h4: { backgroundColor: "#E8EDF9" },
    a5: { backgroundColor: "#E8EDF9" },
    b5: { backgroundColor: "#B7C0D8" },
    c5: { backgroundColor: "#E8EDF9" },
    d5: { backgroundColor: "#B7C0D8" },
    e5: { backgroundColor: "#E8EDF9" },
    f5: { backgroundColor: "#B7C0D8" },
    g5: { backgroundColor: "#E8EDF9" },
    h5: { backgroundColor: "#B7C0D8" },
    a6: { backgroundColor: "#B7C0D8" },
    b6: { backgroundColor: "#E8EDF9" },
    c6: { backgroundColor: "#B7C0D8" },
    d6: { backgroundColor: "#E8EDF9" },
    e6: { backgroundColor: "#B7C0D8" },
    f6: { backgroundColor: "#E8EDF9" },
    g6: { backgroundColor: "#B7C0D8" },
    h6: { backgroundColor: "#E8EDF9" },
    a7: { backgroundColor: "#E8EDF9" },
    b7: { backgroundColor: "#B7C0D8" },
    c7: { backgroundColor: "#E8EDF9" },
    d7: { backgroundColor: "#B7C0D8" },
    e7: { backgroundColor: "#E8EDF9" },
    f7: { backgroundColor: "#B7C0D8" },
    g7: { backgroundColor: "#E8EDF9" },
    h7: { backgroundColor: "#B7C0D8" },
    a8: { backgroundColor: "#B7C0D8" },
    b8: { backgroundColor: "#E8EDF9" },
    c8: { backgroundColor: "#B7C0D8" },
    d8: { backgroundColor: "#E8EDF9" },
    e8: { backgroundColor: "#B7C0D8" },
    f8: { backgroundColor: "#E8EDF9" },
    g8: { backgroundColor: "#B7C0D8" },
    h8: { backgroundColor: "#E8EDF9" },
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "500px",
          height: "500px",
        }}
      >
        <Chessboard
          position={game.fen()}
          onPieceDrop={onDrop}
          customSquareStyles={customSquareStyles}
          customPieces={customPieces} // Add custom piece rendering
        />
      </div>
    </div>
  );
};

export default ChessBoard;
