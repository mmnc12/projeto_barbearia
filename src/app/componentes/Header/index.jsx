import Image from "next/image";
import estilos from "./header.module.css";
import logo from "../../../../public/banner2.png";
import Link from "next/link";

export default function Header() {
  return (
    <header className={estilos.container_header}>
      <div>
        <Image className={estilos.img} src={logo} alt="logo" />
        <nav>
          <Link className={estilos.link} href="#sobre">Sobre</Link>
          <Link className={estilos.link} href="#servicos">Serviços</Link>
          <Link className={estilos.link} href="#depoimentos">Depoimentos</Link>
          <Link className={estilos.link} href="#agendamento">Agendamento</Link>
          <Link className={estilos.link} href="#localizacao">Localização</Link>
        </nav>
      </div>
    </header>
  )
}