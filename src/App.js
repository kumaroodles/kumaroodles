import React from 'react';

import Dashboard from "../src/components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signal from "../src/components/signal/Signal";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Telegram from "../src/components/telegram/Telegram";
import Whatsapp from "../src/components/whatsapp/Whatsapp";
import Login from "../src/components/login/Login";
import Logout from '../src/components/logout/Logout';

function App() {
  return (

    <div className="App">
<BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Dashboard />} />
        <Route path='/signal' element={<Signal />} />
        <Route path='/telegram' element={<Telegram />} />
        <Route path='/whatsapp' element={<Whatsapp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<Logout />} />
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
