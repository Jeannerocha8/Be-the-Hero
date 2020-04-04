import React, {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import './styles.css';
import Heroesimg from '../../assets/heroes.png'
import Logoimg from '../../assets/logo.svg'
import api from '../../services/api';



export default function Logon(){

const [id, setId] = useState('');
const history = useHistory();
async function handleLogin(e){
    e.preventDefault();

    try{
        const response = await api.post('sessions', {id});
       
        localStorage.setItem('ongID', id);
        localStorage.setItem('ongName', response.data.name);
        history.push('/profile');
    }catch(err){
        alert('Falha no Login, tente novamente.')
    }
}


    return(
        <div className="logon-container">
            <section className="form">
                <img src={Logoimg} alt ="Be The Hero"/>
                
                <form onSubmit={handleLogin}>
                    <h1> Faça seu Logon </h1>
                    <input placeholder="Sua Id"
                    value={id}
                    onChange={e=> setId(e.target.value)}/>


                    <button type = "submit" className='button'>Entrar</button>

                    <Link className = "backLink" to = "/registrer">Não tenho cadastro</Link>
                </form>
            </section>

            <img src={Heroesimg} alt="Heroes"/>
        </div>
    );
}