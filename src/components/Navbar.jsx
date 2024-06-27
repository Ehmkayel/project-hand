"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
   return (
    <nav className="flex border-1 z-20 mx-auto px-5 lg:px-10 items-center justify-between h-10 lg:h-24 max-w-[1728px]">
        <Link href="/">
            <Image src="/logo.svg" alt="logo" width={61} height={24}/>
        </Link>
        <ul className="hidden lg:flex">
            <li href="/" className="p-4 text-red-500">Home</li>
            <li href="/" className="p-4 text-gray">About Us</li>
            <li href="/" className="p-4 text-gray">Services</li>
            <li href="/" className="p-4 text-gray">Blog</li>
            <li href="/" className="p-4 text-gray">Contact Us</li>
        </ul>
        <a href="/" className="hidden lg:flex bg-black text-white  hover:text-gray py-3 px-4 rounded-lg">Start a Project</a>
        <div onClick={handleNav} className="block lg:hidden">
            {!nav ? <AiOutlineClose size={30}/> :<AiOutlineMenu size={30} /> }
        </div>
        <div className={!nav ? "lg:hidden fixed left-0 top-0 w-[60%] border-r border-r-yellow h-full bg-lightYellow ease-in-out duration-300": "fixed left-[-100%]"}>
        <Link href="/">
            <Image src="/logo.svg" alt="logo" width={61} height={24} className="m-8"/>
        </Link>
        <ul className="p-4 uppercase text-center lg:hidden">
            <li className="mb-4"><Link href="/" className="hover:text-gray">Home</Link></li>
            <li className="mb-4"><Link href="/" className="hover:text-gray">About Us</Link></li>
            <li className="mb-4"><Link href="/" className="hover:text-gray">Services</Link></li>
            <li className="mb-4"><Link href="/" className="hover:text-gray">Blog</Link></li>
            <li className="mb-4"><Link href="/" className="hover:text-gray">Contact Us</Link></li>
            
        </ul>
        <a href="/" className="p-4 uppercase  bg-black py-3 px-4 text-white hover:text-gray block mx-auto text-center w-max rounded-lg">Start a Project</a>
        </div>
    </nav>
  )
}

export default Navbar