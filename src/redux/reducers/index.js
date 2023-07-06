import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: 'modal',
  initialState:{
    openModal: false,
    list: [],
    description:"",
    url:"",
  },
  reducers: {
    setOpenModal: (state, action)=>{
      state.openModal = action.payload
    },
    setList: (state, action)=>{
      state.list = action.payload
    },
    setDescription: (state, action)=>{
      state.description = action.payload
    },
    setUrl: (state, action)=>{
      state.url = action.payload
    },
  }
})

export const {setOpenModal, setList, setDescription, setUrl} = modalSlice.actions;
export default modalSlice.reducer;
