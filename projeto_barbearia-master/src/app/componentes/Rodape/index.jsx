import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Image from "next/image";
import estilos from "./rodape.module.css";
import logo from "../../../../public/banner2.png";
import Link from "next/link";

export default function Rodape() {
  return (
    <div className={estilos.container_rodape}>
      <nav className={estilos.rodape}>
        <Link className={estilos.link_logo} href="#">
          <Image className={estilos.img} src={logo} alt="logo" />
        </Link>
        <div className={estilos.links}>
          <Link className={estilos.link} href="#sobre">Sobre</Link>
          <Link className={estilos.link} href="#serviços">Serviços</Link>
          <Link className={estilos.link} href="#depoimentos">Depoimentos</Link>
          <Link className={estilos.link} href="#agendamento">Agendamento</Link>
          <Link className={estilos.link} href="#localização">Localização</Link>
        </div>
        <div className={estilos.redeSocial}>
          <IoLogoInstagram className={estilos.icon} />
          <FaFacebook className={estilos.icon} />
          <FiTwitter className={estilos.icon} />
        </div>
      </nav>
      <div className={estilos.auto}>
        <p>&reg; 2025 - Desenvolvido por "Manoel Mecias do Nascimento"</p>
      </div>
    </div>
  )
}