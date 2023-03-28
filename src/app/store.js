import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../features/user/userSlice';
import userSlice from '../features/user/userSlice';
import movieReducer from "../features/movie/movieSlice";
export  const store = configureStore({
    reducer: {
        user: userSlice,
        movie: movieReducer,
    },
    
    
    

})