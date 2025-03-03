import Image from "next/image";
import estilos from "./CardDepoimento.module.css";


export default function CardDepoimento(props) {
  return (
    <div className={estilos.cardDepoimento}>
      <Image className={estilos.img} src={props.face} alt="face de um humano" />
      <div className={estilos.qualificacao}>
        <small>&#9733;</small>
        <small>&#9733;</small>
        <small>&#9733;</small>
        <small>&#9733;</small>
        <small>&#9733;</small>
      </div>
      <div className={estilos.nome}>
        <h3>{props.nome}</h3>
      </div>
      <div className={estilos.depoimento}>
        <p>{props.depoimento}.</p>
      </div>
    </div>
  )
}