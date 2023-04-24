import React from 'react';

import Navbar from '../features/navbar/Navbar';
import AppRoutes from './AppRoutes';
import CreateProduct from '../features/cards/CreateProduct'

const App = () => {
  return (
    <div>
      <Navbar />
      <CreateProduct />
      <AppRoutes />
    </div>
  );
};

export default App;


