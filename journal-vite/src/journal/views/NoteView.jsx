

import { SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components/ImageGallery'
export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb: 1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>25 , de octubre, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color='primary' sx={{padding: 2}}>
                <SaveAltOutlined sx={{fontSize: 30, mr: 1}}/>
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField 
            type='text'
            variant='filled'
            fullWidth 
            placeholder='Ingrese un título' 
            label='Título'/>
             <TextField 
            type='text'
            variant='filled'
            fullWidth 
            multiline
            placeholder='??que sucede hoy ?' 
            minRows={5}
            />
        </Grid>


        {/* galeria de umagebnes  */}
        <ImageGallery/>
    </Grid>
  )
}
