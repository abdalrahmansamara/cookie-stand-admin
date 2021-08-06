import React from 'react'
import Link from 'next/dist/client/link'
function Header() {
    return (

        <header className='flex  justify-around  w-full box-border  bg-green-500 items-center'>
        {/* <header className='flex justify-between  bg-red-400 text-gray-100 p-4 items-center'> */}
        <h1 className = ' text-4xl p-4  font-semibold'>Cookie Stand Admin</h1>
        <div className='flex flex-row' >
            <p className='mx-2 text-xl p-1 rounded-md bg-green-200 rounded'>rudy</p>
            <p className=' text-xl mx-2 p-1 rounded-md bg-green-600'>Sign Out</p>
        <Link href = '/overview'>
        <a className = 'text-xl mx-2 p-1 rounded-md bg-green-100' >overview</a>
        </Link>
        </div>
        </header>
    )
}

export default Header
