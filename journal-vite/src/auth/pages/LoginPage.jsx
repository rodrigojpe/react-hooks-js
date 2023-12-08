import { useDispatch, useSelector } from 'react-redux';

import  { Button, Grid, Link, TextField, Typography, Alert} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import { Google } from '@mui/icons-material';
import { AuthLayout } from '../layout/AuthLayout';
import { useForm } from '../../hooks/useForm';
import {  startGoogleSignIn, startLoginWithEmailPassword } from '../../../store/auth/thunks';
import { useMemo } from 'react';






export const LoginPage = () => {


  const {  status, errorMessage  } = useSelector( state => state.auth );


const dispatch = useDispatch(); 

  const { email, password, onInputChange } = useForm( {
    email:'academiaco@gmail.com',
    password: '123123'

  });

  const isAuthenticate = useMemo(() => status === 'checking', [status] )


  const onSubmit = (event) => {
    event.preventDefault();
    console.log( { email, password } );
    dispatch( startLoginWithEmailPassword({email, password}) )

    // dispatch( checkingAuthentication() )
  }


  const onGoogleSingIn = () => {
    console.log('onGoogleSingIn')
    dispatch( startGoogleSignIn() )
  }


  return (
   
    <AuthLayout title='Login'>
          <form onSubmit={ onSubmit } className='animate__animated__fadeIn animate__faster'>
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

              <Grid 
                // eslint-disable-next-line no-extra-boolean-cast
                display={ !!errorMessage ? '' : 'none' }
                item 
                xs={12}
                >
                  <Alert severity='error'> { errorMessage }</Alert>
                </Grid>


                <Grid item xs={12} sm={6}>
                  <Button 
                  disabled={ isAuthenticate }
                  type='submit' 
                  variant='contained' 
                  fullWidth>
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Button 
                  disabled={ isAuthenticate }
                  onClick={ onGoogleSingIn } 
                  variant='contained' 
                  fullWidth>
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
