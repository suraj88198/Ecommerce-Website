'use client';

import React from 'react';
import Home from './home/page';
import Header from '@/components/commonHeader/header';
import HeaderRight from '@/components/headerRight/headerRight';



const App: React.FC = () => {
  return <>
            <Header/>
            <Home/>
        </>;
};

export default App;
