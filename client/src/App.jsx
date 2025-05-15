import { Suspense, useState } from "react";
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import Property from "./pages/property/Property";
import UserDetailsContext from "../context/UserDetailsContext";
import Bookings from "./pages/Bookings/Bookings";
import Favourites from "./pages/Favourites/Favourites";


function App() {
  const queryClient = new QueryClient();
  const [userDetails, setUserDetails] = useState({
    favourites: [],
    bookings: [],
    token: null
  });

  return (
    <UserDetailsContext.Provider value={{userDetails, setUserDetails}}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}/>
        <Routes>
        <Route element={<Layout />}>          
          <Route path="/" element={<Website />} />
          <Route path="/properties">
            <Route index element={<Properties />}/>
            <Route path=":propertyId" element={<Property />}/>
          </Route>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path="/favourites" element={<Favourites />}/>
        </Route>  
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      </QueryClientProvider>  
    </UserDetailsContext.Provider>
  );
}

export default App;
