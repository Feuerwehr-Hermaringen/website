# Notizen – Inhalte & Entscheidungen

Diese Datei sammelt alle Absprachen zu Inhalten und technischen Entscheidungen,
bevor die Website gebaut wird. Sie ist die gemeinsame Arbeitsgrundlage.

---

## Technische Entscheidungen

### Schritt 0 – Voraussetzungen (2026-09-02)
- Git vorhanden (Version 2.39.5)
- Hugo Extended vorhanden (Version 0.165.0, +extended)
- Es muss nichts installiert werden.

### Schritt 0b – Anmeldung am Redaktionssystem (2026-09-02)
**Entscheidung: DecapBridge**

Begründung:
- Redakteure melden sich mit E-Mail + Passwort an, **kein GitHub-Konto nötig**.
- Der bisherige Standard "Git Gateway" ist von Netlify für neue Projekte abgekündigt.
- DecapBridge wird aktiv gepflegt und ist speziell für Decap CMS gebaut.
- Für unsere Größe kostenlos.
- Einladung nur auf Zuruf (keine Selbstregistrierung).
- Inhalte bleiben als einfache Dateien in GitHub -> späterer Wechsel des
  Login-Wegs ohne Verlust von Inhalten möglich.

Diese Entscheidung wird später auch in `CLAUDE.md` und `README.md` dokumentiert.

---

## Analyse der alten Website (Stand 2026-09-02, feuerwehr-hermaringen.de)

### Vorhandene Navigation (alt)
- **Unsere Feuerwehr:** Aktuelles, Einsätze, Ansprechpartner, Geschichte, Feuerwehrhaus, Berichte
- **Abteilungen:** Einsatzabteilung, Jugendfeuerwehr, Altersabteilung
- **Fahrzeuge:** HLF 20/20, LF 20 KatS, MTW, Dekon-P (Katastrophenschutz Landkreis), Multifunktionsanhänger
- **Bürgerservice:** (eine Seite mit 4 Abschnitten + FAQ)
- **Footer:** Veranstaltungen/Termine, Datenschutz, Impressum
- Suche vorhanden. Cookie-Hinweis vorhanden.
- Keine Social-Media-Links gefunden.

### Ansprechpartner (alt) – BITTE BESTÄTIGEN, ob aktuell
- Steffen Grolik – Kommandant – steffen.grolik@feuerwehr-hermaringen.de
- Lukas Müller – Stellv. Kommandant – lukas.mueller@feuerwehr-hermaringen.de
- Joachim Ott – Stellv. Kommandant – joachim.ott@feuerwehr-hermaringen.de
- Niklas Domes – Jugendfeuerwehrwart – niklasdomes@gmail.com (private Adresse – ggf. auf Vereins-Adresse umstellen)
- Dieter Keck – Vorsitzender Altersabteilung – kein Kontakt angegeben
- Marvin Nauenburg – Öffentlichkeitsarbeit – kein Kontakt angegeben

### Impressum (alt) – ENTSCHEIDUNG FEUERWEHR/GEMEINDE ERFORDERLICH
- Freiwillige Feuerwehr Hermaringen, Kaisheimstr. 10, 89568 Hermaringen
- Tel. 07322-934780
- Verantwortlich: Steffen Grolik, Kommandant
- Hinweis zu unverschlüsselter E-Mail

### Feuerwehrhaus (alt)
- Kaisheimstraße, seit 2000, 4 Stellplätze, Werkstatt, Umkleiden (getrennt m/w),
  Funkraum, Obergeschoss mit Schulungsraum + Küche + Büro, Keller mit Übungsbereich.
- Achtung: Impressum sagt "Kaisheimstr. 10". Geschichte sagt Einweihung 2000. Bitte Adresse final bestätigen.

### Geschichte (alt) – umfangreiche Chronik vorhanden
- Gründung als Pflicht-, ab 1928 Freiwillige Feuerwehr (95 Mitglieder)
- Kommandanten-Chronik ab 1945 (Karl Mannes) bis 2025 (Steffen Grolik gewählt)
- Fahrzeug-Chronik 1950–2021
- Feuerwehrhaus Karlstraße 1965, Neubau/Umbau ab 1998, Einweihung 2000
- Jugendfeuerwehr gegründet 2000, Altersabteilung 2003 (zum 75-jährigen Jubiläum)
- -> Inhalt weitgehend übernehmbar, Jahreszahlen von der alten Seite übernehmen und bestätigen lassen

### Fahrzeuge (alt) – 5 Fahrzeuge, Detailseiten vorhanden
- HLF 20/20, LF 20 KatS, MTW, Dekon-P, Multifunktionsanhänger
- Technische Steckbriefe (Funkrufname, Baujahr, Besatzung ...) noch aus den Detailseiten zu erfassen

