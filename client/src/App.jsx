import { Suspense } from "react";
import "./App.css";
import Website from "./pages/Website";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Properties from "./pages/Properties/Properties";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from 'react-query'
import { ToastContainer } from "react-toastify";
import Property from "./pages/property/Property";


function App() {
  const queryClient = new QueryClient();

  return (
    <>
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
        </Route>  
        </Routes>
      </BrowserRouter>
      <ToastContainer />
      <ReactQueryDevtools initialIsOpen={false}/>
      </QueryClientProvider>  
    </>
  );
}

export default App;
