import React, { useEffect } from "react";

import api from "../../services/api";

import "./Busca.css";

export default function Busca(props) {
  useEffect(() => {
    async function busca() {
      await api
        .get(`/${props.match.params[0]}`)
        .then((res) => {
          console.log(res);
          const regex = /\bhttp[a-zA-Z]*\b/gm;
          const result = regex.test(res.data[0].urloriginal);
          if (result) window.location = res.data[0].urloriginal;
          else window.location = "http://" + res.data[0].urloriginal;
        })
        .catch((err) => console.error(err));
    }

    busca();
  }, []);

  return (
    <>
      <h1>Não foi encontrado nenhuma url</h1>
    </>
  );
}
