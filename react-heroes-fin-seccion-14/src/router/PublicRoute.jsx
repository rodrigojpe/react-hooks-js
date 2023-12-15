import { Navigate } from 'react-router-dom'



import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

export const PublicRoute = ({ children }) => {

   const { logged } = useContext(AuthContext)

   console.log(logged)


  return (!logged) ? children : <Navigate to='/marvel' />
}
