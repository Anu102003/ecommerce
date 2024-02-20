import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { SignUpInPage } from '../pages/SignUpInPage/SignUpInPage'
import { HomePage } from '../pages/Homepage/HomePage'


export const Router = () => {
    

    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<SignUpInPage />} />

                    <Route path="/signin" element={<SignUpInPage/>} />
                    <Route path="/home" element={<HomePage /> }/>

                    <Route path="/*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
