"use client";

import Link from "next/link";
import { MouseEvent, useEffect, useRef, useState } from "react";

const PHONE = "+49 176 60849000";
const WHATSAPP = "https://wa.me/4917660849000";

const services = [
  {
    title: "Oberflächen & Fassade",
    text: "Von der Vorbereitung bis zur fertigen Oberfläche: RM Bauservice koordiniert die erforderlichen Arbeitsschritte passend zum Projekt.",
    items: ["Putz- und Stuckarbeiten", "Maler- und Beschichtungsarbeiten", "Spachtel- und Oberflächenarbeiten", "Fassadeninstandsetzung"],
  },
  {
    title: "Innenausbau & Dämmung",
    text: "Funktionale Lösungen für Innenräume – geplant, abgestimmt und mit Blick auf ein sauberes Gesamtergebnis umgesetzt.",
    items: ["Trockenbau und Innenausbau", "Wand- und Deckenkonstruktionen", "Dämmarbeiten", "Montage genormter Fenster, Türen und Zargen"],
  },
  {
    title: "Böden & Fliesen",
    text: "Passende Bodenlösungen und fachgerecht abgestimmte Anschlussarbeiten für Renovierung und Sanierung.",
    items: ["Untergrundvorbereitung", "Vinyl- und Laminatböden", "Bodenbelagsarbeiten", "Fugen-, Parkett- und Fliesenarbeiten"],
  },
  {
    title: "Sanierung & Instandsetzung",
    text: "Nach Schäden oder bei Modernisierungen begleitet RM Bauservice das Projekt von der ersten Maßnahme bis zur Wiederherstellung.",
    items: ["Technische Bautrocknung", "Begleitende Rückbauarbeiten", "Wiederherstellung nach Wasserschäden", "Schimmelsanierung und Koordination"],
  },
];

const references = [
  { title: "Sanierung Hauseingang", category: "Außenbereich", image: "hauseingang", alt: "Vorher-Nachher-Vergleich eines sanierten Hauseingangs mit neu belegter Außentreppe", text: "Instandsetzung des Eingangsbereichs und Erneuerung der Treppenoberflächen." },
  { title: "Instandsetzung nach Wasserschaden", category: "Sanierung", image: "wasserschaden", alt: "Vorher-Nachher-Vergleich einer Küche nach Öffnung und Wiederherstellung der Wand bei einem Wasserschaden", text: "Koordinierte Wiederherstellung einer geöffneten Küchenwand nach einem Wasserschaden." },
  { title: "Sanierung Treppenhaus", category: "Innenausbau", image: "treppenhaus", alt: "Vorher-Nachher-Vergleich eines renovierten Treppenhauses mit neuen Oberflächen und Stufenbelägen", text: "Überarbeitung von Wänden, Geländer und Stufen für ein stimmiges Gesamtbild." },
  { title: "Bodenbelagsarbeiten", category: "Vinylboden", image: "vinylboden", alt: "Neu verlegter Vinylboden in heller Holzoptik in einem modernisierten Wohnbereich", text: "Vorbereitung des Untergrunds und Verlegung eines Vinylbodens in Holzoptik." },
  { title: "Fliesenarbeiten", category: "Bad", image: "fliesen", alt: "Vorher-Nachher-Vergleich einer gefliesten WC-Vorwand im Badezimmer", text: "Wiederherstellung und neue Verfliesung einer WC-Vorwand im Zuge der Sanierung." },
  { title: "Schimmelsanierung", category: "Garage", image: "schimmel", alt: "Garage und Fachkraft mit persönlicher Schutzausrüstung bei einer Schimmelsanierung", text: "Sanierungsmaßnahmen in einer Garage unter Einsatz geeigneter Schutzausrüstung." },
];

const testimonials = [
  { quote: "Absprachen eingehalten, sauber gearbeitet. Und wenn noch eine Frage war, konnte ich Rino direkt erreichen. Würde ich wieder beauftragen.", name: "Jürgen K.", place: "Leonberg", initials: "JK" },
  { quote: "Wir waren nach dem Wasserschaden ziemlich ratlos. Rino hat sich die Sache angeschaut und uns erklärt, was als Nächstes ansteht. Dass sich jemand um die einzelnen Schritte kümmert, war für uns eine echte Erleichterung.", name: "Sarah W.", place: "Renningen", initials: "SW" },
  { quote: "Was ich besonders gut fand: Man konnte mit Rino auch zwischendurch ganz unkompliziert etwas besprechen. Bei Unklarheiten hat er nachgefragt. Mit dem Ergebnis bin ich zufrieden.", name: "Markus K.", place: "Böblingen", initials: "MK" },
];

