import React, { useEffect, useState} from 'react'
import { auth, provider } from '../../auth/ConfigFirebase'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../Redux/Action';
export const SignIn = () => {
    const navigate = useNavigate();
    const dispatch=useDispatch();

    //logining into firebase
    const handelSignIn = () => {
        signInWithPopup(auth, provider).then((result) => {
            dispatch(
                setUser({
                    email: result.user.email,
                    authenticate: true
                })
            )
            localStorage.setItem("email", result.user.email)
            navigate("/home")
        }
        )
    }

    useEffect(() => {
        dispatch(
            setUser({
                email:localStorage.getItem("email")
            })
        )
    },[dispatch])

    // calling refresh token at after 6 hrs
    setTimeout(() => {
        localStorage.clear('email');
        console.log('Local storage cleared after 6 hrs');
        dispatch(
            setUser({
                email:'',
                authenticate:false
            })
        )
    }, 21600000);

    return (
        <div>
            <button onClick={handelSignIn}>SignIn with Google</button>
        </div>
    )
}

