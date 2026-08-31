import { useState } from "react";
import { ArrowUp, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import logo from "@/assets/cmt-logo.jpeg.asset.json";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { profile } from "./data";

const fieldClass =
  "w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary/70";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio enquiry",
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="relative">
      <div className="section-shell">
        <SectionHeading eyebrow="Contact" title="Let’s Work Together">
          Reach out directly, or use the form below — it opens your email app with the message ready
          to send.
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal className="glass-card h-fit p-7">
            <ul className="space-y-5 text-sm">
              <li>
                <a
                  href={`tel:+91${profile.phone}`}
                  className="flex items-center gap-4 transition-colors hover:text-accent"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                    <Phone className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Phone
                    </span>
                    <span className="block truncate font-medium">{profile.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 transition-colors hover:text-accent"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                    <Mail className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      Email
                    </span>
                    <span className="block truncate font-medium">{profile.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    Location
                  </span>
                  <span className="block font-medium">{profile.location}</span>
                </span>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 transition-colors hover:text-accent"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent">
                    <Linkedin className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted-foreground">
                      LinkedIn
                    </span>
                    <span className="block truncate font-medium">/in/chaitanya-tidke</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120} className="glass-card p-7">
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={fieldClass}
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={fieldClass}
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={fieldClass}
                  placeholder="What is this about?"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${fieldClass} resize-y`}
                  placeholder="Tell me a little about your project"
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03]"
                  style={{ backgroundImage: "var(--gradient-brand)" }}
                >
                  <Send className="h-4 w-4" aria-hidden="true" /> Send Message
                </button>
                <p className="mt-3 text-xs text-muted-foreground">
                  This form opens your email client with the details filled in — no message is stored
                  or sent automatically.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid w-full max-w-[76rem] gap-6 px-5 py-10 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
        <div className="flex min-w-0 items-center gap-4">
          <img
            src={logo.url}
            alt="Chaitanya Tidke logo"
            loading="lazy"
            className="h-11 w-11 shrink-0 rounded-full border border-border object-cover"
          />
          <div className="min-w-0">
            <p className="text-sm font-medium">© 2026 {profile.name}. All rights reserved.</p>
            <p className="text-gradient mt-1 text-sm font-semibold">“{profile.tagline}”</p>
          </div>
        </div>
        <ul className="flex items-center gap-3 sm:justify-end">
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
              aria-label="Send an email"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <Mail className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
          <li>
            <a
              href="#home"
              aria-label="Back to top"
              className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/60 hover:text-foreground"
            >
              <ArrowUp className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
