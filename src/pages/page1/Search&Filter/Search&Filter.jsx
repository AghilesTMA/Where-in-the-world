import Filter from "../FilterSelect/Filter"
import InputField from "../InputField.jsx/InputField"


function SearchFilter({filteringSettings,setFilteringSettings}) {

  return (
    <div className='SearchFilter'>
      <InputField filteringSettings={filteringSettings} setFilteringSettings={setFilteringSettings}/>
      <Filter filteringSettings={filteringSettings} setFilteringSettings={setFilteringSettings}/>
    </div>
  )
}

export default SearchFilter