### Einsätze (alt)
- Chronologisch (neueste zuerst), aktuell ca. 30 Einsätze, Zeitraum Feb 2022 – Sep 2023 (danach offenbar nicht mehr gepflegt)
- Pro Eintrag: Datum + Uhrzeit, Einsatzart-Kürzel (TH2, BR3 ...), Titel, Einsatzort, Dauer, Anzahl Einsatzkräfte, Alarmstichwort
- Detailseiten je Einsatz vorhanden

### Jugendfeuerwehr (alt)
- Montags ab 18:00 Uhr, Feuerwehrhaus
- Ab 13 Jahren (Versicherung), mit 17 Übertritt in Einsatzabteilung
- Leitung: gewählter Jugendfeuerwehrwart
- "Komm einfach vorbei", alle Geschlechter willkommen

### Bürgerservice (alt) – eine Seite, 4 Blöcke + FAQ
1. Notfall & Verhalten (112, 5 W-Fragen, Verhalten bei Brand/Unwetter/Unfall)
2. Prävention & Sicherheit (Rauchmelder, Feuerlöscher, Löschdecke, Kinder, Landwirtschaft/Gewerbe)
3. Bürgerengagement (Mitmachen aktiv, Jugend ab 13)
4. FAQ (Einsatzkriterien, Kosten, offenes Feuer, Hausnummern, Fehlalarm)
- Kontakt: 07322-934780
- Keine Downloads/PDFs, keine externen Links

### Kinderfeuerwehr
- Auf der alten Website NICHT vorhanden. -> Bitte klären, ob es eine gibt / geplant ist.

### Social Media
- Auf der alten Website keine Links gefunden. -> In der neuen Struktur ist Instagram vorgesehen. Bitte URL(s) nennen.

### Noch zu erfassen (später, vor Schritt 2)
- Einzelne Fahrzeug-Steckbriefe (Detailseiten)
- Einzelne Einsatz-Detailseiten
- Datenschutzerklärung (alt) im Volltext
- "Berichte" und "Aktuelles" – Abgrenzung unklar (zwei getrennte Rubriken?)
- Alle bisherigen URLs für die 301-Weiterleitungen

---

## Inhaltsabstimmung (Schritt 1)

### 1. Startseite

**Begrüßungstext im Hero-Bereich (entschieden 2026-09-02):**
Nur die Überschrift: „Willkommen bei der Freiwilligen Feuerwehr Hermaringen".
Kein zusätzlicher Fließtext.

**Hero-Bild (entschieden 2026-09-02):** Bild der alten Website übernehmen.
- Motiv: Luftaufnahme Feuerwehrhaus mit allen Fahrzeugen davor.
- Quelle: feuerwehr-hermaringen.de/site/assets/files/3532/2022_06_30-hermaringen-ffw-sandrobrezger-0037.jpg
- Original 3000x1149 px, aufgenommen 30.06.2022.
- Dateiname deutet auf Fotograf "Sandro Brezger" hin.
  -> ENTSCHEIDUNG/PRÜFUNG: Sind die Nutzungsrechte an diesem Foto für die neue Website geklärt?
     (Bild wird selbst gehostet unter static/uploads/, kein externer Abruf.)
- Vorerst gesichert im Scratchpad (hero-original.jpg), wird in Schritt 2 nach static/uploads/ übernommen.
- Redakteur kann das Bild später jederzeit im CMS austauschen.

**Notruf-Hinweis auf der Startseite (entschieden 2026-09-02):**
Prominent, ohne Scrollen sichtbar. Text:
„Im Notfall: 112" + die 5 W-Fragen:
- Wo ist es passiert?
- Was ist passiert?
- Wie viele Betroffene / Verletzte?
- Welche Verletzungen / Erkrankungen?
- Warten auf Rückfragen!

**„Neues von der Wehr" / Aktuelles (entschieden 2026-09-02):**
Nur EINE Rubrik „Aktuelles" (die alte Trennung „Aktuelles" / „Berichte" entfällt).
Auf der Startseite Vorschau auf die neuesten Beiträge dieser Rubrik.
Beiträge der alten Rubriken „Aktuelles" und „Berichte" werden bei der Übernahme
zu einer Rubrik zusammengeführt.

**Startseiten-Aufbau final (entschieden 2026-09-02):**
1. Kopfbereich – Logo, Überschrift, Kopfbild
2. Notruf 112 – mit 5 W-Fragen
3. Aktuelle Einsätze – letzte 3 Einsatzberichte
4. Aktuelles – neueste Beiträge
5. Termine – nächste anstehende Termine
Kein „Schnell zu…"-Block, kein extra Mitmachen-Block auf der Startseite.

--> Abschnitt 1 (Startseite) ABGESCHLOSSEN.

