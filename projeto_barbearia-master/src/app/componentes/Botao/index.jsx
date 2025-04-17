
import estilos from "./butao.module.css";

export default function Botao() {
  return (
    <div className={estilos.container_botao}>
      <a href="https://wa.me/999999999?text=Olá,%20quero%20fazer%20um%20agendamento" target="_blank" rel="noopener noreferrer">
        <button>Faça um Agendamento</button>
      </a>
    </div>
  )
}