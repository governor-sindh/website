'use client'
import { useEffect, useState } from 'react';
const Counter = () => {
  const [Counter, setCounter] = useState(0);
  const [loader, setLoder] = useState(true);
  useEffect(() => {
    fetchCounterValue();
  }, []);

  const fetchCounterValue = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/counter');
      const data = await response.json();
      await setCounter(data);
      setLoder(false)
    } catch (error) {
      console.error('Error:', error);
      setLoder(false)
    }
  };

  const incrementCounter = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/counter', {
        method: 'POST',
      });
      const data = await response.json();
      setCounter(data.counter);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <button disabled={loader} onClick={incrementCounter}>Increment</button>
    </div>
  );
};

export default Counter;