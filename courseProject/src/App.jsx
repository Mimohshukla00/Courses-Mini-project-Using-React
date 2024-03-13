// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { apiUrl } from "./data";
import { toast } from "react-toastify";
import { useEffect } from "react";
// import { filterData } from "./data";

function App() {
  // const [count, setCount] = useState(0)
  async function apiData() {
    try {
      const apiResponse = await fetch(apiUrl);
      const data = await apiResponse.json();
      console.log(data);
    } catch (error) {
      toast.error("Something Went Wrong");
    }
  }
  useEffect(() => {
    apiData();
  },[]);
  return (
    <div>
      {/* Navbar  */}
      <nav className="bg-bgDark py-4">
        <h1 className="text-center text-3xl font-bold text-black">
          Top Courses
        </h1>
        <Filter></Filter>
        <Cards></Cards>
      </nav>
    </div>
  );
}

export default App;
