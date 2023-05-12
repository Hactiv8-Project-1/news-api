import { createSlice } from '@reduxjs/toolkit'
import { getData } from '../utils/getData'
import { handleSave } from '../utils/handleSave'

const initialState = {
  newsData: {},
  savedArticles: JSON.parse(localStorage.getItem('savedArticles')) || [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    onHandleSave: (state, action) => {
      handleSave(state.newsData, state.savedArticles, action.payload)
    },
  },
  extraReducers(builder) {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.newsData = action.payload
      state.newsData.articles.map((data) => {
        const isArticleSaved = state.savedArticles.some(savedArticle => savedArticle.title === data.title);
        data.isSaved = isArticleSaved;
      })
    })
  }
})

export const { onHandleSave } = newsSlice.actions
export default newsSlice.reducer