import { createMuiTheme } from '@material-ui/core/styles'
import { teal } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#134f4e',
      main: '#0f3736',
      dark: '#102525',
      contrastText: '#cae5e2'
    },
    secondary: {
      light: '#4f9d9e',
      main: '#138486',
      dark: '#0c6061',
      contrastText: '#0f1919'
    },
    openTitle: '#9eb2a6',
    protectedTitle: teal['400'],
    type: 'light'
  }
})

export default theme
