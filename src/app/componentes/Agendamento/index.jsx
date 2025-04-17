import { BiSolidPhoneCall } from "react-icons/bi";
import estilos from "./agendamento.module.css";
export default function Agendamento() {
  return (
    <div className={estilos.container_agendamento} id="agendamento">
      <div>
        <h1>FAÇA SEU AGENDAMENTO</h1>
        <p>Agende seu horário e venha conhecer a melhor barbearia da região.Faça seu agendamento via WhatsApp</p>
        <div className={estilos.contato}>
          <BiSolidPhoneCall className={estilos.icons} />
          <small>
            WhatsApp <br /> (74) 98106-7364
          </small>
        </div>
      </div>
    </div>
  )
}