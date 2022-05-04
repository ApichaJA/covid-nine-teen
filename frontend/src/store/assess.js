import { createSlice } from '@reduxjs/toolkit'

export const assess = createSlice({
  name: 'assess',
  initialState: {
    symptoms: [],
  },
  reducers: {
    set_symptoms: (state, action) => {
        state.symptoms = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { set_symptoms } = assess.actions

export default assess.reducer