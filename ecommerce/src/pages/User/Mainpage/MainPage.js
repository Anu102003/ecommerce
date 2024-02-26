

import React, { useEffect, useState } from 'react';
import "./_mainPage.scss"
import { db } from "../../../Config/ConfigFirebase";
import { collection, getDocs } from "firebase/firestore";
import { NavbarPopup } from '../../../assets/components/NavbarPopup/NavbarPopup';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar'

export const MainPage = () => {
    const [navPopup, setNavPopup] = useState(false)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productsCollection = collection(db, "products");
                const querySnapshot = await getDocs(productsCollection);

                const productsData = [];
                querySnapshot.forEach((doc) => {
                    productsData.push({ id: doc.id, ...doc.data() });
                });

                setProducts(productsData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);

    console.log(products);

    return (
        <>
            <div className='homepage'>
                <NavBar navPopup={navPopup} setNavPopup={setNavPopup} />
                {
                    navPopup &&
                    <NavbarPopup setNavPopup={setNavPopup} />
                }
                <Outlet />
            </div>

        </>
    );
}
