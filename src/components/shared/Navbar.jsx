import React, { Suspense } from 'react';
import NavLink from './NavLink';
import user from '@/assets/user.png'
import Image from 'next/image';
import Link from 'next/link';
const Navbar = () => {
    const links = <>
    <Suspense fallback={<div>loading....</div>}>
            <li><NavLink href={"/"}>Home</NavLink></li>
    <li><NavLink href={"/aboutus"}>About</NavLink></li>
    <li><NavLink href={"/career"}>Career</NavLink></li>
    
    </Suspense>

    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">DragonNews</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <div className='flex flex-col md:flex-row justify-between gap-4 items-center'>
      <Image src={user} width={40} height={30} alt='user'></Image>
    <Link href={'/login'} className="btn">Login</Link>  
    </div>
    
  </div>
</div>
    );
};

export default Navbar;