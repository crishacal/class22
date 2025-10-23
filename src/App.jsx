import React, { useState } from 'react';
import './App.css';

function MeuComponente() {
  const [nome, setNome] = useState({ Nome: '', Sobrenome: '' });

  return (
    <div className="container">
      <h2>Formulário</h2>
      <form className="form">
        <div className="form-group">
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            id="nome"
            className="input"
            placeholder="Digite seu nome"
            value={nome.Nome}
            onChange={(e) => setNome({ ...nome, Nome: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sobrenome">Sobrenome: </label>
          <input
            type="text"
            id="sobrenome"
            className="input"
            placeholder="Digite seu sobrenome"
            value={nome.Sobrenome}
            onChange={(e) => setNome({ ...nome, Sobrenome: e.target.value })}
          />
        </div>
      </form>
      <div className="display">
        <span>Nome: {nome.Nome}</span><br />
        <span>Sobrenome: {nome.Sobrenome}</span>
      </div>
    </div>
  );
}

export default MeuComponente;