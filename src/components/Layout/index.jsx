import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Context } from '../../utils/Store'
import ChangeLanguage from '../ChangeLanguage'
import Navbar from '../Navbar'
import { GlobalStyle } from './Layout.styles'

const Layout = () => {

    const [theme] = useContext(Context)

    const themeContent = () => {
        switch (theme) {
            case "dark":
                return {
                    background: "#1e1e20",
                    foreground: "#f5f5f5",
                    light_foreground: "#a0a0a0",

                }
            case "light":
                return {
                    background: "#f5f5f5",
                    foreground: "#1e1e20",
                    light_foreground: "#808080",
                }
        }
    }

    return (
        <ThemeProvider theme={themeContent}>
            <GlobalStyle />
            <Navbar />
            <Outlet />
            <ChangeLanguage />
        </ThemeProvider>
    )
}

export default Layout