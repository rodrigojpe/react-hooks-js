import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authreducer } from "./authReducer"
import { types } from "../types/types"


const initialState = {
    logged: false,
}

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

  const [ authState , dispatch ] = useReducer( authreducer, initialState )

const login = (name) => {

  const action = {
    type: types.login,
    payload: {
      id:'ABC',
      name: name
    
    }
  }

  dispatch(action)
}



return (
<AuthContext.Provider value={{ ...authState, login }}>
    {children}
</AuthContext.Provider>
)
}