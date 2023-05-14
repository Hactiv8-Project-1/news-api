import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = createAsyncThunk('news/getData', async (reqParams) => {
  const url = `${import.meta.env.VITE_BASE_URL + reqParams.q}&pageSize=${reqParams.pageSize}&page=${reqParams.page}&apiKey=${import.meta.env.VITE_API_KEY}`
  try {
    const response = await axios.get(url)
    if (response.data.articles.length != 0) {
      return response.data
    }
  } catch (error) {
    console.error(error)
  }
})
