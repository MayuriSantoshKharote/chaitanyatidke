import { ArrowRight, Download, Linkedin, Mail, Phone } from "lucide-react";

import { profile, education } from "./data";

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-24 pb-16">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="min-w-0">
          <p
            className="animate-fade-in text-xs font-semibold uppercase tracking-[0.4em] text-accent"
            style={{ animationDelay: "60ms" }}
          >
            Hello, I’m
          </p>
          <h1
            className="animate-fade-in mt-4 text-4xl leading-[1.05] font-extrabold sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "140ms" }}
          >
            {profile.name}
          </h1>
          <p
            className="animate-fade-in text-gradient mt-4 text-lg font-semibold sm:text-2xl"
            style={{ animationDelay: "240ms" }}
          >
            {profile.title}
          </p>
          <p
            className="animate-fade-in mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            “{profile.intro}”
          </p>

          <div
            className="animate-fade-in mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "440ms" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
              style={{ backgroundImage: "var(--gradient-brand)" }}
            >
              Explore My Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/60 hover:bg-secondary"
            >
              <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
            </a>
            <a
              href="/chaitanya-tidke-resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/60 hover:text-accent"
            >
              <Download className="h-4 w-4" aria-hidden="true" /> Download Resume
            </a>
          </div>

          <ul
            className="animate-fade-in mt-9 flex items-center gap-3"
            style={{ animationDelay: "540ms" }}
          >
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Linkedin className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${profile.email}`}
                aria-label={`Email ${profile.email}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Mail className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`tel:+91${profile.phone}`}
                aria-label={`Call ${profile.phone}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="float-slow relative aspect-square">
            <div
              className="ring-spin absolute -inset-3 rounded-[2.5rem] opacity-70 blur-[2px]"
              aria-hidden="true"
              style={{
                background:
                  "conic-gradient(from 0deg, transparent 0deg, oklch(0.65 0.19 258) 90deg, oklch(0.82 0.13 200) 190deg, transparent 300deg)",
              }}
            />
            <img
              src="/profile-photo.png"
              alt="Portrait of Chaitanya Manik Tidke"
              width={1131}
              height={1414}
              loading="eager"
              className="relative h-full w-full rounded-[2.25rem] border border-border object-cover object-top shadow-[var(--shadow-glow)]"
            />
          </div>
          <div className="glass-card mt-6 px-5 py-4 text-sm">
            <p className="font-semibold">{education.degree}</p>
            <p className="mt-1 text-muted-foreground">
              {education.college} · {education.year}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
