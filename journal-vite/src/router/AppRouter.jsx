import { useCheckAuth } from "../hooks/usecheckAuth"
import { Navigate, Route, Routes } from "react-router-dom"
import { CheckingAuth } from "../ui/components/Checkingauth";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";


export const AppRouter = () => {

  const { status } = useCheckAuth(); 

  if (status === 'checking'){
    return <CheckingAuth/>
  } 


  return (

    
    <Routes>

      {
        (status === 'authenticate') 
        ? <Route path='/*' element={<JournalRoutes/>}/>
        : <Route path='/auth/*' element={<AuthRoutes/>}/>
      }

      <Route path='/*' element={<Navigate  to='/auth/login' />}/>
        {/* <Route path='/auth/*' element={<AuthRoutes/>}/> */}

        {/* <Route path='/*' element={<JournalRoutes/>}/> */}

    </Routes>
  )
}
