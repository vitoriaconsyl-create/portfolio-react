import perfil from "../assets/perfil.jpeg";

function Sobre() {
    return (
        <section id="sobre">

            <h2>Sobre mim</h2>

            <img src={perfil} alt="Foto de Vitória Silva" />

            <p>Tenho formação técnica em Informática e atualmente curso Tecnologia em Sistemas para Internet.
                Atuo como professora no curso técnico de Desenvolvimento de Sistemas no ensino médio.
                Tenho interesse em tecnologia e educação, buscando sempre aprimorar meus conhecimentos
                e desenvolver soluções digitais.</p>

        </section>
    );
}

export default Sobre;