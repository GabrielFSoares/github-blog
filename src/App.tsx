import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/globa'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { UserProvider } from './contexts/UserContext'
import { IssuesProvider } from './contexts/IssuesContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <UserProvider>
        <IssuesProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </IssuesProvider>
      </UserProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
