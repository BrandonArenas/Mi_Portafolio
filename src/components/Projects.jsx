import "../css/Projects.css";
import projectsData from "../json/Projects.json";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <h2 className="section-title">Proyectos Destacados</h2>
      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}

          pagination={{ clickable: true }}
        >

          {projectsData.Projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="project-item">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <a
                  href={project.urlgithub}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={project.icon}></i>
                </a>
                <br />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
