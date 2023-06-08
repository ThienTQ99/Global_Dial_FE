import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  language: {
    _id: "6471e12fcacfcb8da29df245",
    codeName: "ja",
    name: "Japanese",
    isPremium: false,
  },
  topic: {
    _id: "6472c4e3cacfcb8da2fc4ad9",
    codeName: "literature",
    name: "Literature",
    isPremium: true,
  },
}

export const lobbySlice = createSlice({
  name: 'lobby',
  initialState,
  reducers: {
    // increment: (state) => {

    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setTopic: (state, action) => {
      state.topic = action.payload;
    }
  },
})


export const { setLanguage, setTopic } = lobbySlice.actions

export default lobbySlice.reducer