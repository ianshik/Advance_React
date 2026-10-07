import React, { useContext,createContext, useState } from 'react'
export const themeContext=createContext();

function ThemeProvider({children}) {
  const [theme,setTheme]=useState("light");

  
  return (
    <div>
      <themeContext.Provider value={{theme,setTheme}}>
      {children}
      </themeContext.Provider>
    </div>
  )
}

export default ThemeProvider