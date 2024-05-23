import Cabecalho from './Components/Cabecalho';
import Contato from './Components/Contato';
import Video from './Video/noob.mp4'


function App() {
  return (
    <section className="App">
      <Cabecalho/>

      <section className='card-bindit'>
        <div className='card-info'>
          <span>
            Venha conhecer o Bind.it!
          </span>
        </div>
      </section>

      <section id="section" className="section">
        <div className="video-container">
          <video className="video" controls>
            <source src={Video} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </section>

      <Contato/>

    </section>
  );
}

export default App;
