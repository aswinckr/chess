"use client";

import { useState } from "react";
import { Chessboard } from "react-chessboard";
import { Chess } from "chess.js";
import BoardImage from "@/public/images/Board.png"; // Import the image

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

  console.log(BoardImage.src); // Log the image URL to ensure it's correct

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
          customBoardStyle={{
            backgroundImage: `url(${BoardImage.src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </div>
  );
};

export default ChessBoard;
