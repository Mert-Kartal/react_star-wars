import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'
import Card from './components/card'
import Radio from './components/radio';
import { characters } from './data/data'

function App() {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(characters);
  const ShowCharacters= ()=>{
    setShow(!show) 
    console.log(show)
  }
  
  
  const characterLowercase = characters.map((character) => {
    return{
     ...character,
     homeworld: character.homeworld ? character.homeworld.toLowerCase() : "unknown",
   }
  });

  const characterHomeworld = characterLowercase.map((character) => { return character.homeworld})
   
   const homeworldArray = [...new Set( characterHomeworld)]
  
  
   const filterCharacters = (homeworld:string) => {
   const filteredCharacters = characterLowercase.filter((character) => character.homeworld === homeworld)
   
   console.log(filteredCharacters)
   
   return setFilter(filteredCharacters)
   }

return (
    <>
      <Button variant="danger fs-5" className="mb-3" onClick={ShowCharacters}>
        {show?" The Dark Side Of The Force":"Show Me"}  
      </Button>
    
    <div className="container">
      <div className={show?"":"d-none"}>
      {homeworldArray.map((homeworld,index) => (
      <Radio key={index} homeworld={homeworld} filterFunc={filterCharacters}/>
    ))}

      <div className="row">
    {filter.map((character) => (
      <Card key={character.id} character={character} />
    ))}
    </div>
    </div>
    </div>
    </>
  );
}

export default App;
