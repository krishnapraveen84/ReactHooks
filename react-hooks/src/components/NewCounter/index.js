import { useReducer, useEffect, useLayoutEffect } from "react";

const NewCounter = () => {
    useEffect(() => console.log("useEffect Hook Called..."), [])
    useLayoutEffect(() => console.log("useLayout Hook Called...."))
    const reducer = (state, action) => {
        switch(action.type){
            case('increase'):
                return {count: state.count + 1}
            case('decrese'):
                return {count: state.count - 1}
            case('input'):
                return {count: action.payload}
            default:
                return state

        }
    }
    const [state, dispatch]  = useReducer(reducer, {count: 0})
    return(
        <div style={{display: "flex", justifyContent: "center"}}>
            <p className='value'>Count: {state.count}</p>
            <button className='btn' onClick={() => dispatch({type: "increase"})}>Increment</button>
            <button className='btn' onClick={() => dispatch({type :"decrese"})}>Decrement</button>
            <input type="number" onChange={(e) => dispatch({type: "input", payload: Number(e.target.value)})} value={state.count} />
        </div>
    )
};

export default NewCounter
