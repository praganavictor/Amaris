import React, { useState } from "react";

import api from "../../services/api";

import "./Home.css";

export default function Home() {
  const [url, setUrl] = useState("");
  const [response, setResponse] = useState({});
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    if (!url) {
      setError("Preencha o campo da url para continuar!");
    } else {
      try {
        const res = await api.post("/url", { urloriginal: url });
        setResponse(res.data);
      } catch (err) {
        setError("Houve um problema ao criar a url T.T");
      }
    }
  }

  console.log(response);

  return (
    <>
      <h1>Encurtador de URL</h1>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <span>Crie uma nova URL</span>
        <div>
          <input
            type="text"
            placeholder="insira a URL aqui"
            onChange={(e) => setUrl(e.target.value)}
          />
          <button type="submit">ENTRAR</button>{" "}
        </div>
      </form>

      {response.urlmodificada ? (
        <div>
          <p>
            Sua url encurtada é: http://localhost:3000/{response.urlmodificada}
          </p>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
}
