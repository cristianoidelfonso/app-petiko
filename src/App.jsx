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
import styled from 'styled-components';
import Produtos from './components/Produtos';

const Header = styled.div`
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  z-index: 18;
  background-color: #FEE
`;

function App() {

  const [open, setOpen] = useState(false);
  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
    setOpen(!open);
  }

  return (
    <div className="App">

      <Header>
        <Navbar />
        <Burger open={open} handleNavToggle={handleNavToggle} />
      </Header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/pedidos" element={<Pedido />} />
        <Route path="/endereco" element={<Endereco />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

    </div>  
   
  )
}

export default App
