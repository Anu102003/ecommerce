import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Redux/Action';
import { useNavigate } from 'react-router-dom';
import { basic } from '../../images';
import "./_navBar.scss"

export const NavBar = () => {
    const user = useSelector(state => state.user);
    const navigate = useNavigate();
    const { email } = useSelector(state => state.user);
    console.log(email)
    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(logout());
        navigate("/signin")
    };
    return (
        <div className='navbar'>
            <div className='navbar__logo'>
                <img src={basic.logo} />
            </div>
            <div className='navbar__contents'>
                <div className='search'>
                    <input type='text' />
                </div>
                <div className='menu'>
                    <p className='content'>Home</p>
                    <p className='content'>Mens</p>
                    <p className='content'>Womens</p>
                    <p className='content'>Electronics</p>
                    <p className='content'>Mobiles</p>
                </div>
                <div className='icon'>
                    <div className='icon__profile'>
                        Profile
                    </div>
                    <div className='icon__whishlist'>
                        Wishlist
                    </div>
                    <div className='icon__cart'>
                        Cart
                    </div>
                </div>
            </div>
            <button onClick={handleLogout}>Logout</button>


        </div>
    )
}
