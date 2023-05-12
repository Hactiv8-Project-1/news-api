import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import newsReducer from './newsSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})
