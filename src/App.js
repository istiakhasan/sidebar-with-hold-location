import React from 'react';

import './App.css'
import { Route, Routes } from 'react-router-dom';
import { routingList } from './routinglist';

const App = () => {
 


  return (
    <Routes>
      {
        routingList.map(item=><Route key={item.id} path={item.path} element={item.component} />)
      }
      
    </Routes>
  );
};

export default App;