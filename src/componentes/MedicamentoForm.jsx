import React, { useState } from 'react';

const MedicamentoForm: React.FC = () => {
    const [nome, setNome] = useState('');
    const [dosagem, setDosagem] = useState('');
    const [descricao, setDescricao] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const medicamento = { nome, dosagem, descricao };
        console.log('Medicamento cadastrado:', medicamento);
        // Aqui você pode adicionar a lógica para enviar os dados para um servidor ou API
        setNome('');
        setDosagem('');
        setDescricao('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="dosagem">Dosagem:</label>
                <input
                    type="text"
                    id="dosagem"
                    value={dosagem}
                    onChange={(e) => setDosagem(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="descricao">Descrição:</label>
                <textarea
                    id="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Cadastrar Medicamento</button>
        </form>
    );
};

export default MedicamentoForm;