**Logo:** Die alte Website nutzt oben ein breites Banner (folie1.jpeg, 1825x281):
links Schriftzug „FEUERWEHR HERMARINGEN" + Hermaringer Wappen, rechts „112 Feuerwehr Notruf".
-> Für die neue Website brauchen wir das Logo möglichst als saubere Einzeldatei
   (am besten SVG oder PNG mit transparentem Hintergrund). Bitte liefern, falls vorhanden.

### Schritt 2 – Baufortschritt

**Schritt 2a (2026-09-02): Grundgerüst steht und läuft lokal.**
- hugo.toml, netlify.toml, .claude/launch.json, .gitignore angelegt.
- data/seiten.yaml (Navigation), data/fusszeile.yaml (Footer).
- Layouts: baseof, index (Startseite mit Hero + Notruf), list, single.
- Partials: head, header (Logo-Platzhalter + Navigation aus seiten.yaml),
  footer, adresse (geschütztes Leerzeichen), telefon, social-symbol (selbst gezeichnet).
- static/assets/style.css (Farb-Entwurf Rot/Grün, responsiv, Barrierefreiheit-Basis),
  static/assets/main.js (nur Menü-Aufklappen).
- 16 Inhalts-Platzhalterseiten, damit die Navigation vollständig funktioniert.
- Kopfbild von alter Website: static/uploads/hero-feuerwehrhaus.jpg (1600x613).
- Logo: Marvin hat am 2026-09-02 eine Logo-Datei geliefert (Schriftzug FEUERWEHR rot /
  HERMARINGEN schwarz + Güssenburg-Ruine grau + Hermaringer Wappen grün, quadratisch,
  cremeweißer Hintergrund, wirkt teils KI-generiert). Muss noch zugeschnitten/optimiert werden
  -> Ablage Quelle: static/uploads/logo-original.png, verarbeitet: static/uploads/logo-feuerwehr-hermaringen.png
  Header nutzt automatisch logo-feuerwehr-hermaringen.svg bzw. .png, sobald vorhanden.
- Notruf-Block auf Wunsch von Marvin dezenter gestaltet (heller Kasten mit rotem Balken
  statt vollflächig roter Leiste).
- Logo verarbeitet (2026-09-02): Quelldatei war "ChatGPT Image ... .PNG" (1024x1024).
  -> static/uploads/logo-original.png (Quelle, unverändert)
  -> static/uploads/logo-feuerwehr-hermaringen.png (Rand entfernt, Hintergrund transparent,
     zugeschnitten 885x583, ~287 KB). Skript: scratchpad/logo_process.py (nur Python-Standardbib).
  Header bindet es automatisch ein.
  HINWEIS: Logo ist KI-generiert; Komposition (Ruine oben, Text unten, Wappen rechts) ist
  fürs Kopf-Layout nicht ideal (wirkt klein). Empfehlung weiterhin: echtes Logo, am besten
  als Vektor (SVG), und dann als querformatige Variante fürs Menü.
- `hugo --minify` baut fehlerfrei. Lokale Vorschau: `hugo server` (Port 1313).

**Schritt 2a-2 (2026-09-02): Farbiger Design-Durchgang** (Marvin: "zu langweilig, mehr Farbe").
- Warmer Creme-Seitenhintergrund statt reinweiß.
- Kopf: mehrfarbiger Verlaufsstreifen oben (rot -> grün), Navigation mit rotem Aktiv-/Hover-Zustand.
- Hero: warmer Rot-Verlauf über dem Bild, roter Akzentbalken unter der Überschrift.
- Farbige Abschnitts-Bänder eingeführt (.band--creme / --sand / --rot / --gruen) für Rhythmus.
- Kachel-Bausteine (.kachel) mit farbigem oberen Rand (abwechselnd rot/grün), sanfter Schatten + Hover.
- Notruf-Kasten: warm rosé statt grau, weiterhin dezent.
- Textseiten als weiße Karten mit rotem Überschriften-Unterstrich.
- Fußbereich: roter Oberkante-Balken, grüne Unterstriche an Überschriften, "112" rot hervorgehoben.
- Mobile-Umbruch der Navigation auf 56rem gesetzt.
- Startseiten-Blöcke Einsätze/Aktuelles/Termine sind aktuell BEISPIEL-Inhalt (Design-Vorschau).

Logo bleibt KI-Grafik (Empfehlung: später echtes SVG, Querformat).

**Schritt 2b (2026-09-02): Echte Daten angebunden.**
- data/fahrzeuge.yaml (5 Fahrzeuge, Steckbriefe aus alter Website – ZU PRÜFEN)
- data/personen.yaml (6 Ansprechpartner – ZU PRÜFEN, Marvin-Mail = presse@…)
- data/termine.yaml (2 BEISPIEL-Termine – durch echte ersetzen)
- Einsätze: Seitentyp mit Jahres-Gruppierung. 4 Einsätze aus 2023 übernommen
  (Gefahrguteinsatz groß, Dachstuhlbrand, Nachtübung 2023, Chlorgasalarm Schwimmbad).
  Einsatz-Detailseite mit Steckbrief (Nummer, Datum, Alarmzeit, Einsatzende, Art, Ort,
  Fahrzeuge – Fahrzeugnamen werden aus data/fahrzeuge.yaml aufgelöst) + Galerie + "zu prüfen"-Hinweis.
  Menüpunkt "Einsätze" erzeugt Jahres-Unterpunkte AUTOMATISCH aus den vorhandenen Berichten.
