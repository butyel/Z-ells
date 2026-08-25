import Link from "next/link";

type BrandLogoProps = {
  onClick?: () => void;
  compact?: boolean;
};

export function BrandLogo({ onClick, compact }: BrandLogoProps) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group inline-flex items-center gap-2.5"
      aria-label="Z'ells, ir para o início"
    >
      <span
        className="relative flex items-center justify-center bg-lime text-ink font-display font-bold"
        style={{
          width: compact ? 32 : 38,
          height: compact ? 32 : 38,
          borderRadius: 8,
          fontSize: compact ? 18 : 22,
          lineHeight: 1,
        }}
      >
        Z
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          Z&rsquo;ells
        </span>
        <span
          className="font-display font-semibold uppercase text-lime"
          style={{
            fontSize: 10,
            letterSpacing: "0.22em",
            marginTop: 1,
          }}
        >
          Agency
        </span>
      </span>
    </Link>
  );
}
