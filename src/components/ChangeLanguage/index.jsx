import { changeLanguage } from 'i18next'
import React, { useContext } from 'react'
import { Context } from '../../utils/Store'


const ChangeLanguage = () => {

    const [theme, changeTheme] = useContext(Context)

    return (
        <>
            <button onClick={() => changeLanguage('es')}>🇪🇸</button>
            <button onClick={() => changeLanguage('en')}>🇺🇸</button>
            <button onClick={changeTheme}>{theme}</button>
        </>
    )
}

export default ChangeLanguage