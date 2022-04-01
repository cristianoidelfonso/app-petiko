import React, { useState } from 'react'

const Pedido = () => {

  const [ cep, setCep ] = useState('');
  const [ endereco, setEndereco ] = useState({});
  const [ formValue, setFormValue ] = useState({
    nome: "",
    email: "",
    cpf: "",
  });

  // const endereco = {
    // cep: "",
    // logradouro: "",
    // complemento: "", 
    // bairro: "",
    // localidade: "",
    // uf: "",
    // ibge: "",
    // gia: "",
    // ddd: "",
    // siafi: "",
// };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValue((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const { nome, email, cpf } = formValue;

  const handleBlur = (event) => {
    event.preventDefault();
    if(event.target.value < 8){
      return;
    }
    setCep(event.target.value);
    buscarCep(cep);
  }

  const buscarCep = async (cep) => {
    if(cep.length < 8) {
      return;
    } else { 
      const URL1 = `https://viacep.com.br/ws/${cep}/json/`;
      const URL2 = `http://127.0.0.1:8000/api/v1/endereco/${cep}`;     
      cep && await fetch(URL2, { 
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
    alert(`Um nome foi enviado: 
      Nome: ${nome}
      Email: ${email}
      CPF: ${cpf}
      CEP: ${cep} 
      Localidade: ${endereco.localidade}
    
    `);
  }

  // console.log(endereco);

  return (
    <>
      <div className="h2 text-center">Fazer pedido</div>
      <div className="container border border-danger">

        <form onSubmit={handleSubmit} className="row g-3">
          <div className="col-md-6">
            <label htmlFor="inputNome" className="form-label">Nome</label>
            <input 
              type="nome" 
              className="form-control" 
              id="inputNome"
              name="nome" 
              value={nome}
              onChange={handleChange}
            />
            {nome}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputEmail" className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control" 
              id="inputEmail" 
              name="email"
              value={email} 
              onChange={handleChange}
            />
            {email}
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCpf" className="form-label">CPF</label>
            <input 
              type="text" 
              className="form-control" 
              id="inputCpf"
              name="cpf" 
              value={cpf} 
              onChange={handleChange}
            />
            {cpf}
          </div>


          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">CEP</label>
            <input 
              type="text" 
              className="form-control" 
              id="cep"
              name="cep"  
              value={cep}
              maxLength={8}
              onChange={(e)=>setCep(e.target.value)} 
              onBlur={handleBlur} 
              placeholder="Informe o seu CEP" 
            />
            {cep}
          </div>

          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">State</label>
            <select id="inputState" className="form-select">
              <option value="DEFAULT" disabled>Choose a salutation ...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
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
          <div className="col-12">
            <button type="submit" className="btn btn-primary">Sign in</button>
          </div>
        </form>

      </div>
    </>
  )
}

export default Pedido