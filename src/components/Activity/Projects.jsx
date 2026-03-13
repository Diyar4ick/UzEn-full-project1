import { useSelector } from "react-redux";
// import project1 from "../../assets/images/projects/project1.jpg";
// import project2 from "../../assets/images/projects/project2.jpg";
// import project3 from "../../assets/images/projects/project3.jpg";
// import project4 from "../../assets/images/projects/project4.jpg";
// import project5 from "../../assets/images/projects/project5.jpg";
// import project6 from "../../assets/images/projects/project6.jpg";
// import project7 from "../../assets/images/projects/project7.jpg";
// import project8 from "../../assets/images/projects/project8.jpg";
// import project9 from "../../assets/images/projects/project9.jpg";

const Projects = () => {
  const BASE_URL = import.meta.env.VITE_API_URL
  const { data, status } = useSelector((state) => state.text);
  const textInfo = Array.isArray(data) ? data[0] : data;

  // Paths
  const projectImg1Path = textInfo?.blocks?.[0]?.projectImg1?.[0]?.url;
  const projectImg2Path = textInfo?.blocks?.[0]?.projectImg2?.[0]?.url;
  const projectImg3Path = textInfo?.blocks?.[0]?.projectImg3?.[0]?.url;
  const projectImg4Path = textInfo?.blocks?.[0]?.projectImg4?.[0]?.url;
  const projectImg5Path = textInfo?.blocks?.[0]?.projectImg5?.[0]?.url;
  const projectImg6Path = textInfo?.blocks?.[0]?.projectImg6?.[0]?.url;
  const projectImg7Path = textInfo?.blocks?.[0]?.projectImg7?.[0]?.url;
  const projectImg8Path = textInfo?.blocks?.[0]?.projectImg8?.[0]?.url;
  const projectImg9Path = textInfo?.blocks?.[0]?.projectImg9?.[0]?.url;

  // Full images
  const fullProjectImg1 = projectImg1Path
    ? `${BASE_URL}${projectImg1Path}`
    : null;
  const fullProjectImg2 = projectImg2Path 
    ? `${BASE_URL}${projectImg2Path}`
    : null;
  const fullProjectImg3 = projectImg3Path
    ? `${BASE_URL}${projectImg3Path}`
    : null;
  const fullProjectImg4 = projectImg4Path
    ? `${BASE_URL}${projectImg4Path}`
    : null;
  const fullProjectImg5 = projectImg5Path
    ? `${BASE_URL}${projectImg5Path}`
    : null;
  const fullProjectImg6 = projectImg6Path
    ? `${BASE_URL}${projectImg6Path}`
    : null;
  const fullProjectImg7 = projectImg7Path
    ? `${BASE_URL}${projectImg7Path}`
    : null;
  const fullProjectImg8 = projectImg8Path
    ? `${BASE_URL}${projectImg8Path}`
    : null;
  const fullProjectImg9 = projectImg9Path
    ? `${BASE_URL}${projectImg9Path}`
    : null;

  const projectImages = [
    fullProjectImg1,
    fullProjectImg2,
    fullProjectImg3,
    fullProjectImg4,
    fullProjectImg5,
    fullProjectImg6,
    fullProjectImg7,
    fullProjectImg8,
    fullProjectImg9,
  ];

  const dataArray = Array.from({ length: 9 }, (_, i) => {
    const index = i + 1;
    const project = textInfo?.blocks?.[0]?.[`project${index}`];
    return {
      img: projectImages[i], // массив картинок
      title: project?.[0]?.title || project?.title,
      description: project?.[0]?.description || project?.description,
      year: project?.[0]?.year || project?.year,
    };
  });

  if (status === "loading" || !data) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className="projects-page">
      <section className="projects-page__section1">
        <h2 className="main-title">{textInfo?.title}</h2>
        <div className="container">
          {dataArray.map((project, idx) => (
            <div key={idx} className="projects-page__section1-project1">
              <img src={project.img} alt="" />
              <span className="projects-page__section1-project1-name">
                <h3 className="bold">{project.title}</h3>
                <span className="enter"></span>
                <p>{project.year}</p>
              </span>
              <ul className="projects-page__section1-project1-list">
                <li>
                  <p>{project.description}</p>
                  <span>{project.year}</span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
