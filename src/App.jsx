import './App.css';
import logo from './logo.svg';
import logoPet from './logo-petiko.png';
import bannerV2 from './banner_site_v2.png';
import { Link, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Register from './components/Register';
import Pedido from './components/Pedido';
import Endereco from './components/Endereco';

function App() {

  return (
    <div className="App">
      <header className="d-flex flex-row bg-light align-items-center justify-content-between">
        <Link className="navbar-brand" to="/">
          <img src={logo} className="App-logo" alt="logo" />
          <img src={logoPet} className="w-50" alt="Logo Petiko" />
        </Link>
        <Navbar />
      </header>
      

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pedidos" element={<Pedido />} />
        <Route path="/endereco" element={<Endereco />} />
      </Routes>

      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={bannerV2} alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={bannerV2} alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={bannerV2} alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
   
  )
}

export default App
