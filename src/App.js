import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css';
import Login from './components/Login'
import Pokemons from './components/Pokemons'
import PokemonInfo from './components/PokemonInfo'
import ProtectedRoutes from './components/ProtectedRoutes'


function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Login/>}/>
          
          <Route element={<ProtectedRoutes/>}>
            <Route path='/pokedex' element={<Pokemons/>}/>
            <Route path='/pokedex/:id' element={<PokemonInfo/>}/>
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
