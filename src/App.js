import { useState } from 'react';
import './App.css';
import ResultsPage from './components/ResultsPage';
import SpinButton from './components/SpinButton';
import TryLuckPage from './components/tryLuckPage';

function App() {

  const [status, setStatus] = useState("phase1")
  const [offer, setOffer] = useState("")
  const [state, setState] = useState(false)


  function handleSpin() {
    if (!state) {
      let element = document.getElementById("circle")
      let deg = 0;
      element.style.pointerEvents = 'none';
      deg = Math.floor(5000 + Math.random() * 5000)
      // console.log(deg)
      element.style.transition = 'all 10s ease-out';
      element.style.transform = `rotate(${deg}deg)`
      let num = 13 - ((deg % 360) / 360) * 12;
      console.log(num)
      setTimeout(showCode, 10000, num)
      setState(true)
    }
    else {
      alert("Spin in Progress! Please Wait.")
    }

  }

  function showCode(num) {
    if (num >= 1 && num < 2) {
      setOffer("10")
    }
    else if (num >= 2 && num < 3) {
      setOffer("40")
    }
    else if (num >= 3 && num < 4) {
      setOffer("30")
    }
    else if (num >= 4 && num < 5) {
      setOffer("80")
    }
    else if (num >= 5 && num < 6) {
      setOffer("70")
    }
    else if (num >= 6 && num < 7) {
      setOffer("60")
    }
    else if (num >= 7 && num < 8) {
      setOffer("25")
    }
    else if (num >= 8 && num < 9) {
      setOffer("5")
    }
    else if (num >= 9 && num < 10) {
      setOffer("85")
    }
    else if (num >= 10 && num < 11) {
      setOffer("15")
    }
    else if (num >= 11 && num < 12) {
      setOffer("35")
    }
    else if (num >= 12 && num < 1) {
      setOffer("50")
    }
    setStatus("phase3")
  }





  return (
    <div className="outerDiv">
      <div className='innerDiv'>
        <h1>Spin The Wheel</h1>
        <div className='innerContent'>
          <div className='wheel'>
            <div className='theWheel'>
              <div className='arrow'></div>
              <ul className='circle' id='circle'>
                <li>
                  <div className='text' >10%<br />Off </div>
                </li>
                <li>
                  <div className='text' >40%<br />Off</div>
                </li>
                <li>
                  <div className='text' >30%<br />Off</div>
                </li>
                <li>
                  <div className='text' >80%<br />Off</div>
                </li>
                <li>
                  <div className='text' >70%<br />Off</div>
                </li>
                <li>
                  <div className='text' >60%<br />Off</div>
                </li>
                <li>
                  <div className='text' >25%<br />Off</div>
                </li>
                <li>
                  <div className='text' >5%<br />Off</div>
                </li>
                <li>
                  <div className='text' >85%<br />Off</div>
                </li>
                <li>
                  <div className='text' >15%<br />Off</div>
                </li>
                <li>
                  <div className='text' >35%<br />Off</div>
                </li>
                <li>
                  <div className='text' >50%<br />Off</div>
                </li>
              </ul>
            </div>
          </div>
          <div className='textContent'>
            {(status === "phase1") ? <TryLuckPage setStatus={setStatus} /> : (status === "phase2") ? <SpinButton handleSpin={handleSpin} /> : <ResultsPage offer={offer} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;


