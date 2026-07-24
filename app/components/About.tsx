import Image from "next/image";
import AngularShield from "./AngularShield";
import content from "../data/content.json";

const { about } = content;

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about-grid">
          <div className="about-portrait reveal">
            <Image
              className="char-img"
              src="/avatar-character.png"
              alt={about.avatarAlt}
              width={327}
              height={772}
              priority
              style={{
                width: "45%",
                height: "auto",
                objectFit: "contain",
                position: "relative",
                zIndex: 1,
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,.6))",
              }}
            />
            <AngularShield size={78} iconSize={42} />
          </div>

          <div className="reveal">
            <div className="section-tag">{about.tag}</div>
            <h2 className="section-title">
              {about.titleLine1}
              <br />
              {about.titlePrefix} <span className="grad">{about.titleHighlight}</span>
            </h2>
            <p className="section-sub">{about.description}</p>

            <div className="info-list">
              {about.info.map((row) => (
                <div className="info-row" key={row.label}>
                  <b>{row.label}</b>
                  <span>{row.value}</span>
                </div>
              ))}
            </div>

            <a className="btn-primary" href="#contact">
              {about.cta}
            </a>

            <div className="stat-row">
              {about.stats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="num">{stat.num}</div>
                  <div className="lbl">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
