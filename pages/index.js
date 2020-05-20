import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../base/styles'
import { GlobalTheme } from '../base/theme'
import { Header, WidgetCards } from '../components'


export default function Home() {
  return (
    <AppWrapper>
      <ThemeProvider theme={GlobalTheme}>
        <Wrapper>
          <GlobalStyle/>
          <Header/>
          <WidgetCards/>
        </Wrapper>
      </ThemeProvider>
    </AppWrapper>
  )
}

const AppWrapper = styled.div``

const Wrapper = styled.div``