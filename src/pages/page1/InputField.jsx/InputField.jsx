import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { DarkTheme } from '../../../context/ThemeProvider'
import { useContext,useRef } from 'react'

function InputField({filteringSettings,setFilteringSettings}) {
  const {darkTheme} = useContext(DarkTheme)
  const input = useRef(null);
  return (
    <div className="InputField" style={{
      backgroundColor:darkTheme?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)",
    }}>
      <FontAwesomeIcon className='glassIcon' icon={faMagnifyingGlass} onClick={()=>{
        input.current.focus();
      }} />
      <input 
        ref={input} 
        className={darkTheme?"darkThemeInput":"lightThemeInput"} 
        type='text'
        placeholder='Search for a country...'
        value={filteringSettings.name}
        onChange={(e)=>{
          setFilteringSettings(prevState=>{return {...prevState,name:e.target.value}})
        }}
      />
    </div>
  )
}

export default InputField