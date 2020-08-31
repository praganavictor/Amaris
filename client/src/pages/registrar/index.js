import React, { useState } from "react";
import { Redirect } from "react-router-dom";

import api from "../../services/api";

import "./registrar.css";

export default function Registrar() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [toApp, setToApp] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setError("Preencha e-mail e senha para continuar!");
    } else {
      try {
        const response = await api.post("/registrar", { email, password });
        const { data } = response;
        if (data.user.email) {
          localStorage.setItem("usuario-url", data.user.email);
          setToApp(true);
        }
      } catch (err) {
        setError(
          "Houve um problema com o login, verifique suas credenciais. T.T"
        );
      }
    }
  }

  function redirecionar() {
    return <Redirect to="/eventos" />;
  }

  return (
    <>
      {toApp || toApp() ? redirecionar() : null}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <span>Registrar</span>
        <div>
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">ENTRAR</button>{" "}
        </div>
      </form>
    </>
  );
}
