import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
  return (
    <div className="App">

      <div className="container01">
        <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Logo_ORKUT.svg/2560px-Logo_ORKUT.svg.png' alt="Orkut Logo" />
        <p><span className='primeiraPalavra'>Conecta-se </span>aos amigos e familiares usando recados e mensagens instantâneas</p>
        <p><span className='primeiraPalavra'>Conheça </span>novas pessoas através de seus amigos e comunidades</p>
        <p><span className='primeiraPalavra'>Compartilhe </span>seus vídeos, fotos e paixões em um só lugar</p>
      </div>
      
      <div className="container02">
        <main className="App-main">
          <p>Acesse o Orkut com a sua conta</p>
          <LoginForm />
        </main>
      </div>

      <div className="container03">
        <p>Ainda não é membro?</p>
        <a href="#">CRIAR CONTA</a>
      </div>

      <div className="footer">
        <p>&copy; Orkut By Pepe 2024</p>
      </div>
    </div>
  );
};

export default App;

