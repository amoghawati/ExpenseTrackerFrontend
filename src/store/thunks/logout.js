import { createAsyncThunk } from "@reduxjs/toolkit";

const logout=createAsyncThunk("users/logout",(state,action)=>{
    const finalState= {
        isLoading: false,
        data: {},
        message:"successfully logged out",
        error: null,
      }
    return action.payload=finalState;
})
export {logout};