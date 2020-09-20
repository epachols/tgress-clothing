import React from 'react'
import "./header.style.scss"
import {Link} from 'react-router-dom'

import { ReactComponent as Logo} from '../../assets/crown.svg';

export default function Header() {
    return (
        <div  className='header'>
            <Link to="/" >
                <Logo className="logo"></Logo>
            </Link>
            <div className="options">
                <Link className="option" to='shop'>SHOP</Link>
                <Link className="option" to='shop'>BASKET</Link>
                
            </div>
        </div>
    )
}
