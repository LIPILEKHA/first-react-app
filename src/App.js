import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>This is my first React app</h1>
        <p>
          I <code>am</code> Lipilekha
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a
  className="App-link"
  href="https://www.javatpoint.com/"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn Java at JavaPoint
</a>

      </header>
    </div>
  );
}

export default App;
