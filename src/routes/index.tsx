import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { Hero } from "@/components/portfolio/Hero";
import {
  About,
  Achievements,
  Certifications,
  Education,
  Experience,
  Projects,
  Skills,
} from "@/components/portfolio/Sections";
import { Contact, Footer } from "@/components/portfolio/Contact";

const title = "Chaitanya Tidke | Digital Marketing Professional";
const description =
  "Portfolio of Chaitanya Manik Tidke — Digital Marketing & Social Media Professional and AI & Data Science engineering student at JIT College, Nashik.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Chaitanya Manik Tidke",
          jobTitle: "Digital Marketing & Social Media Professional",
          email: "mailto:chaitanyatidke01@gmail.com",
          telephone: "+918483951439",
          url: "https://linkedin.com/in/chaitanya-tidke",
          alumniOf: "JIT College, Nashik",
          address: { "@type": "PostalAddress", addressLocality: "Nashik", addressRegion: "Maharashtra" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="grid-backdrop relative min-h-screen overflow-x-hidden">
      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
