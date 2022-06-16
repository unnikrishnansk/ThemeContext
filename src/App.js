
import { useContext } from 'react';
import './App.css';
import Meals from './components/Meals';
import Navbar from './components/Navbar';
import Startorder from './components/Startorder';
import Welcome from './components/Welcome';
import { ThemeContext } from './context/Themecontext';

function App() {

  const {islight} = useContext(ThemeContext);
  return (
    <div className={`App ${islight ? "light" : "dark"}`}>
     <Navbar />
     <Startorder />
     <Welcome />
     <Meals />
    </div>
  );
}

export default App;
