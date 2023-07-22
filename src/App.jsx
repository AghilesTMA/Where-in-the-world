import "./App.css";
import Home from "./pages/page1/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./pages/page1/navBar/Header"
import CountryPage from "./pages/page2/CountryPage/CountryPage";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Country/:name" element={<CountryPage/>}/>
      </Routes>
    </>
  );
}

export default App;
