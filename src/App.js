import './App.css';
import Start from './imageOver'
import Reasons from './reasons'
import ConfettiEffect from './confetti';
import CJF12 from '../src/CJF12.png'
import { useRef } from 'react';

function App() {

  const targetRef = useRef(null);

  const repeatingBg = {
    backgroundImage: `url(${CJF12})`,
    backgroundRepeat: 'repeat',
    padding: 0
  }

  const handleClick = () => {

    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }


  return (
    <div className="App" style={{ backgroundColor: '#61FF00' }} >
      <header className="App-header" style={repeatingBg}>
        <ConfettiEffect />
        <div style={{ backgroundColor: '#61FF00' }}>
          <h1 className="rainbow-text">Why does Jun Foongy suck</h1>
        </div>

        <Start handleClick={handleClick} />
      </header>
      <div style={{ backgroundColor: "red", padding: 100 }}>
      </div>
      <div style={{ backgroundColor: "red", padding: 100 }}>
      </div>
      <div style={{ backgroundColor: "red", padding: 100 }}>
      </div>
      <div style={{ backgroundColor: "red", padding: 100 }}>
      </div>
      <div style={{ backgroundColor: "red", padding: 100 }}>
      </div>
      <div style={{ backgroundColor: "red", padding: 100 }}>
      </div>
      <Reasons ref={targetRef} />
    </div>
  );
}

export default App;
