import estilos from "./equipe.module.css";
import Image from "next/image";
import tesoura_pente from "../../../../public/tesoura-e-pente.png";

export default function Pacote(props) {
  return (
    <div className={estilos.container_servicos}>
      <div className={estilos.servicos}>
        <header className={estilos.titulo}>
          <h1>{props.titulo}</h1>
          <p>{props.paragrafo}</p>
        </header>
        <div className={estilos.cards}>
          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={tesoura_pente} alt="Pente e tesoura" />
            </div>
            <div className={estilos.descricao}>
              <h2>PACOTE 1</h2>
              <p>Pacote com 2 agendamentos de corte de cabelo adulto.</p>
              <span>R$ 70</span>
            </div>
          </div>
          
          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={tesoura_pente} alt="Pente e tesoura" />
            </div>
            <div className={estilos.descricao}>
              <h2>PACOTE 2</h2>
              <p>Pacote com 4 agendamentos de corte de cabelo adulto.</p>
              <span>R$ 130</span>
            </div>
          </div>

          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={tesoura_pente} alt="Pente e tesoura" />
            </div>
            <div className={estilos.descricao}>
              <h2>PACOTE 3</h2>
              <p>Pacote com 6 agendamentos de corte de cabelo adulto.</p>
              <span>R$ 200</span>
            </div>
          </div>

          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={tesoura_pente} alt="Pente e tesoura" />
            </div>
            <div className={estilos.descricao}>
              <h2>PACOTE 4</h2>
              <p>Pacote com 8 agendamentos de corte de cabelo adulto.</p>
              <span>R$ 250</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}