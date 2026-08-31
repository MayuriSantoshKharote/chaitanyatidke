import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {children ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{children}</p> : null}
    </Reveal>
  );
}
