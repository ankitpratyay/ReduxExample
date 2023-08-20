import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducer/Main";


export default configureStore({
    reducer:{
        Rootreducer:rootReducer
    }
})