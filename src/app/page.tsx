import { ChessGame } from "@/components/chess-game";

export default function Home() {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/6.gradients.ray.st.png')" }}
    >
      <div className="relative z-10">
        <ChessGame />
      </div>
    </div>
  );
}
