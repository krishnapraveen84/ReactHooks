import {useState, useEffect, useRef, useMemo, useCallback} from 'react'
import './index.css'
import Footer from '../Footer';


const Counter = () => {
    const [value, setValue] = useState(0);
    const count = useRef(0); 
    const [number, setNumber] = useState(0)
    // the useEffect can only triggers when ever the state of component changes but here using ref it won't happen
    
    const inputEl = useRef();

    const increment = () => {
        setValue(prevValue => prevValue + 1);
    };
    const decrement = () => {
        setValue(prevValue => prevValue - 1);
    };
    const cubeOfNumber = (num) => {
        console.log("calculation done...!")
        return Math.pow(num, 3)
    }
    
    useEffect(() => {
        count.current = count.current + 1
    })
    const newFunction = useCallback( () => {}, []);
    
    const result =  useMemo(() => cubeOfNumber(number), [number])
    return (
        <div className='counter-div'>
            <h3>Counter using useState Hook</h3>
            <p className='value'>{value}</p>
            <button className='btn' onClick={increment}>Increment</button>
            <button className='btn' onClick={decrement}>Decrement</button>
            <h3>Render Count using useRef</h3>
            <p>Render Count : {count.current}</p>
            <h4>Accessing the Elements Using useRef</h4>
            <h3>Used useMemo Hook</h3>
            <input type='text' value={number} onChange={(e) => setNumber(e.target.value)} ref={inputEl} />
            <p>Cube of Number : {result}</p>
            <h3>useCallback Hook</h3>
            <Footer newFun={newFunction} />
            <h3>useReducer Hook</h3>
        </div>
    )
}

export default Counter