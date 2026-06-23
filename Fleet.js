/* App.jsx — compiled, do not edit (edit the .jsx source) */
(function(){
"use strict";
// Move Autovermietung — Hero, Standorte, Footer & App

const {
  useState,
  useEffect,
  useRef
} = React;

// Reveal-on-scroll hook
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('in');
        io.disconnect();
      }
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}
function Reveal({
  children,
  delay = 0,
  as: Tag = 'div',
  style,
  ...rest
}) {
  const ref = useReveal();
  const cls = `reveal${delay ? ` reveal-d${delay}` : ''}${rest.className ? ' ' + rest.className : ''}`;
  return /*#__PURE__*/React.createElement(Tag, {
    ref: ref,
    className: cls,
    style: style
  }, children);
}
function IconMapPin() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }));
}
function IconMail() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "22,6 12,13 2,6"
  }));
}
function IconPhone2() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"
  }));
}
function HeroSection({
  onScrollToFleet
}) {
  const [parallax, setParallax] = useState(0);
  useEffect(() => {
    const onScroll = () => setParallax(Math.min(window.scrollY * 0.15, 80));
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    className: "sec-pad hero-sec",
    style: {
      background: '#0f1419',
      minHeight: '94vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 40px 80px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.05,
      backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
      backgroundSize: '80px 80px',
      transform: `translateY(${parallax * 0.4}px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      right: '-10%',
      width: 700,
      height: 700,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(28,105,212,0.18) 0%, transparent 65%)',
      transform: `translateY(${-parallax * 0.3}px)`
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '-30%',
      left: '-10%',
      width: 500,
      height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(28,105,212,0.10) 0%, transparent 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "hero-accent",
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: 4,
      background: 'linear-gradient(180deg, #1c69d4 0%, #0653b6 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 60,
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 620
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-eyebrow",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: '#1c69d4',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 1,
      background: '#1c69d4'
    }
  }), "Autorisierter BMW-Partner \xB7 Niederrhein"), /*#__PURE__*/React.createElement("h1", {
    className: "hero-title",
    style: {
      fontSize: 'clamp(44px,5.4vw,80px)',
      fontWeight: 700,
      lineHeight: 1.02,
      color: '#ffffff',
      marginBottom: 28,
      letterSpacing: '-0.02em'
    }
  }, "Premium fahren.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1c69d4'
    }
  }, "Flexibel"), " mieten."), /*#__PURE__*/React.createElement("p", {
    className: "hero-sub",
    style: {
      fontSize: 17,
      fontWeight: 300,
      lineHeight: 1.65,
      color: '#bbbbbb',
      marginBottom: 44,
      maxWidth: 520
    }
  }, "Aktuelle BMW- und MINI-Modelle f\xFCr einen Tag, ein Wochenende oder mehrere Monate. Direkt vom autorisierten H\xE4ndler \u2014 gepflegt, voll ausgestattet und sofort verf\xFCgbar."), /*#__PURE__*/React.createElement("div", {
    className: "hero-cta",
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onScrollToFleet,
    className: "cta-primary",
    style: {
      height: 56,
      padding: '0 40px',
      background: '#1c69d4',
      color: '#fff',
      border: 'none',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '1px',
      cursor: 'pointer',
      transition: 'background 0.2s, transform 0.2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.background = '#0653b6';
      e.currentTarget.style.transform = 'translateY(-2px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.background = '#1c69d4';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, "FAHRZEUGE ENTDECKEN \u203A"), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      const el = document.querySelector('#standorte');
      if (el) {
        window.scrollTo({
          top: el.getBoundingClientRect().top + window.scrollY - 64,
          behavior: 'smooth'
        });
      }
    },
    style: {
      height: 56,
      padding: '0 36px',
      background: 'transparent',
      color: '#ffffff',
      border: '1px solid rgba(255,255,255,0.25)',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '1px',
      cursor: 'pointer',
      transition: 'border-color 0.2s, background 0.2s'
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.6)';
      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)';
      e.currentTarget.style.background = 'transparent';
    }
  }, "STANDORTE ANSEHEN")), /*#__PURE__*/React.createElement("div", {
    className: "hero-stats hero-stats-row",
    style: {
      display: 'flex',
      gap: 56,
      marginTop: 64,
      paddingTop: 44,
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, [['4', 'Standorte am Niederrhein'], ['30+', 'Aktuelle Fahrzeuge']].map(([val, label]) => /*#__PURE__*/React.createElement("div", {
    key: label
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: '#ffffff',
      lineHeight: 1,
      letterSpacing: '-0.02em'
    }
  }, val), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 300,
      color: '#9a9a9a',
      marginTop: 8,
      letterSpacing: '0.5px',
      maxWidth: 140
    }
  }, label))))), /*#__PURE__*/React.createElement("div", {
    className: "hero-card hero-visual",
    style: {
      flex: '0 0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.06)',
      backdropFilter: 'blur(8px)',
      padding: 36,
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#1c69d4',
      paddingBottom: 16,
      borderBottom: '1px solid rgba(255,255,255,0.06)'
    }
  }, "Tagespreise"), [{
    cat: 'Limousine',
    price: 'ab 69 €/Tag',
    img: 'assets/cars/bmw-3er.webp',
    scale: 1.5
  }, {
    cat: 'SUV',
    price: 'ab 79 €/Tag',
    img: 'assets/cars/bmw-x3.webp',
    scale: 1.20
  }, {
    cat: 'Transporter',
    price: 'ab 89 €/Tag',
    img: 'assets/cars/transporter.webp',
    scale: 1.10
  }, {
    cat: '9-Sitzer',
    price: 'ab 119 €/Tag',
    img: 'assets/cars/9-sitzer.webp',
    scale: 1.10
  }].map(({
    cat,
    price,
    img,
    scale
  }) => /*#__PURE__*/React.createElement("div", {
    key: cat,
    className: "hero-row",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 150,
      height: 80,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
      padding: '0 10px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: cat,
    decoding: "async",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      transform: `scale(${scale})`,
      filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.5))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      borderLeft: '1px solid rgba(255,255,255,0.08)',
      paddingLeft: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: '#9a9a9a'
    }
  }, cat), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      color: '#ffffff',
      marginTop: 4
    }
  }, price))))))));
}
function InfoBand() {
  const items = [{
    title: 'Sofort verfügbar',
    desc: 'Die meisten Modelle sind kurzfristig abrufbar — eine Anfrage genügt.'
  }, {
    title: '4 Standorte',
    desc: 'Moers, Geldern, Kleve und Wesel — Übergabe direkt bei Fett & Wirtz.'
  }, {
    title: 'Autorisierter BMW-Partner',
    desc: 'Aktuelle Modelle, voll gepflegt, mit Garantie des Herstellers.'
  }, {
    title: 'Transparente Preise',
    desc: 'Tagessatz, Wochenend- und Wochenpauschalen — alles im Rechner sichtbar.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      borderBottom: '1px solid #e6e6e6'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "info-band",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      background: '#e6e6e6',
      gap: 1
    }
  }, items.map(({
    title,
    desc
  }, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: title,
    delay: i + 1
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      padding: '44px 32px',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 32,
      height: 2,
      background: '#1c69d4',
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 700,
      color: '#262626',
      marginBottom: 8
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 300,
      color: '#6b6b6b',
      lineHeight: 1.65
    }
  }, desc))))));
}
function StandorteSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "standorte",
    className: "sec-pad",
    style: {
      background: '#0f1419',
      padding: '100px 40px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '-20%',
      right: '-10%',
      width: 500,
      height: 500,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(28,105,212,0.10) 0%, transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: '#1c69d4',
      marginBottom: 16
    }
  }, "Wo Sie uns finden"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(36px,4vw,52px)',
      fontWeight: 700,
      color: '#fff',
      marginBottom: 20,
      lineHeight: 1.05,
      letterSpacing: '-0.02em'
    }
  }, "Vier Standorte", /*#__PURE__*/React.createElement("br", null), "am Niederrhein."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      color: '#9a9a9a',
      marginBottom: 56,
      lineHeight: 1.6,
      maxWidth: 560
    }
  }, "Hauptstandort in Moers, Pick-up-Stationen in Geldern, Kleve und Wesel \u2014 wir sind in Ihrer N\xE4he.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 1,
      background: 'rgba(255,255,255,0.06)',
      color: "rgb(0, 0, 0)"
    }
  }, STANDORTE.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.name,
    delay: Math.min(i + 1, 4)
  }, /*#__PURE__*/React.createElement("div", {
    className: "move-card",
    style: {
      background: '#0f1419',
      padding: 32,
      height: '100%'
    }
  }, s.main && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#9a9a9a',
      marginBottom: 12
    }
  }, "Hauptstandort"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 12,
      letterSpacing: '-0.01em'
    }
  }, s.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#1c69d4',
      marginTop: 2
    }
  }, /*#__PURE__*/React.createElement(IconMapPin, null)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 300,
      color: '#bbbbbb',
      lineHeight: 1.65,
      whiteSpace: 'pre-line'
    }
  }, s.address)), /*#__PURE__*/React.createElement("a", {
    href: `tel:${s.phone?.replace(/\s/g, '')}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      fontWeight: 300,
      color: '#9a9a9a',
      textDecoration: 'none',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement(IconPhone2, null), s.phone), /*#__PURE__*/React.createElement("a", {
    href: `mailto:${s.email}`,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13,
      fontWeight: 300,
      color: '#9a9a9a',
      textDecoration: 'none',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(IconMail, null), s.email), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.2px',
      textTransform: 'uppercase',
      color: '#1c69d4',
      paddingTop: 16,
      borderTop: '1px solid rgba(255,255,255,0.06)'
    }
  }, s.note)))), Array.from({
    length: Math.max(0, (4 - STANDORTE.length % 4) % 4)
  }).map((_, i) => /*#__PURE__*/React.createElement("div", {
    key: `filler-${i}`,
    style: {
      background: '#0f1419'
    }
  })))));
}
function KontaktSection() {
  return /*#__PURE__*/React.createElement("section", {
    id: "kontakt",
    className: "sec-pad",
    style: {
      background: '#fff',
      padding: '100px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt-wrap",
    style: {
      maxWidth: 1360,
      margin: '0 auto',
      display: 'flex',
      gap: 80,
      alignItems: 'flex-start',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 300px',
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      color: '#1c69d4',
      marginBottom: 16
    }
  }, "Pers\xF6nlicher Kontakt"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 'clamp(36px,4vw,52px)',
      fontWeight: 700,
      color: '#262626',
      marginBottom: 24,
      lineHeight: 1.05,
      letterSpacing: '-0.02em'
    }
  }, "Sprechen Sie", /*#__PURE__*/React.createElement("br", null), "uns direkt an."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      fontWeight: 300,
      color: '#6b6b6b',
      lineHeight: 1.7,
      marginBottom: 36
    }
  }, "Fragen zu Verf\xFCgbarkeit, Sonderw\xFCnschen oder Langzeitkonditionen? Unser Team ber\xE4t Sie pers\xF6nlich \u2014 schnell, unkompliziert und transparent."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:+4902841656365",
    className: "move-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      color: '#262626',
      textDecoration: 'none',
      fontSize: 16,
      fontWeight: 700,
      padding: 16,
      background: '#fafafa',
      border: '1px solid #e6e6e6'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      background: '#1c69d4',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconPhone2, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#9a9a9a',
      marginBottom: 2
    }
  }, "Telefon"), "02841 65 63 65 0")), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@move-autovermietung.de",
    className: "move-card",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      color: '#262626',
      textDecoration: 'none',
      fontSize: 16,
      fontWeight: 700,
      padding: 16,
      background: '#fafafa',
      border: '1px solid #e6e6e6'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      background: '#1c69d4',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconMail, null)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#9a9a9a',
      marginBottom: 2
    }
  }, "E-Mail"), "info@move-autovermietung.de"))))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 2
  }, /*#__PURE__*/React.createElement("div", {
    className: "kontakt-hours",
    style: {
      flex: '1 1 300px',
      background: '#0f1419',
      padding: 40,
      color: '#fff',
      minWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '2px',
      textTransform: 'uppercase',
      color: '#1c69d4',
      marginBottom: 16
    }
  }, "\xD6ffnungszeiten"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      marginBottom: 24,
      letterSpacing: '-0.01em'
    }
  }, "Wann wir", /*#__PURE__*/React.createElement("br", null), "ge\xF6ffnet haben."), [['Mo – Fr', '08:00 – 17:30 Uhr', true], ['Samstag', 'Geschlossen', false], ['Sonntag', 'Geschlossen', false]].map(([day, time, open]) => /*#__PURE__*/React.createElement("div", {
    key: day,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '16px 0',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontWeight: 300,
      color: '#bbbbbb'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: open ? '#1c69d4' : '#444'
    }
  }), day), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: open ? '#fff' : '#6b6b6b'
    }
  }, time))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28,
      padding: 16,
      background: 'rgba(28,105,212,0.10)',
      borderLeft: '2px solid #1c69d4',
      fontSize: 13,
      fontWeight: 300,
      color: '#bbbbbb',
      lineHeight: 1.65
    }
  }, "Fahrzeug\xFCbergaben nach Vereinbarung auch au\xDFerhalb der \xD6ffnungszeiten m\xF6glich.")))));
}
function SiteFooter() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#f7f7f7',
      borderTop: '1px solid #e6e6e6',
      padding: '56px 40px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1360,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "footer-cols",
    style: {
      display: 'flex',
      gap: 48,
      marginBottom: 48,
      flexWrap: 'wrap',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets/logo.svg",
    alt: "Move Autovermietung",
    style: {
      height: 28,
      marginBottom: 20,
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      fontWeight: 300,
      color: '#6b6b6b',
      lineHeight: 1.7
    }
  }, "Ihr autorisierter BMW- und MINI-Mietpartner am Niederrhein. Kurzzeit, Langzeit, Wochenende \u2014 flexibel und transparent.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 56,
      flexWrap: 'wrap'
    }
  }, [{
    title: 'Fahrzeuge',
    links: ['Limousinen', 'SUV', 'Elektrofahrzeuge', 'Transporter']
  }, {
    title: 'Mieten',
    links: ['Kurzzeitmiete', 'Langzeitmiete', 'Wochenendmiete', 'Preisrechner']
  }, {
    title: 'Standorte',
    links: ['Moers', 'Geldern', 'Kleve', 'Wesel']
  }].map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#262626',
      marginBottom: 16
    }
  }, col.title), col.links.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      fontSize: 13,
      fontWeight: 300,
      color: '#6b6b6b',
      marginBottom: 10,
      cursor: 'pointer',
      transition: 'color 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#1c69d4',
    onMouseLeave: e => e.currentTarget.style.color = '#6b6b6b'
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid #e6e6e6',
      paddingTop: 24,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#9a9a9a'
    }
  }, "\xA9 2026 Move-Autovermietung GmbH \xB7 Dr.-Berns-Str. 40, 47441 Moers \xB7 BMW ist eine eingetragene Marke der Bayerische Motoren Werke AG."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, [['Impressum', 'impressum.html'], ['Datenschutz', 'datenschutz.html'], ['AGB', 'agb.html']].map(([l, href]) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: href,
    style: {
      fontSize: 11,
      color: '#6b6b6b',
      textDecoration: 'none',
      transition: 'color 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#1c69d4',
    onMouseLeave: e => e.currentTarget.style.color = '#6b6b6b'
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      if (window.moveCookieSettings) window.moveCookieSettings();
    },
    style: {
      fontSize: 11,
      color: '#6b6b6b',
      textDecoration: 'none',
      transition: 'color 0.15s'
    },
    onMouseEnter: e => e.currentTarget.style.color = '#1c69d4',
    onMouseLeave: e => e.currentTarget.style.color = '#6b6b6b'
  }, "Cookie-Einstellungen")))));
}
function App() {
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const scrollToFleet = () => {
    const el = document.querySelector('#kurzzeit');
    if (el) window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 64,
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: '#fff',
      fontFamily: 'Inter, system-ui, sans-serif'
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    scrolled: scrolled
  }), /*#__PURE__*/React.createElement(HeroSection, {
    onScrollToFleet: scrollToFleet
  }), /*#__PURE__*/React.createElement(FleetSection, {
    onSelectFahrzeug: (f, cat, mietart) => setModal({
      fahrzeug: f,
      category: cat,
      mietart
    })
  }), /*#__PURE__*/React.createElement(StandorteSection, null), /*#__PURE__*/React.createElement(KontaktSection, null), /*#__PURE__*/React.createElement(SiteFooter, null), modal && /*#__PURE__*/React.createElement(CalculatorModal, {
    fahrzeug: modal.fahrzeug,
    category: modal.category,
    mietart: modal.mietart,
    onClose: () => setModal(null)
  }));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/React.createElement(App, null));
})();
