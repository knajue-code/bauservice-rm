# RM Bauservice – Website

Responsive Onepage-Website für Rino Melis / RM Bauservice in Magstadt. Das Projekt basiert auf Next.js und kann bei Netlify als statische Website veröffentlicht werden.

## Lokale Vorschau

Voraussetzung: Node.js 22 oder neuer.

```bash
npm install
npm run dev:netlify
```

Anschließend ist die Website unter `http://localhost:3000` erreichbar.

## Für Netlify bauen

```bash
npm install
npm run build:netlify
```

Der fertige statische Stand liegt danach im Ordner `out`. Dieser Ordner kann direkt per Drag-and-drop bei Netlify veröffentlicht werden. Alternativ lässt sich das Projekt mit einem Git-Repository verbinden; die Datei `netlify.toml` enthält bereits Build-Befehl und Veröffentlichungsordner.

## Inhalte vor Veröffentlichung

- Die Bildflächen in Hero, Vorstellung und Referenzen sind bewusst als Platzhalter angelegt.
- Die Kundenstimmen sind als Platzhalter gekennzeichnet und müssen durch freigegebene Originalzitate ersetzt werden.
- Impressum und Datenschutzerklärung müssen mit den vollständigen rechtlichen Angaben ergänzt und verlinkt werden.

## Kontaktangaben

- Telefon und WhatsApp: +49 176 60849000
- E-Mail: rinomelis@web.de
- Anschrift: Rudolf-Diesel-Straße 1, 71106 Magstadt

