import { useDispatch } from 'react-redux'

import  { Button, Grid, Link, TextField, Typography} from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'

import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication, startGoogleSignIn } from '../../../store/auth/thunks'






export const LoginPage = () => {

const dispatch = useDispatch(); 

  const { email, password, onInputChange } = useForm( {
    email:'academiaco@gmail.com',
    password: '123123'

  });


  const onSubmit = (event) => {
    event.preventDefault();
    console.log( { email, password } );

    dispatch( checkingAuthentication() )
  }


  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn')
    dispatch( startGoogleSignIn() )
  }


  return (
   
    <AuthLayout title='Login'>
          <form onSubmit={ onSubmit }>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{mt:2}}>
                <TextField label='Correo Electrónico' fullWidth
                type='email'
                placeholder='corrego@email.com'
                autoComplete='off'
                name='email'
                onChange={ onInputChange }
                value={ email }
                /> 
              </Grid>

              <Grid item xs={12} sx={{ mb: 1, mt:1 }}>
                <TextField label='Contrasena' fullWidth
                type='password'
                placeholder='password'
                autoComplete='off'
                name='password'
                onChange={ onInputChange }
                value={ password }
                /> 
              </Grid>
              <Grid container spacing={2} sx={{ mb: 2, mt:1 }}>
                <Grid item xs={12} sm={6}>
                  <Button type='submit' variant='contained' fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button onClick={ onGoogleSingIn } variant='contained' fullWidth>
                    <Google/>
                    <Typography sx={{ ml:1}}> Google </Typography> 
                  </Button>
                </Grid>
              </Grid>


              <Grid container direction='row' justifyContent='end'>
                <Link color='inherit' to='/auth/register' component={ RouterLink}><Typography variant='body1'> Crear una cuenta </Typography></Link>
              </Grid>
            </Grid>
          </form> 

    </AuthLayout>


  )
}
