import estilos from "./servicos.module.css";
import Image from "next/image";
import tesoura_pente from "../../../../public/tesoura-e-pente.png";
import pente from "../../../../public/pente.png";
import barba from "../../../../public/barba.png";
import maquina from "../../../../public/maquina.png";

export default function Servicos(props) {
  return (
    <div className={estilos.container_servicos} id="serviços">
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
              <h2>CORTE ADULTO</h2>
              <p>Corte de cabelo para adultos. Corte com máquina ou tesoura.</p>
              <span>R$ 35</span>
            </div>
          </div>
          
          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={pente} alt="Pente" />
            </div>
            <div className={estilos.descricao}>
              <h2>CORTE INFATIL</h2>
              <p>Corte de cabelo para crianças. Corte com tesoura.</p>
              <span>R$ 25</span>
            </div>
          </div>

          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={barba} alt="Barba" />
            </div>
            <div className={estilos.descricao}>
              <h2>APARA A BARBA</h2>
              <p>Apara e ajusta a barba</p>
              <span>R$ 39</span>
            </div>
          </div>

          <div className={estilos.container_card}>
            <div className={estilos.imagem}>
              <Image className={estilos.img} src={maquina} alt="Máquina" />
            </div>
            <div className={estilos.descricao}>
              <h2>FAZER A BARBA</h2>
              <p>Remoção completa da barba com gilete.</p>
              <span>R$ 30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}