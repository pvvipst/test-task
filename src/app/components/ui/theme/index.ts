import type { ThemeOptions } from '@mui/material'

const THEME: ThemeOptions = {
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@font-face': {
          fontFamily: 'Arial',
        }
      }
    },
  }
}

export { THEME }
