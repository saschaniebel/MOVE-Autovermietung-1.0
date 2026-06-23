/* Calculator.jsx — compiled, do not edit (edit the .jsx source) */
(function(){
"use strict";
// Move Autovermietung — Kalkulator & Anfrage-Modal
const {
  useState,
  useEffect,
  useCallback
} = React;
function IconX() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }));
}
function IconCheck() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }));
}
const INPUT_STYLE = {
  width: '100%',
  height: 48,
  padding: '0 14px',
  border: '1px solid #e6e6e6',
  background: '#fff',
  fontFamily: 'Inter,sans-serif',
  fontSize: 14,
  fontWeight: 300,
  color: '#262626',
  outline: 'none',
  boxSizing: 'border-box'
};
const LABEL_STYLE = {
  display: 'block',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '1.2px',
  textTransform: 'uppercase',
  color: '#6b6b6b',
  marginBottom: 6
};
const SELECT_STYLE = {
  ...INPUT_STYLE,
  cursor: 'pointer',
  appearance: 'none',
  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23262626' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'right 14px center'
};
function PriceDisplay({
  result,
  mietart
}) {
  if (!result) return null;
  const fmt = n => n?.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  if (mietart === 'kurzzeit') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#1a2129',
        padding: 24,
        marginTop: 24
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '1.5px',
        textTransform: 'uppercase',
        color: '#bbbbbb',
        marginBottom: 16
      }
    }, "Preis\xFCbersicht"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, "Mietzeitraum"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
      }
    }, result.days, " ", result.days === 1 ? 'Tag' : 'Tage')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, "\xD8 Preis pro Tag"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#1c69d4'
      }
    }, fmt(result.pricePerDay), " \u20AC")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, result.priceMode === 'weekend' ? 'Wochenendpreis (pauschal)' : result.priceMode === 'woche' ? 'Wochenpauschale' : 'Mietkosten gesamt'), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
      }
    }, fmt(result.basePrice), " \u20AC")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, "Inkl. Kilometer"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
      }
    }, result.includedKm, " km")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, "je Zusatz-km"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
      }
    }, result.extraKm?.toLocaleString('de-DE', {
      minimumFractionDigits: 2
    }), " \u20AC")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, "Haftungsreduzierung"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
      }
    }, result.haftung?.toLocaleString('de-DE'), " \u20AC")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a',
        marginBottom: 4
      }
    }, "Kaution"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 18,
        fontWeight: 700,
        color: '#fff'
      }
    }, result.kaution?.toLocaleString('de-DE'), " \u20AC"))), result.priceMode === 'weekend' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        padding: '10px 14px',
        background: 'rgba(28,105,212,0.15)',
        fontSize: 12,
        color: '#88aaee'
      }
    }, "\u2713 Wochenendtarif (Fr.\u2013Mo. inkl. ", result.includedKm, " km)"), result.priceMode === 'woche' && /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16,
        padding: '10px 14px',
        background: 'rgba(28,105,212,0.15)',
        fontSize: 12,
        color: '#88aaee'
      }
    }, "\u2713 Wochenpauschale angewendet (inkl. ", result.includedKm, " km)"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        borderTop: '1px solid rgba(255,255,255,0.1)',
        paddingTop: 16
      }
    }, result.mwstInkl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: '#9a9a9a',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, "Netto"), /*#__PURE__*/React.createElement("span", null, fmt(result.basePrice / 1.19), " \u20AC")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: '#9a9a9a',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", null, "zzgl. 19 % MwSt."), /*#__PURE__*/React.createElement("span", null, fmt(result.basePrice - result.basePrice / 1.19), " \u20AC")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a'
      }
    }, "Gesamtpreis (brutto)"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        color: '#1c69d4'
      }
    }, fmt(result.basePrice), " \u20AC"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: '#9a9a9a',
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", null, "Netto"), /*#__PURE__*/React.createElement("span", null, fmt(result.basePrice), " \u20AC")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        fontSize: 13,
        color: '#9a9a9a',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement("span", null, "zzgl. 19 % MwSt."), /*#__PURE__*/React.createElement("span", null, fmt(result.basePrice * 0.19), " \u20AC")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 10,
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        color: '#9a9a9a'
      }
    }, "Gesamtpreis (brutto)"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 28,
        fontWeight: 700,
        color: '#1c69d4'
      }
    }, fmt(result.basePrice * 1.19), " \u20AC")))));
  }

  // Langzeit
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1a2129',
      padding: 24,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#bbbbbb',
      marginBottom: 16
    }
  }, "Preis\xFCbersicht"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      marginBottom: 4
    }
  }, "Laufzeit"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#fff'
    }
  }, result.monate, " ", result.monate === 1 ? 'Monat' : 'Monate')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      marginBottom: 4
    }
  }, "km-Paket / Monat"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#fff'
    }
  }, typeof result.kmPackage === 'number' ? result.kmPackage?.toLocaleString('de-DE') : result.kmPackage, " km")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      marginBottom: 4
    }
  }, "Monatliche Rate"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#fff'
    }
  }, result.monthlyRate?.toLocaleString('de-DE'), " \u20AC")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      marginBottom: 4
    }
  }, "je Zusatz-km"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#fff'
    }
  }, result.extraKm?.toLocaleString('de-DE', {
    minimumFractionDigits: 2
  }), " \u20AC")), result.haftung && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a',
      marginBottom: 4
    }
  }, "Haftungsreduzierung"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 700,
      color: '#fff'
    }
  }, result.haftung?.toLocaleString('de-DE'), " \u20AC"))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20,
      borderTop: '1px solid rgba(255,255,255,0.1)',
      paddingTop: 16
    }
  }, result.mwstInkl ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#9a9a9a',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Netto"), /*#__PURE__*/React.createElement("span", null, fmt(result.total / 1.19), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#9a9a9a',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "zzgl. 19 % MwSt."), /*#__PURE__*/React.createElement("span", null, fmt(result.total - result.total / 1.19), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a'
    }
  }, "Gesamtpreis (brutto)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1c69d4'
    }
  }, fmt(result.total), " \u20AC"))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#9a9a9a',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "Netto"), /*#__PURE__*/React.createElement("span", null, fmt(result.total), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      color: '#9a9a9a',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("span", null, "zzgl. 19 % MwSt."), /*#__PURE__*/React.createElement("span", null, fmt(result.total * 0.19), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 10,
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#9a9a9a'
    }
  }, "Gesamtpreis (brutto)"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#1c69d4'
    }
  }, fmt(result.total * 1.19), " \u20AC")))));
}
function CalculatorModal({
  fahrzeug,
  category,
  mietart,
  onClose
}) {
  // Kurzzeit state
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [startTime, setStartTime] = useState('10:00');
  const [endTime, setEndTime] = useState('10:00');
  const [standort, setStandort] = useState('Moers');
  // Langzeit state
  const [kmPackage, setKmPackage] = useState(2000);
  const [monate, setMonate] = useState(3);
  // Anfrage form
  const [step, setStep] = useState('calc');
  const [form, setForm] = useState({
    name: '',
    email: '',
    tel: '',
    notiz: '',
    honeypot: ''
  });
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  // Anti-bot: capture when modal was opened
  const openedAtRef = React.useRef(Date.now());
  const isKurzzeit = mietart === 'kurzzeit';

  // Fix: bei Langzeit-Fahrzeugen mit nur einzelnen verfügbaren km-Paketen
  // (z.B. iX1, i5) auf das erste verfügbare Paket vorwählen, damit sofort
  // ein Preis erscheint.
  React.useEffect(() => {
    if (isKurzzeit || fahrzeug.kmPaketLabel) return;
    const pkgs = [1000, 2000, 3000, 4000];
    const currentIdx = pkgs.indexOf(kmPackage);
    if (fahrzeug.prices[currentIdx] == null) {
      const firstAvailable = pkgs.find((_, i) => fahrzeug.prices[i] != null);
      if (firstAvailable) setKmPackage(firstAvailable);
    }
  }, [fahrzeug, isKurzzeit]);

  // Calculate result
  const result = isKurzzeit ? calcKurzzeit(fahrzeug, startDate, endDate, startTime, endTime) : calcLangzeit(fahrzeug, kmPackage, monate);
  const today = new Date().toISOString().split('T')[0];
  const standorte = isKurzzeit ? ['Moers', 'Geldern', 'Kleve', 'Wesel'] : ['Moers'];
  const validate = () => {
    const e = {};
    const name = form.name.trim();
    const email = form.email.trim();
    // Strict-but-pragmatic email regex (RFC 5322 light)
    const emailRe = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!name || name.length < 2) e.name = 'Bitte gültigen Namen eingeben (min. 2 Zeichen)';
    if (name.length > 100) e.name = 'Name zu lang';
    if (!email || !emailRe.test(email)) e.email = 'Bitte gültige E-Mail-Adresse eingeben';
    if (email.length > 254) e.email = 'E-Mail-Adresse zu lang';
    if (form.tel && form.tel.length > 30) e.tel = 'Telefonnummer zu lang';
    if (form.notiz && form.notiz.length > 2000) e.notiz = 'Anmerkung zu lang (max. 2000 Zeichen)';
    return e;
  };
  const handleSubmit = async () => {
    const e = validate();
    if (Object.keys(e).length > 0) {
      setErrors(e);
      return;
    }

    // Anti-bot: silently drop if honeypot was filled (bots fill all fields)
    if (form.honeypot) {
      setStep('success');
      return;
    }
    // Anti-bot: silently drop if submitted in under 3 seconds (humans can't fill that fast)
    if (Date.now() - openedAtRef.current < 3000) {
      setStep('success');
      return;
    }
    setSending(true);
    setErrors({});
    const fmtEmail = n => n?.toLocaleString('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    const bruttoPreis = isKurzzeit ? result?.mwstInkl ? result?.basePrice : result?.basePrice * 1.19 : result?.mwstInkl ? result?.total : result?.total * 1.19;
    const kmInfo = isKurzzeit ? null : typeof result?.kmPackage === 'string' ? result.kmPackage : `${kmPackage.toLocaleString('de-DE')} km`;
    const data = {
      _subject: `Mietanfrage: ${fahrzeug.name} (${isKurzzeit ? 'Kurzzeitmiete' : 'Langzeitmiete'})`,
      _replyto: form.email,
      Fahrzeug: fahrzeug.name,
      Kategorie: category,
      Mietart: isKurzzeit ? 'Kurzzeitmiete' : 'Langzeitmiete',
      ...(isKurzzeit ? {
        Abholung: `${startDate} um ${startTime} Uhr`,
        Rueckgabe: `${endDate} um ${endTime} Uhr`,
        Standort: standort,
        Mietdauer: `${result?.days} ${result?.days === 1 ? 'Tag' : 'Tage'}`
      } : {
        Laufzeit: `${monate} Monate`,
        kmPaket: `${kmInfo} / Monat`
      }),
      Gesamtpreis_brutto: `${fmtEmail(bruttoPreis)} €`,
      Name: form.name,
      Email: form.email,
      Telefon: form.tel || '–',
      Anmerkungen: form.notiz || '–'
    };
    try {
      const response = await fetch('https://formspree.io/f/xbdbjpdo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (response.ok) {
        setStep('success');
      } else {
        const json = await response.json().catch(() => ({}));
        setErrors({
          submit: json?.error || 'Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: 02841 65 63 65 0'
        });
      }
    } catch (err) {
      setErrors({
        submit: 'Verbindungsfehler. Bitte versuchen Sie es erneut oder rufen Sie uns direkt an: 02841 65 63 65 0'
      });
    } finally {
      setSending(false);
    }
  };

  // Close on Escape
  useEffect(() => {
    const handler = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 300,
      background: 'rgba(26,33,41,0.75)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      overflowY: 'auto'
    },
    onClick: e => e.target === e.currentTarget && onClose()
  }, /*#__PURE__*/React.createElement("div", {
    className: "calc-modal",
    style: {
      width: '100%',
      maxWidth: 520,
      background: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      animation: 'slideIn 0.28s ease'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#1a2129',
      padding: '20px 28px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '1.5px',
      textTransform: 'uppercase',
      color: '#9a9a9a'
    }
  }, category, " \xB7 ", isKurzzeit ? 'Kurzzeitmiete' : 'Langzeitmiete'), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#fff',
      marginTop: 4
    }
  }, fahrzeug.name)), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#9a9a9a',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(IconX, null))), /*#__PURE__*/React.createElement("div", {
    className: "calc-body",
    style: {
      padding: 28,
      flexGrow: 1
    }
  }, step === 'success' ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      paddingTop: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      background: '#1c69d4',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 24px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(IconCheck, null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 24,
      fontWeight: 700,
      color: '#262626',
      marginBottom: 12
    }
  }, "Anfrage gesendet!"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      fontWeight: 300,
      color: '#6b6b6b',
      lineHeight: 1.6,
      marginBottom: 32
    }
  }, "Vielen Dank f\xFCr Ihre Anfrage. Wir melden uns schnellstm\xF6glich bei Ihnen \u2014 in der Regel innerhalb von 24 Stunden."), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      height: 48,
      padding: '0 32px',
      background: '#1c69d4',
      color: '#fff',
      border: 'none',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.5px',
      cursor: 'pointer'
    }
  }, "SCHLIESSEN")) : step === 'form' ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#262626',
      marginBottom: 24
    }
  }, "Ihre Kontaktdaten"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Name *"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...INPUT_STYLE,
      borderColor: errors.name ? '#dc2626' : '#e6e6e6'
    },
    value: form.name,
    onChange: e => setForm(f => ({
      ...f,
      name: e.target.value
    })),
    placeholder: "Vor- und Nachname",
    autoComplete: "name",
    maxLength: 100,
    required: true
  }), errors.name && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#dc2626',
      marginTop: 4
    }
  }, errors.name)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "E-Mail *"), /*#__PURE__*/React.createElement("input", {
    style: {
      ...INPUT_STYLE,
      borderColor: errors.email ? '#dc2626' : '#e6e6e6'
    },
    type: "email",
    value: form.email,
    onChange: e => setForm(f => ({
      ...f,
      email: e.target.value
    })),
    placeholder: "ihre@email.de",
    autoComplete: "email",
    maxLength: 254,
    inputMode: "email",
    required: true
  }), errors.email && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: '#dc2626',
      marginTop: 4
    }
  }, errors.email)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Telefon"), /*#__PURE__*/React.createElement("input", {
    style: INPUT_STYLE,
    type: "tel",
    value: form.tel,
    onChange: e => setForm(f => ({
      ...f,
      tel: e.target.value
    })),
    placeholder: "+49 \u2026",
    autoComplete: "tel",
    maxLength: 30,
    inputMode: "tel"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Anmerkungen"), /*#__PURE__*/React.createElement("textarea", {
    style: {
      ...INPUT_STYLE,
      height: 96,
      padding: 14,
      resize: 'vertical',
      lineHeight: 1.5
    },
    value: form.notiz,
    onChange: e => setForm(f => ({
      ...f,
      notiz: e.target.value
    })),
    placeholder: "Sonderw\xFCnsche, Fragen \u2026",
    maxLength: 2000
  })), /*#__PURE__*/React.createElement("input", {
    type: "text",
    name: "_gotcha",
    tabIndex: -1,
    autoComplete: "off",
    value: form.honeypot,
    onChange: e => setForm(f => ({
      ...f,
      honeypot: e.target.value
    })),
    style: {
      position: 'absolute',
      left: '-9999px',
      width: 1,
      height: 1,
      opacity: 0
    },
    "aria-hidden": "true"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      padding: 16,
      background: '#fafafa',
      border: '1px solid #e6e6e6',
      fontSize: 13,
      fontWeight: 300,
      color: '#3c3c3c',
      lineHeight: 1.8
    }
  }, /*#__PURE__*/React.createElement("strong", null, fahrzeug.name), " \xB7 ", isKurzzeit ? `${startDate} ${startTime} – ${endDate} ${endTime} · ${standort}` : `${monate} Monate · ${kmPackage.toLocaleString('de-DE')} km/Monat`, /*#__PURE__*/React.createElement("br", null), "Gesch\xE4tzter Preis (brutto): ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: '#1c69d4'
    }
  }, isKurzzeit ? (result?.mwstInkl ? result?.basePrice : result?.basePrice * 1.19)?.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }) : (result?.mwstInkl ? result?.total : result?.total * 1.19)?.toLocaleString('de-DE', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }), " \u20AC")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('calc'),
    style: {
      height: 48,
      padding: '0 24px',
      background: '#fff',
      color: '#262626',
      border: '1px solid #cccccc',
      fontFamily: 'Inter,sans-serif',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.5px',
      cursor: 'pointer'
    }
  }, "\u2190 ZUR\xDCCK"), /*#__PURE__*/React.createElement("button", {
    onClick: handleSubmit,
    disabled: sending,
    style: {
      flex: 1,
      height: 48,
      background: sending ? '#9a9a9a' : '#1c69d4',
      color: '#fff',
      border: 'none',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.5px',
      cursor: sending ? 'wait' : 'pointer'
    }
  }, sending ? 'WIRD GESENDET …' : 'ANFRAGE ABSENDEN ›')), errors.submit && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      padding: 14,
      background: '#fef2f2',
      border: '1px solid #fecaca',
      fontSize: 13,
      color: '#dc2626',
      lineHeight: 1.5
    }
  }, errors.submit), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      color: '#9a9a9a',
      marginTop: 12,
      lineHeight: 1.5
    }
  }, "Mit dem Absenden willigen Sie ein, dass wir Ihre Angaben zur Bearbeitung Ihrer Anfrage verarbeiten (Art. 6 Abs. 1 lit. b DSGVO). Details in unserer ", /*#__PURE__*/React.createElement("a", {
    href: "datenschutz.html",
    target: "_blank",
    style: {
      color: '#1c69d4',
      textDecoration: 'underline'
    }
  }, "Datenschutzerkl\xE4rung"), ". \xDCbermittlung verschl\xFCsselt. Alle Preise als Brutto-Endpreis, \xC4nderungen vorbehalten.")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      fontWeight: 700,
      color: '#262626',
      marginBottom: 24
    }
  }, isKurzzeit ? 'Mietdauer & Standort' : 'Laufzeit & km-Paket'), isKurzzeit ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Abholdatum"), /*#__PURE__*/React.createElement("input", {
    style: INPUT_STYLE,
    type: "date",
    min: today,
    value: startDate,
    onChange: e => {
      setStartDate(e.target.value);
      if (endDate && e.target.value >= endDate) setEndDate('');
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Abholzeit"), /*#__PURE__*/React.createElement("input", {
    style: INPUT_STYLE,
    type: "time",
    value: startTime,
    onChange: e => setStartTime(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "R\xFCckgabedatum"), /*#__PURE__*/React.createElement("input", {
    style: INPUT_STYLE,
    type: "date",
    min: startDate || today,
    value: endDate,
    onChange: e => setEndDate(e.target.value)
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "R\xFCckgabezeit"), /*#__PURE__*/React.createElement("input", {
    style: INPUT_STYLE,
    type: "time",
    value: endTime,
    onChange: e => setEndTime(e.target.value)
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Abholstandort"), /*#__PURE__*/React.createElement("select", {
    style: SELECT_STYLE,
    value: standort,
    onChange: e => setStandort(e.target.value)
  }, standorte.map(s => /*#__PURE__*/React.createElement("option", {
    key: s,
    value: s
  }, s, " \u2014 Fett & Wirtz"))))) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, !fahrzeug.kmPaketLabel ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "km-Paket pro Monat"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 8
    }
  }, [1000, 2000, 3000, 4000].map(km => {
    const available = fahrzeug.prices[[1000, 2000, 3000, 4000].indexOf(km)] !== null;
    return /*#__PURE__*/React.createElement("button", {
      key: km,
      onClick: () => available && setKmPackage(km),
      disabled: !available,
      style: {
        height: 48,
        border: kmPackage === km ? '2px solid #1c69d4' : '1px solid #e6e6e6',
        background: kmPackage === km ? 'rgba(28,105,212,0.06)' : '#fff',
        color: !available ? '#ccc' : '#262626',
        fontSize: 13,
        fontWeight: 700,
        cursor: available ? 'pointer' : 'not-allowed'
      }
    }, km.toLocaleString('de-DE'));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: '#9a9a9a',
      marginTop: 6
    }
  }, "km inklusive pro Monat")) : /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '14px 16px',
      background: '#fafafa',
      border: '1px solid #e6e6e6',
      fontSize: 14,
      color: '#262626'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700
    }
  }, "km-Paket:"), " ", fahrzeug.kmPaketLabel, " / Monat inkl."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: LABEL_STYLE
  }, "Laufzeit (Monate)"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setMonate(m => Math.max(1, m - 1)),
    style: {
      width: 40,
      height: 40,
      border: '1px solid #e6e6e6',
      background: '#fff',
      fontSize: 20,
      cursor: 'pointer',
      color: '#262626'
    }
  }, "\u2212"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      color: '#262626',
      minWidth: 60,
      textAlign: 'center'
    }
  }, monate), /*#__PURE__*/React.createElement("button", {
    onClick: () => setMonate(m => Math.min(36, m + 1)),
    style: {
      width: 40,
      height: 40,
      border: '1px solid #e6e6e6',
      background: '#fff',
      fontSize: 20,
      cursor: 'pointer',
      color: '#262626'
    }
  }, "+"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: '#6b6b6b',
      fontWeight: 300
    }
  }, "Monate")))), /*#__PURE__*/React.createElement(PriceDisplay, {
    result: result,
    mietart: mietart
  }), result && /*#__PURE__*/React.createElement("button", {
    onClick: () => setStep('form'),
    style: {
      width: '100%',
      height: 52,
      marginTop: 24,
      background: '#1c69d4',
      color: '#fff',
      border: 'none',
      fontFamily: 'Inter,sans-serif',
      fontSize: 14,
      fontWeight: 700,
      letterSpacing: '0.5px',
      cursor: 'pointer',
      transition: 'background 0.15s'
    },
    onMouseEnter: e => e.target.style.background = '#0653b6',
    onMouseLeave: e => e.target.style.background = '#1c69d4'
  }, "JETZT ANFRAGEN \u203A")))), /*#__PURE__*/React.createElement("style", null, `@keyframes slideIn { from { transform: translateX(40px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`));
}
Object.assign(window, {
  CalculatorModal
});
})();
