import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";




const Navbar = () => {

    let [menuShow, setMenuShow] = useState(false)

    const handleMenu = () => {
        setMenuShow(!menuShow);
    }
    console.log(menuShow);


    return (
        <nav className='py-4 bg-green-300'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="">
                        <img src={Logo} alt="" />
                    </div>
                    <div className="">
                        <ul className={`lg:flex lg:gap-12 lg:items-center lg:static ${menuShow == true ? 'duration-500 ease-in-out absolute top-20 left-0 w-full bg-primary text-center' : 'absolute top-20 -left-96 w-full'}`}>
                            <li className='hover:text-primary'>Home</li>
                            <li className='hover:text-primary'>Pages</li>
                            <li className='hover:text-primary'>Products</li>
                            <li className='hover:text-primary'>Blog</li>
                            <li className='hover:text-primary'>Shop</li>
                            <li className='hover:text-primary'>Contact</li>
                            <li><div className="flex items-center justify-center">
                                <input type="search" className='border-2 lg:w-64 w-36 h-10 outline-none' />
                                <div className="h-10 px-8 bg-primary flex items-center">
                                    <CiSearch className='text-xl text-white' />
                                </div>
                            </div></li>
                        </ul>
                    </div>

                    <div onClick={handleMenu} className="lg:hidden">
                        {menuShow === true ? <RxCross2 /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
