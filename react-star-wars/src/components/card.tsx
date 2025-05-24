import type { Character } from "../types/types";

function Card({ character }: { character: Character }) {
  const { name, pic, homeworld="unknown" } = character;
  return (
    <>
        <div className="col-md-4">
      <div className="card">
        <img src={pic} alt={name} />
        <h2>{name}</h2>
        <p>{homeworld}</p>
      </div>
      </div>
    </>
  );
}

export default Card;
