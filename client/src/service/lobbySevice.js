import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const lobbyApi = createApi({
  reducerPath: 'lobbyApi',
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_URL}` ,
  prepareHeaders: (headers, { getState }) => {
      headers.set('authorization', `Bearer ${localStorage.getItem('accessToken')}`)
    return headers
  },
}),
  endpoints: (builder) => ({
    getLobbyData: builder.query({
      query:()=>({
        url: '',
        method: 'GET',

      })
      }),
  }),
})


export const { useGetLobbyDataQuery } = lobbyApi