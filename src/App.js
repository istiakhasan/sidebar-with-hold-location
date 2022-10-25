import React, { Suspense } from 'react';

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { routingList } from './routinglist';

const App = () => {
 


  return (
    <Routes>
      {
        routingList.map(item=><Route key={item.id} path={item.path} element={<Suspense fallback={<h1 style={{color:"red"}}>Loading</h1>}>{item.component}</Suspense>} />)
      }
      
    </Routes>
  );
};

export default App;