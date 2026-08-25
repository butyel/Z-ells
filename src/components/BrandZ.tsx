type BrandZProps = {
  variant?: "small" | "medium" | "huge";
  color?: "lime" | "purple" | "outline";
  className?: string;
};

const sizes = {
  small: { fontSize: "8rem", opacity: 0.04 },
  medium: { fontSize: "16rem", opacity: 0.03 },
  huge: { fontSize: "30rem", opacity: 0.05 },
};

export function BrandZ({ variant = "medium", color = "outline", className = "" }: BrandZProps) {
  const s = sizes[variant];

  const strokeColor =
    color === "lime"
      ? "rgba(216,255,102,1)"
      : color === "purple"
        ? "rgba(111,97,255,1)"
        : "rgba(244,240,232,1)";

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none select-none font-display font-bold leading-none ${className}`}
      style={{
        fontSize: s.fontSize,
        color: "transparent",
        WebkitTextStroke: `2px ${strokeColor}`,
        opacity: s.opacity,
        position: "absolute",
      }}
    >
      Z
    </span>
  );
}
