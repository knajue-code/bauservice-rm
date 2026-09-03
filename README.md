# RM Bauservice – Website

Responsive Onepage-Website für Rino Melis / RM Bauservice in Magstadt. Das Projekt basiert auf Next.js und kann bei Netlify als statische Website veröffentlicht werden.

## Lokale Vorschau

Voraussetzung: Node.js 22 oder neuer.

```bash
npm install
npm run dev
```

Anschließend ist die Website unter `http://localhost:3000` erreichbar.

## Für Netlify bauen

```bash
npm install
npm run build:netlify
```

Der fertige statische Stand liegt danach im Ordner `out`. Dieser Ordner kann direkt per Drag-and-drop bei Netlify veröffentlicht werden. Alternativ lässt sich das Projekt mit einem Git-Repository verbinden; die Datei `netlify.toml` enthält bereits Build-Befehl und Veröffentlichungsordner.

## Produktionsstand

- Hero-, Porträt- und Referenzbilder sind optimiert eingebunden.
- Die Referenzbilder lassen sich in einer zugänglichen Großansicht öffnen.
- SEO-Metadaten, Sitemap, robots.txt, Impressum und Datenschutzerklärung sind enthalten.
- Netlify baut und veröffentlicht automatisch anhand der `netlify.toml`.

## Kontaktangaben

- Telefon und WhatsApp: +49 176 60849000
- E-Mail: rinomelis@web.de
- Anschrift: Rudolf-Diesel-Straße 1, 71106 Magstadt
