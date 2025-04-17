import estilos from "./espaco.module.css";
import Image from "next/image";
import imagem2 from "../../../../public/img02.png";
import imagem3 from "../../../../public/img03.png";
import imagem5 from "../../../../public/img05.png";
import imagem8 from "../../../../public/img08.png";

export default function Espaco() {
  return (
    <div className={estilos.container_espaco}>
      <h2>ESPAÇO</h2>
      <div className={estilos.imagens}>
        <Image className={estilos.img} src={imagem2} alt="Imagem de uma cadeira de cabeleireiro" />
        <Image className={estilos.img} src={imagem3} alt="imagem de quantro cadeiras em salão de corte de cabelo" />
        <Image className={estilos.img} src={imagem5} alt="Imagem da parte interna do salão de corte cabelo como nome do salão" />
        <Image className={estilos.img} src={imagem8} alt="Imagem de um cadeira para lavar cabelo em um salão de cabelereiro" />
      </div>
      <div className={estilos.servicos}>
        <div className={estilos.img_texto}>
          <div className={estilos.texto}>
            <h3>AMBIENTE CLIMATIZADO</h3>
            <p>O salão é climatizado para oferecer conforto nos dias mais quentes.</p>
          </div>
        </div>
        <div className={estilos.img_texto}>
          <div className={estilos.texto}>
            <h3>ESTÉTICA MODERNA</h3>
            <p>Nosso espeça possui um visual moderno, oferecendo um local muito aconchegante.</p>
          </div>
        </div>
      </div>
    </div>
  )
}