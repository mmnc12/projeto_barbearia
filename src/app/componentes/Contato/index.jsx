import { FaLocationDot, FaPhoneVolume, FaClock } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import estilos from "./contato.module.css";
export default function Contato() {
  return (
    <div className={estilos.container_contato}>
        <div>
          <FaLocationDot className={estilos.icon} />
          <h2>ENDEREÇO</h2>
          <div className={estilos.linha}></div>
          <p>TRAV. REGIS PACHECO, SN, AO LADO DA PASTELARIA DAYSE ANNE</p>
        </div>
        <div>
          <BiSolidPhoneCall className={estilos.icon} />
          <h2>WHATSAPP</h2>
          <div className={estilos.linha}></div>
          <p>(74) 99999-9999</p>
        </div>
        <div>
          <FaClock className={estilos.icon} />
          <h2>ATENDIMENTO</h2>
          <div className={estilos.linha}></div>
          <p>SEG À SÁB: 8:00 ÁS 19:00</p>
        </div>
      </div>
  )
}