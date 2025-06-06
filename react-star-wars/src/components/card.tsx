import type { Character } from "../types/types";

function Card({ character }: { character: Character }) {
  const { name, pic, homeworld="unknown" } = character;
  return (
    <>
        <div className=" col-lg-4 col-md-6 col-sm-12 mb-2">
      <div className="card">
        <img src={pic} style={{ height: "500px"}} alt={name} /> 
        <h2>{name}</h2>
        <h3>{homeworld}</h3>
      </div>
      </div>
    </>
  );
}

export default Card;
