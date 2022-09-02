import { configureStore } from '@reduxjs/toolkit'
import { loadingBarReducer } from 'react-redux-loading-bar'



export default configureStore({
    reducer: {loadingBarReducer}
}
)
