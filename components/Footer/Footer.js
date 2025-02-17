import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `

<h2 class="contact">Contact</h2>
<div class="ft-logos">
${Button("/icons/github-icon.jpeg", "GitHub")}
${Button("/icons/linkedin-icon.jpeg", "LinkedIn")}
</div>
`;