import React, { createContext, useState } from 'react'

export const ThemeContext=createContext();


 function ThemeProvider({children}) {

  const [theme,setTheme]=useState("light");

  return (
    <div>
      <ThemeContext.Provider value={{theme,setTheme}}> 
        {children}
      </ThemeContext.Provider>
    </div>
  )
}

export default ThemeProvider

