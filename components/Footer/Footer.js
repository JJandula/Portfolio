import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
<div class="contactfooter">
<h2 class="contact">Contact</h2>
</div>
<div class="ft-logos">
${Button("https://github.com/JJandula","/icons/github-icon.jpeg", "GitHub")}
${Button("https://www.linkedin.com/in/jose-jandula-egea/","/icons/linkedin-icon.jpeg", "LinkedIn")}
</div>
`;