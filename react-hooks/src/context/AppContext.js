import { createContext} from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
    const num = "6302757547";
    const name = "Krishna Praveen";
    return(
        <AppContext.Provider value={{num, name}}>
            { props.children }
        </AppContext.Provider>
    )
}

export default ContextProvider