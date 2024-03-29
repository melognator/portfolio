import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import routes from './routes';
import Layout from './components/Layout';
import Store from './utils/Store';

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpApi)
    .init({
        supportedLngs: ['en', 'es', 'cl'],
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
        detection: {
            order: ['cookie', 'localStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage']
        },
        // react: {
        //     useSuspense: false
        // }
    });

i18n.on('languageChanged', (lng) => { document.documentElement.setAttribute('lang', lng); })

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Store><Layout /></Store>}>
                    {routes.map(route =>
                        <Route key={route.key} path={route.path} element={route.element} />)
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
