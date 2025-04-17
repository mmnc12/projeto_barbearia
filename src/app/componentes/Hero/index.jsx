import Image from "next/image";
import estilos from "./hero.module.css";
import Botao from "../Botao";

export default function Hero() {
  return (
      <div className={estilos.container_hero}>
        <h1>BARBEARIA DO JOÃO</h1>
        <Botao />
      </div>
  )
}