import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../utils/getData'

const initialState = {
  newsData: {},
  savedArticles: JSON.parse(localStorage.getItem('savedArticles')) || [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    onHandleSave: (state, action) => {
      const isArticleSaved = state.savedArticles.some(savedArticle => savedArticle.title === action.payload.title)
      let newSavedArticles = []
      isArticleSaved
        ? newSavedArticles = state.savedArticles.filter(savedArticle => savedArticle.title !== action.payload.title)
        : newSavedArticles = [...state.savedArticles, action.payload]
      localStorage.setItem('savedArticles', JSON.stringify(newSavedArticles))
      state.savedArticles = newSavedArticles
      state.newsData && state.newsData.articles.map((data) => {
        const isArticleSaved = state.savedArticles.some(savedArticle => savedArticle.title === data.title)
        data.isSaved = isArticleSaved
      })
    },
    onHandleRemove: (state, action) => {
      const updatedSavedArticles = state.savedArticles.filter((savedArticle) => savedArticle.title !== action.payload.title)
      localStorage.setItem('savedArticles', JSON.stringify(updatedSavedArticles))
      state.savedArticles = updatedSavedArticles
      state.newsData && state.newsData.articles.map((data) => {
        const isArticleSaved = state.savedArticles.some(savedArticle => savedArticle.title === data.title)
        data.isSaved = isArticleSaved
      })
    }
  },
  extraReducers(builder) {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.newsData = action.payload
      state.newsData && state.newsData.articles.map((data) => {
        const isArticleSaved = state.savedArticles.some(savedArticle => savedArticle.title === data.title)
        data.isSaved = isArticleSaved
      })
    })
  }
})

export const { onHandleSave, onHandleRemove } = newsSlice.actions
export default newsSlice.reducer