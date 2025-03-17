// Uncomment this line to use CSS modules
import styles from './app.module.css';
import Home from '../pages/Home';
import NavBar from '../components/Navbar';


export function App() {
  return (
    <div>
      {/* <NavBar onSearch={(searchValue: string) => console.log(searchValue)} /> */}
      <Home />
    </div>
  );
}

export default App;
