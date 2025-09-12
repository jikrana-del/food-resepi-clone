import {configureStore} from '@reduxjs/toolkit'
import {DataSlice} from './DataSlice'
import { AddDeleteSlice } from './AddDeleteSlice';
const  DataStore = configureStore({
    reducer:{
data : DataSlice.reducer,
adddelete:AddDeleteSlice.reducer,
    },
})
export default DataStore;