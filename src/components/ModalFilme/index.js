import React, { useState, useEffect } from 'react';

import Episodeo from '../Episodeo';
import api from '../../services/api';

const ModalFilme = () => {
  const [filme, setFilme] = useState({});
  const [episodeos, setEpisodeos] = useState([]);

  const selectFilmeListener = () => {
    window.addEventListener('selectFilme', (data) => {
      setFilme(data.detail);
    });
  };

  const getEpisodeos = async (temporada_id) => {
    try {
      const response = await api.get(`/episodeo/temporada/${temporada_id}`);
      const res = response.data;

      if (res.error) {
        alert(res.message);
        return false;
      }

      setEpisodeos(res.episodeos);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    selectFilmeListener();
  }, []);

  useEffect(() => {
    if (filme.tipo == 'serie') {
      getEpisodeos(filme.temporadas[0]?._id);
    }
  }, [filme]);

  return (
    <div className="modal fade" id="modal-filme">
      <div className="modal-dialog">
        <div className="modal-content">
          <div
            className="modal-hero"
            style={{ backgroundImage: `url(${filme.capa})` }}
          >
            <img src={filme.logo} />
            <div className="col-12 modal-hero-infos pl-0">
              <button className="btn btn-lg btn-custom-white">
                <span className="mdi mdi-play"></span> Assistir
              </button>
              <a
                href="#"
                className="btn-custom-round btn btn-lg btn-light rounded-circle"
              >
                <span className="mdi mdi-play"></span>
              </a>
              <a
                href="#"
                className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
              >
                <span className="mdi mdi-thumb-up text-white"></span>
              </a>
              <a
                href="#"
                className="btn-custom-round border-white btn btn-lg rounded-circle opacity-50"
              >
                <span className="mdi mdi-thumb-down text-white"></span>
              </a>
            </div>
          </div>
          <div className="modal-infos">
            <div className="container">
              <div className="row">
                <div className="col-7">
                  <p className="filme_descricao">{filme.descricao}</p>
                </div>
                <div className="col-5">
                  <p className="filme_elenco">
                    Elenco:
                    <span>{filme.elenco?.join(', ')}</span>
                    <br />
                    <br />
                    Gêneros: <span>{filme.generos?.join(', ')}</span>
                    <br />
                    <br />
                    Cenas e momentos:{' '}
                    <span>{filme.cenas_momentos?.join(', ')}</span>
                  </p>
                </div>
              </div>

              {filme.tipo == 'serie' && (
                <>
                  <br />
                  {filme.temporadas?.length > 0 && (
                    <>
                      <div className="row">
                        <div className="col-7">
                          <h3 className="text-white">Episódeos</h3>
                        </div>
                        <div className="col-5 text-right">
                          <select
                            onChange={(e) => {
                              getEpisodeos(e.target.value);
                            }}
                            className="form-control"
                          >
                            {filme.temporadas?.map((temporada) => (
                              <option value={temporada._id}>
                                {temporada.titulo}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <br />
                      <div className="row">
                        <ul id="lista_episodeos">
                          {episodeos.map((episodeo) => (
                            <Episodeo episodeo={episodeo} />
                          ))}
                        </ul>
                      </div>
                    </>
                  )}
                  {filme.temporadas?.length == 0 && (
                    <>
                      <h3 classNameName="text-center text-white mb-50">
                        Nenhuma temporada disponível
                      </h3>
                      <br />
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFilme;
