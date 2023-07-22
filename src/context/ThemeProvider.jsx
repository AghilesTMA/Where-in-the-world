import React,{useState} from 'react'

const DarkTheme = React.createContext();

function ThemeProvider({children}) {
  const [darkTheme,setDarkTheme] = useState(false);
  const toggleTheme = ()=>{
    setDarkTheme((prevTheme)=>!prevTheme);
  }
  return (
    <DarkTheme.Provider value={{darkTheme,toggleTheme}}>
      {children}
    </DarkTheme.Provider>
  )
}

export {DarkTheme}
export default ThemeProvider