import { useContext } from "react"
import { DarkTheme } from "../../../context/ThemeProvider"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon,faSun} from '@fortawesome/free-regular-svg-icons'


function Header() {
  const {darkTheme,toggleTheme} = useContext(DarkTheme)
  return (
    <header style={{
      backgroundColor:darkTheme?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)",
      color:darkTheme?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)"
    }}>
      <h1>Where in the world?</h1>
      <div className="DarkMode-btn" onClick={toggleTheme}>
        {
          darkTheme?(
          <>
            <FontAwesomeIcon icon={faSun} />
            <p>Light Mode</p>
          </>):(
          <>
            <FontAwesomeIcon icon={faMoon} />
            <p>Dark Mode</p>
          </>)
        }
        
      </div>
    </header>
  )
}

export default Header