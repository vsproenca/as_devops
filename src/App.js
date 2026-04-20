//111-16 - Análise e Desenvolvimento de Sistema
//RA: 1112024105490 - Valdinei dos Santos Proença

import React, {useState} from 'react';

function App() {
  const [dados, setDados] = useState({
      email:"",
      senha:""
  });
    
  const [mensagem, setMensagem] = useState("");
    
  function validarLogin() {
      if (
      dados.email === "eduardo.lino@pucpr.br" &&
      dados.senha === "123456"
      ){
          setMensagem("Acessado com sucesso!");
      } else {
          setMensagem("Usuário ou senha inválido!");
      }
  }
  function handleChange(e) {
      setDados({
          ...dados,
          [e.target.name]: e.target.value
      });
  }
  return (
  <div style={{textAlign: "left", marginLeft: "25px", marginTop: "25px"}}>
      
      <h1>Login</h1>
      
      <div>
      <input
      type="email"
      name="email"
      placeholder="Digite seu email"
      onChange={handleChange}
      />
      </div>
      
      <div>
      <input
      type="password"
      name="senha"
      placeholder="Digite sua senha"
      onChange={handleChange}
      />
      </div>
      
      
      <button onClick={validarLogin}>
       Acessar
      </button>
      <br /><br />
      
      <label>
       {mensagem}
      </label>
      
      </div>
  );
}

export default App;
