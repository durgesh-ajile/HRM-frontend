import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import adminSlice from './admin/databaseSlice'
import  errorReducer  from './errorSlice/errorSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    admin: adminSlice,
    error: errorReducer,
  },
})