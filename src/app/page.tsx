import { ChessGame } from "@/components/chess-game"; // Import the ChessGame component

export default function Home() {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <ChessGame /> {/* Display the ChessGame component */}
    </div>
  );
}
