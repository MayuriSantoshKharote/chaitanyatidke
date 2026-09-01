import { useEffect, useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { navItems } from "./data";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.15, 0.4, 0.7], rootMargin: "-80px 0px -40% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 w-full max-w-[76rem] items-center gap-4 px-5"
      >
        <a href="#home" className="flex min-w-0 items-center gap-3">
          <img
            src="/cmt-logo.png"
            alt="Chaitanya Tidke logo"
            width={40}
            height={40}
            className="h-10 w-10 shrink-0 rounded-full border border-border object-cover"
          />
          <span className="font-display truncate text-sm font-semibold tracking-[0.3em]">CMT</span>
        </a>

        <ul className="ml-auto hidden items-center gap-7 text-sm font-medium lg:flex">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className="nav-link" data-active={active === item.id}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="ml-auto hidden shrink-0 items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.03] sm:inline-flex lg:ml-6"
          style={{ backgroundImage: "var(--gradient-brand)" }}
        >
          <Mail className="h-4 w-4" aria-hidden="true" /> Contact Me
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="ml-auto rounded-full border border-border p-2 text-foreground sm:ml-0 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-border bg-background/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-96 border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="mx-auto flex w-full max-w-[76rem] flex-col gap-1 px-5 py-4">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                data-active={active === item.id}
                className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground data-[active=true]:bg-secondary data-[active=true]:text-foreground"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
