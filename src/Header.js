import React from 'react'
import loginfo from './image/admin.png'
import GoogleBar from './GoogleBar';
function Header() {

    return (
        <div>
            <nav>
                <img className="loginImage" className="image" src={loginfo} alt="loginimage" />
            </nav>

        </div>
    )
}
export default Header

