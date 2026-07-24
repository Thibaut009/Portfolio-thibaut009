"use client";

import { useState } from "react";
import SocialIcon from "./SocialIcon";
import content from "../data/content.json";

const { contact, hero } = content;
const { form } = contact;

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (field: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error();

      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="reveal">
          <div className="section-tag">{contact.tag}</div>
          <h2 className="section-title">
            {contact.titlePrefix} <span className="grad">{contact.titleHighlight}</span>
          </h2>
          <p className="section-sub">{contact.description}</p>
        </div>

        <div className="contact-grid">
          <div className="reveal">
            {contact.items.map((item) => (
              <div className="contact-item" key={item.label}>
                <div className="contact-ic">{item.icon}</div>
                <div>
                  <b>{item.label}</b>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
            <div className="socials" style={{ marginTop: 24 }}>
              {hero.socials.map((social) => (
                <a
                  href={social.href}
                  title={social.title}
                  key={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>

          <form className="form-card reveal" onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label>{form.nameLabel}</label>
                <input
                  type="text"
                  placeholder={form.namePlaceholder}
                  value={values.name}
                  onChange={handleChange("name")}
                  required
                />
              </div>
              <div>
                <label>{form.emailLabel}</label>
                <input
                  type="email"
                  placeholder={form.emailPlaceholder}
                  value={values.email}
                  onChange={handleChange("email")}
                  required
                />
              </div>
            </div>
            <div className="full">
              <label>{form.subjectLabel}</label>
              <input
                type="text"
                placeholder={form.subjectPlaceholder}
                value={values.subject}
                onChange={handleChange("subject")}
                required
              />
            </div>
            <div>
              <label>{form.messageLabel}</label>
              <textarea
                placeholder={form.messagePlaceholder}
                value={values.message}
                onChange={handleChange("message")}
                required
              />
            </div>
            <button
              type="submit"
              className="btn-primary"
              disabled={status === "sending"}
              style={{ width: "100%", justifyContent: "center" }}
            >
              {status === "sending" ? form.sendingLabel : form.submitLabel}
            </button>
            {status === "success" && (
              <p style={{ color: "#22c55e", fontSize: ".82rem", marginTop: 12 }}>
                {form.successMessage}
              </p>
            )}
            {status === "error" && (
              <p style={{ color: "#ff6b8a", fontSize: ".82rem", marginTop: 12 }}>
                {form.errorMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
