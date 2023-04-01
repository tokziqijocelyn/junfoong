import './App.css';
import Start from './imageOver'
import Reasons from './reasons'
import Confetti from './confetti';

function App() {

  return (
    <div className="App" >
      <header className="App-header">
        <Confetti/>
        <h1 className="rainbow-text">Why does Jun Foongy suck</h1>
        <Start />
        <Reasons/>
      </header>
    </div>
  );
}

export default App;
