import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pedido = () => {

  let navigate = useNavigate();

  const [ errorsBack, setErrorsBack ] = useState({});

  const [ endereco, setEndereco ] = useState({
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: "",
  });
  
  const [ formValue, setFormValue ] = useState({
    nome: "",
    email: "",
    cpf: "",
    numero: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    setEndereco((formEndereco) => {
      return {
        ...formEndereco, 
        [name]: value,
      }
    })
  };

  const { nome, email, cpf, numero } = formValue;
  const { cep, logradouro, complemento, bairro, localidade, uf } = endereco;

  useEffect(async () => {
    
    if (cep.length < 8) {
      return;
    }else{
      cep && await fetch(`http://127.0.0.1:8000/api/v1/endereco/${cep}`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.hasOwnProperty("erro")) {
            alert('Cep não existente');
          } else {
            setEndereco(data);
          }
        })
      .catch((error) => console.log(error));
    }
  },[cep])


  const makeOrder = async (event) => {
    event.preventDefault();

    const payload = {
      nome: nome,
      email: email,
      cpf: cpf,
      cep: cep,
      logradouro: logradouro,
      numero: numero,
      bairro: bairro,
      complemento: complemento,
      localidade: localidade,
      uf: uf,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Accept': 'application/json','Content-Type': 'application/json' },
      body: JSON.stringify( payload )
    };

    // const response = await fetch(`http://127.0.0.1:8000/api/v1/pedidos`, requestOptions)
    // const data = await response.json();
    // console.log(data);
    
    await fetch(`http://127.0.0.1:8000/api/v1/pedidos`, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        if(data.errors){
          setErrorsBack(data.errors);
        }else{
          console.log('Data', data);
          navigate('/');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      
      <div className="h2 text-center">Fazer pedido</div>
      <div className="container border p-4">

        <form onSubmit={ makeOrder } className="row">

          <div className="col-md-6 col-lg-4">
            <label htmlFor="inputNome" className="form-label">NOME</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputNome"
              name="nome" 
              onChange={handleChange}
              value={nome}
            />
            { errorsBack.nome && !nome.length && ( <small className="text-danger">{ errorsBack.nome }</small>) }
          </div>

          <div className="col-md-6 col-lg-4">
            <label htmlFor="inputEmail" className="form-label">EMAIL</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              name="email"
              onChange={handleChange}
              value={email} 
            />
            { errorsBack.email && !email.length && ( <small className="text-danger">{ errorsBack.email }</small>) }
          </div>

          <div className="col-md-6 col-lg-4">
            <label htmlFor="inputCpf" className="form-label">CPF</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCpf"
              name="cpf" 
              onChange={handleChange}
              value={cpf} 
            />
            { errorsBack.cpf && !cpf.length && ( <small className="text-danger">{ errorsBack.cpf }</small>) }
          </div>

          <hr className="w-100 mt-4"/>

          <div className="col-md-3 col-lg-2">
            <label htmlFor="inputCep" className="form-label">CEP</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCep"
              name="cep"  
              maxLength={8}
              onChange={handleChange}
              value={cep}
            />
            { errorsBack.cep && !cep.length && ( <small className="text-danger">{ errorsBack.cep }</small>) }
          </div>


          <div className="col-md-7 col-lg-4">
            <label htmlFor="inputLogradouro" className="form-label">RUA</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputLogradouro" 
              name="logradouro"
              value={logradouro}
              onChange={handleChange}
            />
            { errorsBack.logradouro && !logradouro.length && ( <small className="text-danger">{ errorsBack.logradouro }</small>) }
          </div>

          <div className="col-4 col-md-2 col-lg-2">
            <label htmlFor="inputNumero" className="form-label">NUM</label>
            <input
              type="text"
              className="form-control"
              id="inputNumero"
              name="numero"
              onChange={handleChange}
              value={numero}
            />
            { errorsBack.numero && !numero.length && ( <small className="text-danger">{ errorsBack.numero }</small>) }
          </div>

          <div className="col-8 col-md-6 col-lg-4">
            <label htmlFor="inputComplemento" className="form-label">COMPLEMENTO</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputComplemento" 
              name="complemento"
              value={complemento}
              onChange={handleChange}
            />
            { errorsBack.complemento && ( <small className="text-danger">{ errorsBack.complemento }</small>) }
          </div>

          <div className="col-md-6 col-lg-5">
            <label htmlFor="inputBairro" className="form-label">BAIRRO</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputBairro" 
              name="bairro"
              value={bairro}
              onChange={handleChange}
            />
            { errorsBack.bairro && !bairro.length &&  ( <small className="text-danger">{ errorsBack.bairro }</small>) }
          </div>
          
          <div className="col-9 col-md-6 col-lg-4">
            <label htmlFor="inputLocalidade" className="form-label">CIDADE</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputLocalidade" 
              name="localidade"
              value={localidade}
              onChange={handleChange}
              readOnly
            />
          </div>

          <div className="col-3 col-md-6 col-lg-3">
            <label htmlFor="inputUf" className="form-label">UF</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputEstado" 
              name="uf"
              defaultValue={uf}
              onChange={handleChange}
              readOnly
            />
          </div>

          

          <div className="col-md-6">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option value="DEFAULT" disabled>Choose a salutation ...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-6">
            <label htmlFor="inputZip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="inputZip" />
          </div>

          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="gridCheck" />
              <label className="form-check-label" htmlFor="gridCheck">
                  Check me out
                </label>
            </div>
          </div>
          <div className="col-12 d-flex justify-content-end">
            <a href="/" className="btn btn-secondary btn-sm px-2">Cancelar</a>
            <button type="submit" className="btn btn-primary btn-sm">Finalizar pedido</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Pedido