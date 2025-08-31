import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo ao Cadastro de Medicamentos</h1>
      <p>Para cadastrar um novo medicamento, clique no link abaixo:</p>
      <Link href="/cadastro">
        <a>Cadastrar Medicamento</a>
      </Link>
    </div>
  );
};

export default Home;