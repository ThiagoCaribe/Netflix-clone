import React, { useEffect, useState } from 'react';

import ModalFilme from '../../components/ModalFilme/index';
import Header from '../../components/header/index';
import Hero from '../../components/Hero/index';
import SectionFilme from '../../components/SectionFilme/index';

import api from '../../services/api';

const Home = () => {
  const [principal, setPrincipal] = useState({});
  const [secoes, setSecoes] = useState([]);

  const getHome = async () => {
    try {
      const response = await api.get('/home');
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setPrincipal(res.principal);
      setSecoes(res.secoes);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <>
      <ModalFilme />

      <div className="container-fluid">
        <Header />
      </div>

      <Hero filme={principal} />

      <div id="main-content">
        {secoes.map((secao) => (
          <SectionFilme secao={secao} />
        ))}
      </div>
    </>
  );
};

export default Home;
