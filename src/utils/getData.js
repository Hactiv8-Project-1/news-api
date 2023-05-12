import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = createAsyncThunk('news/getData', async (params) => {
  const url = `${import.meta.env.VITE_BASE_URL + params}&pageSize=21&apiKey=${import.meta.env.VITE_API_KEY}`
  try {
    const response = await axios.get(url)
    return response.data
  } catch (error) {
    console.error(error)
  }
})
