import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { SignIn } from '../pages/SignUpInPage/SignIn'
import { HomePage } from '../pages/Homepage/HomePage'
import { useSelector } from 'react-redux'


export const Router = () => {
    const { authenticated } = useSelector(state => state.user);
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={authenticated ? <HomePage /> : <Navigate to="/signin" />} />
                    <Route path="/signin" element={!authenticated ? <SignIn /> : <Navigate to="/" />} />
                    <Route path="/home" element={authenticated ? <HomePage /> : <Navigate to="/signin" />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
