import { Header } from "../../components/Header";
import background from "../../assets/github.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="background github" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img
              src="https://avatars.githubusercontent.com/u/36342788?v=4"
              className="profile"
              alt="profile-pic"
            />
            <div>
              <h3>William Benett</h3>
              <span>Descriçāo</span>
              <p>Descriçāo</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
