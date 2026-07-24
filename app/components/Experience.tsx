import AngularLogo from "./AngularLogo";
import content from "../data/content.json";

const { experience } = content;

const sectionLabelStyle = {
  fontSize: ".85rem",
  color: "var(--text-dim)",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
  marginBottom: 16,
};

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">{experience.tag}</div>
          <h2 className="section-title">
            {experience.titlePrefix} <span className="grad">{experience.titleHighlight}</span>
          </h2>
          <p className="section-sub">{experience.description}</p>
        </div>

        <div className="exp-grid">
          <div className="reveal">
            <div className="timeline">
              {experience.timeline.map((item) => (
                <div className="tl-item" key={item.date + item.title}>
                  <div className="date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <div className="co">{item.company}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <h4 style={sectionLabelStyle}>{experience.educationLabel}</h4>
            <div className="timeline" style={{ marginBottom: 34 }}>
              {experience.education.map((item) => (
                <div className="tl-item" key={item.date + item.title}>
                  <div className="date">{item.date}</div>
                  <h4>{item.title}</h4>
                  <div className="co">{item.company}</div>
                </div>
              ))}
            </div>

            <h4 style={sectionLabelStyle}>{experience.certificationsLabel}</h4>
            <div className="cert-list">
              {experience.certifications.map((cert) => (
                <div className="cert-card" key={cert.title}>
                  <div className="cert-ic">
                    {cert.icon === "angular" ? <AngularLogo size={20} /> : cert.icon}
                  </div>
                  <div>
                    <b>{cert.title}</b>
                    <span>{cert.subtitle}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
