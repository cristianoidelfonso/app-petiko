import React, { useEffect, useState } from 'react'

const Pedido = () => {

  const [ cep, setCep ] = useState('');
  const [ pedidos, setPedidos ] = useState([]);

  const [ endereco, setEndereco ] = useState({});
  const [ formValue, setFormValue ] = useState({
    nome: "",
    email: "",
    cpf: "",
    numero: "",
  });

  useEffect( async () => {
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`http://127.0.0.1:8000/api/v1/pedidos`, requestOptions)
    const data = await response.json();
    setPedidos(data);
  },[pedidos]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { nome, email, cpf, numero } = formValue;

  const handleBlur = (event) => {
    event.preventDefault();
    if(event.target.value < 8){
      return;
    }
    setCep(event.target.value);
    buscarCep(cep);
  }

  const buscarCep = (cep) => {
    if(cep.length < 8) {
      return;
    } else { 
      // const URL1 = `https://viacep.com.br/ws/${cep}/json/`;
      const URL2 = `http://127.0.0.1:8000/api/v1/endereco/${cep}`;     
      
      cep && fetch(URL2, { 
            method: 'POST', 
            mode: 'cors', 
            headers: { 'Content-Type': 'application/json'}
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.hasOwnProperty("erro")) {
              alert('Cep não existente');
            } else {
              // console.log('Cliente: ', data);
              setEndereco(data);
            }
          })
          .catch((error) => console.log(error));
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      nome: nome,
      email: email,
      cpf: cpf,
      cep: cep,
      rua: endereco.logradouro,
      numero: numero,
      bairro: endereco.bairro,
      complemento: endereco.complemento,
      cidade: endereco.localidade,
      estado: endereco.uf,
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify( payload )
    };

    const response = await fetch(`http://127.0.0.1:8000/api/v1/pedidos`, requestOptions)
    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      {/* <div>
        <table className="table">
          <tbody>
            { pedidos.map((pedido) => (
                <tr key={pedido.id}>
                  <td>{pedido.nome}</td>
                  <td>{pedido.email}</td>
                  <td>{pedido.cpf}</td>
                </tr>
            ))}
          </tbody>
        </table>
      </div> */}

      <div className="h2 text-center">Fazer pedido</div>
      <div className="container border p-4">

        <form onSubmit={handleSubmit} className="row">
          <div className="col-md-6 col-lg-4">
            <label htmlFor="inputNome" className="form-label">NOME</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputNome"
              name="nome" 
              value={nome}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label htmlFor="inputEmail" className="form-label">EMAIL</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              name="email"
              value={email} 
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 col-lg-4">
            <label htmlFor="inputCpf" className="form-label">CPF</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCpf"
              name="cpf" 
              value={cpf} 
              onChange={handleChange}
            />
          </div>

          <hr className="w-100 mt-4"/>

          <div className="col-md-3 col-lg-2">
            <label htmlFor="inputCep" className="form-label">CEP</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCep"
              name="cep"  
              value={cep}
              maxLength={8}
              onChange={(e)=>setCep(e.target.value)} 
              onBlur={handleBlur} 
              placeholder="Informe o seu CEP" 
            />
          </div>


          <div className="col-md-7 col-lg-4">
            <label htmlFor="inputLogradouro" className="form-label">RUA</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputLogradouro" 
              name="logradouro"
              defaultValue={endereco.logradouro} 
            />
          </div>

          <div className="col-4 col-md-2 col-lg-2">
            <label htmlFor="inputNumero" className="form-label">NUM</label>
            <input
              type="text"
              className="form-control"
              id="inputNumero"
              name="numero"
              value={numero}
              onChange={handleChange}
            />
          </div>

          <div className="col-8 col-md-6 col-lg-4">
            <label htmlFor="inputComplemento" className="form-label">COMPLEMENTO</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputComplemento" 
              name="complemento"
              defaultValue={endereco.complemento}
            />
          </div>

          <div className="col-md-6 col-lg-5">
            <label htmlFor="inputBairro" className="form-label">BAIRRO</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputBairro" 
              defaultValue={endereco.bairro}
            />
          </div>
          
          <div className="col-9 col-md-6 col-lg-4">
            <label htmlFor="inputLocalidade" className="form-label">CIDADE</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputLocalidade" 
              defaultValue={endereco.localidade}
            />
          </div>

          <div className="col-3 col-md-6 col-lg-3">
            <label htmlFor="inputEstado" className="form-label">UF</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputEstado" 
              defaultValue={endereco.uf}
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