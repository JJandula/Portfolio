import "./ProjectCard.css";

export const ProjectCard = (project) => `
<div class="project-card">
<img src=${project.image} alt=${project.title} class="image-1"/>
<img src=${project.image2} alt=${project.title} class="image-2"/>
<div class="header">
<h2 class="project-tittle">${project.title}</h2>
<div>
<a href=${project.github} target="_blank">
<img src="/icons/github-icon.jpeg" alt="GitHub Icon" />
</a>
<a href=${project.link} target="_blank">
<img src="/icons/link-icon.jpeg" alt="Link icon" />
</a>
</div>
</div>

<div class="detail">
<p class="project-desc">${project.description}</p>
<p class="tech">${project.tech.join(" - ")}</p>
</div>
</div>
`;