import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import './index.css'
import Header from "./components/Header/Header";
import RegisterItem from "./pages/RegisterAItem/RegisterItem";
import UseCase from "./pages/UseCase/UseCase";
import Footer from "./components/Footer/Footer";
import RegisterAInforRecord from "./Pages/RegisterAInforRecord/RegisterAInforRecord";
import Warenhouse from "./Pages/WarenHouse/WarenHouse";
import Manufacturing from "./Pages/Manufacturing/Manufacturing";
import Login from "./Pages/Login/Login";
import Error from "./Pages/ErrorPage/Error";
import ProtectedRoute from "./sso/protectedRoute";

const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login" || location.pathname === "/";
  

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginPage && <Header/>}

      <main className="flex-grow flex justify-center items-center">
          <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/login" element={<Login />} />
              <Route path="/register_a_item" element={<ProtectedRoute><RegisterItem /> </ProtectedRoute>} />
              <Route path="/use_case" element={<ProtectedRoute> <UseCase /> </ProtectedRoute>} />
              <Route path="/info_record" element={<ProtectedRoute> <RegisterAInforRecord /> </ProtectedRoute>} />
              <Route path="/inventory_management" element={<ProtectedRoute> <Warenhouse /> </ProtectedRoute>} />
              <Route path="/po_management" element={<ProtectedRoute> <Manufacturing /> </ProtectedRoute>}/>
              <Route path="*" element={<Error/>}/>
          </Routes>
        </main>

        {!isLoginPage && <Footer/>}
      </div>
    );
};

export default App;

