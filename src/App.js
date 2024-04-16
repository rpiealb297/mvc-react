import logo from './logo.svg';
import './App.css';
import PropertiesList from './components/PropertiesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <PropertiesList></PropertiesList>
      </header>
    </div>
  );
}

export default App;
