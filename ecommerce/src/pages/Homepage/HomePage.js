import React from 'react'
import "./_homePage.scss"
import { useSelector } from 'react-redux';
export const HomePage = () => {
    const user=useSelector(state=>state.user);
    console.log(user?.state)
    return (
        <div>HomePage   
             {user.email}
        </div>
    )
}
