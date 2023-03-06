import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'; 


function App() {
  const[responseData, setResponseData] = useState([]);
  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response)=> {
        console.log(response.data.results);
        setResponseData(response.data.results);
      })
      .catch((err) => console.log(err));
  },[]);




  return (
    <div className="App">
      <h1>Pokemon:</h1>
      <ul>
        {responseData.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
