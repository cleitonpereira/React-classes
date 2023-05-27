export default function Familia(){
  const Familia = (props) => {
    return(
      <div>
        <Membros nome={props.nome} parent={props.parent} idade={props.idade} />
        <hr />
      </div>
    )
  }
  
  const Membros = (props) => {
    return(
      <div>
        <h2>Olá, sou o(a) {props.nome}</h2>
        <h3>Sou o(a) {props.parent}</h3>
        <h3>Tenho {props.idade} anos.</h3>
      </div>
    )
  }


      /* 
      <Familia nome="Nati" parent="Mamãe" idade="22" />
      <Familia nome="Cleiton" parent="Papai" idade="27" />
      <Familia nome="Helena" parent="Filha" idade="3" /> 
      */
}

