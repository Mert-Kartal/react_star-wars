import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'
import Card from './components/card'
import Radio from './components/radio';
import { characters } from './data/data'

function App() {

  const [show, setShow] = useState(false);

const ShowCharacters= ()=>{
  setShow(!show) 
  console.log(show)
}

const characterLowercase = characters.map((character) => {
 return{
  ...character,
  homeworld: character.homeworld ? character.homeworld.toLowerCase() : "unknown",
}});

const characterHomeworld = characterLowercase.map((character) => { return character.homeworld})
console.log(characterHomeworld)
const setCharacterHomeWorld = new Set( characterHomeworld)
const homeworldArray = [...setCharacterHomeWorld];
return (
    <>
      <Button variant="danger fs-5" className="mb-3" onClick={ShowCharacters}>
        {show?"Hide":"Show"}
      </Button>
    
    <div className="container">
      <div className={show?"":"d-none"}>
      {homeworldArray.map((homeworld,index) => (
      <Radio key={index} homeworld={homeworld} />
    ))}

      <div className="row">
    {characters.map((character) => (
      <Card key={character.id} character={character} />
    ))}
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
