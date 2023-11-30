import React from 'react';
import Logo from '../assets/logo.png';

const Header = () => {
    return <header className="py-8">
        <div className="container mx-auto">
            <div className="flex justify-around items-center">
                <a href="#">
                    <img className='rounded-full' src={Logo} alt="logo"/>
                </a>
                <button className="btn btn-sm">Let me kill</button>
            </div>
        </div>
        </header>;
};

export default Header;
