import { createSlice } from "@reduxjs/toolkit";

export const AddDeleteSlice = createSlice({
    name: "BagData",
    initialState: {
        bag: [],
        PlusButton: [], 
       displayPrice :[],
    },
    reducers: {
        BagData: (state, action) => {
            const exists = state.bag.some(item => item.idMeal === action.payload.idMeal);
            console.log("exists:",exists);
            
            if (!exists) {
                state.bag.push(action.payload);
            }
        },
        DeleteData: (state, action) => {
            state.bag = state.bag.filter(item => item.idMeal !== action.payload)
        },
        TogglePlusButton: (state, action) => {
            const index = action.payload;
            if (state.PlusButton.includes(index)) {
                state.PlusButton = state.PlusButton.filter(i => i !== index);
            }
            else {
                state.PlusButton.push(index)
            }
        },
        PriceValue : (state,action)=>{
            state.displayPrice = action.payload;
        }
    }
})
export const AddDeleteAction = AddDeleteSlice.actions;