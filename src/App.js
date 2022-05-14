import logo from './logo.svg';
import './App.css';

function App() {

  let callBackend = (e) => {
    fetch('http://localhost:3001/').then(res => res.json()).then(data => {
      console.log(data)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <button onClick={callBackend}>
           Calling Backend
        </button>
      </div> 
    </div>
  );
}

export default App;
