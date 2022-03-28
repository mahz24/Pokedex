import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Loggin from "./components/Loggin";
import Pokedex from "./components/Pokedex";
import PokedexInfo from "./components/PokedexInfo";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Loggin />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
            <Route path="/pokedex/:id" element={<PokedexInfo />} />
          </Route>
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
