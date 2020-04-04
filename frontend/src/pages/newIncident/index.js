import React, {useState} from 'react';
import './style.css';
import Logoimg from '../../assets/logo.svg'
import {Link,useHistory} from 'react-router-dom'; 
import api from '../../services/api'

export default function NewIncident() {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setvalue] = useState('');
    const ongId = localStorage.getItem('ongID');
    const history = useHistory();
    async function handlerNewIncident(e){
        e.preventDefault();
        const data ={
           title,
           description,
           value
        };

        try{
            api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                  }
            });
             history.push('/profile');

        } catch (err) {

        }
    }

    return(
        <div className="newIncident-container">
        <div className="content">
            <section>
                 <img src={Logoimg} alt ="Be The Hero"/> 
                 <h1>Cadastro novo caso</h1>
                 <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                 <Link className = "backLink" to = "/profile">Voltar para Home</Link>
            </section>

            <form onSubmit={handlerNewIncident}>
                <input 
                    placeholder = "Titulo do caso"
                    value ={title}
                    onChange = {e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder="descrição"
                    value ={description}
                    onChange = {e => setDescription(e.target.value)}
                />
                <input 
                    placeholder="Valor em reais"
                    value ={value}
                    onChange = {e => setvalue(e.target.value)}
                />

                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}