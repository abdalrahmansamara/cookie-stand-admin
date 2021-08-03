import React from 'react'
import Link  from 'next/link'
function out() {
    return (
        <div>
        <Link href = '/'>
        <a  className = 'text-blue-800 text-2xl underline'>Home</a>
        </Link>
        </div>
    )
}

export default out
