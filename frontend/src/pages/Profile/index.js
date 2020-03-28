import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be the Hero"/>
                <span>Bem vinda, APAD</span>

                <Link className='button' to="/incidents/new">Cadastrar novo caso</Link>
                <button>
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>CASO:</strong>
                    <p>Caso 1</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição caso 1</p>

                    <strong>VALOR:</strong>
                    <p>R$ 250,00</p>

                    <button type="button">
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso 1</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição caso 1</p>

                    <strong>VALOR:</strong>
                    <p>R$ 250,00</p>

                    <button type="button">
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso 1</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição caso 1</p>

                    <strong>VALOR:</strong>
                    <p>R$ 250,00</p>

                    <button type="button">
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso 1</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição caso 1</p>

                    <strong>VALOR:</strong>
                    <p>R$ 250,00</p>

                    <button type="button">
                        <FiTrash2 />
                    </button>
                </li>

                <li>
                    <strong>CASO:</strong>
                    <p>Caso 1</p>

                    <strong>DESCRIÇÃO:</strong>
                    <p>Descrição caso 1</p>

                    <strong>VALOR:</strong>
                    <p>R$ 250,00</p>

                    <button type="button">
                        <FiTrash2 />
                    </button>
                </li>
            </ul>
        </div>
    )
}