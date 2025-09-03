import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
interface activeSectionState {
  active: string
}

const initialState:activeSectionState= {
    active:"home",
  }

export const ActiveSectionSlice = createSlice({
    name: "Active Section",
    initialState,
    reducers: {
      setAcitveSection:(state,action:PayloadAction<string>)=>{
          state.active=action.payload}
    },
  });
  
export const { setAcitveSection }=ActiveSectionSlice.actions

export default ActiveSectionSlice.reducer