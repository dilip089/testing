import React, { createContext } from 'react'
import Child1 from "./Child1"
export const data = createContext()
const Home = () => {
    const name = "ABC"
    return (
        <div className="App">
            <data.Provider value={name}>
                <Child1 />
            </data.Provider>
        </div>
    )
}

export default Home
