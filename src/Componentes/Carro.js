function Carro(props) {
  return (
    <div>
      <h2>{props.carro.marca}</h2>
      <ul>
        <li>{props.carro.cor}</li>
        <li>{props.carro.ano}</li>
        <li>{props.carro.flex ? "Sim" : "Não"}</li>
        <li>Adicionado por: {props.adicionadoPor} </li>
      </ul>
    </div>
  );
}

export default Carro;
