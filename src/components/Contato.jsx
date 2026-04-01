import { useState } from "react";

function Contato() {

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [msg, setMsg] = useState("");

    function enviarFormulario(e) {
        e.preventDefault();

        if (!nome || !email || !msg) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        const primeiroNome = nome.split(" ")[0];
        alert(`Obrigada, ${primeiroNome}! Sua mensagem foi enviada.`);

        setNome("");
        setEmail("");
        setMsg("");
    }

    return (
        <section id="contato">
            <h2>Contato</h2>

            <form onSubmit={enviarFormulario}>
                <label>Nome:</label>
                <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}

                />

                <label>E-mail:</label>
                <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Mensagem:</label>
                <textarea
                    required
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                ></textarea>

                <button type="submit">Enviar Mensagem</button>
            </form>
        </section>
    );
}

export default Contato;