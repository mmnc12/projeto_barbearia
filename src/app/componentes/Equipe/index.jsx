import Botao from "../Botao";
import estilos from "./equipe.module.css";
export default function Equipe() {
  return (
    <div className={estilos.container_equipe}>
      <div className={estilos.btn}>
        <Botao />
      </div>
      <h2>EQUIPE</h2>
      <p>Nossa equipe é formada por cabelereiros e barbeiros experientes.</p>
      <div className={estilos.servicos}>
        <div className={estilos.img_texto}>
          <div className={estilos.texto}>
            <h3>EXPERIÊNCIA</h3>
            <p>Nossa equipe conta com cabeleiros com pelos menos 10 anos de experiência, garantindo um serviço feito com excelência.</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.texto}>
            <h3>PROFISSIONAIS ATUALIZADOS</h3>
            <p>Nossos profissionais estão preparados tanto para cortes clássicos como para novas tendências.</p>
          </div>
        </div>
      </div>
    </div>
  )
}