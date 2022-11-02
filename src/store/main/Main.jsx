import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    leftDrop : false,
    rightDrop : false,
    aboutDrop : false    
}

const MainSlicer = createSlice({
    name : 'main',
    initialState,
    reducers: {
        leftAction : (state) => {
            state.leftDrop = !(state.leftDrop);
            state.rightDrop = false
        },
        rightAction : (state) => {
            state.leftDrop = false;
            state.rightDrop = !(state.rightDrop)
        },
       
    }
})

export default MainSlicer.reducer
export const {leftAction,rightAction,viewChange} = MainSlicer.actions