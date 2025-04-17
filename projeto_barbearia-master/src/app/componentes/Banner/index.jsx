import { FaPhoneVolume } from "react-icons/fa6";
import Botao from "../Botao";
import CardDepoimento from "../CardDepoimento";
import estilos from "./banner.module.css";
import face1 from "../../../../public/face1.jpg";
import face2 from "../../../../public/face2.jpg";
import face3 from "../../../../public/face3.jpg";
import face4 from "../../../../public/face4.jpg";
import face5 from "../../../../public/face5.jpg";
import face7 from "../../../../public/face7.jpg";

export default function Banner() {
  return (
    <>
      <div className={estilos.container_banner}>
        <h1>A MELHOR BARBEARIA DA REGIÃO BEM PERTINHO DE VOCÊ.</h1>
        <Botao />

        <div className={estilos.depoimentos}>
        </div>
      </div>
      <div className={estilos.depoimentos} id="depoimentos">
        <div className={estilos.titulo}>
          <h2>DEPOIMENTOS</h2>
          <p>Confira o que falaram alguns dos nossos clientes e veja porque a barbearia do João é a melhor barbearia da região</p>
        </div>
        <div className={estilos.cardDepoimento}>
          <div className={estilos.card}>
            <CardDepoimento
              face={face1}
              nome={"PAULO"}
              depoimento={"Recomendo para quem busca qualidade e profissionalismo."}
            />
          </div>
          <div className={estilos.card}>
            <CardDepoimento
              face={face2}
              nome={"CARLOS"}
              depoimento={"O cuidado com o detalhe é incrível, desde o corte até a barba. Serviço nota 10."}
            />
          </div>
          <div className={estilos.card}>
            <CardDepoimento
              face={face3}
              nome={"MARCOS"}
              depoimento={"A equipe é super qualificada e o ambiente faz você querer voltar sempre."}
            />
          </div>
          <div className={estilos.card}>
            <CardDepoimento
              face={face4}
              nome={"RAFAEL"}
              depoimento={"Os barbeiros são experientes e transforma o corte em uma experiência relaxante."}
            />
          </div>
          <div className={estilos.card}>
            <CardDepoimento
              face={face5}
              nome={"FERNANDO"}
              depoimento={"O ambiente é muito bom todo climatizado, além de um corte e tratamento diferenciado."}
            />
          </div>
          <div className={estilos.card}>
            <CardDepoimento
              face={face7}
              nome={"LUCAS"}
              depoimento={"Atendimento muito bom, ambiente elegante e muito acolhedor, super recomendo."}
            />
          </div>
        </div>
      </div>

      <div className={estilos.container_agendamento} id="agendamento">
        <div className={estilos.agendamento}>
          <h2>FAÇA SEU AGENDAMENTO</h2>
          <p>Agende seu horário e venha conhecer a melhor barbearia da região.</p>
          <p>Faça seu agendamento via WhatsApp</p>
          <div className={estilos.contato}>
            <figure>
              <FaPhoneVolume className={estilos.icon} />
            </figure>
            <div>
              <p>WhatsApp</p>
              <p>(74) 98106-7364</p>
            </div>
          </div>
        </div>
      </div>

      <div className={estilos.mapa} id="localização">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.06869118632443!2d-40.36307300539684!3d-10.74367402025921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76d1437c8855aff%3A0x5e96352a16b17889!2sPindoba%C3%A7u%2C%20BA%2C%2044770-000!5e1!3m2!1spt-BR!2sbr!4v1740946154404!5m2!1spt-BR!2sbr" width="100%" height="450" className="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}