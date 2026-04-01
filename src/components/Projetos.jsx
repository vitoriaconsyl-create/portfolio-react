function Projetos() {

  const listaProjetos = [
    {
      titulo: "Meu Portfólio",
      descricao: "Projeto com HTML, CSS e JS",
      link: "https://github.com/vitoriaconsyl-create/portfolio.git"
    },
    {
      titulo: "Calculadora",
      descricao: "Aplicação desenvolvida com HTML, CSS e JavaScript para realizar operações matemáticas básicas.",
      link: "https://github.com/vitoriaconsyl-create/calculadorasimples.git"
    }
  ];

  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>

      <div className="projetosContainer">
        {listaProjetos.map((proj, index) => (
          <article className="cardProjeto" key={index}>
            <h3>{proj.titulo}</h3>
            <p>{proj.descricao}</p>
            <a href={proj.link} target="_blank">Ver projeto no GitHub</a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Projetos;