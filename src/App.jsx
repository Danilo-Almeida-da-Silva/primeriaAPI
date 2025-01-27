import { useState, useEffect } from "react";
import axios from "axios";
import './App.scss'


export default function App() {
  const [info, setInfo] = useState([]);

  const pegarDados = async () => {
    const dados = await axios.get("https://fakestoreapi.com/products");
    setInfo(dados.data);
  };

  useEffect(() => {
    pegarDados();
  }, []);

  return (
    <main>
      <h1>Vai na WebStore</h1>
      <section>
        {info.map((item) => (
          <article>
            <img src={item.image} alt="" />
            <h2>{item.title}</h2>
            <h3>R$ {item.price}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
