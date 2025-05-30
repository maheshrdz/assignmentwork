
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Layout from './component/layout/Layout';
import Ordermanagement from './pages/Ordermanagement';
import Gastruckmanagement from './pages/Gastruckmanagement';
import CylinderOperations from './pages/CylinderOperations';
import SystemProgram from './pages/systemprogram/SystemProgram';


function App() {
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/order-management" element={<Ordermanagement />} />
            <Route
              path="/gas-truck-management"
              element={<Gastruckmanagement />}
            />
            <Route
              path="/cylinder-operations"
              element={<CylinderOperations />}
            />
            <Route path="/system-program" element={<SystemProgram/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
