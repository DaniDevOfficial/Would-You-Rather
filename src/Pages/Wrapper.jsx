import React, { useState, useEffect } from 'react'
import { Account } from './Account'
import { Route, Routes, useLocation } from 'react-router-dom';
export function Wrapper() {
    const [userName, setUserName] = useState("")

    const location = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location.pathname]);

    return (
        <>
            <Routes>
                <Route path="/" element={<Account setUserName={setUserName} />} />
            </Routes>
            {userName && <h2>Hello, {userName}</h2>}
        </>
    )
}