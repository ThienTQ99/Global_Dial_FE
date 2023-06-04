import { configureStore } from '@reduxjs/toolkit'
import lobbyReducer from '../screens/callSetting/lobbySlice'

export const store = configureStore({
  reducer: {
    lobby: lobbyReducer,
  },
})