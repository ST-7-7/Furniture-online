import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Routers from '../../routers/Routers';
import AdminNav from '../../admin/AdminNav';
import { useLocation } from 'react-router-dom'; 

function Layout() {

  const location = useLocation();

  return (
    <div>

      {location.pathname.startsWith('/dashboard') ? <AdminNav /> : <Header />}

      <div>
        <Routers />
      </div>
      <Footer />
    </div>
  )
}

export default Layout