import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './index.css'
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import RegisterAInforRecord from "./Pages/RegisterAInforRecord/RegisterAInforRecord";
import Manufacturing from "./Pages/Manufacturing/Manufacturing";
import Login from "./Pages/Login/Login";
import Error from "./Pages/ErrorPage/Error";
import ProtectedRoute from "./sso/protectedRoute";
import RegisterItem from "./Pages/RegisterAItem/RegisterItem";
import UseCase from "./Pages/UseCase/UseCase";
import Warenhouse from "./Pages/WarenHouse/Warenhouse";


const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "https://posautomation.vercel.app/login" || location.pathname === "https://posautomation.vercel.app/";
  

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Header/>}

      <main className="flex-grow flex justify-center items-center">
          <Routes>
              <Route path="https://posautomation.vercel.app/" element={<Login/>}/>
              <Route path="https://posautomation.vercel.app/login" element={<Login />} />
              <Route path="https://posautomation.vercel.app/register_a_item" element={<ProtectedRoute><RegisterItem /> </ProtectedRoute>} />
              <Route path="https://posautomation.vercel.app/use_case" element={<ProtectedRoute> <UseCase /> </ProtectedRoute>} />
              <Route path="https://posautomation.vercel.app/info_record" element={<ProtectedRoute> <RegisterAInforRecord /> </ProtectedRoute>} />
              <Route path="https://posautomation.vercel.app/inventory_management" element={<ProtectedRoute> <Warenhouse /> </ProtectedRoute>} />
              <Route path="https://posautomation.vercel.app/po_management" element={<ProtectedRoute> <Manufacturing /> </ProtectedRoute>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        </main>

        {!isLoginPage && <Footer/>}
      </div>
    );
};

export default App;

