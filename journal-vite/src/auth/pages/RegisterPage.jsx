
import  { Button, Grid, Link, TextField, Typography} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
export const RegisterPage = () => {
  return (
   
    <AuthLayout title='Register'>
          <form>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField label='Nombre' fullWidth
                type='text'
                placeholder='rodrigo Jeldes'
                autoComplete='off'
                size='small'
                sx={{ mb: 1 }}
                /> 
              </Grid>
              <Grid item xs={12}>
                <TextField label='Correo Electrónico' fullWidth
                type='email'
                placeholder='corrego@email.com'
                autoComplete='off'
                size='small'
                sx={{ mb: 1 }}
                /> 
              </Grid>

              <Grid item xs={12}>
                <TextField label='Contrasena' fullWidth
                type='password'
                placeholder='password'
                autoComplete='off'
                size='small'
                sx={{ mb: 1 }}
                /> 
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt:1 }}>
                <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>
                    Crear Cuenta
                  </Button>
                </Grid>
               {/*  <Grid item xs={12} sm={6}>
                  <Button variant='contained' fullWidth>
                    <Google/>
                    <Typography sx={{ ml:1}}> Google </Typography> 
                  </Button>
                </Grid> */}
              </Grid>


              <Grid container direction='row' justifyContent='end'>
                <Link color='inherit' to='/auth/login' component={ RouterLink}><Typography variant='body1'> Ya tienes cuenta ? </Typography></Link>
              </Grid>
            </Grid>
          </form> 

    </AuthLayout>


  )
}
