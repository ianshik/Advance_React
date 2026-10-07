import { react } from 'react'
import ThemeProvider from './components/ThemeProvider'
import ThemeButton from './components/ThemeButton'


function App() {
  

  return (
    <> hi 
      <ThemeProvider>
        <ThemeButton/>
      </ThemeProvider>

     
    </>
  )
}

export default App
