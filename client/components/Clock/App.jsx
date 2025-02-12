import { useState, useEffect } from 'react';
import Clock from './Clock';

const App = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock-app">
      <Clock time={time} />
    </div>
  );
};

export default App;