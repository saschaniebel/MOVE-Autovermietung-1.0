# ============================================================
# Move Autovermietung — Server-Konfiguration (Apache)
# Sicherheits-Header, HTTPS-Erzwingung, Caching, MIME-Typen
# ============================================================
# Diese Datei in das Web-Root-Verzeichnis legen (neben index.html).
# Funktioniert auf Apache-Servern (die meisten Standard-Hoster).
# Für nginx siehe Hinweis am Ende dieser Datei.
# ============================================================

# ----- HTTPS erzwingen (HTTP -> HTTPS Umleitung) -----
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteCond %{HTTPS} off
  RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# ----- Sicherheits-Header -----
<IfModule mod_headers.c>
  # HSTS: erzwingt HTTPS für 2 Jahre (inkl. Subdomains)
  Header always set Strict-Transport-Security "max-age=63072000; includeSubDomains; preload"

  # Verhindert Einbettung der Seite in fremde Frames (Clickjacking-Schutz)
  Header always set X-Frame-Options "DENY"

  # Verhindert MIME-Type-Sniffing
  Header always set X-Content-Type-Options "nosniff"

  # Referrer-Informationen sparsam weitergeben
  Header always set Referrer-Policy "strict-origin-when-cross-origin"

  # Sensible Browser-APIs deaktivieren
  Header always set Permissions-Policy "camera=(), microphone=(), geolocation=(), payment=()"

  # Content-Security-Policy
  # Erlaubt: eigene Domain, Google Analytics (nach Einwilligung), Formspree (Formular)
  Header always set Content-Security-Policy "default-src 'self'; script-src 'self' https://unpkg.com https://www.googletagmanager.com 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; font-src 'self' data:; img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com; connect-src 'self' https://formspree.io https://www.google-analytics.com https://*.google-analytics.com https://www.googletagmanager.com; form-action 'self' https://formspree.io mailto:; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; upgrade-insecure-requests"
</IfModule>

# ----- MIME-Typen (damit .jsx & .woff2 korrekt ausgeliefert werden) -----
<IfModule mod_mime.c>
  AddType application/javascript .jsx
  AddType font/woff2 .woff2
  AddType image/svg+xml .svg
</IfModule>

# ----- Caching (schnellere Ladezeiten) -----
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 week"
  ExpiresByType font/woff2 "access plus 1 year"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType image/svg+xml "access plus 6 months"
  # HTML nicht aggressiv cachen, damit Änderungen schnell sichtbar sind
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# ----- Komprimierung -----
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>

# ----- Verzeichnis-Auflistung deaktivieren -----
Options -Indexes

# ============================================================
# HINWEIS FÜR NGINX-SERVER
# ============================================================
# Falls Ihr Hoster nginx statt Apache verwendet, funktioniert diese
# .htaccess nicht. Geben Sie dem Hoster dann folgende Anweisung:
#
# Bitte folgende Response-Header für alle Seiten setzen:
#   Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
#   X-Frame-Options: DENY
#   X-Content-Type-Options: nosniff
#   Referrer-Policy: strict-origin-when-cross-origin
#   Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()
#   Content-Security-Policy: (siehe Header-Block oben)
# Außerdem HTTP -> HTTPS Weiterleitung (301) aktivieren.
# ============================================================
