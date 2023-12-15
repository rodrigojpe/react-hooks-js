import { Navbar } from '../../ui'
import {  Route} from 'react-router-dom'
import { DcPages, MarvelPage } from '../pages';
import { LoginPage } from '../../auth/pages';


// export const childHeroesRoutes = [
//     {
//       index: true,
//       path: "marvel",
//       element: <MarvelPage />,
//     },
//     {
//       path: "hero/:id",
//       element: <HeroPage />,
//     },
//     {
//       path: "search",
//       element: <SearchPage />,
//     },
//     {
//       path: "login",
//       element: <LoginPage />,
//     },
//     {
//       path: "dc",
//       element: <DcPages />,
//     },
//     {
//       path: "/*",
//       // eslint-disable-next-line react/jsx-no-undef
//       element: <Navigate to={"dc"}></Navigate>,
//     },
//   ];

// export const HeroesRoutes = () => {
    
//   return (
//     <>
//         <Navbar/>
//         <div className='container'>
//             <Outlet/>
//         </div>
//     </>
//   )
// }


export const HeroesRoutes = () => {
  return (
    <>
     <Navbar/>
     <div className="container mt-2">
      <switch>
        <Route  path="marvel" element={<MarvelPage/> } /> 
        <Route path="dc" element={ <DcPages/> } />
        <Route exact path="login" element={ <LoginPage/>  } /> 
        <Route  path="/*" element={ <MarvelPage/>  } />
      </switch>
      </div>
    </>
    
  )

}