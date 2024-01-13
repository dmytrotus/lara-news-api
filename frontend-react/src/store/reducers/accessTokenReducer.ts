import { createSlice } from '@reduxjs/toolkit'

export const accessToken = createSlice({
  name: 'access_token',
  initialState: {
    value: null
  },
  reducers: {
    updateAccessToken: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateAccessToken } = accessToken.actions

export default accessToken.reducer