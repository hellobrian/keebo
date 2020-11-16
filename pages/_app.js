/** @jsx jsx */
import { jsx, ThemeProvider } from 'theme-ui'
import theme from '../styles/theme'
import '../styles/globals.css'
import { ModalProvider } from '../components/Modal/Modal'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Component {...pageProps} />
      </ModalProvider>
    </ThemeProvider>
  )
}

export default MyApp
