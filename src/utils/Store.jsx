import React, { useEffect, useState } from "react"

const initialTheme = 'dark'


export const Context = React.createContext();

const Store = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || initialTheme)

    useEffect(() => {
        localStorage.setItem('theme', theme)
    },[theme])

    const changeTheme = () => {
        setTheme((prev) => prev === 'dark' ? 'light' : 'dark')
    }

    return <Context.Provider value={[theme, changeTheme]}>
        {children}
    </Context.Provider>

}

export default Store;