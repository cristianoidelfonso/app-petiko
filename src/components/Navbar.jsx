import React from 'react';
import { Link } from "react-router-dom";
import logo from '../logo.svg';
import logoPet from '../logo-petiko.png';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img src={logo} className="App-logo" alt="Logo React" />
        <img src={logoPet} className="img-fluid w-50" alt="Logo Tetiko" />
      </Link>
        
      <button className="navbar-toggler" style={{marginRight: "2.2rem"}} type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse border-danger justify-content-end px-5" id="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link text-primary" to='/login'>Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to='/register'>Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to='/pedidos'>Pedido</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-primary" to='/endereco'>CEP</Link>
          </li>
        </ul>
      </div>
    </nav>  
  );
}
export default Navbar;

    