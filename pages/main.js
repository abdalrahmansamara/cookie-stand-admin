import React from 'react'
import Link from 'next/link'
import { useState } from 'react'
function Main() {
    const [locations, setLocations] = useState([])


    function submit_handler(event){
      event.preventDefault()
      let new_shop = {
        location: event.target.loc.value,
        minCustomers: event.target.min.value,
        maxCustomers: event.target.max.value,
        avgCookies: event.target.avg.value
      }
      document.querySelectorAll('input').forEach(element=>{
        element.value = ''
      })
      setLocations([...locations, new_shop])
    }
    return (
        <main className = 'min-h-screen'>
        <div id='big_container' className = 'bg-green-400 flex-col flex w-10/12 my-10 p-4  m-auto rounded-md '>
        <h2 className='text-center font-semibold text-2xl' >Create Cookie Stands</h2>
        <br></br>
        <form onSubmit = {submit_handler}>
          <div className='p-3 mb-4'>
          <label className='font-medium'>Location </label>
          <input className='w-11/12 bg-gray-200' name='loc' required />
          </div>
          <div id = 'bottom_container' className = 'flex flex-row mx-auto -space-x-1'>
            <div className='w-1/4'>
              <label className='font-medium'>Minimum Customers per Hour</label>
              <input name='min' type='number' className = 'w-10/12' required />
            </div>
            <div className='w-1/4'>
              <label className='font-medium'>Maximum Customers per Hour</label>
              <input name='max' type='number' className = 'w-10/12' required />
            </div>
            <div className='w-1/4'>
              <label className='font-medium'>Average Cookies per Sale</label>
              <input name = 'avg' type='float' className = 'w-10/12' required />
            </div>
            <button className = 'w-1/4 h-16 bg-green-500 font-bold'>Create</button>
          </div>
        </form>
        </div>
        <p className='text-center text-gray-700 font-semibold'>Report Table Coming Soon...</p>
        <br></br>
        <br></br>
        {
          locations.map(location=>{
            return(
              <p className='text-center text-gray-700 font-semibold'>{JSON.stringify(location)}</p>
            )
          })
        }
        <br></br>
        <br></br>
        <Link href = '/out' className = 'float-right'>
        <a className = 'text-blue-800 text-2xl underline absolute bottom-0 left-0' >Go to the other page</a>
        </Link>
      </main>
    )
}

export default Main
