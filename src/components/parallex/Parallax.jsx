import "./parallax.css";

export default function Parallax({ type }) {
  return (
    <div
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064",
      }}
    >
      <h2>{type === "services" ? "What We Do?" : "What We Did?"}</h2>
      <div className="mountains"></div>
      <div className="planets"></div>
      <div className="stars"></div>
    </div>
  );
}
