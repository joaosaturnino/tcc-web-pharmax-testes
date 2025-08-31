import React, { useState } from "react";
import MedicamentoForm from "../componentes/MedicamentoForm"; // Mantenha o caminho se sua pasta for 'componentes'

const Cadastro = () => {
  // Remova a tipagem <Medicamento> pois não é suportada em arquivos .jsx
  const [medicamento, setMedicamento] = useState({
    id: "",
    nome: "",
    dosagem: "",
    descricao: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicamento((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do medicamento
    console.log(medicamento);
  };

  return (
    <div>
      <h1>Cadastro de Medicamentos</h1>
      <MedicamentoForm
        medicamento={medicamento}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Cadastro;
