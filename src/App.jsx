import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import fundo from "./assets/fund.jpg";

function App() {
  return (
    <div style={{
      backgroundImage: `url(${fundo})`,
      backgroundSize: "cover"
    }}>
      <Header />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}


export default App;