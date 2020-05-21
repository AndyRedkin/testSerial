export type ThemeColors = 'light' | 'dark'
export enum LayoutActionTypes {
  SET_THEME = '@@layout/SET_THEME',
  SET_DATA = '@@layout/SET_DATA',
  SET_SERIAL_ID = '@@layout/SET_SERIAL_ID'
}
export interface LayoutState {
  readonly theme: ThemeColors
  readonly data: Array<Object>
  readonly serialId: number
}
