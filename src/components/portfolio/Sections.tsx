import type { LucideIcon } from "lucide-react";
import {
  Award,
  BarChart3,
  Briefcase,
  Check,
  GraduationCap,
  Languages as LanguagesIcon,
  Lightbulb,
  Megaphone,
  Rocket,
  Share2,
  Sparkles,
  Target,
  Users,
  Wrench,
} from "lucide-react";
import photo from "@/assets/chaitanya-photo.png.asset.json";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import {
  achievements,
  certifications,
  education,
  experience,
  highlights,
  languages,
  profile,
  projects,
  skillGroups,
} from "./data";

const highlightIcons: LucideIcon[] = [Megaphone, Share2, Target, Rocket];
const groupIcons: LucideIcon[] = [BarChart3, Lightbulb, Wrench];
const projectIcons: LucideIcon[] = [Share2, Target];

function pickIcon<T>(arr: T[], index: number): T {
  return arr[index % arr.length]!;
}

export function About() {
  return (
    <section id="about" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal className="relative mx-auto w-full max-w-xs">
            <img
              src={photo.url}
              alt="Chaitanya Manik Tidke"
              width={1131}
              height={1414}
              loading="lazy"
              className="w-full rounded-3xl border border-border object-cover shadow-[var(--shadow-soft)]"
            />
          </Reveal>
          <div>
            <Reveal>
              <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                “{profile.about}”
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {highlights.map((item, i) => {
                const Icon = highlightIcons[i % highlightIcons.length];
                return (
                  <Reveal as="li" key={item.title} delay={i * 80} className="glass-card p-5">
                    <Icon className="h-5 w-5 text-accent" aria-hidden="true" />
                    <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.desc}</p>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="relative">
      <div className="section-shell pt-0">
        <SectionHeading eyebrow="Education" title="Academic Background" />
        <Reveal className="glass-card flex flex-col gap-4 p-7 sm:flex-row sm:items-start">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-secondary text-accent">
            <GraduationCap className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="min-w-0">
            <h3 className="text-lg font-semibold">{education.degree}</h3>
            <p className="mt-1 text-sm text-accent">{education.college}</p>
            <p className="mt-1 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {education.period}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">“{education.note}”</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="Skills" title="What I Work With">
          A blend of marketing craft, personal strengths, and the platforms I use day to day.
        </SectionHeading>
        <div className="grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, gi) => {
            const Icon = groupIcons[gi % groupIcons.length];
            return (
              <Reveal key={group.title} delay={gi * 100} className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/40 px-3 py-1.5 text-xs font-medium text-foreground/90 transition-colors hover:border-primary/60 hover:text-accent"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="Experience" title="Where I've Contributed" />
        <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-10">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.role} delay={i * 100} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[31px] top-7 grid h-4 w-4 place-items-center rounded-full sm:-left-[47px]"
                style={{ backgroundImage: "var(--gradient-brand)" }}
              />
              <div className="glass-card p-6 sm:p-7">
                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:flex-wrap sm:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{job.role}</h3>
                    <p className="mt-1 text-sm text-accent">{job.org}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <ul className="mt-5 space-y-3">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                {job.focus.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Key Focus Areas
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {job.focus.map((f) => (
                        <li
                          key={f}
                          className="rounded-full bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground/90"
                        >
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Projects() {
  const icons = [Share2, Target];
  return (
    <section id="projects" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Projects & Work Highlights" />
        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={project.title} delay={i * 120} className="glass-card group p-7">
                <div
                  className="grid h-28 place-items-center rounded-2xl border border-border"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 30% 30%, oklch(0.65 0.19 258 / 30%), transparent 60%), radial-gradient(circle at 75% 65%, oklch(0.82 0.13 200 / 24%), transparent 60%)",
                  }}
                >
                  <Icon
                    className="h-10 w-10 text-accent transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mt-6 text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
                <p className="mt-5 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  Tools Used
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <li
                      key={tool}
                      className="rounded-full border border-border px-3 py-1.5 text-xs font-medium"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 flex gap-2 text-sm text-foreground/90">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>
                    <span className="font-semibold">Outcome: </span>
                    {project.outcome}
                  </span>
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="relative">
      <div className="section-shell pt-0">
        <SectionHeading eyebrow="Achievements" title="Recognition & Results" />
        <ul className="grid gap-5 md:grid-cols-3">
          {achievements.map((item, i) => (
            <Reveal as="li" key={item} delay={i * 90} className="glass-card p-6">
              <Award className="h-5 w-5 text-accent" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Certifications() {
  return (
    <section id="certifications" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="Certifications" title="Certifications & Languages" />
        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <ul className="grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal as="li" key={cert.name} delay={i * 80} className="glass-card p-6">
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                    <Briefcase className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-snug">{cert.name}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{cert.org}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
          <Reveal delay={120} className="glass-card h-fit p-6">
            <div className="flex items-center gap-3">
              <LanguagesIcon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="text-base font-semibold">Languages</h3>
            </div>
            <ul className="mt-5 space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between gap-3 border-b border-border pb-3 text-sm last:border-0 last:pb-0"
                >
                  <span className="font-medium">{lang.name}</span>
                  <span className="text-muted-foreground">{lang.level}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Users className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
              Comfortable communicating with diverse audiences.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
