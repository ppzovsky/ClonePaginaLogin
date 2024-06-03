import { useState , useEffect } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [salvaInfo, setSalvaInfo] = useState(false);
  const [botaoDesativado, setBotaoDesativado] = useState(true);
  const [setDadosUsuario] = useState(false);

  const usuarios = [
    { email: 'joao@gmail.com', password: 'senha123' },
    { email: 'gugutrembala@yahoo.com', password: 'zezekhezacdemielebonafedossantos' },
  ];

  const fazerLogin = (event) => {
    event.preventDefault();
    console.log(`Login: ${email}, Senha: ${password}`);

    const userExiste = usuarios.some(
        (user) => user.email === email && user.password === password
      );
      if (userExiste){
        setDadosUsuario(true);
        if (salvaInfo) {
            localStorage.setItem('salvarEmail', email);
            localStorage.setItem('salvarSenha', password);
        } else {
            localStorage.removeItem('salvarEmail');
            localStorage.removeItem('salvarSenha');
        }
        alert('Login efetuado com sucesso')
        setPassword('');
        setEmail (''); 
        setSalvaInfo(false);
        window.open('https://www.youtube.com/watch?v=usWGpb_VLas');
      }
      else{
        setDadosUsuario(false);
        console.error('Usuario ou senha incorretos');
        alert('Usuario ou senha incorretos');
      }
  };

  useEffect(()=>{
    if(email!='' && password!=''){
        setBotaoDesativado(false);
    }
    else setBotaoDesativado(true);
  }, [email, password])

  return (
    <><form className = 'formLogin' onSubmit={fazerLogin}>
          <label htmlFor="email">E-mail:</label>
          <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <br />
          <label htmlFor="password">Senha:</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <br />
          <label htmlFor="salvaInfo">
          <input type="checkbox" id="salvaInfo" checked={salvaInfo} onChange={(e) => setSalvaInfo(e.target.checked)} />
          Salvar as minhas informações neste computador
          </label>
          <br />
          <br />
          <button type='submit' disabled = {botaoDesativado}>Login</button>
      </form>
      <a href="#">Não consegue acessar a sua conta?</a></>
  );
};

export default LoginForm;
