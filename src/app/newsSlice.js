import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../utils/getData'
import { updateSaved } from '../utils/updateSaved'

const initialState = {
  newsData: {},
  savedArticles: JSON.parse(localStorage.getItem('savedArticles')) || [],
  keySearch: '',
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    onHandleSave: (state, action) => {
      let newSavedArticles = []
      const isArticleSaved = state.savedArticles.some(savedArticle => savedArticle.title === action.payload.title)
      isArticleSaved
        ? newSavedArticles = state.savedArticles.filter(savedArticle => savedArticle.title !== action.payload.title)
        : newSavedArticles = [...state.savedArticles, action.payload]
      localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles))
      state.savedArticles = newSavedArticles
      updateSaved(state.newsData, state.savedArticles)
    },
    onHandleRemove: (state, action) => {
      const updatedSavedArticles = state.savedArticles.filter((savedArticle) => savedArticle.title !== action.payload.title)
      localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles))
      state.savedArticles = updatedSavedArticles
      updateSaved(state.newsData, state.savedArticles)
    },
    onHandleKey: (state, action) => {
      state.keySearch = action.payload
    },
  },
  extraReducers(builder) {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.newsData = action.payload
      updateSaved(state.newsData, state.savedArticles)
    })
  }
})

export const { onHandleSave, onHandleRemove, onHandleKey } = newsSlice.actions
export default newsSlice.reducer