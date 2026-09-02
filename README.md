# Website der Freiwilligen Feuerwehr Hermaringen

Technische Übersicht für Betreuerinnen und Betreuer. Für Redaktionsaufgaben
siehe `ANLEITUNG-Pflege.md`, für die Projektregeln `CLAUDE.md`.

## Verwendete Technik

| Baustein | Zweck |
|---|---|
| **Hugo Extended** | Website-Generator (statische Seiten) |
| **Decap CMS** | Redaktionsoberfläche unter `/admin/` |
| **DecapBridge** | Anmeldung der Redaktion (E-Mail + Passwort, kein GitHub-Konto nötig) |
| **GitHub** | Ablage von Code und Inhalten, Branch `main` |
| **Netlify** | Hosting, Build, HTTPS, Weiterleitungen |

- **Hugo-Version:** siehe `HUGO_VERSION` in `netlify.toml` (aktuell 0.165.0).
  Lokal dieselbe Version verwenden.
- Kein Node/npm-Build, kein fremdes Theme, keine externen JS-Bibliotheken,
  keine externen Schriften/Icons, kein Tracking, keine Cookies.

## Projektstruktur

```
content/            Inhalte (Markdown)
  _index.md           Startseite (Kopfbereich, Notruf)
  einsaetze/          je Einsatz ein Ordner <datum>-<slug>/index.md
  aktuelles/          Beiträge
  fahrzeuge/          je Fahrzeug ein Ordner <kuerzel>/index.md
  abteilungen/        Einsatz-, Jugend-, Altersabteilung
  buergerservice/     Übersicht + Themen-Unterseiten
  unsere-feuerwehr/   Ansprechpartner, Geschichte, Feuerwehrhaus
  kontakt.md, impressum.md, datenschutz.md, barrierefreiheit.md
data/
  seiten.yaml        Hauptnavigation
  personen.yaml      Ansprechpartner (zentrale Liste)
  termine.yaml       Termine (nur kommende werden angezeigt)
  fusszeile.yaml     Fußbereich, Kontakt, Social Media
layouts/             Hugo-Templates
  partials/          wiederkehrende Bausteine (Header, Footer, Galerie, ...)
static/
  admin/             Redaktionssystem (index.html + config.yml)
  uploads/           Bilder und PDFs (auch die vom CMS hochgeladenen)
  assets/            style.css, main.js
  _redirects         301-Weiterleitungen von den alten URLs
hugo.toml            Hugo-Konfiguration
netlify.toml         Build-Befehl, Ausgabeordner, Sicherheits-Header
```

## Lokale Entwicklung

```bash
git pull
hugo server
```
Dann <http://localhost:1313> öffnen. Für einen lokalen Test des CMS zusätzlich
`npx decap-server` starten (benötigt Node; `local_backend: true` ist in der
config.yml bereits gesetzt).

## Deployment

Automatisch: Jeder Push nach `main` löst bei Netlify einen Build aus
(`hugo --minify` → Ordner `public`). Kein manueller Schritt nötig.

## Anmeldung am CMS (DecapBridge)

- Backend in `static/admin/config.yml`: `name: git-gateway` mit
  `identity_url: https://auth.decapbridge.com/sites/<SITE-ID>` und
  `gateway_url: https://gateway.decapbridge.com`.
- DecapBridge greift über einen **Fine-grained GitHub-Token** (Contents:
  Read and write, nur dieses Repo) auf das Repository zu. Der Token liegt
  **nur** im DecapBridge-Dashboard, nicht im Repo.
- Redakteure werden im DecapBridge-Dashboard per E-Mail eingeladen
  (Tab „Manage collaborators"). Nur auf Einladung – keine Selbstregistrierung.

### Warum DecapBridge (Entscheidung Schritt 0b)

Ehrenamtliche Redakteure sollen sich mit E-Mail + Passwort anmelden können,
ohne eigenes GitHub-Konto. Der frühere Standard „Git Gateway" ist von Netlify
für neue Projekte abgekündigt. DecapBridge ist aktiv gepflegt, speziell für
Decap CMS, für diese Größe kostenlos. Details in `CLAUDE.md`.

### Wann ein Wechsel nötig werden könnte

- DecapBridge wird eingestellt oder für uns zu teuer.
- Alternative dann: direkte GitHub-Anmeldung (jeder Redakteur braucht ein
  GitHub-Konto) mit einem eigenen OAuth-Vermittler (z. B. Cloudflare Worker),
  oder Sveltia CMS. In allen Fällen bleiben die Inhalte erhalten – nur
  `static/admin/config.yml` und ggf. `static/admin/index.html` ändern sich.

## Backup und Wiederherstellung

- **Der komplette Inhalt liegt als Text- und Bilddateien in Git.** Jeder Klon
  des Repositories ist ein vollständiges Backup.
- Zusätzlich: Netlify hält alte Deploys vor; GitHub hält die gesamte Historie.
- Wiederherstellung = Repository klonen, ggf. auf einen früheren Commit
  zurücksetzen, neu deployen.
- Empfehlung: gelegentlich einen Klon des Repos außerhalb von GitHub sichern.

## Sicherheit

- Sicherheits-Header für alle Seiten in `netlify.toml`
  (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`,
  `Permissions-Policy`).
- `static/admin/` ist per `robots`-Meta auf „noindex".
- GitHub-Token für DecapBridge minimal berechtigen (nur Contents, nur dieses Repo)
  und bei Personalwechsel erneuern.
- Zwei-Faktor-Anmeldung für das GitHub- und das Netlify-Konto der Feuerwehr aktivieren.

## Domain

Angestrebt: `feuerwehr.hermaringen.de` (CNAME auf die Netlify-Adresse, DNS bei
der Gemeinde). Nach dem Umzug anpassen: `baseURL` in `hugo.toml`,
`site_url`/`display_url`/`logo_url` in `static/admin/config.yml`, Login-URL im
DecapBridge-Dashboard.

## Inhalte erweitern

- Neue Einsätze, Beiträge, Fahrzeuge, Bürgerservice-Seiten: über das CMS
  (Knopf „New …"). Dateien landen automatisch am richtigen Ort.
- Neue feste Seite mit eigenem Aufbau: neues Template unter `layouts/` und
  Eintrag in `static/admin/config.yml` nötig – hier ist Technik-Wissen gefragt.
- Menü ändern: `data/seiten.yaml` (auch über das CMS unter „Menü").

## Übernahme von der alten Website

Alles unter `inhalte-alt/` sind Rohtexte der bisherigen Website als
Übernahme-Grundlage. Übernommene Inhalte sind mit `uebernommen: true`
markiert und auf der Website als „noch zu prüfen" gekennzeichnet.
