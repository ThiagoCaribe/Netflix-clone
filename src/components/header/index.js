import React, { useState, useEffect } from 'react';

const Header = () => {
  const [user, setUser] = useState({});

  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  useEffect(() => {
    const userString = localStorage.getItem("@user");
    if (userString) {
      try {
        setUser(JSON.parse(userString));
      } catch (error) {
        console.error("Erro ao fazer o parsing do usuário:", error);
        setUser(null);
      }
    } else {
      setUser(null); 
    }
  }, []);
  return (
    <header className="row">
      <div className="col-2">
        <img src={require('../../assets/logo.png')} />
      </div>
      <div className="col-8">
        <ul className="menu_list">
          <li>
            <a href="#">Início</a>
          </li>
          <li>
            <a href="#">Séries</a>
          </li>
          <li>
            <a href="#">Filmes</a>
          </li>
          <li>
            <a href="#">Mais Recentes</a>
          </li>
          <li>
            <a href="#">Minha lista</a>
          </li>
        </ul>
      </div>
      <div className="col-2 text-right">
        <a onClick={logout} className="text-white">
          Olá, {user?.nome}. Sair
        </a>
      </div>
    </header>
  );
};

export default Header;
