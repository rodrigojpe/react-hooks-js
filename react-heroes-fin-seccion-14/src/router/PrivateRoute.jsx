import { Navigate } from 'react-router-dom'



import React, { useContext } from 'react'
import { AuthContext } from '../auth/context/AuthContext'

export const PrivateRoute = ({ children }) => {

   const { logged } = useContext(AuthContext)

   console.log(logged)


  return (logged) ? children : <Navigate to='/login' />
}
