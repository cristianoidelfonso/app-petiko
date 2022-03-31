import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Nav/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Pedido from './components/Pedido';
import Endereco from './components/Endereco';
import Contato from './components/Contato';
import Burger from './components/Nav/Burger';
import NotFoundPage from './components/NotFoundPage';

function App() {

  const [open, setOpen] = useState(false);
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
    setOpen(!open);
  }

  return (
    <div className="App">

      <div className="d-flex flex-row">
        <Navbar handleNavToggle={handleNavToggle} />
        <Burger open={open} handleNavToggle={handleNavToggle} />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pedidos" element={<Pedido />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>  
   
  )
}

export default App
