import React, { useEffect } from 'react';
import './App.css';
// import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/layout/Navbar';
import Router from './router/index';




function App(props) {

  useEffect(() => {
    document.title = "PokeDex"
  }, [])

  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container">
          <Router />
        </div>
      </div >
    </>
  );
}

export default App;
