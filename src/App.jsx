import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Projetos from "./components/Projetos";
import Contato from "./components/Contato";
import fundo from "./assets/fund.jpg";

function App() {
  return (
    <div style={{
      backgroundImage: `linear-gradient(var(--overlay), var(--overlay)), url(${fundo})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      minHeight: "100vh"
    }}>
      <Header />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}


export default App;