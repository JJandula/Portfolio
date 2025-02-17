import "./About.css";
import { cleanPage } from "../../utils/cleanPage";
import { Divider } from "../../components/Divider/Divider";

export const About = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="about">
    <h2 class="textAbout">ABOUT ME</h2>
    ${Divider()}
    <div>
    
    <section class="aboutsection">
        <p class="description">
            Actualmente, soy estudiante de Desarrollo de Aplicaciones Web (DAW) y estoy cursando un Máster en Full Stack. Durante los últimos 7 años, he trabajado con WordPress, desarrollando soluciones personalizadas y optimizadas para diversas necesidades. Mi pasión por el desarrollo web me ha llevado a ampliar mis habilidades, dominando tanto el frontend como el backend. Estoy siempre en busca de nuevos desafíos y oportunidades para seguir aprendiendo y aplicando lo último en tecnología web. ¡Explora mi trabajo y no dudes en contactarme!
        </p>
        <p class="description">
            Mi pasión por el desarrollo web me ha llevado a ampliar mis habilidades, dominando tanto el frontend como el backend. Estoy siempre en busca de nuevos desafíos y oportunidades para seguir aprendiendo y aplicando lo último en tecnología web. ¡Explora mi trabajo y no dudes en contactarme!
        </p>
    </section>

    <section class="hobbiessection">

        <ul class="hobbiesList">
        <h3 class="hobbies">Studies</h3>
            <li>    
                <span class="icon">📖</span> - Educación Secundaria Obligatoria "ESO"
            </li>
            <li>
                <span class="icon">💻</span> - FP Grado medio: Sistemas microinformáticos y redes "SMIX"
            </li>
            <li>
                <span class="icon">👨‍💻</span> - FP Grado superior: Desarrollo de Aplicaciones Web "DAW"
            </li>
            <li>
                <span class="icon">👨‍💻</span> - Máster de Especialización: Desarrollo FullStack
            </li>
        </ul>

        <ul class="hobbiesList">
        <h3 class="hobbies">Hobbies</h3>
            <li>    
                <span class="icon">🛫</span> - Viajar
            </li>
            <li>
                <span class="icon">🏌️‍♂️</span> - Golf
            </li>
            <li>
                <span class="icon">🏂</span> - Snowboard
            </li>
            <li>
                <span class="icon">👨‍💻</span> - Programar
            </li>
            <li>
                <span class="icon">🎮</span> - Gaming
            </li>
            <li>
                <span class="icon">⛰️</span>  - Trekking
            </li>
        </ul>

    </section>

    </div>
    </section>`;
};
