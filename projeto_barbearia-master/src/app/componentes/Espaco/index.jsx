import estilos from "./espaco.module.css";
import Image from "next/image";
import imagem2 from "../../../../public/img02.png";
import imagem3 from "../../../../public/img03.png";
import imagem5 from "../../../../public/img05.png";
import imagem8 from "../../../../public/img08.png";

export default function Espaco(props) {
  return (
    <div className={estilos.espaco}>
      <header className={estilos.titulo}>
        <h1>{props.titulo}</h1>
      </header>
      <div className={estilos.container_espaco}>
        <div className={estilos.imagem}>
          <Image className={estilos.img} src={imagem2} alt="Imagem 2" />
          <Image className={estilos.img} src={imagem3} alt="Imagem 3" />
          <Image className={estilos.img} src={imagem5} alt="Imagem 5" />
          <Image className={estilos.img} src={imagem8} alt="Imagem 8" />
        </div>
      </div>
    </div>

  )
}