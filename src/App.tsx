import imagem from '../src/imagens/icon_header.png'
import imagem2 from '../src/imagens/neymar.png'
import bandeira from '../src/imagens/bandeira.png'

function App() {
  return (
    <div>
    <header>
      <h1>Seleção <span>Brasileira</span></h1>
      <img src={imagem} alt="imagem do escudo da seleção brasileira" />
    </header>
    <div className='card'>
      <img className='bandeira' src={bandeira} alt="bandeira do brasil"/>
      <img src={imagem2} alt="imagem do neymar" />
      <p>NEYMAR</p>
      <span>LEGEND</span>
    </div>
    </div>
  );
}

export default App;
