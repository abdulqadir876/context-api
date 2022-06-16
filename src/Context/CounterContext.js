import { useState, createContext } from "react";
// components
export const CounterContext = createContext()

// App - main page
const CounterContextProvider = ({children}) =>{
    const [count, setCount] = useState(0)

    const increase = () =>{
      setCount(count + 1)
    }
    const decrease = () =>{
      setCount(count - 1)
    }
const value = {count, increase, decrease}
    return(
        <CounterContext.Provider value={value}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContextProvider