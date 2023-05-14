import { configureStore } from '@reduxjs/toolkit'
import newsReducer from './newsSlice'
import pageReducer from './pageSlice'

export const store = configureStore({
  reducer: {
    news: newsReducer,
    page: pageReducer,
  },
})
