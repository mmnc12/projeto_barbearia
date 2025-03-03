import { FaWhatsapp } from 'react-icons/fa';
import Image from "next/image";
import estilos from "./page.module.css";
import Header from "./componentes/Header";
import Hero from "./componentes/Hero";
import Servicos from "./componentes/Servicos";
import Botao from "./componentes/Botao";
import Pacote from "./componentes/Pacote";
import Equipe from "./componentes/Equipe";
import Espaco from "./componentes/Espaco";
import Banner from "./componentes/Banner";
import Rodape from "./componentes/Rodape";


export default function Home() {
  return (
    <div className={estilos.page}>
      <main>
        <Header />
        <Hero />

        <Servicos
          titulo={"CONHEÇA NOSSOS SERVIÇOS"}
          paragrafo={"Confira abaixo a tabela de preços dos serviços oferecidos pela Barbearia do João"}
        />

        <Botao />

        <Pacote
          titulo={"PACOTES"}
          paragrafo={"Confira abaixo as opções de pacotes de pré-agendamento."}
        />

        <Botao />

        <Equipe
          titulo={"EQUIPE"}
          paragrafoTitulo={"Nossa equipe é formada por cabelereiros e barbeiros experientes."}
          subtitulo={"EXPERIÊNCIA"}
          paragrafo={"Nossa equipe conta com cabeleiros com pelos menos 10 anos de experiência, garantindo um serviço feito com excelência."}

          titulo2={"PROFISSIONAIS ATUALIZADOS"}
          paragrafo2={"Nossos profissionais estão preparados tanto para cortes clássicos como para novas tendências"}
        />

        <Espaco
          titulo={"ESPAÇO"}
        />

        <Equipe
          subtitulo={"AMBIENTE CLIMATIZADO"}
          paragrafo={"O salão é climatizado para oferecer conforto nos dias mais quentes."}

          titulo2={"ESTÉTICA MODERNA"}
          paragrafo2={"Nosso espeça possui um visual moderno, oferecendo um local muito aconchegante."}
        />

        <Banner />
        <Rodape />

        <a href="https://wa.me/99999999999" className={estilos.whatsappButton} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp className={estilos.whatsappIcon} />
        </a>
      </main>
    </div>
  );
}
