import Reacr, {createContext, useContext, useReducer} from "react";


//Prepares datalayer
export const StateContext= createContext();
 // Wrap our app and provides the datalayer
export const StateProvider = ({reducer, initialState, children}) =>(
    <StateContext.Provider value ={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
);
//Pull information from data  layer
export const useStateValue =() =>  useContext(StateContext);