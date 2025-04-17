import Image from "next/image";
import estilos from "./header.module.css";
import logo from "../../../../public/banner2.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={estilos.container_header}>
      <nav className={estilos.container_navegacao}>
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
      </nav>
    </header>
  )
}