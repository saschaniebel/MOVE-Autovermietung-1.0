/* ============================================================
   Move Autovermietung — Cookie-Consent & Google Analytics
   DSGVO-konform · Opt-in · Google Consent Mode V2
   ============================================================

   >>> WICHTIG: Tragen Sie hier Ihre GA4-Mess-ID ein <<<
   Sie finden sie in Google Analytics unter:
   Verwaltung → Datenströme → Ihr Web-Datenstrom → "Mess-ID" (Format: G-XXXXXXXXXX)

   Solange hier der Platzhalter steht, wird KEIN Analytics geladen
   (das Banner funktioniert trotzdem vollständig).
   ============================================================ */
(function () {
  'use strict';

  var GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // <-- HIER Ihre GA4-ID eintragen
  var STORAGE_KEY = 'move_consent_v1';
  var GA_READY = GA_MEASUREMENT_ID && GA_MEASUREMENT_ID.indexOf('XXXX') === -1;

  /* ---------- Google Consent Mode V2: Defaults (alles verweigert) ---------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;

  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  gtag('js', new Date());

  /* ---------- Gespeicherte Einwilligung lesen ---------- */
  function readConsent() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)); }
    catch (e) { return null; }
  }
  function saveConsent(obj) {
    obj.ts = new Date().toISOString();
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(obj)); } catch (e) {}
  }

  /* ---------- Google Analytics nachladen (nur nach Einwilligung) ---------- */
  var gaLoaded = false;
  function loadAnalytics() {
    if (!GA_READY || gaLoaded) return;
    gaLoaded = true;
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_MEASUREMENT_ID;
    document.head.appendChild(s);
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }

  function applyConsent(analyticsGranted) {
    gtag('consent', 'update', {
      analytics_storage: analyticsGranted ? 'granted' : 'denied'
    });
    if (analyticsGranted) loadAnalytics();
  }

  /* ---------- Styles ---------- */
  var css = '\
    #move-cc, #move-cc * { box-sizing: border-box; font-family: "Inter", system-ui, -apple-system, sans-serif; }\
    #move-cc { position: fixed; left: 24px; bottom: 24px; z-index: 9999; width: 380px; max-width: calc(100vw - 48px);\
      background: #0f1419; color: #fff; border: 1px solid rgba(255,255,255,0.08); border-left: 3px solid #1c69d4;\
      box-shadow: 0 20px 50px -12px rgba(0,0,0,0.6); padding: 28px; opacity: 0; transform: translateY(16px);\
      transition: opacity .4s cubic-bezier(.16,1,.3,1), transform .4s cubic-bezier(.16,1,.3,1); }\
    #move-cc.in { opacity: 1; transform: translateY(0); }\
    #move-cc .cc-eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #1c69d4; margin-bottom: 12px; }\
    #move-cc h2 { font-size: 18px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 10px; line-height: 1.25; }\
    #move-cc p { font-size: 13px; font-weight: 300; line-height: 1.6; color: #bbbbbb; margin: 0 0 18px; }\
    #move-cc p a { color: #6db3f2; text-decoration: underline; }\
    #move-cc .cc-opts { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }\
    #move-cc .cc-opt { display: flex; align-items: flex-start; gap: 10px; font-size: 13px; color: #e6e6e6; }\
    #move-cc .cc-opt input { margin-top: 3px; accent-color: #1c69d4; width: 16px; height: 16px; cursor: pointer; }\
    #move-cc .cc-opt input:disabled { opacity: .5; cursor: not-allowed; }\
    #move-cc .cc-opt label { cursor: pointer; }\
    #move-cc .cc-opt .cc-opt-desc { display: block; font-size: 11px; font-weight: 300; color: #9a9a9a; margin-top: 2px; }\
    #move-cc .cc-actions { display: flex; flex-direction: column; gap: 8px; }\
    #move-cc .cc-row { display: flex; gap: 8px; }\
    #move-cc .cc-row button { flex: 1; }\
    #move-cc button { font-family: inherit; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;\
      height: 44px; border: none; cursor: pointer; transition: background .2s, border-color .2s, color .2s; }\
    #move-cc .cc-accept { background: #1c69d4; color: #fff; }\
    #move-cc .cc-accept:hover { background: #0653b6; }\
    #move-cc .cc-reject { background: #2a3340; color: #fff; }\
    #move-cc .cc-reject:hover { background: #353f4e; }\
    #move-cc .cc-save { background: transparent; color: #bbbbbb; border: 1px solid rgba(255,255,255,0.25); }\
    #move-cc .cc-save:hover { border-color: rgba(255,255,255,0.6); color: #fff; background: rgba(255,255,255,0.04); }\
    @media (max-width: 480px) { #move-cc { left: 12px; right: 12px; bottom: 12px; width: auto; padding: 22px; } }\
    @media (prefers-reduced-motion: reduce) { #move-cc { transition: none; } }';

  function injectStyle() {
    if (document.getElementById('move-cc-style')) return;
    var st = document.createElement('style');
    st.id = 'move-cc-style';
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ---------- Banner aufbauen ---------- */
  function buildBanner(existing) {
    injectStyle();
    var prev = document.getElementById('move-cc');
    if (prev) prev.remove();

    var analyticsChecked = existing ? !!existing.analytics : false;

    var el = document.createElement('div');
    el.id = 'move-cc';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-label', 'Datenschutz-Einstellungen');
    el.innerHTML = '\
      <div class="cc-eyebrow">Datenschutz</div>\
      <h2>Wir respektieren Ihre Privatsphäre</h2>\
      <p>Wir verwenden Cookies, um unsere Website bereitzustellen und \u2014 mit Ihrer Einwilligung \u2014 anonymisiert auszuwerten. Details in unserer <a href="datenschutz.html">Datenschutzerklärung</a>.</p>\
      <div class="cc-opts">\
        <div class="cc-opt">\
          <input type="checkbox" id="cc-ess" checked disabled />\
          <label for="cc-ess">Notwendig<span class="cc-opt-desc">Für den Betrieb der Website erforderlich. Immer aktiv.</span></label>\
        </div>\
        <div class="cc-opt">\
          <input type="checkbox" id="cc-ana"' + (analyticsChecked ? ' checked' : '') + ' />\
          <label for="cc-ana">Statistik (Google Analytics)<span class="cc-opt-desc">Hilft uns, die Nutzung anonymisiert zu verstehen und die Website zu verbessern.</span></label>\
        </div>\
      </div>\
      <div class="cc-actions">\
        <div class="cc-row">\
          <button class="cc-reject" type="button">Nur notwendige</button>\
          <button class="cc-accept" type="button">Alle akzeptieren</button>\
        </div>\
        <button class="cc-save" type="button">Auswahl speichern</button>\
      </div>';

    document.body.appendChild(el);
    requestAnimationFrame(function () { el.classList.add('in'); });

    var anaBox = el.querySelector('#cc-ana');

    el.querySelector('.cc-accept').addEventListener('click', function () {
      anaBox.checked = true;
      finish(true);
    });
    el.querySelector('.cc-save').addEventListener('click', function () {
      finish(anaBox.checked);
    });
    el.querySelector('.cc-reject').addEventListener('click', function () {
      anaBox.checked = false;
      finish(false);
    });

    function finish(analytics) {
      saveConsent({ analytics: analytics, essential: true });
      applyConsent(analytics);
      el.classList.remove('in');
      setTimeout(function () { el.remove(); }, 400);
    }
  }

  /* ---------- Öffentliche Funktion: Einstellungen erneut öffnen ---------- */
  window.moveCookieSettings = function () {
    buildBanner(readConsent());
  };

  /* ---------- Initialisierung ---------- */
  function init() {
    var consent = readConsent();
    if (consent) {
      // Bereits entschieden — Einwilligung anwenden, kein Banner zeigen
      applyConsent(!!consent.analytics);
    } else {
      // Erstbesuch — Banner zeigen
      buildBanner(null);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
