import content from "../data/content.json";

const { skills } = content;

const sectionLabelStyle = {
  fontSize: ".85rem",
  color: "var(--text-dim)",
  letterSpacing: "1px",
  textTransform: "uppercase" as const,
};

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">{skills.tag}</div>
          <h2 className="section-title">
            {skills.titlePrefix} <span className="grad">{skills.titleHighlight}</span>
          </h2>
          <p className="section-sub">{skills.description}</p>
        </div>

        <div className="skills-grid">
          <div className="skill-block reveal">
            <h4>{skills.technicalLabel}</h4>

            {skills.categories.map((category) => (
              <div key={category.label} style={{ marginBottom: 24 }}>
                <h5 style={{ ...sectionLabelStyle, marginBottom: 12 }}>{category.label}</h5>
                <div className="chip-row">
                  {category.skills.map((skill) => (
                    <div className="chip" key={skill.name}>
                      <i style={{ background: skill.color }} /> {skill.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="reveal">
            <h4 style={{ ...sectionLabelStyle, marginBottom: 20 }}>{skills.otherLabel}</h4>
            <div className="tools-row" style={{ marginBottom: 30 }}>
              {skills.softSkills.map((soft) => (
                <div className="tool-pill" key={soft}>
                  {soft}
                </div>
              ))}
            </div>

            <h4 style={{ ...sectionLabelStyle, marginBottom: 14 }}>{skills.languagesLabel}</h4>
            <div className="softskill-list" style={{ marginBottom: 30 }}>
              {skills.languages.map((lang) => (
                <div className="softskill-row" key={lang.name}>
                  {lang.name}{" "}
                  <span style={lang.highlight ? { color: "var(--text)" } : undefined}>
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>

            <h4 style={{ ...sectionLabelStyle, marginBottom: 14 }}>{skills.toolsLabel}</h4>
            <div className="tools-row">
              {skills.tools.map((tool) => (
                <div className="tool-pill" key={tool}>
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
