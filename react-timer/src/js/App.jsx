import { useState } from 'react';
import '../css/App.css';
import Timer from './components/Timer';

function App() {
  const [timerVisible, setTimerVisible] = useState(false);

  function showTimerChangeHandler(evt) {
    const isChecked = evt.target.checked;
    setTimerVisible(isChecked);
  }

  // conditional rendering outside the JSX (keeps the JSX cleaner)
  const timerPart = timerVisible ? <Timer time={10} /> : <p>No Timer today</p>;

  return (
    <div className="App">
      <h1>Hello World!</h1>

      <label htmlFor="show-timer-chkbox">Show Timer</label>
      <input type="checkbox" id="show-timer-chkbox" onChange={showTimerChangeHandler} />
      
      {
        // Conditional rendering inside of JSX

        // Show/Hide depending on a condition
        //timerVisible && <Timer time={10} />

        // Show one thing or another depending on condition
        timerVisible ? <Timer time={10} /> : <p>No Timer today</p>
      }

      {timerPart}

    </div>
  );
}

export default App;
