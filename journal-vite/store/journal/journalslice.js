
import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
         active: null,
      /*   active: {
            id: 'ABC123',
            title: '',
            body: '',
            date: 1234567,
            imageUrls: []
        } */
    },
    reducers: {
        addNewEmptyNote: (state, action) => {
            state.isSaving = true;
        
        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        deleteNoteById: (state, action) => {

        },

    }
})

export const { addNewEmptyNote,deleteNoteById,setActiveNote,setNotes,setSaving,updateNote } = journalSlice.actions;