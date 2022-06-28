import logo from './logo.svg';
import './App.css';
const axios = require('axios')
function App() {
  return (
    <div className="App">
        <button onClick={hitBackend}>Send request</button>

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
    </div>
  );
}
const hitBackend = () => {
    console.log("dupa");
    axios.get('http://localhost:8080/test').then((response) => {console.log(response.data)});
}
export default App;
