import Cookiestand from '../components/cookiestand'
import Loginform from '../components/loginform'
import { useState } from 'react'
import axios from 'axios'
import jwt from 'jsonwebtoken'
import {useEffect} from 'react'
const baseUrl = 'https://cookie-stand-api.herokuapp.com/'
const postsUrl = baseUrl + 'api/v1/cookie-stands/'
const tokenUrl = baseUrl + 'api/token/'
const refreshTokenUrl = baseUrl + 'api/token/refresh/'

export default function Home() {
  
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  useEffect(() => {
    try {
      const user = jwt.decode(token)
      console.table(user)
    } catch (error) {
      console.log('invalid token')
    }

  }, [token])

  async function loginHandler(data){
    try {
      const tokenr = await axios.post(tokenUrl, data)

      setToken(tokenr.data.access)
      console.log(token)
      setRefreshToken(tokenr.data.refresh)
    } catch (error) {
      console.log('an error occurred during validation')
    }
  }
  if (!token) return <Loginform log = {loginHandler}/>
  return(
    <Cookiestand token = {token} postsUrl = {postsUrl} />
  )
}
