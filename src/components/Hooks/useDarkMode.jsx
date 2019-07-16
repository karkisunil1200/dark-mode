import React, {useEffect} from 'react'

import useLocalStorage from './useLocalStorage';

function UseDarkMode() {
    const[dark, setDarkMode] = useLocalStorage("darkmode")

    useEffect( () => {
       dark ? document.body.classList.add("dark-mode") : document.body.classList.remove("dark-mode")
    }, [dark])
    
    return [dark, setDarkMode];

    
}

export default UseDarkMode;
