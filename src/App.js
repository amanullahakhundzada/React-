import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         React is cool 
        </p>
        <h1>heading</h1>
        <p>paragraph element</p>
        <ul>
          <li>fist</li>
          <li>second</li>
          <li>third</li>
          <li>fourth</li>
          
        </ul>
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
                          