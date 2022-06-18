import React from 'react';
import Header from '@/layout/Header';
import Footer from '@/layout/Footer';
import { Outlet } from 'react-router-dom';

interface Props {}

const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
