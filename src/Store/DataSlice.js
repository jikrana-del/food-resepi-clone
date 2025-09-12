import { createSlice } from "@reduxjs/toolkit";

export const DataSlice =  createSlice({
name :'data',
initialState :{
    data : [],
    SearchName :'chicken'
},
reducers :{
    addData :(state,action)=>{
        state.data = action.payload          
    },
    SearchName:(state,action)=>{
        const newName = action.payload;
        const oldName = state.SearchName;
        if(newName!==oldName){
        state.SearchName = action.payload

        }
      
    }
}
})

export const dataAction = DataSlice.actions;