# CLAUDE.md – Projektregeln Website Freiwillige Feuerwehr Hermaringen

Diese Datei fasst die wichtigsten Regeln des Projekts zusammen, damit sie nicht
nur im Chat existieren. Sie gilt für alle, die technisch an der Website arbeiten.

## Grundhaltung

- Der Betreiber ist **kein Programmierer** und will keiner werden.
  Alle Inhalte müssen später über das Redaktionssystem (Decap CMS) pflegbar sein –
  **ohne** HTML, CSS oder JavaScript anzufassen.
- In kleinen, nachvollziehbaren Schritten arbeiten. Nach jedem größeren Schritt
  erklären, Vorschau zeigen, auf Rückmeldung warten.
- **Nichts raten.** Bei Inhalten, die die Feuerwehrführung oder die Gemeinde
  entscheiden muss (Impressum, Datenschutz, Domain, Fotofreigaben, Ansprechpartner,
  Telefonnummern, rechtliche Texte), klar als
  „Entscheidung durch Feuerwehr/Gemeinde erforderlich" kennzeichnen.
- Code-Kommentare auf **Deutsch**, sie erklären das *Warum*.

## Technische Basis – NICHT ändern

- **Hugo Extended** als Website-Generator (feste Version in `netlify.toml`: HUGO_VERSION).
- **Decap CMS** als Redaktionsoberfläche, Anmeldung über **DecapBridge**.
- **Netlify** als Hoster, **GitHub** als Ablage, Branch **`main`**.
- Build-Befehl: `hugo --minify` · Ausgabeordner: `public`
- **Kein** fremdes Hugo-Theme, **kein** Node/npm-Build, **kein** Tailwind,
  **keine** externen JS-Bibliotheken, **keine** externen Icon-Pakete,
  **keine** Google Fonts, **keine** unnötigen externen Dienste.
- Eigenes Design: `static/assets/style.css` und `static/assets/main.js`.
  JavaScript nur, wo wirklich nötig (aktuell: Aufklappen der Navigation).

## Entscheidung aus Schritt 0b: Anmeldung am Redaktionssystem

**Gewählt: DecapBridge.**

Begründung:
- Redakteurinnen und Redakteure melden sich mit **E-Mail + Passwort** an – ein
  eigenes GitHub-Konto ist **nicht** nötig. Das ist für ehrenamtliche Kräfte wichtig.
- Der bisherige Standard „Git Gateway" ist von Netlify für neue Projekte abgekündigt.
- DecapBridge wird aktiv gepflegt und ist speziell für Decap CMS gebaut.
- Für die Größe dieser Website kostenlos, Einladung nur auf Zuruf (keine Selbstregistrierung).
- Die Inhalte liegen weiterhin als einfache Dateien in GitHub. Ein späterer Wechsel
  des Anmelde-Wegs ist möglich, ohne Inhalte neu zu erstellen (betrifft nur
  `static/admin/config.yml`).

Die konkreten Werte (`repo`, `identity_url` mit Site-ID) werden in Schritt 4
eingetragen, sobald das GitHub- und DecapBridge-Konto der Feuerwehr existieren.

## Wichtige technische Entscheidungen

- **Navigation** wird über `data/seiten.yaml` gepflegt, nicht in den Templates.
  Der Menüpunkt „Einsätze" erzeugt seine Jahres-Unterpunkte automatisch aus den
  vorhandenen Einsatzberichten (`auto: einsatzjahre` in `seiten.yaml`).
- **Einsätze**: je Einsatz ein Ordner unter `content/einsaetze/<datum>-<slug>/`
  (Page Bundle). Steckbrief-Felder im Front Matter, Bericht im Textteil,
  Bilder unter `static/uploads/einsaetze/<slug>/`.
- **Fahrzeuge**: je Fahrzeug ein Ordner unter `content/fahrzeuge/<kuerzel>/`.
  Der `kuerzel` verknüpft Einsatzberichte mit Fahrzeugen (Auswahlfeld im CMS).
- **Zentrale Daten**: `data/personen.yaml` (Ansprechpartner),
  `data/termine.yaml` (nur kommende Termine werden angezeigt),
  `data/fusszeile.yaml` (Fußbereich inkl. Social Media).
- Adressen und Telefonnummern über die Bausteine `layouts/partials/adresse.html`
  und `layouts/partials/telefon.html` ausgeben (geschütztes Leerzeichen zwischen
  Straße und Hausnummer).
- Selbst gezeichnete Symbole in `layouts/partials/social-symbol.html` und
  `layouts/partials/motiv.html` (Vorschaugrafiken je Einsatzart).

## Besondere Regeln für Inhalte

- **Einsatzberichte / Datenschutz**: keine Namen von Betroffenen, keine Hausnummern
  oder Kennzeichen, keine Fotos mit erkennbaren Verletzten/Betroffenen/Kennzeichen,
  Fotos von Einsatzkräften nur mit Einwilligung, keine Angaben zur Einsatzursache
  bei laufenden Ermittlungen. **Kein Live-Einsatzticker.** Diese Hinweise stehen als
  `description` direkt im CMS-Formular der Einsätze.
- **Datensparsamkeit**: keine Cookies, kein Tracking, keine eingebetteten Karten,
  keine Social-Media-Widgets. Bilder werden selbst gehostet. YouTube nur als
  Zwei-Klick-Lösung (Vorschaubild, Laden erst nach Klick).
- **Barrierefreiheit**: WCAG 2.1 AA / BITV 2.0 anstreben – Skip-Link, HTML-Landmarks,
  sichtbarer Fokus, Kontraste, sinnvolle Überschriften, Alt-Texte, `prefers-reduced-motion`,
  Klickflächen ≥ 44 px. Eigene Seite „Barrierefreiheitserklärung".
- **Alle von der alten Website übernommenen Inhalte und Bilder** sind mit
  `uebernommen: true` markiert und auf der Website als „noch zu prüfen" gekennzeichnet.
  Vor dem Live-Gang müssen insbesondere alle Fotos auf DSGVO geprüft werden.

## Architekturregel

Inhalt und Darstellung sind getrennt:
`content/` + `data/` (Inhalte) → `layouts/` (Templates) → `static/assets/` (Design).
Das Layout darf nicht davon abhängen, dass bestimmte Texte fest in HTML stehen.

## Domain

Angestrebt: `feuerwehr.hermaringen.de`. Danach anzupassen:
`baseURL` in `hugo.toml` und `display_url` / `site_url` in `static/admin/config.yml`.

## Vor jeder Arbeitssitzung

`git pull` im Projektordner ausführen (Redaktion und Technik arbeiten beide auf `main`).

## Weitere Dokumentation

- `NOTIZEN-Inhalte.md` – Chronik aller Absprachen und offenen Prüfpunkte
- `README.md` – technische Übersicht für Betreuer (wird noch erstellt)
- `ANLEITUNG-Pflege.md` – Anleitung für die Redaktion (wird noch erstellt)
- `inhalte-alt/` – Rohtexte der alten Website als Übernahme-Grundlage
