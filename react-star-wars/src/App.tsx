import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './App.css'
import Card from './components/card'
import { characters } from './data/data'

function App() {

  const [show, setShow] = useState(false);

const ShowCharacters= ()=>{
  setShow(!show) 
  console.log(show)
}
  return (
    <>
      <Button variant="danger fs-5" className="mb-3" onClick={ShowCharacters}>
        {show?"Hide":"Show"}
      </Button>
    
    <div className="container">
      <div className={show?"":"d-none"}>
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
