// Uncomment this line to use CSS modules
import styles from './app.module.css';
import Home from '../pages/Home';

import PokemonDetails from '../pages/PokemonDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemon/:id" element={<PokemonDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
