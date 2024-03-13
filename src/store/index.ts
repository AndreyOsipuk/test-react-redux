import { configureStore } from "@reduxjs/toolkit";
import { jokesSlice } from "./articleSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

export  const store = configureStore({
  reducer: jokesSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
