import React, {useState,useEffect} from 'react';
import Logoimg from '../../assets/logo.svg'
import {Link, useHistory} from 'react-router-dom';
import './style.css'
import {FiPower, FiTrash2} from 'react-icons/fi';
import api from '../../services/api';

export default function Profile(){
  const ongId = localStorage.getItem('ongID');
  const ongName = localStorage.getItem('ongName');
  const [incidents, setIncidents] = useState([]);
  const history = useHistory();

  useEffect(() => {
    api.get('profile', {
        headers: {
          Authorization: ongId,
        }
      }).then(response => {
          setIncidents(response.data);
      })
    },[ongId]);

  //delete
    async function handleDeleteIncident(id) {
      try {
        await api.delete(`incidents/${id}`, {
          headers: {
          Authorization: ongId,
        }
      });
        setIncidents(incidents.filter(incident => incident.id !== id));
      } catch (err){
        alert ('Erro ao deletar incidente, tente novamente.');
      }
    }

    //logout
    function handleLogaout(){
      localStorage.clear();
      history.push('/');
    }

    return(
        <div className="profile-container">
            <header>
                <img src={Logoimg} alt ="Be The Hero"/>
                <span> Bem vinda, {ongName}</span>
                <Link className="button" to = "/incidents/new">Cadastrar novo caso </Link>
                <button onClick={handleLogaout} type = "button">
                    <FiPower size ={18} color="#e02041" />
                </button>
            </header>
            <h1>Casos Cadastrados </h1>
            
            <ul>
               {incidents.map (incident => (
                  <li key={incident.id}>
                      <strong> Caso: </strong>
                      <p>{incident.title}</p>

                      <strong>Descrição: </strong>
                      <p> {incident.description}</p>

                      <strong> Valor: </strong>
                      <p> {Intl.NumberFormat('pt-BR', {style:'currency', currency: 'BRL'}).format(incident.value)} </p>

                      <button onClick={() => handleDeleteIncident(incident.id)}  type = "button">
                        <FiTrash2 size ={20} color="#a8a8b3" />
                      </button>
                    </li>
               ))}
             </ul>
        </div>
    );
}