import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  // State to store Pokemon data
  const [data, setData] = useState(null);

  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch Pokemon data from the PokeAPI
  const fetchData = async () => {
    try {
      // Make a request to the PokeAPI based on the search term
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`);
      
      // Check if the request was successful
      if (response.ok) {
        // Parse the response JSON and set the data state
        const result = await response.json();
        setData(result);
      } else {
        // Log an error message if the request was not successful
        console.error('Error fetching data:', response.status, response.statusText);
      }
    } catch (error) {
      // Log an error message if there's an exception during the fetch
      console.error('Error fetching data:', error);
    }
  };

  // Effect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, [searchTerm]); // Fetch data whenever the search term changes

  // Function to handle the search button click
  const handleSearch = () => {
    fetchData();
  };

  return (
    <>
      <div>
        {/* Input field for the user to enter the Pokemon name */}
        <input 
        placeholder='Search'
          type="text" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        {/* Button to trigger the search */}
        <button onClick={handleSearch} >Search</button>
      </div>

      {/* Display Pokemon information if data is available */}
      {data && (
        <div className='bg-amber-300'>
          {/* Pokemon name */}
          <h2 className=''>{data.name}</h2>
          <img className=''
          width='150px' height='150px' src={ data && data.sprites ? data.sprites.front_default : ''}></img>
          
          {/* Base Experience, Height, and Weight */}
          <p>Base Experience: {data.base_experience}</p>
          <p>Height: {data.height}</p>
          <p>Weight: {data.weight}</p>

          {/* Abilities */}
          {/* If it exists, map through abilities and join names into a string  
          If it doesn't exist, display 'N/A'*/}
          <p>Abilities: {data.abilities ? data.abilities.map((ability) => ability.ability.name).join(', ') : 'N/A'}</p>

          {/* Moves */}
          <p>Moves: {data.moves ? data.moves.map((move) => move.move.name).join(', ') : 'N/A'}</p>

          {/* Stats */}
          {data.stats && data.stats.length > 0 ? (
            <p>
              Stats:
              <ul>
                {data.stats.map((stat) => (
                  <li key={stat.stat.name}>{stat.stat.name}: {stat.base_stat}</li>
                ))}
              </ul>
            </p>
          ) : (
            <p>No stats available</p>
          )}

          {/* Types */}
          <p>Types: {data.types ? data.types.map((type) => type.type.name).join(', ') : 'N/A'}</p>
        </div>
      )}
    </>
  );
}

export default App;
