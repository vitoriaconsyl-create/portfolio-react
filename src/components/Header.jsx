import { useState, useEffect } from "react";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [temaEscuro, setTemaEscuro] = useState(false);

    function toggleMenu() {
        setMenuAberto(!menuAberto);
    }

    function alternarTema() {
        setTemaEscuro(!temaEscuro);
    }

    useEffect(() => {
        if (temaEscuro) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [temaEscuro]);

    return (
        <header>
            <h1>Vitória Silva</h1>

            <button
                className="menu-toggle"
                onClick={toggleMenu}
            >
                ☰
            </button>

            <nav id="nav">
                <ul className={menuAberto ? "active" : ""}>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                    <li><a href="#contato"> Contato </a></li>
                    <li>
                        <button id="btn-tema" onClick={alternarTema}>
                            {temaEscuro ? "Claro" : "Escuro"}
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;