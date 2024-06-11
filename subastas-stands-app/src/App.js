import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { 
  Agentes,
  AgentePage,
  Home,
  LoginPage,
  MisionPage,
} from './pages'
import { Layout } from './components';
function App () {
  

  const [user_id, setUserId] = useState(window.localStorage.getItem("user_id"));
  const [logged, setLogged] = useState(window.localStorage.getItem("logged"));

  const setLoggedIn = (logged, user_id) => {
    setLogged(logged);
    setUserId(user_id);
    window.localStorage.setItem("user_id", user_id);
    window.localStorage.setItem("logged", logged);
  }

  const logout = () => {
    setLogged(false);
    setUserId('')
    window.localStorage.setItem("user_id", null);
    window.localStorage.setItem("logged", null);
  }

  useEffect(() => {
    var current_user = window.localStorage.getItem("user_id");
    var current_logged = window.localStorage.getItem("logged");
    if(current_user !== null || current_logged !== null) {
      setLoggedIn(current_logged, current_user);
    }
  }, []);

  return (
    <Layout logged_in={logged} logout={logout}>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/agentes" element={ <Agentes /> } />
        <Route path='/login' element={ <LoginPage setLoggedIn={setLoggedIn} /> } />
        <Route path='/agente/:username' element={ <AgentePage /> } />
        <Route path='/mision/:access_code' element={ <MisionPage /> } />
      </Routes>
    </Layout>
  );
}

export default App;
