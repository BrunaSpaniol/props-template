import Carro from "./Carro";

function Garagem(props) {
  return (
    <div>
      <h1>Garagem de {props.nome}</h1>
      <button onClick={props.apresentaGaragem}>Clique Aqui!</button>
      <Carro carro={props.automoveis[0]} adicionadoPor={"Bruna"} />
      <Carro carro={props.automoveis[1]} adicionadoPor={"Marco"} />
      <Carro carro={props.automoveis[2]} adicionadoPor={"Raoni"} />
      <Carro carro={props.automoveis[3]} adicionadoPor={"Regina"} />
    </div>
  );
}

export default Garagem;
