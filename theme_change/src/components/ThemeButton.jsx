import React, { useContext } from 'react'
import { ThemeContext } from './ThemeProvider'

function ThemeButton() {
  const {theme,setTheme}=useContext(ThemeContext);

  return (
    <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Theme : {theme}
    </button>
  )
}

export default ThemeButton