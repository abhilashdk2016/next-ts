'use client';
import { MyContext } from '@/context/context';
import { useContext } from 'react';

const ContextTest = () => {
    const context = useContext(MyContext);
    if(!context) {
        throw new Error("Context should be used with MyContextProvider")
    }
    const { count, increment, decrement } = context;
  return (
    <div>
        <p>Count: {count}</p>
        <input type="button" value={"+"} onClick={increment} />
        <input type="button" value={"-"} onClick={decrement} />
    </div>
  )
}

export default ContextTest