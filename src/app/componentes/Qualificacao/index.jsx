import Image from "next/image";
import img21cab from "../../../../public/img21cab.png";
import estilos from "./qualificacao.module.css";

export default function Qualificacao() {
  return (
    <div className={estilos.container_qualificacao} id="sobre">
      <article>
        <h2>A melhor barbearia da região, com estilo e conforto bem perto de você!</h2>
        <p>
          A Barbearia do João está localizada no centro da cidade, de fácil acesso. Oferecemos cortes de cabelo para adultos e crianças, e também cuidamos da sua barba com todo o carinho e atenção.
        </p>
        <div className={estilos.sastifacao}>
          <small><strong>100</strong><em>%</em><br /> Satistifação garantida</small>
          <small><strong>10</strong><em>+</em><br /> Anos de experiência</small>
        </div>
      </article>
      <aside>
        <Image className={estilos.img} src={img21cab} alt="imagem de corte de cabelo" />
      </aside>
    </div>
  )
}