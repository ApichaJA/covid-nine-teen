import { configureStore } from '@reduxjs/toolkit'
import auth from './auth'
import assess from './assess'

export default configureStore({
  reducer: {
    auth,
    assess
  },
})