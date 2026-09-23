import Link from "next/link";

export function LegalHeader() {
  return <header className="site-header legal-header"><div className="container header-inner"><Link className="brand" href="/" aria-label="Zur Startseite"><img src="/images/rm-bauservice-logo.svg" width="205" height="120" alt="RM Bauservice – Rino Melis" /></Link><Link className="back-link" href="/">← Zur Startseite</Link></div></header>;
}

export function LegalFooter() {
  return <footer className="legal-footer"><div className="container"><span>© 2026 RM Bauservice – Rino Melis</span><nav><Link href="/impressum">Impressum</Link><Link href="/datenschutz">Datenschutz</Link></nav></div></footer>;
}
