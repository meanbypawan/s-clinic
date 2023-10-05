import { createSlice } from "@reduxjs/toolkit";

const slice  = createSlice({
    name: "user",
    initialState:{
        isLoggedIn: false,
        email: null,
        token: null,
        id:null,
        phoneNumber:null,
        name:null
    },
    reducers:{
        setUser: (state,action)=>{ // action.payload
           let {email,token, id, phoneNumber, name} = action.payload;
           state.email = email;
           state.token = token;
           state.id = id;
           state.phoneNumber = phoneNumber;
           state.name = name;
           state.isLoggedIn = true; 
        }
    }
});

export const {setUser} = slice.actions;

export default slice.reducer;