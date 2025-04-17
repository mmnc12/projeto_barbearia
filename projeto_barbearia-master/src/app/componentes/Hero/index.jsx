import { FaLocationDot, FaPhoneVolume, FaClock } from "react-icons/fa6";
import Image from "next/image";
import imgNegocio from "../../../../public/img6.png";
import imgNegocio1 from "../../../../public/img7.png";
import estilos from "./hero.module.css";
import Botao from "../Botao";

export default function Hero() {
  return (
    <div className={estilos.container_hero}>
      <div className={estilos.banner_titulo}>
        <div>
          <h1>BARBEARIA DO JOÃO</h1>
        </div>
        <Botao />
      </div>

      <div className={estilos.contatos}>
        <div>
          <div className={estilos.icons_subtitulo}>
            <FaLocationDot className={estilos.icons} />
            <h2>ENDEREÇO</h2>
            <div></div>
          </div>
          <p>TRAV. REGIS PACHECO, SN, AO LADO DA PASTELARIA DAYSE ANNE</p>
        </div>
        <div>
          <div className={estilos.icons_subtitulo}>
            <FaPhoneVolume className={estilos.icons} />
            <h2>WHATSAPP</h2>
            <div></div>
          </div>
          <p>(74) 99816-9305</p>
        </div>
        <div>
          <div className={estilos.icons_subtitulo}>
            <FaClock className={estilos.icons} />
            <h2>ATENDIMENTO</h2>
            <div></div>
          </div>
          <p>SEG À SÁB: 8:00 ÀS 19:00</p>
        </div>
      </div>
      <div className={estilos.container_sobreNegocio} id="sobre">
        <div className={estilos.sobre}>
          <h2>A melhor barbearia da região, com estilo e conforto bem perto de você!</h2>
          <p>A Barbearia do João está localizada no centro da cidade, de fácil acesso. Oferecemos cortes de cabelo para adultos e crianças, e também cuidamos da sua barba com todo o carinho e atenção.</p>
          <div className={estilos.sastisfacao}>
            <div>
              <h3>100<small>%</small></h3>
              <span>Sastisfação Grarantida</span>
            </div>
            <div>
            <h3>10<small>+</small></h3>
            <span>Anos de experiência</span>
            </div> 
          </div>
        </div>
        <div className={estilos.imagem}>
          <Image className={estilos.img} src={imgNegocio} alt="contando cabelo" />
          <Image className={estilos.img} src={imgNegocio1} alt="contando cabelo" />
        </div>
      </div>
    </div>
  )
}