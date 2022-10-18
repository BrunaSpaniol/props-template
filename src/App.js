import Garagem from "./Componentes/Garagem";
import "./styles.css";

export default function App() {
  const garagem1 = [
    {
      marca: "Volkswagen",
      cor: "Azul",
      ano: 2018,
      flex: false
    },

    {
      marca: "Audi",
      cor: "preto",
      ano: 2022,
      flex: true
    },

    {
      marca: "Uno",
      cor: "branco",
      ano: 2010,
      flex: false
    },
    {
      marca: "Fusca",
      cor: "Rosa",
      ano: 1940,
      flex: false
    }
  ];
  const nome = "Bruna";
  const apresentaGaragem = () => {
    alert(`Boas Vindas à Garagem ${nome}`);
  };
  return (
    <div className="App">
      <Garagem
        nome={nome}
        automoveis={garagem1}
        apresentaGaragem={apresentaGaragem}
      />
    </div>
  );
}
