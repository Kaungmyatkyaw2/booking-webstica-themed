import { configureStore } from "@reduxjs/toolkit";
import Main from "./main/Main";


const store = configureStore({
    reducer:{
        userAction : Main
    }
})


export default store