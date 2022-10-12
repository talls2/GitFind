import { Header } from "../../components/Header";
import background from "../../assets/github.png";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img
          src={background}
          className="background"
          alt="background github image"
        />
      </div>
    </div>
  );
}
