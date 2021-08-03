import React from 'react'
import Link from 'next/dist/client/link'
function Header() {
    return (
        <header className='flex  justify-between  w-full box-border  bg-green-500 items-center'>
        {/* <header className='flex justify-between  bg-red-400 text-gray-100 p-4 items-center'> */}
        <h1 className = ' text-4xl p-4  font-semibold'>Cookie Stand Admin</h1>
        <Link href = '/overview'>
        <a className = 'text-blue-800 text-xl underline' >Overview</a>
        </Link>
        </header>
    )
}

export default Header
