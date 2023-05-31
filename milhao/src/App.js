import logo from './logo.png';
import foto1 from './milhao.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container bot">
          <div className="left margin top">
            <img src={foto1} alt="do milhao ao milhao foto" />
            <p className="container-left f18">
              aprenda como encontrar as melhores
              oportunidades do mercado para <b>aumentar,
              proteger e diversificar seu patrimônio</b> e
              finalmente atingir sua <b>liberdade financeira.</b>
            </p>
            <p className="container-left f12">
              faço agora sua matricula
            </p>
            <a href="https://google.com" class="button">fazer matricula</a>          
          </div>
        </div>
        <div className="container background2 center">
          <div className="center container-left">
            <p className="f22">veja as vantagens para quem se matricular nessa turma do mil ao milhao 4.0</p>
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
