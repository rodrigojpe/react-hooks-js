import { useSelector } from 'react-redux';


import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography} from '@mui/material'

// eslint-disable-next-line react/prop-types
export const SideBar = ({ drawerWidth }) => {


    const {  displayName   } = useSelector( state => state.auth );
  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    
    >
        <Drawer
            variant='permanent'
            open={true}
            sx={{ 
                display: { xs: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
            }}
        >
            <Toolbar>
                <Typography variant='h6' noWrap component='div'
                 >
                    { displayName }
                </Typography>
            </Toolbar>
            <Divider/>
            <List>
                {
                    ['Inicio', 'Notas', 'Agenda', 'Contactos'].map( text => (
                        <ListItem  key={text} disablePadding>
                            <ListItemButton > 
                                <ListItemIcon>
                                    <TurnedInNot/>
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={"Lorem ipsdfdfdfdfdfdfdfdfdfffffffffffffffffffffffffffffffffffum dolor si quod."} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
}       
            </List>
        </Drawer>

    </Box>
  )
}
