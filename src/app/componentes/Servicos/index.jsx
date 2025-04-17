import estilos from "./servicos.module.css";
import Image from "next/image";
import tesoura_pente from "../../../../public/tesoura-e-pente.png";
import pente from "../../../../public/pente.png";
import barba from "../../../../public/barba.png";
import maquina from "../../../../public/maquina.png";

export default function Servicos() {
  return (
    <div className={estilos.container_servicos} id="servicos">
      <h2>CONHEÇA NOSSOS SERVIÇOS</h2>
      <p>Confira abaixo a tabela de preços dos serviços oferecidos pela Barbearia do João</p>
      <div className={estilos.servicos}>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image src={tesoura_pente} alt="imagem de um tesoura e um pente" />
          </div>
          <div className={estilos.texto}>
            <h3>CORTE ADULTO</h3>
            <p>Corte de cabelo para adultos. Corte com máquina ou tesoura.</p>
            <p className={estilos.preco}>R$ 35</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image src={pente} alt="Imange de um pente" />
          </div>
          <div className={estilos.texto}>
            <h3>CORTE INFANTIL</h3>
            <p>Corte de cabelo para crianças. Corte com tesoura.</p>
            <p className={estilos.preco}>R$ 25</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image src={barba} alt="Imagem de uma barba" />
          </div>
          <div className={estilos.texto}>
            <h3>APARA A BARBA</h3>
            <p>Apara e ajusta a barba.</p>
            <p className={estilos.preco}>R$ 39</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image src={maquina} alt="Imagem de uma maquina de barbear" />
          </div>
          <div className={estilos.texto}>
            <h3>FAZER A BARBA</h3>
            <p>Remoção completa da barba com gilete.</p>
            <p className={estilos.preco}>R$ 30</p>
          </div>
        </div>
      </div>
    </div>
  )
}