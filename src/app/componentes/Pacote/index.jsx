import estilos from "./pacote.module.css";
import Image from "next/image";
import tesoura_pente from "../../../../public/tesoura-e-pente.png";
import Botao from "../Botao";

export default function Pacote() {
  return (
    <div className={estilos.container_pacote}>
      <div className={estilos.btn}>
        <Botao  />
      </div>
      <h2>PACOTES</h2>
      <p>Confira abaixo as opções de pacotes de pré-agendamento.</p>
      <div className={estilos.servicos}>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image className={estilos.imagem} src={tesoura_pente} alt="Imagem de uma tesoura e um pente" />
          </div>
          <div className={estilos.texto}>
            <h3>PACOTE 1</h3>
            <p>Pacote com 2 agendamentos de corte de cabelo adulto</p>
            <p className={estilos.preco}>R$ 70</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image className={estilos.imagem} src={tesoura_pente} alt="Imagem de uma tesoura e um pente" />
          </div>
          <div className={estilos.texto}>
            <h3>PACOTE 2</h3>
            <p>Pacote com 4 agendamentos de corte de cabelo adulto.</p>
            <p className={estilos.preco}>R$ 130</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image className={estilos.imagem} src={tesoura_pente} alt="Imagem de uma tesoura e um pente" />
          </div>
          <div className={estilos.texto}>
            <h3>PACOTE 3</h3>
            <p>Pacote com 6 agendamentos de corte de cabelo adulto.</p>
            <p className={estilos.preco}>R$ 200</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.img}>
            <Image className={estilos.imagem} src={tesoura_pente} alt="Imagem de uma tesoura e um pente" />
          </div>
          <div className={estilos.texto}>
            <h3>PACOTE 4</h3>
            <p>Pacote com 8 agendamentos de corte de cabelo adulto.</p>
            <p className={estilos.preco}>R$ 250</p>
          </div>
        </div>
      </div>
    </div>
  )
}