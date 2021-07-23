import '../styles/globals.css'
import { ThemeProvider} from 'styled-components'
import {primaryTheme, GlobalStyles} from '../styles/Theme.Config'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={primaryTheme}>
      <GlobalStyles/>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
