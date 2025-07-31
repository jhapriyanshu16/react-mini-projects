import { useState } from 'react';
import './App.css';
import Reveal from './components/Reveal';
import Container from './components/Container';

function App() {
  let [counter, setCounter] = useState(0);

  const incCounter = () => {
    setCounter(counter + 1); // No need to assign counter manually
  };

  const decCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert('Counter cannot go below 0. Minimum point reached!!!');
    }
  };

  return (
    <>
      {/* Uncomment below if needed:
      <h1>Counter App</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={incCounter}>Increase Counter</button>
      <button onClick={decCounter}>Decrease Counter</button>
      <Reveal /> 
      */}

      {/* Uncomment to show grid:
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        <Container name="Erin Lindford" desig="Product Engineer" />
        <Container name="Priyanshu Jha" desig="Software Developer" />
        <Container name="Alex Smith" desig="UI Designer" />
        <Container name="Ravi Kumar" desig="Backend Engineer" />
        <Container name="Aisha Roy" desig="Data Analyst" />
        <Container name="John Doe" desig="DevOps Engineer" />
      </div>
      */}

    </>
  );
}

export default App;
