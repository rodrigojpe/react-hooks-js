import { useDispatch, useSelector } from 'react-redux';
import  { Button, Grid, Link, TextField, Typography , Alert} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { useMemo, useState } from 'react';
import { startCreatingUserWithEmailPassword } from '../../../store/auth/thunks';



export const RegisterPage = () => {


  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {  status, errorMessage  } = useSelector( state => state.auth)

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status] );

  

  const formValidations = {
    email: [(value) => value.includes('@'), 'debe contener una @'],
    password: [(value) => value.length >= 6, 'debe contener al menos 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'debe contener al menos 1 caracteres'] 
  }



  const { displayName  , email, password, onInputChange, formState,
  isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( {
    email:'',
    password: '',
    displayName: ''

  }, formValidations);

 console.log('isFormValid', isFormValid );


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    dispatch(startCreatingUserWithEmailPassword( formState ))
    // useForm({})
  }

  return (
   
    <AuthLayout title='Register'>
      <h1> FormValid { isFormValid ? 'Si' : 'No' } </h1>
          <form onSubmit={ onSubmit } className='animate__animated__fadeIn animate__faster'>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField label='Nombre' fullWidth
                type='text'
                placeholder='rodrigo Jeldes'
                autoComplete='off'
                size='small'
                name='displayName'
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayName  && formSubmitted}
                helperText={ displayNameValid }
                sx={{ mb: 1 }}
                /> 
              </Grid>
              <Grid item xs={12}>
                <TextField label='Correo Electrónico' fullWidth
                type='email'
                placeholder='corrego@email.com'
                autoComplete='off'
                size='small'
                name='email'
                value={ email }
                onChange={ onInputChange }
                sx={{ mb: 1 }}
                error={ !!emailValid && formSubmitted }
                helperText={ emailValid }
                /> 
              </Grid>

              <Grid item xs={12}>
                <TextField label='Contrasena' fullWidth
                type='password'
                placeholder='password'
                autoComplete='off'
                size='small'
                name='password'
                value={ password }
                onChange={ onInputChange }
                sx={{ mb: 1 }}
                error={ !!passwordValid && formSubmitted }
                helperText={ passwordValid }
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
                  disabled={ isCheckingAuthentication }
                  type='submit'
                  variant='contained'
                  fullWidth>
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
