import React from 'react';
import { BrowserRouter } from "react-router-dom"; 
import Paths from './routes/Paths';

function App() {
  return (
    <BrowserRouter>
      <Paths />
    </BrowserRouter>
  );
}

export default App;