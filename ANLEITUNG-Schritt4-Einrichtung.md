# Schritt 4 – Website online bringen (Klick-Anleitung)

Diese Anleitung führt dich durch die einmalige Einrichtung von GitHub, Netlify
und der Redaktions-Anmeldung (DecapBridge). Danach ist die Website online und
kann von den Redakteurinnen und Redakteuren gepflegt werden.

**Wichtig:** Für alle Konten eine **dienstliche E-Mail-Adresse der Feuerwehr**
verwenden – nicht deine private und nicht ein Konto der Gemeinde. So bleibt die
Feuerwehr unabhängig.

Zeitbedarf: ca. 45–60 Minuten. Du brauchst: dienstliche E-Mail-Adresse, dieses
Projekt auf deinem Mac, ein Terminal-Fenster.

---

## Teil A – GitHub (Ablage für Website und Inhalte)

### 1. GitHub-Konto der Feuerwehr anlegen
1. Öffne <https://github.com/signup>
2. Melde dich mit der **dienstlichen E-Mail-Adresse** der Feuerwehr an.
3. Benutzername z. B. `feuerwehr-hermaringen`.
4. E-Mail-Adresse bestätigen (Link in der E-Mail anklicken).

### 2. Organisation anlegen (empfohlen)
Eine Organisation trennt die Website vom persönlichen Konto und erlaubt es,
Helfer als Mitglieder aufzunehmen.
1. Oben rechts auf dein Profilbild → **„Your organizations"** → **„New organization"**.
2. Plan: **„Free"** auswählen.
3. Name z. B. `feuerwehr-hermaringen`, Kontakt-E-Mail = dienstliche Adresse.
4. Den nächsten Schritt („Invite members") kannst du überspringen.

### 3. Repository (Projektordner) anlegen
1. Auf der Organisationsseite: **„New repository"** (grüner Knopf).
2. **Repository name:** `website`
3. **Sichtbarkeit:** **Private** (empfohlen – solange Impressum und Datenschutz
   noch Entwürfe sind). Kann später auf „Public" gestellt werden.
4. **KEINE** Häkchen bei „Add a README", „.gitignore", „license" – der Ordner
   hat schon alles.
5. **„Create repository"**.
6. Notiere dir die Adresse, sie sieht so aus:
   `https://github.com/feuerwehr-hermaringen/website`

### 4. Das Projekt zu GitHub hochladen
Öffne das Terminal (⌘ + Leertaste → „Terminal") und gib nacheinander ein
(bei der vorletzten Zeile `feuerwehr-hermaringen/website` ggf. an deinen
tatsächlichen Namen anpassen):

```bash
cd "/Users/marvin/Feuerwehr-Website"
```
```bash
git remote add origin https://github.com/feuerwehr-hermaringen/website.git
```
```bash
git push -u origin main
```

Beim `push` fragt GitHub nach Anmeldedaten. Am einfachsten:
- Wenn ein Fenster „Sign in with your browser" erscheint → darauf klicken und im
  Browser bestätigen.
- Falls stattdessen nach „Username / Password" gefragt wird: Das Passwort ist
  hier **kein** normales Passwort, sondern ein „Personal Access Token". Lege eins
  an unter <https://github.com/settings/tokens> → **„Generate new token (classic)"**,
  Haken bei **`repo`**, Token kopieren und als Passwort einfügen.

Wenn es geklappt hat, siehst du nach kurzer Zeit alle Dateien auf der
GitHub-Repository-Seite.

> **Merke:** Von jetzt an gilt: **Vor jeder Arbeitssitzung** im Terminal
> `git pull` ausführen, damit du die neuesten Änderungen der Redaktion hast.

---

## Teil B – Netlify (Hoster – macht die Website öffentlich erreichbar)

### 5. Netlify-Konto anlegen
1. Öffne <https://app.netlify.com/signup>
2. **„Sign up with GitHub"** wählen und mit dem **Feuerwehr-GitHub-Konto** anmelden.
3. Zugriff bestätigen.

### 6. Website mit dem Repository verbinden
1. In Netlify: **„Add new site"** → **„Import an existing project"**.
2. **„Deploy with GitHub"** → ggf. Zugriff auf die Organisation `feuerwehr-hermaringen`
   erlauben (**„Configure the Netlify app on GitHub"** → Organisation auswählen →
   „Only select repositories" → `website` → Save).
3. Repository **`website`** auswählen.

### 7. Build-Einstellungen prüfen
Netlify liest die Einstellungen aus der Datei `netlify.toml` im Projekt.
Es sollte automatisch angezeigt werden:
- **Build command:** `hugo --minify`
- **Publish directory:** `public`

Falls die Felder leer sind, genau diese beiden Werte eintragen.
Dann **„Deploy website"**.

### 8. Erste Veröffentlichung abwarten
- Nach 1–3 Minuten steht die Website unter einer Adresse wie
  `https://zufallsname-1234.netlify.app`.
- Diese Adresse kannst du unter **„Site configuration" → „Change site name"**
  in etwas Schöneres ändern, z. B. `feuerwehr-hermaringen`
  → `https://feuerwehr-hermaringen.netlify.app`.
- **Notiere dir diese Adresse** – sie wird gleich für DecapBridge gebraucht.

---

## Teil C – DecapBridge (Anmeldung der Redaktion)

DecapBridge erlaubt es den Redakteurinnen und Redakteuren, sich mit
**E-Mail + Passwort** anzumelden – ohne eigenes GitHub-Konto.

### 9. Zugriffs-Token für DecapBridge in GitHub erstellen
DecapBridge braucht die Erlaubnis, in unser Repository zu schreiben.
1. Öffne <https://github.com/settings/personal-access-tokens/new>
   (Feuerwehr-Konto). Das ist ein **„Fine-grained token"**.
2. **Token name:** `DecapBridge`
3. **Expiration:** „No expiration" (oder ein langes Datum – dann rechtzeitig erneuern).
4. **Resource owner:** die Organisation `feuerwehr-hermaringen`.
5. **Repository access:** „Only select repositories" → **`website`**.
6. **Permissions → Repository permissions:**
   - **Contents:** **Read and write**
   - (alles andere auf „No access" lassen)
7. **„Generate token"** und den Token-Text **kopieren** (wird nur einmal angezeigt).

### 10. DecapBridge-Konto anlegen und Website registrieren
1. Öffne <https://decapbridge.com> → **„Sign up"** mit der dienstlichen E-Mail.
2. Im Dashboard: **„Add site"** und ausfüllen:
   - **Git Provider:** GitHub
   - **Git Repository:** `feuerwehr-hermaringen/website`
   - **Git Access Token:** den in Schritt 9 kopierten Token einfügen
   - **Decap CMS Login URL:**
     `https://feuerwehr-hermaringen.netlify.app/admin/index.html`
     (deine Netlify-Adresse aus Schritt 8)
   - **Auth Type:** **„Classic"** (E-Mail + Passwort).
     *(„PKCE" nur wählen, wenn ihr ausschließlich „Anmelden mit Google/Microsoft"
     wollt.)*
3. **„Create site"**.
4. DecapBridge zeigt dir jetzt einen **fertigen `config.yml`-Ausschnitt** an –
   besonders die beiden Zeilen mit `repo:` und `identity_url:` (darin die Site-ID).

### 11. Die zwei Platzhalter in der Konfiguration ersetzen
1. Öffne im Projekt die Datei `static/admin/config.yml` (z. B. mit TextEdit).
2. Ersetze:
   - `<<GITHUB-ORG/REPOSITORY>>` → `feuerwehr-hermaringen/website`
   - `<<DECAPBRIDGE-SITE-ID>>` → die Site-ID aus dem DecapBridge-Ausschnitt
     (die Zeichenfolge in `identity_url: https://auth.decapbridge.com/sites/HIER`).
3. Passe außerdem (vorläufig) diese Zeilen an deine Netlify-Adresse an:
   - `site_url:` und `display_url:` →
     `https://feuerwehr-hermaringen.netlify.app`
   - `logo_url:` →
     `https://feuerwehr-hermaringen.netlify.app/uploads/logo-feuerwehr-hermaringen.png`
   *(Sobald die richtige Domain steht, hier auf `https://feuerwehr.hermaringen.de` ändern.)*
4. Speichern. Dann im Terminal:

```bash
cd "/Users/marvin/Feuerwehr-Website"
```
```bash
git add static/admin/config.yml && git commit -m "CMS-Anmeldung eingerichtet" && git push
```

Netlify veröffentlicht die Änderung automatisch nach 1–2 Minuten.

### 12. Anmeldung testen
1. Öffne `https://feuerwehr-hermaringen.netlify.app/admin/`
2. Es erscheint der DecapBridge-Login. Melde dich mit deinen DecapBridge-Zugangsdaten an.
3. Du solltest jetzt alle Bereiche (Startseite, Einsätze, Aktuelles, …) sehen und
   testweise etwas bearbeiten können.

### 13. Redakteurinnen und Redakteure einladen
1. Im DecapBridge-Dashboard: Tab **„Manage collaborators"**.
2. E-Mail-Adresse einer Kameradin / eines Kameraden eintragen → Einladung senden.
3. Die eingeladene Person bekommt eine E-Mail, setzt ihr Passwort (oder wählt
   „Anmelden mit Google/Microsoft") und kann danach unter `/admin/` mitarbeiten.
4. **Selbstregistrierung:** DecapBridge ist von Haus aus **nur auf Einladung**.
   Es kann sich also niemand ohne deine Einladung anmelden – du musst nichts
   extra deaktivieren.

Collaborators dürfen Inhalte bearbeiten, aber **keine** Benutzer verwalten oder
Einstellungen ändern. Das bleibt bei dir als Konto-Inhaber.

---

## Teil D – Domain feuerwehr.hermaringen.de

Die Wunsch-Adresse ist `feuerwehr.hermaringen.de`. Die Verwaltung der Domain
`hermaringen.de` liegt vermutlich bei der Gemeinde. Du musst dort einen
**DNS-Eintrag** setzen lassen.

### 14. Bei der Gemeinde anfragen
Bitte die Gemeinde bzw. deren IT-Dienstleister um folgenden Eintrag:

> Für die Subdomain **`feuerwehr.hermaringen.de`** bitte einen
> **CNAME-Eintrag** auf **`feuerwehr-hermaringen.netlify.app`** anlegen.
> (Ziel = die Netlify-Adresse aus Schritt 8.)

### 15. Domain in Netlify eintragen
1. In Netlify: **„Domain management" → „Add a domain"** →
   `feuerwehr.hermaringen.de` eingeben.
2. Netlify prüft den DNS-Eintrag und richtet automatisch ein kostenloses
   HTTPS-Zertifikat ein (kann bis zu einer Stunde dauern).

### 16. Adresse im Projekt anpassen
Wenn die Domain funktioniert, im Projekt ändern:
1. `hugo.toml` → `baseURL = "https://feuerwehr.hermaringen.de/"`
   (steht dort schon so – nur prüfen).
2. `static/admin/config.yml` → `site_url`, `display_url`, `logo_url` auf
   `https://feuerwehr.hermaringen.de` umstellen.
3. In DecapBridge (Dashboard → Site → Settings) die **„Decap CMS Login URL"** auf
   `https://feuerwehr.hermaringen.de/admin/index.html` ändern.
4. Änderungen committen und pushen (siehe Schritt 11).

---

## Danach

- Die alten Adressen der bisherigen Website werden automatisch weitergeleitet
  (Datei `static/_redirects`). Trotzdem: nach dem endgültigen Umzug testen, ob
  wichtige alte Links funktionieren.
- **Vor dem „richtig Live gehen"** die offenen Prüfpunkte aus `NOTIZEN-Inhalte.md`
  abarbeiten – besonders die **Datenschutz-Prüfung aller Fotos** und die
  **Freigabe von Impressum und Datenschutz durch die Gemeinde**.
