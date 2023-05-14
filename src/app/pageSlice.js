import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  windowHeight: 0,
  pageSize: 20,
  page: 1,
}

const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    onHandleWindowHeight: (state, action) => {
      state.windowHeight += action.payload
    },
    onHandleScrolledToBottom: (state) => {
      if (state.pageSize >= 100) {
        state.pageSize = 20
        state.page += 1
      } else {
        state.pageSize += 10
      }
    },
    onHandleNewPage: (state) => {
      state.windowHeight = 0
      state.pageSize = 20
      state.page = 1
    },
  },
})

export const { onHandleWindowHeight, onHandleScrolledToBottom, onHandleNewPage } = pageSlice.actions
export default pageSlice.reducer