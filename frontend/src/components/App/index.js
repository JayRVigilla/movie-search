import './App.css';
import SearchBar from '../SearchBar';

function App() {
  
const handleSubmit = (evt) =>{
  evt.preventDefault()
  console.log(`### submit hit ###`)
}

  return (
    < SearchBar handleSubmit={handleSubmit} />
  );
}

export default App;
