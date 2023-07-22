import { useContext } from "react"
import { DarkTheme } from "../../../context/ThemeProvider"

function Filter({filteringSettings,setFilteringSettings}) {
  const {darkTheme} = useContext(DarkTheme);
  return (
    <select className="FilterSelect" style={{
      backgroundColor:darkTheme?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)",
      color:darkTheme?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)",
      
    }}
    value={filteringSettings.region}
    onChange={(e)=>{setFilteringSettings((prevState)=>{return {...prevState,region:e.target.value}})
    }}
    >
      <option value="default">Default Region: Global</option>
      <option value="Africa">Africa</option>
      <option value="Americas">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  )
}

export default Filter