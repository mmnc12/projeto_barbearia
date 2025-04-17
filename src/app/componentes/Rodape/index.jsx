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
      <div>
        <Image className={estilos.img} src={logo} alt="logo" />
        <nav>
        <Link className={estilos.link} href="#sobre">Sobre</Link>
          <Link className={estilos.link} href="#servicos">Serviços</Link>
          <Link className={estilos.link} href="#depoimentos">Depoimentos</Link>
          <Link className={estilos.link} href="#agendamento">Agendamento</Link>
          <Link className={estilos.link} href="#localizacao">Localização</Link>
        </nav>
        <div className={estilos.icons}>
          <IoLogoInstagram className={estilos.sociais_icons} />
          <FaFacebook className={estilos.sociais_icons} />
          <FiTwitter className={estilos.sociais_icons} />
        </div>
      </div>
      <div className={estilos.autor}>
        <p>&reg; 2025 - Desenvolvido por "Manoel Mecias do Nascimento"</p>
      </div>
    </div>
  )
}