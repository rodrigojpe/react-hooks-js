import { UserContext } from "./UserContext";


const user = {
    id: 123,
    name: 'Juan',
    email: 'XXXXXXXXXXXXXX'
} 



export const UserProvider = ({ children }) => {

  return (
  <UserContext.Provider value={{ hola: 'Mundo', user}} >
    {children}
  </UserContext.Provider>
  )
}
