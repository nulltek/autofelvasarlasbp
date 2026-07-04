import Link from "next/link";

export function Logo() {
  return (
    <Link className="brand" href="/" aria-label="Autofelvásárlás főoldal">
      <img
        className="brand-logo-img"
        src="/images/site-logo-wide.png"
        alt="Autófelvásárlás - gyors, egyszerű, korrekt"
        width={620}
        height={129}
        decoding="async"
      />
    </Link>
  );
}
