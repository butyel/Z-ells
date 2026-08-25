import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={`mb-14 flex flex-col gap-4 sm:mb-16 ${
        align === "center"
          ? "items-center text-center"
          : "items-start text-left"
      }`}
    >
      {eyebrow && (
        <span className="brand-eyebrow">
          {eyebrow}
        </span>
      )}
      <div className={`flex items-center gap-4 ${align === "center" ? "justify-center" : ""}`}>
        <h2
          id={id}
          className="max-w-2xl text-balance font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]"
        >
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          {description}
        </p>
      )}
    </Reveal>
  );
}
