import { createContext, useContext, useReducer, } from "react";


//This is Data-Layer
export const StateContext = createContext();

//This is State-Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);   