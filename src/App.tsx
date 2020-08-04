import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Motion, spring } from 'react-motion';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Motion defaultStyle={{ width: 0 }} style={{ width: spring(100) }}>
          {value => <img src={logo} style={value} className="App-logo" alt="logo" />}
        </Motion>
          <Motion defaultStyle={{ rotate: 0}} style={{ rotate: spring(180)}}>
            {style => <p style={{transform: `rotate(${style.rotate}deg)`}}>Edit <code>src/App.tsx</code> and save to reload.</p>}
          </Motion>
          
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