- Aktuelles: Seitentyp Liste + Detail. 3 Beiträge übernommen
  (Maibaumfest 2026, Gemeinsam im Einsatz 2026, Hauptübung 2025).
- Startseite: "Aktuelle Einsätze" (letzte 3), "Aktuelles" (letzte 3), "Nächste Termine"
  (aus data/termine.yaml, nur kommende) sind mit echten Daten verbunden.
- Partials: galerie.html, termine.html, fahrzeug-namen.html.

WICHTIG korrigiert: Bürgermeister ist seit 15.04.2026 **Schmeißer** (Vorgänger: Mailänder).

**Schritt 2b-2 (2026-09-02): Startseite überarbeitet** (Wunsch Marvin).
- Kacheln "Aktuelle Einsätze" + "Aktuelles" haben jetzt ein Motiv-Bild oben:
  entweder Vorschaubild (falls gesetzt) oder eine selbst gezeichnete Farbgrafik je Einsatzart
  (Brand=rot/Flamme, Gefahrgut=gelb/Warndreieck, Übung=grün/Kegel, Technische Hilfe=grau,
  Beitrag=grün/Megafon). Partial: layouts/partials/motiv.html.
- 5 W-Fragen: neu als 5 nummerierte Schritt-Kärtchen (1 Wo, 2 Was, 3 Wie viele, 4 Welche,
  5 Warten) – Reihenfolge jetzt eindeutig. Notruf-Kasten mit "112"-Badge, weiß statt rosa.
- Hero-Filter deutlich reduziert: nur noch sanfter Verlauf am unteren Bildrand, Bild bleibt sichtbar.

**Schritt 2b-3 (2026-09-02): Notruf besser integriert** (Wunsch Marvin).
- Statt großem Kasten unter dem Titelbild jetzt zweiteilig:
  1. schmale rote Leiste direkt unter dem Hero ("112 – Feuerwehr-Notruf, im Notfall sofort anrufen")
     -> erfüllt "prominent, ohne Scrollen sichtbar" (Projektanweisung Abschn. 29) für die NUMMER.
  2. kompakte Notruf-Karte in der rechten Spalte neben "Aktuelle Einsätze"
     mit nummerierter 1-5-Liste der W-Fragen. Auf dem Handy rückt sie unter die Einsatz-Kacheln.
- TRADEOFF: die W-Fragen-DETAILS sind auf dem Handy erst nach etwas Scrollen sichtbar
  (die Notrufnummer selbst bleibt aber sofort sichtbar). Mit Marvin so abgestimmt.

**Schritt 2c (2026-09-02): Vollständige Übernahme aller Inhalte + Bilder der alten Website.**
Grundlage: Sitemap der alten Website (122 URLs).

- **Einsätze: ALLE 81** übernommen (2022, 2023, 2025, 2026 – die alte Website hatte weit mehr
  als die anfangs vermuteten 29!). Skript-Import mit Steckbrief-Feldern + Berichtstext + Galerie.
  Bilder heruntergeladen und verkleinert (25 MB). Ordner: content/einsaetze/<datum>-<slug>/.
  KORREKTUR: Einsatz 09/25 war auf der alten Seite falsch mit 2024 datiert -> auf 2025 korrigiert.
  4 Alt-Einsätze (2022) hatten keine Einsatzart -> sinnvoll ergänzt.
- **Aktuelles: alle 6 Beiträge** (Aktuelles + Berichte zusammengeführt) mit Bildern (8 MB).
- **Fahrzeuge: alle 5** als Inhaltsseiten (content/fahrzeuge/<kuerzel>/) mit Steckbrief,
  Beschreibung, Titelbild + Galerie (Studio- und Realfotos, 9 MB). data/fahrzeuge.yaml entfällt.
- **Ansprechpartner**-Seite (aus data/personen.yaml, Foto optional/kein Platzhalter).
- **Abteilungen** (3) mit Texten der alten Seite; Jugendfeuerwehr mit 13-Bilder-Galerie (3,6 MB)
  + Übungszeit + Ansprechpartner. Einsatzabteilung/Altersabteilung: keine Bilder auf alter Seite.
