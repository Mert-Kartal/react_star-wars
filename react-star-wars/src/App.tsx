import './App.css'
import Card from './components/card'
import { characters } from './data/data'
function App() {

  return (
    <>
    <div className="container">
      <div className="row">
    {characters.map((character) => (
      <Card key={character.id} character={character} />
    ))}
    </div>
    </div>
    </>
  );
}

export default App;
