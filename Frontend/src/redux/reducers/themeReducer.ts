import {createSlice} from '@reduxjs/toolkit';



const Slice = createSlice({
    name: 'Theme',
    initialState:{
        isDark: false
    },
    reducers:{
        setThemeStatus: (state, action) =>{
            console.log('ACATION', action.payload, state)
            state.isDark = action.payload
        }
    }
})

export const {setThemeStatus} = Slice.actions

export default Slice.reducer;