import { configureStore } from '@reduxjs/toolkit'
import storeReducer from "./UserInfo/store"

export default configureStore({
  reducer: {
    store: storeReducer,
  },
})