function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
function Phone() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.5 3.5 10 8 8.2 9.8c1.3 2.8 3.2 4.7 6 6L16 14l4.5 2.5-1.2 3c-.3.8-1.1 1.3-2 1.2C9.7 19.8 4.2 14.3 3.3 6.7c-.1-.9.4-1.7 1.2-2l3-1.2Z" /></svg>; }
function Mail() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18v14H3zM3 6l9 7 9-7" /></svg>; }
function WhatsApp() { return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3a12.6 12.6 0 0 0-10.9 19L3.4 28.5l6.7-1.7A12.7 12.7 0 1 0 16 3Zm0 22.8c-2 0-3.8-.5-5.4-1.5l-.4-.2-4 .9 1-3.8-.3-.4A10.2 10.2 0 1 1 16 25.8Zm5.7-7.6c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.3c-.2.2-.4.2-.7.1-1.9-.9-3.2-1.8-4.5-4-.3-.5.3-.5.9-1.7.1-.2.1-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.5 3.8 6 5.3 2.2.9 3 .9 4 .8.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.3.2-1.5-.2-.2-.5-.3-.9-.5Z" /></svg>; }

export default function Home() {
  const [selected, setSelected] = useState<(typeof references)[number] | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (selected && !dialog.open) dialog.showModal();
    if (!selected && dialog.open) dialog.close();
  }, [selected]);

  function smoothScroll(event: MouseEvent<HTMLAnchorElement>, selector: string) {
    const target = document.querySelector(selector);
    if (!target) return;
    event.preventDefault();
    const start = window.scrollY;
    const header = document.querySelector<HTMLElement>(".site-header");
    const end = target.getBoundingClientRect().top + start - (header?.offsetHeight ?? 78) - 10;
    const duration = 1200;
    const started = performance.now();
    const ease = (t: number) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    const frame = (now: number) => {
      const progress = Math.min((now - started) / duration, 1);
      window.scrollTo(0, start + (end - start) * ease(progress));
      if (progress < 1) requestAnimationFrame(frame);
    };
    requestAnimationFrame(frame);
  }

  return <>
    <a className="skip-link" href="#inhalt">Zum Inhalt springen</a>
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" href="/" aria-label="RM Bauservice Startseite"><img src="/images/rm-bauservice-logo.svg" width="205" height="120" alt="RM Bauservice – Rino Melis, alles rund ums Haus" /></Link>
        <nav className="desktop-nav" aria-label="Hauptnavigation">
          <a href="#ueber-uns" onClick={e => smoothScroll(e, "#ueber-uns")}>Über Rino</a><a href="#leistungen" onClick={e => smoothScroll(e, "#leistungen")}>Leistungen</a><a href="#referenzen" onClick={e => smoothScroll(e, "#referenzen")}>Referenzen</a><a href="#ablauf" onClick={e => smoothScroll(e, "#ablauf")}>Ablauf</a>
        </nav>
        <a className="header-cta" href="#kontakt" onClick={e => smoothScroll(e, "#kontakt")}>Projekt anfragen <Arrow /></a>
        <details className="mobile-menu"><summary aria-label="Menü öffnen"><span /><span /><span /></summary><nav><a href="#ueber-uns">Über Rino</a><a href="#leistungen">Leistungen</a><a href="#referenzen">Referenzen</a><a href="#ablauf">Ablauf</a><a href="#kontakt">Kontakt</a></nav></details>
      </div>
    </header>
    <main id="inhalt">
      <section className="hero"><div className="container hero-grid">
        <div className="hero-copy"><p className="eyebrow">Handwerk und Sanierungskoordination aus Magstadt</p><h1>Rino renoviert.<br /><span>Mit Fachkompetenz und Herz.</span></h1><p className="hero-intro">RM Bauservice plant, koordiniert und begleitet Renovierungen, Sanierungen und Instandsetzungen. Eigene Leistungen führt Rino persönlich aus; für zulassungspflichtige Facharbeiten werden qualifizierte und entsprechend eingetragene Partnerbetriebe eingebunden.</p><div className="hero-actions"><a className="button button-primary" href="#kontakt" onClick={e => smoothScroll(e, "#kontakt")}>Projekt besprechen <Arrow /></a><a className="text-link" href="#leistungen" onClick={e => smoothScroll(e, "#leistungen")}>Leistungen ansehen</a></div><ul className="trust-list"><li>Persönlicher Ansprechpartner</li><li>Klare Koordination</li><li>Saubere Ausführung</li></ul></div>
        <div className="hero-visual"><picture><source media="(max-width:720px)" srcSet="/images/rino-hero-720.webp" /><img src="/images/rino-hero-1400.webp" width="1280" height="1600" alt="Rino Melis bei Arbeiten an der Fassade eines Wohnhauses" fetchPriority="high" /></picture><div className="hero-overlay" /><div className="hero-badge"><small>RM Bauservice</small><strong>Ein Ansprechpartner für Ihr Projekt</strong></div></div>
      </div><div className="hero-strip"><div className="container hero-strip-inner"><span>Sanieren</span><span>Renovieren</span><span>Koordinieren</span></div></div></section>

      <section className="section about" id="ueber-uns"><div className="container about-grid"><div className="portrait"><picture><source media="(max-width:560px)" srcSet="/images/rino-portrait-480.webp" /><img src="/images/rino-portrait-800.webp" width="800" height="1000" loading="lazy" decoding="async" alt="Rino Melis, Inhaber von RM Bauservice in Magstadt" /></picture></div><div className="about-copy"><p className="eyebrow">Persönlich für Sie da</p><h2>Handwerkliche Erfahrung trifft verlässliche Koordination.</h2><p>Rino Melis ist ausgebildeter Stuckateur und verfügt über langjährige Erfahrung in Renovierung, Bautrocknung, Innenausbau und Instandsetzung. Als Inhaber von RM Bauservice begleitet er jedes Projekt persönlich – vom ersten Gespräch bis zur Abnahme.</p><p>Arbeiten, die zum eigenen Tätigkeitsbereich gehören, übernimmt RM Bauservice selbst. Für Gewerke, die eine besondere Eintragung oder Qualifikation voraussetzen, arbeitet RM Bauservice mit geeigneten Fach- und Meisterbetrieben zusammen.</p><blockquote>„Mir ist wichtig, dass der Kunde weiß, wer sich kümmert – und dass am Ende alles zusammenpasst.“</blockquote><div className="signature-line"><span className="signature-mark">RM</span><span><strong>Rino Melis</strong><small>Inhaber RM Bauservice</small></span></div></div></div></section>

      <section className="section services" id="leistungen"><div className="container"><div className="split-heading"><div><p className="eyebrow light-eyebrow">Leistungsspektrum</p><h2>Alles rund ums Haus – passend zusammengestellt.</h2></div><p>RM Bauservice übernimmt eigene Arbeiten und koordiniert bei Bedarf qualifizierte Partnerbetriebe. Welche Leistungen von wem ausgeführt werden, wird projektbezogen im Angebot festgehalten.</p></div><div className="service-grid">{services.map(service => <article className="service-card" key={service.title}><h3>{service.title}</h3><p>{service.text}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></article>)}</div></div></section>

      <section className="section coordination"><div className="container coordination-grid"><div><p className="eyebrow">Ein Ansprechpartner. Klare Zuständigkeiten.</p><h2>Aus einer Hand – mit den richtigen Fachbetrieben.</h2></div><div><p>Je nach Umfang tritt RM Bauservice als zentraler Auftragnehmer auf, koordiniert die beteiligten Gewerke und sorgt für einen abgestimmten Ablauf. Zulassungspflichtige oder besonders qualifikationsgebundene Arbeiten werden durch entsprechend berechtigte Fachbetriebe als Nachunternehmer ausgeführt.</p><p>Wenn vertraglich vereinbart, erhalten Sie ein Gesamtangebot und eine Gesamtrechnung von RM Bauservice. Leistungsumfang, Zuständigkeiten und eingesetzte Partner werden im Angebot transparent beschrieben.</p></div></div></section>

      <section className="section references" id="referenzen"><div className="container"><div className="section-heading"><p className="eyebrow">Ausgewählte Projekte</p><h2>Ergebnisse, die für sich sprechen.</h2><p className="section-intro">Die Beispiele zeigen Projekte, die RM Bauservice ausgeführt, begleitet oder koordiniert hat. Die konkrete Aufteilung zwischen Eigenleistung und Partnergewerken richtet sich nach dem jeweiligen Auftrag.</p></div><div className="reference-grid">{references.map((reference) => <article className="reference-card" key={reference.title}><button className="reference-open" type="button" onClick={() => setSelected(reference)} aria-label={`${reference.title} vergrößern`}><picture><source media="(max-width:700px)" srcSet={`/images/referenz-${reference.image}-640.webp`} /><img src={`/images/referenz-${reference.image}-1000.webp`} width="1000" height="667" loading="lazy" decoding="async" alt={reference.alt} /></picture><span className="zoom-label">Bild vergrößern</span></button><div className="reference-copy"><small>{reference.category}</small><h3>{reference.title}</h3><p>{reference.text}</p></div></article>)}</div></div></section>

      <section className="section testimonials"><div className="container"><div className="section-heading centered-heading"><p className="eyebrow">Kundenstimmen</p><h2>Persönlich empfohlen. Verlässlich begleitet.</h2></div><div className="testimonial-grid">{testimonials.map(item => <article className="testimonial-card" key={item.name}><div className="quote-mark" aria-hidden="true">“</div><p>{item.quote}</p><div className="testimonial-author"><span>{item.initials}</span><div><strong>{item.name}</strong><small>{item.place}</small></div></div></article>)}</div></div></section>

      <section className="section process" id="ablauf"><div className="container"><p className="eyebrow light-eyebrow">So läuft Ihr Projekt</p><h2>Strukturiert vom ersten Gespräch bis zur Abnahme.</h2><div className="process-grid">{[["01","Kennenlernen","Sie schildern Ihr Vorhaben und wir klären die wichtigsten Eckdaten."],["02","Besichtigung","Rino sieht sich die Situation vor Ort an und stimmt den Bedarf ab."],["03","Angebot","Sie erhalten ein verständliches Angebot mit klar beschriebenen Leistungen."],["04","Umsetzung","RM Bauservice führt aus und koordiniert bei Bedarf die beteiligten Fachbetriebe."],["05","Abnahme","Gemeinsam prüfen wir das Ergebnis und schließen das Projekt sauber ab."]].map(([no,title,text]) => <article key={no}><span>{no}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="section region"><div className="container region-grid"><div><p className="eyebrow">Einsatzgebiet</p><h2>In Magstadt und der Region für Sie unterwegs.</h2><p>RM Bauservice betreut private und gewerbliche Projekte in Magstadt sowie im Umkreis von etwa 30 bis 40 Kilometern. Für größere Vorhaben sprechen Sie uns gerne an.</p></div><ul className="region-list"><li>Magstadt</li><li>Renningen</li><li>Leonberg</li><li>Böblingen</li><li>Sindelfingen</li><li>Stuttgart</li></ul></div></section>

      <section className="contact" id="kontakt"><div className="container contact-inner"><p className="eyebrow light-eyebrow">Ihr Projekt beginnt mit einem Gespräch</p><h2>Was dürfen wir für Sie anpacken?</h2><p className="contact-intro">Rufen Sie an, schreiben Sie eine E-Mail oder starten Sie direkt eine WhatsApp-Nachricht. Rino meldet sich persönlich bei Ihnen.</p><div className="contact-options"><a className="contact-whatsapp" href={WHATSAPP} target="_blank" rel="noopener noreferrer"><WhatsApp /><span><small>Per WhatsApp</small><strong>Nachricht schreiben</strong></span><Arrow /></a><a className="contact-option" href="tel:+4917660849000"><Phone /><span><small>Telefon</small><strong>{PHONE}</strong></span></a><a className="contact-option" href="mailto:rinomelis@web.de"><Mail /><span><small>E-Mail</small><strong>rinomelis@web.de</strong></span></a></div></div></section>
    </main>
    <footer className="site-footer"><div className="container"><div className="footer-grid"><div><Link className="brand footer-brand" href="/"><img src="/images/rm-bauservice-logo.svg" width="205" height="120" alt="RM Bauservice" /></Link><p>Persönliche Betreuung, handwerkliche Erfahrung und koordinierte Sanierungslösungen aus Magstadt.</p></div><div><h3>Navigation</h3><a href="#ueber-uns">Über Rino</a><a href="#leistungen">Leistungen</a><a href="#referenzen">Referenzen</a><a href="#kontakt">Kontakt</a></div><div><h3>Rechtliches</h3><Link href="/impressum/">Impressum</Link><Link href="/datenschutz/">Datenschutz</Link></div><div><h3>Kontakt</h3><a href="tel:+4917660849000">{PHONE}</a><a href="mailto:rinomelis@web.de">rinomelis@web.de</a><span>71106 Magstadt</span></div></div><div className="footer-bottom"><span>© 2026 RM Bauservice – Rino Melis</span><span>Alles rund ums Haus</span></div></div></footer>
    <a className="floating-whatsapp" href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp-Nachricht an RM Bauservice senden"><WhatsApp /><span>WhatsApp</span></a>
    <dialog ref={dialogRef} className="lightbox" onClose={() => setSelected(null)} onClick={event => { if (event.target === event.currentTarget) { event.currentTarget.close(); setSelected(null); } }}>{selected && <div className="lightbox-inner"><button type="button" className="lightbox-close" aria-label="Großansicht schließen" onClick={() => { dialogRef.current?.close(); setSelected(null); }}>×</button><img src={`/images/referenz-${selected.image}-1000.webp`} width="1000" height="667" alt={selected.alt} /><p>{selected.title}</p></div>}</dialog>
  </>;
}
