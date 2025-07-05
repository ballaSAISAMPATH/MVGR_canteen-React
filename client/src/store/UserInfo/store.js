import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'store',
  initialState:{
    userID:"",
    userMail:"",
    userName:"",
    userRollNo:"",
    userSignUpDate:"",
    serverURL:"http://localhost:3000",
    adminLogged:false,
    websiteLogo:"/images/rasoiii.png",
  },
  reducers: {
    userIDSet: (state,action) => {        
      state.userID = action.payload;
    },
    userMailSet: (state,action) => {        
      state.userMail = action.payload;
    },
    userNameSet: (state,action) => {        
      state.userName = action.payload;
    },
     userRollNoSet: (state,action) => {        
      state.userRollNo = action.payload;
    },
     userSignupDateSet: (state,action) => {        
      state.userSignUpDate = action.payload;
    },
     setAdminLogged: (state,action) => {        
      state.adminLogged = action.payload;
    },

  },
})
export const { userIDSet,userMailSet,userNameSet,userRollNoSet,userSignupDateSet,setAdminLogged } = counterSlice.actions

export default counterSlice.reducer