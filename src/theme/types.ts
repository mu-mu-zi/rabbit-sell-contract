
import { ThemedCssFunction } from 'styled-components';
import { Colors } from './colors';

export type MediaWidths = {
  sm: number
}

export type TypesTheme = {
  mediaWidth: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    mediaWidth: {
      sm: ThemedCssFunction<DefaultTheme>
    }
    isH5: boolean | undefined
  }
}
