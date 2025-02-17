import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
    <p class="text">Hey, I'm</p>

    <h1>Jose Jandula</h1>

    

    <p class="description">¡Hola! Soy un desarrollador Full Stack de Barcelona y actualmente estoy cursando un Máster en Desarrollo Full Stack y un FP Superior en Desarrollo de Aplicaciones Web (DAW). Mi pasión es crear proyectos que tomen vida en la web, desde páginas web dinámicas hasta aplicaciones completas.</p>

    <p class="description">Me encanta explorar las últimas tecnologías y aplicar mis conocimientos para resolver problemas y crear soluciones innovadoras. A lo largo de mi formación, he adquirido experiencia práctica en una variedad de áreas, trabajando en proyectos que me han permitido mejorar tanto en el frontend como en el backend.</p>

    <p class="description">Estoy constantemente aprendiendo y mejorando mis habilidades, y busco nuevas oportunidades para colaborar y seguir creciendo en el apasionante mundo del desarrollo de software.</p>

    <div class="loader"></div>

    <a href="mailto:joseantify@gmail.com" class="text">Say hi →</a>

    

    </section>`;
};
