import type {Note}  from './../../types/note';
import { createSlice } from "@reduxjs/toolkit";

interface NoteState{
    mainNotes: Note[],
    archiveNotes: Note[],
    trashNotes: Note[], 
    editNote: null | Note[] 
}

const initialState:NoteState = {
    mainNotes: [],
    archiveNotes: [],
    trashNotes: [],
    editNote: null
}

const notesListSlice = createSlice({
    name: "notesList",
    initialState,
    reducers: {}
})

export default notesListSlice.reducer