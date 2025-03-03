import estilos from "./equipe.module.css";
export default function Equipe(props) {
  return (
    <div className={estilos.container_servicos}>
      <div className={estilos.servicos}>
        <header className={estilos.titulo}>
          <h1>{props.titulo}</h1>
          <p>{props.paragrafoTitulo}</p>
        </header>
        <div className={estilos.cards}>
          <div className={estilos.container_card}>
            <div className={estilos.descricao}>
              <h2>{props.subtitulo}</h2>
              <p>{props.paragrafo}</p>
            </div>
          </div>

          <div className={estilos.container_card}>
            <div className={estilos.descricao}>
              <h2>{props.titulo2}</h2>
              <p>{props.paragrafo2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}