import React from 'react'
import './sign-in-and-up.style.scss'
import SignIn from '../../components/sign-in/sign-in.component'
import SignUp from '../../components/sign-up/sign-up.component'


export default function SignInAndUpPage() {
    return (
        <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
        </div>
    )
}
