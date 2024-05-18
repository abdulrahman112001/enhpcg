// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'


import themeOptions from './ThemeOptions'

// ** Global Styles
import GlobalStyling from './globalStyles'
import { Settings } from '../context/settingsContext'
import themeConfig from '../../configs/themeConfig'
import Direction from '../../components/organisms/layouts/components/Direction'

interface Props {
  settings: Settings
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props

  // ** Pass merged ThemeOptions (of core and user) to createTheme function
  let theme = createTheme(themeOptions(settings, 'light'))

  // ** Set responsive font sizes to true
  if (themeConfig.responsiveFontSizes) {
    theme = responsiveFontSizes(theme)
  }

  return (
    <ThemeProvider theme={theme}>
      {/* <Direction direction={settings.direction}> */}
        <CssBaseline />
        <GlobalStyles styles={() => GlobalStyling(theme) as any} />
        {children}
      {/* </Direction> */}
    </ThemeProvider>
  )
}

export default ThemeComponent
