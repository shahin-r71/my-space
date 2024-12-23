import Link from 'next/link'
import React from 'react'
import SignIn from './signIn'
import SignOut from './signout'


const Navbar = () => {
  
  return (
    <nav className='flex justify-between items-center bg-blue-600 p-5 rounded h-full text-white'>
        <p className='text-3xl font-bold'>
          <Link href={"/"}>MySpace</Link>
        </p>

        <ul className='flex justify-end gap-8 items-center w-1/2 text-xl underline'>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          
          <li>
            <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link href={"/users"}>Users</Link>
          </li>
          <li>
            {/* <Link href={"/api/auth/signin"}><SignIn /></Link> */}
            <SignIn/>
          </li>
          <li>
            {/* <Link href={"/api/auth/signout"}><SignOut /></Link> */}
            <SignOut/>
          </li>
          
        </ul>
        
    </nav>
  )
}

export default Navbar