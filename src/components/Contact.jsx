import "../css/Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <h2 className="section-title">Contacto</h2>
      <p className="contact-intro">
        Si estás interesado en trabajar conmigo o tienes alguna consulta, no dudes en escribirme o llamarme. Estoy disponible para colaborar en proyectos y conversar sobre nuevas oportunidades.
      </p>
      <div className="contact-links">
        <a href="https://www.linkedin.com/in/brandon-stwuar-arenas-banda/" target="_blank" className="contact-button"><i className="fab fa-linkedin"></i>LinkedIn</a>
        <a className="contact-button"><i className="fas fa-envelope"></i>arenasbandabrandon@gmail.com</a>
        <a className="contact-button"><i className="fas fa-phone"></i>+51 977 382 912</a>
      </div>
    </section>
  );
};

export default Contact;
