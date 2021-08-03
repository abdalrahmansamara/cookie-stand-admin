import React from 'react'

function CreateForm(props) {
    return (
        <form onSubmit = {props.submit_handler}>
          <div className='p-3 mb-4'>
          <label className='font-medium'>Location </label>
          <input className='w-11/12 bg-gray-100' name='loc' required />
          </div>
          <div id = 'bottom_container' className = 'flex flex-row mx-auto space-x-2'>
            <div className='w-1/4 bg-green-200 rounded-md flex flex-col justify-center items-center'>
              <label className='font-medium'>Minimum Customers per Hour</label>
              <input name='min' type='number' className = 'w-10/12' required />
            </div>
            <div className='w-1/4 bg-green-200 rounded-md flex flex-col justify-center items-center'>
              <label className='font-medium'>Maximum Customers per Hour</label>
              <input name='max' type='number' className = 'w-10/12' required />
            </div>
            <div className='w-1/4 bg-green-200 rounded-md flex flex-col justify-center items-center'>
              <label className='font-medium'>Average Cookies per Sale</label>
              <input name = 'avg' type='float' className = 'w-10/12' required />
            </div>
            <button className = 'w-1/4 h-16 bg-green-500 font-bold rounded-md'>Create</button>
          </div>
        </form>
    )
}

export default CreateForm
