import './App.css';

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Pedido from './components/Pedido';
import Endereco from './components/Endereco';

import NavbarStyled from './components/Nav/Navbar';

function App() {

  return (
    <div className="App">

      <NavbarStyled />
      {/* <header className="App-header"> */}
        {/* <Navbar /> */}
      {/* </header> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pedidos" element={<Pedido />} />
        <Route path="/endereco" element={<Endereco />} />
      </Routes>

    </div>  
   
  )
}

export default App