- **Geschichte**: Chronik 1928–2025 als Jahresliste + Einleitungstext.
- **Feuerwehrhaus**: Text der alten Seite + Adresse/Anfahrt. Keine Bilder auf alter Seite.
- **Bürgerservice**: Kachel-Übersicht + 5 Unterseiten (Notruf & Verhalten, Brandschutz zu Hause,
  Rauchmelder, Feuerlöscher, Häufige Fragen).
- **Kontakt**-Seite (Anschrift, Telefon, E-Mail, Notruf, „In Karten öffnen"-Link ohne Einbettung).
- **Pflicht-ENTWÜRFE**: Impressum, Datenschutz, Barrierefreiheitserklärung – jeweils klar als
  „ENTWURF – von Gemeinde/Datenschutzbeauftragtem zu prüfen" markiert.
- **301-Weiterleitungen**: static/_redirects (110 Einträge) – alle alten Einsatz-, Fahrzeug-,
  Beitrags- und Ansprechpartner-URLs zeigen auf die neuen Adressen.

Bekannt: Bürgermeister = **Schmeißer** (seit 15.04.2026), Vorgänger Mailänder.
Neue Info: Werkfeuerwehr BSH Giengen; Gefahrgutzug Landkreis Heidenheim; DRK/HvO Hermaringen.

### !!! WICHTIG – VOR DEM LIVE-GANG PRÜFEN (DSGVO / Rechte) !!!
- **Alle übernommenen Fotos** (Einsätze, Jugendfeuerwehr, Veranstaltungen) müssen auf DSGVO
  geprüft werden: keine erkennbaren Betroffenen/Verletzten, keine fremden Kfz-Kennzeichen,
  Fotos von (minderjährigen) Mitgliedern nur mit Einwilligung. Die alte Website hatte diese
  Bilder zwar schon öffentlich – die Verantwortung muss aber neu bestätigt werden.
- Einsatzberichte-Texte: teils Tippfehler/uneinheitliche Formulierungen aus der alten Seite
  wörtlich übernommen. Bei Gelegenheit redaktionell glätten.
- Alle Einsatz-Steckbriefdaten, Fahrzeugdaten, Chronik, Ansprechpartner: von Feuerwehr bestätigen.
- Impressum/Datenschutz/Barrierefreiheit: NICHT ohne Freigabe der Gemeinde live schalten.

**Schritt 2c-2 (2026-09-02): Kopfbilder für Unterseiten.**
Die alte Website hatte auf vielen Seiten ein breites Kopfbild (als CSS-Hintergrund, daher
zunächst übersehen). Übernommen als Kopfband mit Titel-Overlay:
- Einsatzabteilung: Gruppenfoto der Abteilung (Nacht) – GESICHTER erkennbar -> DSGVO prüfen!
- Altersabteilung: Foto vom 15.12.2025
- Jugendfeuerwehr: Gruppenfoto
- Feuerwehrhaus: Foto des Gebäudes (niedrige Auflösung, ggf. später ersetzen)
Partial: layouts/partials/seiten-hero.html. Geschichte-Kopfbild war nur eine Textgrafik -> verworfen.

--> Schritt 2c ABGESCHLOSSEN.

---

## Schritt 3 – Redaktionssystem (Decap CMS) – 2026-09-02

- `static/admin/index.html` + `static/admin/config.yml` angelegt.
- Backend: **DecapBridge** (name: git-gateway + identity_url auth.decapbridge.com +
  gateway_url gateway.decapbridge.com). Platzhalter `<<GITHUB-ORG/REPOSITORY>>` und
  `<<DECAPBRIDGE-SITE-ID>>` – werden in Schritt 4 eingetragen.
- Deutsche Oberfläche (`locale: de`), `publish_mode: simple` (kein editorial_workflow),
  `local_backend: true` fürs lokale Testen mit `npx decap-server`.
- 11 Sammlungen mit deutschen Feldbeschriftungen als Fragen + Hinweistexten:
  Startseite, Einsätze, Aktuelles, Fahrzeuge, Abteilungen, Bürgerservice,
  Einzelseiten (Geschichte/Feuerwehrhaus/Kontakt/Impressum/Datenschutz/Barrierefreiheit),
  Personen, Termine, Menü, Fußbereich.
- Einsatz-Formular: Datenschutz-Hinweise als `description` direkt im Editor.
  Einsatzart + Termin-Kategorie + Social-Netzwerk als Auswahlfelder.
  Fahrzeuge im Einsatz als Auswahl (relation auf Fahrzeug-Sammlung, value_field: kuerzel).
- `kuerzel`-Feld zu allen 5 Fahrzeug-Dateien ergänzt; fahrzeug-namen.html erkennt beide Wege.
- Config lädt fehlerfrei; DecapBridge-Login (E-Mail + Passwort) wird angezeigt.
  Vollständiger Test der Sammlungen erst nach Schritt 4 möglich (echtes Repo + Site-ID nötig).
- **CLAUDE.md** angelegt (Projektregeln + Schritt-0b-Entscheidung, Abschnitt 34 der Projektanweisung).

Offen: README.md und ANLEITUNG-Pflege.md (nach Schritt 4 / wenn die Seite fertig ist).

--> Schritt 3 ABGESCHLOSSEN. Nächster Schritt: 4 (GitHub- und Netlify-Konto, Verbindung, Klick-Anleitung).

---

### 2. Unsere Feuerwehr

**Ansprechpartner (Stand 2026-09-02):**

Sichtbare Felder pro Person: **Name, Funktion, E-Mail**.
Foto pro Person ist optional. Wenn kein Foto hochgeladen wird, wird
KEIN Platzhalterbild angezeigt, sondern gar nichts (Layout ohne Bild).
-> personen.yaml: Feld `foto` optional; Template zeigt Bildbereich nur, wenn `foto` gesetzt ist.

Personenliste:
| Name | Funktion | E-Mail |
|---|---|---|
| Steffen Grolik | Kommandant | steffen.grolik@feuerwehr-hermaringen.de |
| Lukas Müller | Stellv. Kommandant | lukas.mueller@feuerwehr-hermaringen.de |
| Joachim Ott | Stellv. Kommandant | joachim.ott@feuerwehr-hermaringen.de |
| Niklas Domes | Jugendfeuerwehrwart | niklasdomes@gmail.com  (ggf. auf @feuerwehr-hermaringen.de ändern – OFFEN) |
| Dieter Keck | Vorsitzender Altersabteilung | (keine – OFFEN, welche E-Mail?) |
| Marvin Nauenburg | Öffentlichkeitsarbeit | presse@feuerwehr-hermaringen.de  (NEU, geändert 2026-09-02) |

OFFEN / noch klären (Marvin: "später klären"):
- Ist die Liste vollständig? (Kassier, Schriftführer, Gerätewart, Leitung Kinderfeuerwehr?)
- E-Mail-Adresse Niklas Domes (privat -> dienstlich?)
- E-Mail-Adresse Dieter Keck (aktuell keine)
- Alle Angaben durch Feuerwehrführung bestätigen lassen.

**Anforderung Redaktion:** Personen (Name, Funktion, E-Mail, optionales Foto) müssen
später komplett über das CMS anlegbar / änderbar / löschbar sein.
-> data/personen.yaml als Liste, im CMS als wiederholbare Einträge ("Liste") gepflegt.
-> Reihenfolge im CMS per Drag&Drop änderbar.
-> Funktion möglichst als Freitext ODER Auswahlliste (noch zu entscheiden in Schritt 3).

**Geschichte (entschieden 2026-09-02):**
- Inhalt der alten Website 1:1 übernehmen (durchgehender Text mit Zwischenüberschriften),
  Marvin/Feuerwehr prüft ihn danach auf Richtigkeit.
- Zusätzlich optional ein kleiner Zeitstrahl "für die Optik" (Auswahl der wichtigsten Jahre).
- Rohtext gesichert in inhalte-alt/geschichte.md (Jahr-für-Jahr-Chronik 1928–2025).
- Klären: Bezeichnung "LF 20/20" vs. "LF 20 KatS" vereinheitlichen; Chronik ab 2025 aktuell?

**Feuerwehrhaus (entschieden 2026-09-02):**
- Beschreibungstext der alten Website übernehmen (gesichert in inhalte-alt/feuerwehrhaus.md),
  danach von Feuerwehr prüfen lassen.
- Adresse BESTÄTIGT: Kaisheimstraße 10, 89568 Hermaringen.
- Adresse + Anfahrt auf der Seite anzeigen.
  Anfahrt = Textbeschreibung + ggf. Link "In Karten öffnen" (öffnet erst nach Klick extern,
  KEINE eingebettete Karte -> DSGVO).
- Foto-Galerie vorsehen (über CMS pflegbar, ohne Foto wird nichts angezeigt).
- ZUSÄTZLICH später möglich: virtuelle Rundgang / Roomtour einbinden.
  WICHTIG: Falls das ein externer Dienst ist (z. B. 360°-Tour-Anbieter),
  nur als Zwei-Klick-Lösung (erst Vorschaubild, Laden erst nach Klick).
  Am besten selbst gehostete Panoramen. -> Vormerken für "spätere Funktionen".

**Rubrik "Aktuelles" (entschieden 2026-09-02):**
- Alte Beiträge aus "Aktuelles" UND "Berichte" übernehmen und in eine Rubrik "Aktuelles" zusammenführen.
- Gefundene Beiträge (Volltext vor Schritt 2 noch zu holen):
  - Maibaumfest 2026 (04.05.2026)
  - Gemeinsam im Einsatz für unsere Gemeinde (20.04.2026)
  - Hauptversammlung 2026 (28.01.2026)
  - Einsatzstatistik 2025 (15.01.2026)
  - 25 Jahre Jugendfeuerwehr Hermaringen (15.12.2025)
  - Hauptübung 2025 (29.10.2025)
  (evtl. weitere über Blätterfunktion – noch prüfen)
- Jeder Beitrag: Titel, Datum, Text, optional Bild(er).

**Menüpunkt "Unsere Feuerwehr" (entschieden 2026-09-02):**
- Nur Aufklappmenü / Navigationsgruppe, KEINE eigene Übersichtsseite mit Inhalt.
- (Gleiche Frage später noch für "Abteilungen" und "Einsätze".)

--> Abschnitt 2 (Unsere Feuerwehr) ABGESCHLOSSEN.

### 3. Abteilungen (entschieden 2026-09-02)

- **Keine Kinderfeuerwehr** – Menüpunkt entfällt komplett.
- Abteilungen: Einsatzabteilung, Jugendfeuerwehr, Altersabteilung.
- Texte der alten Website übernehmen (inhalte-alt/abteilungen.md), danach von Feuerwehr prüfen.
- Jede Abteilungsseite bekommt zusätzlich:
  - Bildergalerie (über CMS pflegbar; ohne Bilder wird nichts angezeigt)
  - sichtbarer Ansprechpartner (Name + E-Mail der Leitung) – idealerweise Verweis auf data/personen.yaml
- Menüpunkt "Abteilungen" = nur Aufklappmenü, keine eigene Inhaltsseite.
- Übungszeit Jugendfeuerwehr: Montags ab 18:00 Uhr (aus alter Seite).

--> Abschnitt 3 ABGESCHLOSSEN.

### 4. Fahrzeuge (entschieden 2026-09-02)

- 5 Fahrzeuge (Reihenfolge wie alt): HLF 20/20, LF 20 KatS, MTW, Dekon-P, Multifunktionsanhänger.
- Übersichtsseite: alle Fahrzeuge mit Vorschaubild + Bezeichnung.
- Detailseite je Fahrzeug: großes Titelbild, technischer Steckbrief, Beschreibung, Galerie.
- **Steckbrief = freie Liste aus Zeilen "Merkmal + Wert"** (im CMS beliebig hinzufügen/
  ändern/löschen/sortieren). KEIN festes Formular.
- Fahrzeugdaten aus inhalte-alt/fahrzeuge.md übernehmen, von Feuerwehr prüfen lassen.
- Multifunktionsanhänger: alte Detailseite leer -> Text + Daten von Feuerwehr nötig.
- data/fahrzeuge.yaml als zentrale Quelle (Einsatzberichte greifen per Auswahlliste darauf zu).
- Fotos pro Fahrzeug: Titelbild + Galerie, über CMS pflegbar.

--> Abschnitt 4 ABGESCHLOSSEN.

### 5. Einsätze (entschieden 2026-09-02)

- **Alte 29 Einsätze (2022/2023) werden übernommen** (ins Archiv), so weit die Altdaten reichen.
  Fehlende Angaben bleiben einfach leer.
- **Keine Pflichtfelder** – kein Feld muss ausgefüllt sein, um einen Bericht zu veröffentlichen.
- Felder pro Einsatzbericht (alle optional, auch bei neuen Berichten):
  - Einsatznummer (z. B. 27/26)
  - Datum
  - Alarmzeit
  - Einsatzende
  - Einsatzart
  - Einsatzort
  - Einsatzfahrzeuge (Auswahl aus data/fahrzeuge.yaml)
  - Einsatzbericht (Freitext / Rich-Text)
  - Vorschaubild
  - Bildergalerie
  - (Titel des Einsatzes)
- Jahresstruktur: "Einsätze Archiv" + je Jahr eine Seite (2025, 2026, ...), später leicht erweiterbar.
- Übersicht chronologisch, neueste zuerst.
- Startseite zeigt die letzten 3 Einsätze.
- KEIN Live-Ticker; Veröffentlichung erst nach dem Einsatz.
- Datenschutz-Hinweise direkt im CMS-Formular sichtbar (siehe Projektanweisung Abschnitt 22).
- Alte URLs /unsere-feuerwehr/archiv/einsaetze/<slug>/ -> 301 auf neue Struktur.
- Volltext/Bilder der 29 Alt-Einsätze vor Schritt 2 noch zu holen.

--> Abschnitt 5 ABGESCHLOSSEN.

### 6. Termine (entschieden 2026-09-02)

- Zentrale Pflege in data/termine.yaml, über CMS als Liste.
- Felder pro Termin (nur Titel + Datum sinnvoll nötig, Rest optional):
  Titel, Datum, Uhrzeit, Ort, Kurzbeschreibung, Kategorie (Auswahl: Übung / Versammlung / Fest / Sonstiges)
- Nur KOMMENDE Termine anzeigen. Abgelaufene Termine verschwinden automatisch.
- KEIN Rückblick / Archiv für alte Termine.
- Startseite zeigt die nächsten Termine kompakt.

--> Abschnitt 6 ABGESCHLOSSEN.

### 7. Bürgerservice (entschieden 2026-09-02)

- Bürgerservice-Übersichtsseite mit KACHELN, dahinter je Thema eine eigene Unterseite.
- Unterseiten später im CMS frei anlegbar/erweiterbar (gleiche redaktionelle Möglichkeiten wie andere Seiten).
- Bestehende Texte 1:1 übernehmen (inhalte-alt/buergerservice.md), danach von Feuerwehr prüfen.
  Vorschlag Startaufteilung in Kacheln:
  - Notruf & Verhalten (5 W-Fragen, Verhalten bei Brand/Unwetter/Unfall)
  - Brandschutz zu Hause (Haushalt, Landwirte & Betriebe, Kinder)
  - Rauchmelder
  - Feuerlöscher & Löschdecke
  - FAQ
  (endgültige Kachel-Aufteilung mit Marvin final abstimmen)
- "Mitmachen": KEINE eigene Seite (weicht bewusst von Projektanweisung Abschnitt 26 ab).
  Die Mitmach-Infos (Block "Bürgerengagement") bleiben Teil des Bürgerservice.
- Kontakt-E-Mail auf alter Seite: kommandant@feuerwehr-hermaringen.de (klären, welche Adresse öffentlich).

--> Abschnitt 7 ABGESCHLOSSEN.

### 8. Kontakt (entschieden 2026-09-02)

- Eigene Seite "Kontakt" mit:
  - Anschrift: Feuerwehrhaus Hermaringen, Kaisheimstraße 10, 89568 Hermaringen
  - Telefon (Festnetz Feuerwehr): 07322-934780 (bestätigen)
  - Allgemeine E-Mail: kommandant@feuerwehr-hermaringen.de
  - Hinweis "Im Notfall immer 112"
  - Anfahrtsbeschreibung + Link "In Karten öffnen" (öffnet erst nach Klick extern, keine eingebettete Karte)
- Kontaktformular = spätere Funktion. Vorerst nur Kontaktdaten anzeigen.
- Telefonnummer/Adresse über gemeinsame Partials ausgeben (layouts/partials/), geschütztes
  Leerzeichen zwischen Straße und Hausnummer.

--> Abschnitt 8 ABGESCHLOSSEN.

### 9. Downloads (entschieden 2026-09-02)

- KEIN eigener Menüpunkt "Downloads".
- PDFs / Dokumente werden pro Seite eingefügt (über CMS, Ablage static/uploads/).
- Jede Seite / jeder Beitrag kann einen Bereich "Downloads" (Liste aus Datei + Bezeichnung) haben;
  ohne Einträge wird nichts angezeigt.
- Falls später viele Dokumente zusammenkommen: eigene Download-Seite nachrüsten.
- Auf der alten Website gab es keine Downloads/PDFs.

--> Abschnitt 9 ABGESCHLOSSEN.

### 10. Social Media (entschieden 2026-09-02)

- Instagram vorhanden: https://www.instagram.com/feuerwehr_hermaringen/
- Footer-Bereich "Social Media" als LISTE (Plattform-Name + URL) über data/fusszeile.yaml,
  im CMS erweiterbar. Start mit Instagram.
- Nur einfache Links, KEINE eingebetteten Social-Media-Widgets.
- Icons selbst gezeichnet (kein externes Icon-Paket).

--> Abschnitt 10 ABGESCHLOSSEN.

### 11. Pflichtseiten (entschieden 2026-09-02)

- Claude bereitet ENTWÜRFE für alle drei Seiten vor (Impressum, Datenschutz, Barrierefreiheitserklärung).
  Jeder Entwurf klar gekennzeichnet: "ENTWURF – muss von Gemeinde / Datenschutzbeauftragtem
  geprüft und freigegeben werden."
- Datenschutz-Entwurf passend zur datensparsamen Technik: keine Cookies, kein Tracking,
  Hosting Netlify (US-Anbieter -> Hinweis nötig), Login via DecapBridge (nur Redakteure),
  spätere Funktionen (Kontaktformular Netlify Forms, Volltextsuche) vormerken.
- **OFFEN / ENTSCHEIDUNG GEMEINDE:** Wer ist rechtlich verantwortlicher Betreiber der Website –
  Gemeinde Hermaringen oder Freiwillige Feuerwehr Hermaringen? -> in den Entwürfen als
  Platzhalter markieren.
- Rohtexte/Checklisten in inhalte-alt/pflichtseiten.md.
- Diese Seiten NICHT ohne Freigabe live schalten.

--> Abschnitt 11 ABGESCHLOSSEN (Inhaltsabstimmung Schritt 1 komplett).
