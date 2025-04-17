import estilos from "./localidade.module.css";
export default function Localizacao() {
  return (
    <div className={estilos.container_localizacao} id="localizacao">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310.06869118632443!2d-40.36307300539684!3d-10.74367402025921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x76d1437c8855aff%3A0x5e96352a16b17889!2sPindoba%C3%A7u%2C%20BA%2C%2044770-000!5e1!3m2!1spt-BR!2sbr!4v1740946154404!5m2!1spt-BR!2sbr" width="100%" height="450" className="border:0;" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}