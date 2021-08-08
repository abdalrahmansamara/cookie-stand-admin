import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Loginform(props) {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    function submitHandler(e){
        e.preventDefault()
        props.log({username:username, password:password})
    }
    function usernameChangeHandler(e){
        setUserName(e.target.value)
    }
    function passwordChangeHandler(e){
        setPassword(e.target.value)        
    }

    return(
        <>
          <form className="flex flex-col w-1/2 gap-4 p-8 mx-auto my-4 text-center bg-gray-200 border-2 border-gray-400 rounded-lg text-md" onSubmit={submitHandler}>
            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="username">User Name</label>
                <input className="px-3 py-2 border text-grey-darkest" type="text" name="username" id="username" placeholder="User Name" onChange={usernameChangeHandler} />
            </div>

            <div className="flex flex-col ">
                <label className="mb-2 font-bold uppercase text-grey-darkest" htmlFor="password">Password</label>
                <input className="px-3 py-2 border text-grey-darkest" type="password" name="password" id="password" placeholder="password" onChange={passwordChangeHandler}/>
            </div>

            <button className="px-3 py-4 mt-8 uppercase bg-gray-500 rounded text-green hover:bg-gray-600 text-gray-50" type="submit">Sign In</button>

        </form>
        </>
    )
}

export default Loginform
