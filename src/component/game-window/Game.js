// import React, { useEffect, useState } from 'react';

// function Game() {

//   const [todos, setTodos] = useState([]);
//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch('https://api.imgflip.com/get_memes')
//         .then((response) => response.json())
//         .then((data) => setTodos(data))
//         .catch((error) => console.error('Error fetching data:', error));
// };
//   return (
//     <div>
//       {todos.map((todo) => (
//                     <li key={todo.id}style={todo.completed?{color:'red'}:{color:"green"}}>{todo.title}</li>
//       ))}
//     </div>
//   )
// }

// export default Game

import React, { useState } from 'react'
import './Game.css';

function Game() {
  const [memes, setMemes] = useState([]);
    const [randomMeme, setRandomMeme] = useState(null);

    const fetchData = () => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((data) => setMemes(data.data.memes))
            .catch((error) => console.error('Error fetching data:', error));
    };

    const generateRandomMeme = () => {
        if (memes.length > 0) {
            const randomIndex = Math.floor(Math.random() * memes.length);
            setRandomMeme(memes[randomIndex]);
        } else {
            alert('Please fetch memes first.');
        }
    };
  return (
    <div>
      <h1>Random Meme Generator</h1>
            <button onClick={fetchData}>Fetch Memes</button>
            <button onClick={generateRandomMeme}>Generate Random Meme</button>
            {randomMeme && (
                <div>
                <h2>{randomMeme.name}</h2>
                    <img src={randomMeme.url} alt={randomMeme.name} />
                </div>
            )}
    </div>
  )
}

export default Game
