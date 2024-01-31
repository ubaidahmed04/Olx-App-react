import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './Components/Header/Header.jsx'
import ShowCard from './Components/CardContent/ShowCard.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Navbar from './Components/Header/Navbar.jsx'
import Addvertisement from './Components/Advertise/Addvertisement.jsx'
import Footer from './Components/Footer/Footer.jsx'
import DetailsCard from './Components/DetailPage/DetailsCard.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
    <Route path='/' element={
      <>
    <ShowCard />
      </> 
  }/>
    <Route path="/products/:id" element={<DetailsCard/>} />
    <Route path="/Home" element={<ShowCard />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)