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
      
      <div>
        <button onClick={callBackend}>
           Calling Backend
        </button>
      </div> 
    </div>
  );
}

export default App;
