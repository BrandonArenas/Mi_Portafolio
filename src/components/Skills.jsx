import "../css/Skills.css";
import skillsData from "../json/Skills.json";

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <h2 className="section-title">Habilidades Técnicas</h2>
      <div className="skills-grid">
          {skillsData.Skills.map((skill, index) => (
            <div className="skill-item" key={index}>
              <i className={skill.icon}></i>
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Skills;
