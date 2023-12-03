import { IconButton } from '@mui/material'
import { JournalLayot } from '../layout/JournalLayot'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
  return (
    <>
    <JournalLayot>
     {/*  <Typography  variant='p'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque similique eius labore vero quod fuga, aperiam consectetur temporibus molestias minima odit quis obcaecati iure libero excepturi eaque, esse, cum quia.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sequi numquam in illum reprehenderit aspernatur natus nobis nostrum odio aliquam. Omnis, impedit eligendi. Recusandae earum officia alias reprehenderit, provident aut.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad architecto autem eaque deleniti numquam eos nostrum accusamus, cum voluptas nesciunt laudantium consequuntur laborum ea est corporis blanditiis quas, possimus itaque.</Typography> */}

        <IconButton
          size='large'
          sx={{
            color: 'white',
            backgroundColor: 'error.main',
            ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
            position: 'fixed',
            right: 50,
            bottom: 50
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>

        <NothingSelectedView/>
        {/* <NoteView /> */}
    </JournalLayot>
    
    </>
  )
}
