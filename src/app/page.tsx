'use client';

import React from 'react';
import Home from './home/page';
import Header from '@/components/commonHeader/header';
import Footer from '@/components/commonFooter/footer';


const App: React.FC = () => {
  return (
    <>
            <Header/>

      <Home/>
<Footer/>
    </>
  );
};

export default App;
