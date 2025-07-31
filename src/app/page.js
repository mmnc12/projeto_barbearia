import { FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";
import estilos from "./page.module.css";
import Header from "./componentes/Header";
import Servicos from "./componentes/Servicos";
import Botao from "./componentes/Botao";
import Pacote from "./componentes/Pacote";
import Equipe from "./componentes/Equipe";
import Espaco from "./componentes/Espaco";
import Banner from "./componentes/Banner";
import Rodape from "./componentes/Rodape";
import Hero from './componentes/Hero';
import Qualificacao from './componentes/Qualificacao';
import Contato from './componentes/Contato';
import Agendamento from './componentes/Agendamento';
import Localizacao from './componentes/Localidade';
import CapturaLeads from './componentes/CapturaLeads';


export default function Home() {
  return (
    <div className={estilos.page}>
      <main>
        <Header />

        <Hero />

        <Contato />

        <Qualificacao />

        <Servicos />

        <Pacote />

        <CapturaLeads />


        <Equipe />

        <Espaco />

        <Banner />

        <Agendamento />

        <Localizacao />

        <Rodape />
        
        <a href="https://wa.me/99999999999" className={estilos.whatsappButton} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={estilos.whatsappIcon} />
        </a>
      </main>
    </div>
  );
}
