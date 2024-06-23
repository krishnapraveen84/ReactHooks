import { useEffect, useState } from "react";


const useLocalStorageHook = (key, intialValue) => {
    
    const [name,  setName] = useState(
        localStorage.getItem(key) ?  localStorage.getItem(key) : intialValue
    )
    
    useEffect(() => {
        localStorage.setItem(key, name)
    }, [key, name])

    return [name, setName]

};
export default useLocalStorageHook;