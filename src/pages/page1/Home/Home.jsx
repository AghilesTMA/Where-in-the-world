import { useContext, useEffect, useMemo, useRef, useState } from "react";
import { DarkTheme } from "../../../context/ThemeProvider";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";
import SearchFilter from "../Search&Filter/Search&Filter";

function App() {
  let countries = useRef([]);
  const [filteredCountries,setFilteredCountries] = useState([]);
  const [filteringSettings,setFilteringSettings] = useState({
    region:"default",
    name:"",
    showCount:20
  });
  const [reqState,setReqState] = useState({
    error:false,
    isLoading:false
  })
  
  const { darkTheme } = useContext(DarkTheme);

  useEffect(()=>{
    const getcountries = async ()=>{
      try{
        const resp = await axios.get("./src/data.json");
        countries.current = resp.data;
        setFilteredCountries(countries.current);
        setReqState((prevState)=>{return {...prevState,isLoading:false}})
        // console.log(countries.current); 
      }catch(error){
        setReqState({isLoading:false,error:true});
      }
    }

    setReqState((prevState)=>{return {...prevState,isLoading:true}})

    getcountries()
  },[]);


  useMemo(()=>{
    if(filteringSettings.region=="default"){
      setFilteredCountries(countries.current);
      return;
    }
    setFilteredCountries(()=>{
      return countries.current.filter((country)=>country.region == filteringSettings.region);
    })
  },[filteringSettings.region]);

  useMemo(()=>{
    setFilteredCountries(()=>{
      return countries.current.filter(country=>country.name.toLowerCase().includes(filteringSettings.name));
    })
  },[filteringSettings.name]);

  return (
    <div
      className="App"
      style={{
        backgroundColor: darkTheme ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
        color: darkTheme ? "hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)",
      }}
    >
      <SearchFilter setFilteringSettings={setFilteringSettings} filteringSettings={filteringSettings} />
      { (reqState.isLoading && <div>Loading...</div>)||(
        (!reqState.error && <>
          <div className="CountryCards-wrapper">{filteredCountries.slice(0,filteringSettings.showCount).map(country=>{
            return (<CountryCard key={country?.alpha2Code} {...country} />)
          })}</div>
          {filteringSettings.showCount<filteredCountries.length &&
          <button type="button" className="SeeMore" style={{
          backgroundColor:darkTheme?"hsl(209, 23%, 22%)":"hsl(0, 0%, 100%)",
          color:darkTheme?"hsl(0, 0%, 100%)":"hsl(200, 15%, 8%)"}
          } onClick={()=>{setFilteringSettings(prevSettings=>{return {...prevSettings,showCount:prevSettings.showCount+20}})}}>
            See more
          </button>}
        </>)||
        <div className="ErrorMessage">
          An ERROR happened trying to fetch data:( <br/> Refresh your page please
        </div> )
      }
    </div >
  );
}

export default App;
