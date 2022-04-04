import React, { useState, useEffect } from 'react';
import logo from './../logo.svg';

const Produtos = () => {

  const [produtos, setProdutos] = useState([]);
  
  useEffect(() => {
    fetch(`http://localhost:8000/api/v1/produtos`, {
      method: "GET",
      headers: { 'Content-Type':'application/json'}
    }).then((res) => res.json())
      .then((data) => {
        setProdutos(data);
      })
      .catch((error) => {
        console.log(error);
      })
  },[]);

  return (
    <>
      <div className="container my-5">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mb-5">
          
            {produtos.map((p, index) => (
              <div className="col col-md-6 col-lg-4" key={index}>
                <div className="card" style={{}} >
                  <img className="card-img-top" src={logo} alt="Card image" style={{width:'100%'}} />
                  <div className="card-body text-center">
                    <h4 className="card-title">{p.nome}</h4>
                    <p className="card-text">{p.descricao}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                  </div>
                </div>
              </div>
            ))}

        </div>
      </div>
    </>
  )
}

export default Produtos