import { useDispatch } from 'react-redux'
import { startLogout } from '../../../store/auth/thunks';

import { LogoutOutlined, MenuBookOutlined } from '@mui/icons-material'
import { AppBar, Grid, IconButton, Toolbar, Typography } from '@mui/material'

// eslint-disable-next-line react/prop-types
export const NavBar = ( { drawerWidth } ) => {

 

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch( startLogout() )
  }




  return (
    <AppBar 
    position='fixed'
    sx={{ 
        width: { sm: `calc( 100% - ${ drawerWidth }px )` },
        ml: { sm: `${ drawerWidth }px` }
      }}
    >
        <Toolbar>
            <IconButton
            color='inherit'
            edge='start'
            sx={{ mr:2, display: { sm: 'none' } }}
            >
                <MenuBookOutlined/>
            </IconButton>
            <Grid container direction='row' justifyContent='space-between' alignItems='center'>
                  <Typography variant='h6' noWrap component='div'> lo </Typography>
                  <IconButton 
                  color='error'
                  onClick={ onLogout }
                  >
                    
                    <LogoutOutlined/>
                  </IconButton>
            </Grid>
        </Toolbar>
    </AppBar>
  )
}
