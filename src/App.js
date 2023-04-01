import './App.css';
import Start from './imageOver'
import Reasons from './reasons'
import ConfettiEffect from './confetti';
import CJF12 from '../src/CJF12.png'

function App() {

  const repeatingBg = {
    backgroundImage: `url(${CJF12})`,
    backgroundRepeat: 'repeat',
    padding: 0
  }

  return (
    <div className="App" style={{ backgroundColor: '#61FF00' }} >
      <header className="App-header" style={repeatingBg}>
        <ConfettiEffect />
        <div  style={{backgroundColor:'#61FF00'}}>
          <h1 className="rainbow-text">Why does Jun Foongy suck</h1>
        </div>

        <Start />
      </header>
      <Reasons id="target-element"/>
    </div>
  );
}

export default App;
