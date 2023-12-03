


import { Box, Toolbar } from '@mui/material'
import { NavBar } from '../components/NavBar';
import { SideBar } from '../components/SideBar';

const drawerWidth = 240;

// eslint-disable-next-line react/prop-types
export const JournalLayot = ( { children } ) => {
  return (

    <Box sx={{display:'flex'}}>


        <NavBar drawerWidth={ drawerWidth }/>

        <SideBar drawerWidth={ drawerWidth }/>


        <Box sx={{flexGrow:1, p: 3}}
        component='main'
        >
            {/* contenido */}
            <Toolbar/>

            { children  } 
        </Box>



    </Box>
  )
}
