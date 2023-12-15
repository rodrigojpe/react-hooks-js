import { collection } from "firebase/firestore/lite";
import {  db } from "../../src/firebase/config";
import {  doc } from 'firebase/firestore';


export const startNewNote = () => {

    return async (dispatch, getState) => {


        const { uid } = getState().auth;

        console.log(uid);
       const newNote= {
            title: '',
            body: '',
            date: new Date().getTime(),    
       }

       try{

        console.log('bd   =====',db)
           const newDoc =  doc( collection(db, `${uid}/journal/notes`));
          const setDoc = await setDoc(newDoc, newNote);
           console.log(newDoc);
       }catch(error){
           console.log(error);
       
       }

    }


}