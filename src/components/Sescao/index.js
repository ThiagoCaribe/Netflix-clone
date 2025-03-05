import React, { useEffect, useState } from 'react';

import ModalFilme from './components/ModalFilme';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionFilme from '../SectionFilme';

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

      <div class="container-fluid">
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
