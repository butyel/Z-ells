import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

type ButtonLinkProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-lime";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-ink hover:bg-[#e2ff85] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "border border-line bg-surface text-foreground hover:border-lime/60 hover:bg-surface-2 hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "text-foreground/80 hover:text-foreground hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-7 text-[15px]",
};

export function ButtonLink({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
