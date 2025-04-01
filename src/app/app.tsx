// Uncomment this line to use CSS modules
import styles from './app.module.css';
import Home from '../pages/Home';

import PokemonDetails from '../pages/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from '../pages/Favorites';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
