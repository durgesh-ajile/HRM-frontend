import { configureStore } from '@reduxjs/toolkit'
import adminSlice from './admin/databaseSlice'
import  errorReducer  from './errorSlice/errorSlice'

export const store = configureStore({
  reducer: {
    admin: adminSlice,
    error: errorReducer,
  },
})