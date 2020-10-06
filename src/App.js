import React from 'react';
import TasksIndex from './Tasks/Index'
import TasksBar from './Tasks/CreateTaskBar'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <TasksBar />
      <TasksIndex />
    </>
  )
  /*
  return (
    <BrowserRouter>
      <div>
      <div className="Menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pokemons">Pokemons</Link>
          </li>
        </ul>
      </div>
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/pokemons">
            <PokemonIndex />
          </Route>
          <Route exact path="/pokemons/:id">
            <ShowPokemon />
          </Route>

        </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
  */
}

export default App;
