import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCocktail'
import Error from './pages/Error'

//import components
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <h2>Happy Hour App</h2>
    </div>
  );
}

export default App;
