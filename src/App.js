import React from 'react';
import './App.css';

function App() {
  const APP_ID = '95ec61a2';
  const APP_KEY = 'e8688d6d53d695990a886ee267621b02';

  const ex = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`;

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text"/>
        <button className="searchButton" type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
