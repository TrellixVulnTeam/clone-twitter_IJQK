import './App.scss';

import Eu from './images/imagem-perfil.png'
import Star from './images/star.svg'
import Twitter from './images/twitter.svg'
import Mc from './images/mc.svg'
import Bk from './images/bk.svg'
import Verified from './images/verified.svg'
import Points from './images/3points.svg'
import Chat from './images/chat.svg'
import Rt from './images/rt.svg'
import Heart from './images/heart.svg'
import Upload from './images/upload.svg'
import Promovido from './images/promovido.svg'
import Imgbk from './images/imgbk.svg'
import PerfilGato from './images/perfil-gato.png'
import Ponto from './images/ponto.svg'

import Home from './images/home.svg'
import Search from './images/search.svg'
import Bell from './images/bell.svg'
import Dm from './images/dm.svg'



function App() {
  return (
    <div>
      <header>
        <img src={Eu} id="me" />
        <img src={Twitter} />
        <img src={Star} />
      </header>
      <hr></hr>
      <main>
        <div>
          <div>
            <img src={Mc} className="image-perfil" />
            <h1 className="boldd">McDonald’s Brasil</h1>
            <img src={Verified} className="verified" />
            <h2>@McDonalds_BR</h2>
            <img src={Points} className="points" />
            <h3>Tensão pré-jogo? Pede um Méqui.
              Vai só assistir de boas? Pede um Méqui.
              Vai zicar? Pede um Méqui.
              Não liga pra nada disso?
              Pede um Méqui mesmo assim.
            </h3>
          </div>
          <div className="lista">
            <button><img src={Chat} className="img-lista" />54</button>
            <button><img src={Rt} className="img-lista-rt" />1k</button>
            <button><img src={Heart} className="img-lista" />20k</button>
            <button><img src={Upload} className="img-lista" /></button>
          </div>
          <button><img src={Promovido} className="promovido" />Promovido</button>
        </div>

        <hr></hr>

        <div>
          <img src={Bk} className="image-perfil" />
          <h1 className="boldd">Burger King Brasil</h1>
          <img src={Verified} className="verified" />
          <h2>@BurgerKing_BR</h2>
          <img src={Points} className="points" />
          <h3>Rebeldia é escolher um sanduíche de plantitas em
            um mundo de carnita. Peça essas delícias que são
            donas de nuestro corazón! <b>#Rebel 🍔🎒</b>
            <img src={Imgbk} className="img-bk" />
          </h3>
          <div className="lista">
            <button><img src={Chat} className="img-lista" />10</button>
            <button><img src={Rt} className="img-lista-rt" />50</button>
            <button><img src={Heart} className="img-lista" />1k</button>
            <button><img src={Upload} className="img-lista" /></button>
          </div>
        </div>

        <hr></hr>

        <div>
          <img src={PerfilGato} className="image-perfil" />
          <h1 className="boldd">gatos fazendo gatices</h1>
          <div id="cats">
            <h2>@gatinarios</h2>
            <img src={Ponto} className="ponto" />
            <h6>15h</h6>
            <img src={Points} className="points" />
            <h3>ele aprendeu a pegar água geladinha
            </h3>
          </div>
          <div className="lista">
            <button><img src={Chat} className="img-lista" />10</button>
            <button><img src={Rt} className="img-lista-rt" />50</button>
            <button><img src={Heart} className="img-lista" />1k</button>
            <button><img src={Upload} className="img-lista" /></button>
          </div>
        </div>

       <hr></hr>

        <footer>
          <img src={Home} />
          <img src={Search} />
          <img src={Bell} />
          <img src={Dm} />
        </footer>

      </main>
    </div >
  );
}

export default App;
