import "../css/About.css";

const About = () => {
  return (

    <section id="about" className="section-padding">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content">
        <img src="imgs/profile.jpeg" alt="Foto de perfil" className="profile-pic" />
        <div className="about-text">
          <p>Soy desarrollador de software junior con experiencia en el desarrollo de aplicaciones web y el uso de sistemas empresariales. He trabajado con tecnologías frontend como HTML, CSS, JavaScript, así como con PHP, MySQL o SQLServer en el backend.</p>
          <p>Durante mis experiencias, he contribuido en proyectos, desarrollando interfaces web y backend, automatizando procesos con Python y macros VBA, y gestionando datos en sistemas ERP. Me considero proactivo, con facilidad para aprender nuevas tecnologías y adaptarme a diferentes entornos de trabajo. Mi objetivo es seguir creciendo como desarrollador y aportar soluciones funcionales y eficientes.</p>

        </div>
      </div>
    </section>
  );
};

export default About;
