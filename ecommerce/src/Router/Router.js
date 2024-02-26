import React, { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { PageNotFound } from '../pages/PageNotFound/PageNotFound'
import { SignIn } from '../pages/SignUpInPage/SignIn'
import { MainPage } from '../pages/User/Mainpage/MainPage'
import { HomePage } from '../pages/User/HomePage/HomePage'
import { useSelector } from 'react-redux'
import { MenPage } from '../pages/User/MenPage/MenPage'
import { WomenPage } from '../pages/User/WomenPage/WomenPage'
import { ElectronicPage } from '../pages/User/ElectronicPage/ElectronicPage'
import { MobilePage } from '../pages/User/MobilePage/MobilePage'
import { AdminPage } from '../pages/Admin/AdminPage/AdminPage'
import { Dashboard } from '../pages/Admin/Dashboard/Dashboard'
import { Products } from '../pages/Admin/Products/Products'
import { Customer } from '../pages/Admin/Customer/Customer'
import { Payments } from '../pages/Admin/Payments/Payments'
import { Orders } from '../pages/Admin/Orders/Orders'

export const Router = () => {
    const { email, authenticated } = useSelector(state => state.user);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        if (email.email === "anusumathi2003@gmail.com") {
            setAdmin(true);
        }
    }, [email])
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* <Route path="/signin" element={!authenticated ? <SignIn /> : admin ? <Navigate to="/dashboard" /> : <Navigate to="/home" />} /> */}
                    <Route path="/signin" element={!authenticated ? <SignIn /> : admin ? <Navigate to="/products" /> : <Navigate to="/home" />} />
                    <Route path="/" element={(authenticated && !admin) ? <MainPage /> : <Navigate to="/signin" />} >
                        <Route index element={(authenticated && !admin) ? <HomePage /> : <Navigate to="/signin" />} />
                        <Route path="/home" element={(authenticated && !admin) ? <HomePage /> : <Navigate to="/signin" />} />
                        <Route path="/men" element={(authenticated && !admin) ? <MenPage /> : <Navigate to="/signin" />} />
                        <Route path="/women" element={(authenticated && !admin) ? <WomenPage /> : <Navigate to="/signin" />} />
                        <Route path="/electronics" element={(authenticated && !admin) ? <ElectronicPage /> : <Navigate to="/signin" />} />
                        <Route path="/mobile" element={(authenticated && !admin) ? <MobilePage /> : <Navigate to="/signin" />} />
                    </Route>

                    {/* <Route path="/" element={(authenticated && admin) ? <AdminPage /> : <Navigate to="/signin" />} >
                        <Route index element={(authenticated && admin) ? <Dashboard /> : <Navigate to="/signin" />} />
                        <Route path="/dashboard" element={(authenticated && admin) ? <Dashboard /> : <Navigate to="/signin" />} />
                        <Route path="/products" element={(authenticated && admin) ? <Products /> : <Navigate to="/signin" />} />
                        <Route path="/orders" element={(authenticated && admin) ? <Orders /> : <Navigate to="/signin" />} />
                        <Route path="/customer" element={(authenticated && admin) ? <Customer /> : <Navigate to="/signin" />} />
                        <Route path="/payments" element={(authenticated && admin) ? <Payments /> : <Navigate to="/signin" />} />
                    </Route> */}
                     <Route path="/" element={(authenticated && admin) ? <AdminPage /> : <Navigate to="/signin" />} >
                        <Route index element={(authenticated && admin) ? <Dashboard /> : <Navigate to="/signin" />} />
                        <Route path="/dashboard" element={(authenticated && admin) ? <Dashboard /> : <Navigate to="/signin" />} />
                        <Route path="/products" element={(authenticated && admin) ? <Products /> : <Navigate to="/signin" />} />
                        <Route path="/orders" element={(authenticated && admin) ? <Orders /> : <Navigate to="/signin" />} />
                        <Route path="/customer" element={(authenticated && admin) ? <Customer /> : <Navigate to="/signin" />} />
                        <Route path="/payments" element={(authenticated && admin) ? <Payments /> : <Navigate to="/signin" />} />
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
