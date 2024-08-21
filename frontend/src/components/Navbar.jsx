import React from 'react';
import { Link } from 'react-scroll';
import Button from '../pages/Button';

const Navbar = () => {
    return (
        <div className='fixed w-full'>
            <div>
                <div className='flex flex-row justify-between p-5 md:px-32 px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
                    <div className='flex flex-row items-center cursor-pointer'>
                        <h1 className='text-xl font-semibold'>Byte Me Bistro</h1>
                    </div>
                    <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8 cursor-pointer'>
                        <Link to="home" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all'>Home</Link>
                        <Link to="menu" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all'>Menu</Link>
                        <Link to="about" spy={true} smooth={true} duration={500} className='hover:text-brightColor transition-all'>About</Link>
                    
                        <Button title = "Sign Up" />
                        <Button title = "Login" />
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navbar