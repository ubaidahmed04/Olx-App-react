// import React from 'react'
// import Header from './Components/Header/Header'
// import Home from './Pages/Home'
// import Outlet from 'react-router-dom'
// function App() {
//   return (
//     <div>

//       <h1>hello  world</h1>
//       <Header/>
//       <Outlet />
//       <Home/>
//     </div>
//   )
// }

// export default App
import { Outlet, BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Header/Navbar";
import Footer from "./Components/Footer/Footer";
import ShowCard from "./Components/CardContent/ShowCard";
import Addvertisement from "./Components/Advertise/Addvertisement";
import DetailsCard from "./Components/DetailPage/DetailsCard";

function App() {
  
  return (
   
    <div>
      <Header/>
      <Navbar/>
      <Addvertisement/>
      <Outlet />
      <Footer/>


      
      {/* <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Navbar />
                <Addvertisement />
                <ShowCard />
                <Footer />
              </>
            }
          />
          <Route
            path="/products/:id"
            element={
              <>
                <Header />
                <Navbar />
                <Addvertisement />
                <DetailsCard />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter> */}
      {/* <Header/>
      <Addvertisement/>
      <ShowCard/>
      <Navbar/>
      <Footer/> */}
    </div>
  );
}

export default App;
