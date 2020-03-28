import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function NewIncident() {
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(event) {
        event.preventDefault();

        const ongId = localStorage.getItem('ongId');
        const data = { title, description, value };

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId,
                }
            });
    
            history.push('/profile');
        } catch (error) {
            alert('Erro ao salvar incidente. Tente novamente');
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>

                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input placeholder="Titulo do caso" value={title} onChange={event => setTitle(event.target.value)}/>
                    <textarea placeholder="Descrição" value={description} onChange={event => setDescription(event.target.value)}/>
                    <input placeholder="Valor em reais" value={value} onChange={event => setValue(event.target.value)}/>

                    <div className="button-group">
                        <Link className="button button-cancel" to="/profile">Cancelar</Link>
                        <button className="button" type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}