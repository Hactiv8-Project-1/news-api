import { onHandleScrolledToBottom, onHandleWindowHeight } from "../app/pageSlice"

export const onScrollTobottom = (windowHeight, dispatch) => {
  window.onscroll = () => {
    if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
      if (windowHeight <= document.body.offsetHeight) {
        dispatch(onHandleWindowHeight(document.body.offsetHeight))
        dispatch(onHandleScrolledToBottom())
      }
    }
  }
}
