import { useEffect, useState } from 'react'
import Preloader from "./components/Pre"
import Navbar from './components/Navbar';
import './App.css'

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return(
    <Router>
      <Preloader load={load}>
        <div className='App' id={load ? "no-scroll" : "scroll"}>
          <Navbar/>
        </div>
      </Preloader>
    </Router>
  );
}

export default App
