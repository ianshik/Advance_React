import React, { useContext } from 'react'
import { themeContext } from './ThemeProvider'

function ThemeButton() {
  const {theme,setTheme}=useContext(themeContext);

  const handleChange=(()=>{
    setTheme(theme === "light" ? "dark" : "light")
  })
  return (
    <div>
      <button onClick={handleChange}>
        theme :{theme}
      </button>
    </div>
  )
}

export default ThemeButton