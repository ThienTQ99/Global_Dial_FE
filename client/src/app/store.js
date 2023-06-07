import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import lobbyReducer from '../screens/callSetting/lobbySlice'
import { lobbyApi } from '../service/lobbySevice'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
  reducer: {
    lobby: lobbyReducer,

    [lobbyApi.reducerPath]: lobbyApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(lobbyApi.middleware),
})

setupListeners(store.dispatch)