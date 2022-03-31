import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-5">
      <button className="navbar-toggler border border-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
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