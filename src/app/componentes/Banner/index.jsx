import { FaPhoneVolume } from "react-icons/fa6";
import Image from "next/image";
import Botao from "../Botao";
import estilos from "./banner.module.css";
import face1 from "../../../../public/face1.jpg";
import face2 from "../../../../public/face2.jpg";
import face3 from "../../../../public/face3.jpg";
import face4 from "../../../../public/face4.jpg";
import face5 from "../../../../public/face5.jpg";
import face7 from "../../../../public/face7.jpg";

export default function Banner() {
  return (
    <div className={estilos.container_banner}>
      <div className={estilos.banner}>
        <h1>A MELHOR BARBEARIA DA REGIÃO BEM PERTINHO DE VOCÊ.</h1>
        <div className={estilos.btn}>
          <Botao />
        </div>
      </div>
      <div className={estilos.depoimentos} id="depoimentos">
        <h2>DEPOIMENTOS</h2>
        <p>Confira o que falaram alguns dos nossos clientes e veja porque a barbearia do João é a melhor barbearia da região</p>
      </div>
      <div className={estilos.falas}>
        <div>
          <Image className={estilos.img} src={face1} alt="Imagem de um homem branco" />
          <div className={estilos.icons}>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
          </div>
          <h3>PAULO</h3>
          <p>Recomendo para quem busca qualidade e profissionalismo..</p>
        </div>
        <div>
          <Image className={estilos.img} src={face2} alt="Imagem de um homem branco" />
          <div className={estilos.icons}>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
          </div>
          <h3>CARLOS</h3>
          <p>O cuidado com o detalhe é incrível, desde o corte até a barba. Serviço nota 10..</p>
        </div>
        <div>
          <Image className={estilos.img} src={face3} alt="Imagem de um homem negro" />
          <div className={estilos.icons}>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
          </div>
          <h3>MARCOS</h3>
          <p>A equipe é super qualificada e o ambiente faz você querer voltar sempre</p>
        </div>
        <div>
          <Image className={estilos.img} src={face4} alt="Imagem de um homem branco" />
          <div className={estilos.icons}>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
          </div>
          <h3>RAFAEL</h3>
          <p>Os barbeiros são experientes e transforma o corte em uma experiência relaxante..</p>
        </div>
        <div>
          <Image className={estilos.img} src={face5} alt="Imagem de um homem branco" />
          <div className={estilos.icons}>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
          </div>
          <h3>FERNANDO</h3>
          <p>O ambiente é muito bom todo climatizado, além de um corte e tratamento diferenciado..</p>
        </div>
        <div>
          <Image className={estilos.img} src={face7} alt="Imagem de um homem negro" />
          <div className={estilos.icons}>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
            <small>&#9733;</small>
          </div>
          <h3>LUCAS</h3>
          <p>Atendimento muito bom, ambiente elegante e muito acolhedor, super recomendo..</p>
        </div>
      </div>
    </div>
  )
}