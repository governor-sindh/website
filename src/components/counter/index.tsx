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
  return (
    <div className='w-40 text-center'>
      <h1 className='sm:pt-4 pt-3 sm:w-52 w-full sm:text-3xl text-xl text-main text-center tracking-widest font-semibold'>{loader ? "Loading...": Counter}</h1>
      <h1 className='sm:pt-1 sm:ml-4 sm:text-base text-[1.125rem] text-center text-main tracking-wider sm:w-40 w-full'>Applications accepted</h1>
    </div>
  );
};

export default Counter;