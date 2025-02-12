import React from 'react';

const Clock = ({ time }) => {
  return (
    <div className="clock">
      <h1 className="clock-time">{time.toLocaleTimeString()}</h1>
    </div>
  );
};

export default Clock;