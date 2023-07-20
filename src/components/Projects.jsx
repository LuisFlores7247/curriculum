import "../index.css";
import bgBienesraices from "../assets/img/bg-bienesraices.png";
import bgChernobil from "../assets/img/bg-chernobil.png";

export const Projects = () => {
  const projectImages = [
    {
      imageUrl: bgBienesraices,
      name: "Bienes Raices",
      description:
        "A real estate project where you will find useful information and an interactive experience that will satisfy your needs.",
      link: "https://bespoke-belekoy-0be745.netlify.app/aviso%20de%20privacidad/",
    },
    {
      imageUrl: bgChernobil,
      name: "Chernobil",
      description:
        "A web page where the disaster and its consequences are discussed, as well as showing images of them in a gallery.",
      link: "https://bespoke-belekoy-0be745.netlify.app/p%C3%A1gina%20web/index.html",
    },
    {
      imageUrl: "",
      name: "Survey",
      description:
        "A survey of employees to find out their job stress in their current job",
      link: "https://encuestas-ags.com/index.html",
    },
  ];

  return (
    <main className="container">
      {projectImages.map((project, index) => (
        <div
          key={index}
          className="project bg-dark p-4 rounded mt-3 my-3"
          style={{ "--project-image": `url(${project.imageUrl})` }}
        >
          <h1 className="text-light">{project.name}</h1>
          <p className="lead text-light">{project.description}</p>
          <a className="btn btn-primary" href={project.link} role="button">
            View Project
          </a>
        </div>
      ))}
    </main>
  );
};
