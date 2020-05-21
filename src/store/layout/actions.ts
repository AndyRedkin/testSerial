import { action } from 'typesafe-actions'
import { LayoutActionTypes, ThemeColors } from './types'

export const setTheme = (theme: ThemeColors) => action(LayoutActionTypes.SET_THEME, theme)
export const setData = (data: Array<Object>) => action(LayoutActionTypes.SET_DATA, data)
export const setSerialId = (id: number) => action(LayoutActionTypes.SET_SERIAL_ID, id)
