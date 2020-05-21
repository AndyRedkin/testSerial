import { Reducer } from 'redux'
import { LayoutState, LayoutActionTypes } from './types'

export const initialState: LayoutState = {
  theme: 'light',
  data: [],
  serialId: 0
}

const reducer: Reducer<LayoutState> = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.SET_THEME: {
      return { ...state, theme: action.payload }
    }
    case LayoutActionTypes.SET_DATA: {
      return { ...state, data: action.payload }
    }
    case LayoutActionTypes.SET_SERIAL_ID: {
      return { ...state, serialId: action.payload }
    }
    default: {
      return state
    }
  }
}

export { reducer as layoutReducer }
