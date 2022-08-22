import logo from './logo.svg';
import './App.css';
import Banner from './componentes/Banner/Banner.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner></Banner>
        <p>
          Banner colocado com JSX
        </p>
      </header>
    </div>
  );
}

export default App;
