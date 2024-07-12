import React, { useEffect, useState } from "react";
import '../src/styles/App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./UI/Navbar/Navbar";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true)
    }
    setLoading(false)
  }, [])
  
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth, isLoading
    }}>
          <BrowserRouter>
          <Navbar />
          <AppRouter />
      </BrowserRouter>
    </AuthContext.Provider>

  );
}

export default App;
