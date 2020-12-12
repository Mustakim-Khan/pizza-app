import React, { useEffect, useState } from 'react';
//import axios from 'axios';
import './App.css';
import Recipe from './components/Recipe'

function App() {
  const APP_ID = '95ec61a2';
  const APP_KEY = 'e8688d6d53d695990a886ee267621b02';

  const [counter, setCounter] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query,  setQuery] = useState('chicken');

  const incCounter = () => {
    setCounter(counter+1);
  };

  useEffect(() => {
    console.log('Effect');
    getRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);
  
  const getRecipes = async () => {
    console.log('fetching data...');
    const res = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await res.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const getSearch =(e) => {
    e.preventDefault();
    setQuery(search);
    console.log(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch} >
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
        <h1 onClick={ incCounter }>{ counter }</h1>
      </form>
      <div className="recipes">
        {
          recipes.length === 0 ? <h2>No recipes found :(</h2> :
          recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
