import logo from './horsefish.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from './utils.js';

// Adding a comment so I can clean up commits


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School Dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access to the full dashboard</p>
      </div>
      <footer className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
