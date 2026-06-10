// Shift10 Landingpage — FAQ
function FAQSection() {
  const items = [
    {
      q: "Für wen ist der Vortrag?",
      a: "Für Firmen-Events, Kaderveranstaltungen und Verbandstagungen. Auf Wunsch stellen wir mit weiteren Fachleuten ein komplettes Programm nach euren Vorstellungen zusammen. Unterhaltsam, Lehrreich, Aktuell.",
    },
    {
      q: "Für wen ist der Workshop?",
      a: "Für Teams, die KI im eigenen Betrieb einsetzen oder professioneller damit umgehen wollen und dies vom konkreten Anwendungsfall im Business bis hin zu Vorgehen und Strategie für die IT.",
    },
    {
      q: "Was ist diese KI-Maschine?",
      a: "Beim Workshop bringen wir einen vorinstallierten Computer mit, auf dem die wichtigsten KI-Tools bereits eingerichtet sind (inklusive Premium-KI-Aboplänen.) Der mobile Tisch, Computer, Bildschirm und die Peripherie bleiben nach dem Workshop sieben Tage bei euch, damit ihr das Gelernte direkt im Arbeitsalltag ausprobieren könnt ohne erst selbst ein Setup aufbauen oder euch bei registrieren zu müssen.",
    },
    {
      q: "Wie schnell könnt ihr bei uns vorbeikommen für einen Vortrag oder Workshop?",
      a: "Schreib uns oder ruf an. Erstgespräche, Vorträge und Workshops sind je nach Kalender kurzfristig möglich.",
    },
    {
      q: "Helft ihr uns, die richtigen KI-Anwendungsfälle zu finden?",
      a: "Ja. Gemeinsam mit euch sammeln wir mögliche Einsatzgebiete und priorisieren sie nach Nutzen und Aufwand. So startet ihr dort wo die KI etwas bringt, statt euch in Spielereien zu verlieren.",
    },
    {
      q: "Es gibt unzählige KI-Tools — welches ist das richtige für uns?",
      a: "Genau dabei helfen wir. Der Markt ist unübersichtlich und ändert sich monatlich. Wir vergleichen die in Frage kommenden Tools für euren konkreten Bedarf. Weil wir an keinem Tool mitverdienen, ist die Empfehlung unabhängig.",
    },
    {
      q: "Warum benötigt es KI-Verhaltensrichtlinien für unsere Mitarbeitende?",
      a: "Weil eure Leute KI ohnehin schon nutzen — meist ohne zu wissen, welche Daten sie eingeben dürfen. Klare Richtlinien verhindern, dass Kundendaten oder Geschäftsgeheimnisse im falschen Tool landen, und geben allen Sicherheit, was erlaubt ist. Wir helfen euch, sie praxisnah aufzusetzen.",
    },
    {
      q: "Was ist eine KI-Unternehmensanalyse?",
      a: "Eine strukturierte Standortbestimmung: Wo steht euer Betrieb bei KI, was nutzt ihr bereits, wo liegen Chancen und Risiken? Welche Wertschöpfungsaktivitäten wollt ihr nicht mit KI unterstützen, wo ist der Mensch wichtiger? Das Ergebnis ist die Grundlage für sinnvolle nächste Schritte, statt einfach drauflos zu experimentieren.",
    },
    {
      q: "Warum benötigen wir eine KI-Strategie?",
      a: "Damit KI dort eingesetzt wird, wo sie eurem Betrieb wirklich nützt und nicht als wucherartige Sammlung einzelner Tools verpufft. Eine Strategie verbindet eure Geschäftsziele mit der IT und legt fest, welche Schritte in welcher Reihenfolge Sinn machen.",
    },
    {
      q: "Erstellt ihr auch ein Risikoassessment für eine bestimmte Software?",
      a: "Ja, das bieten wir an. Wir nehmen ein konkretes Tool unter die Lupe und dokumentieren Risiken, die durch den Einsatz dieser Software entstehen. Ihr erhaltet eine Risiko-Einstufung mit klarer Empfehlung, welche Daten die Mitarbeitenden eingeben dürfen.",
    },
    {
      q: "Kann man bei euch im Büro vorbeikommen?",
      a: "Immer Freitags, aber jedoch nur mit vorab vereinbartem Termin!",
    },
  ];

  const [open, setOpen] = React.useState(0);

  return (
    <section id="faq" className="section">
      <div className="container">
        <div className="s10-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
          <div className="s10-sticky-sidebar" style={{ position: "sticky", top: 100 }}>
            <span className="eyebrow">FAQ</span>
            <h2 className="display display--md" style={{ marginTop: 24, fontWeight: 500 }}>
              Die echten Fragen — direkt beantwortet.
            </h2>
            <p style={{ marginTop: 24, fontSize: 16, lineHeight: 1.65, color: "var(--color-neutral-600)" }}>
              Etwas nicht dabei? Schreib direkt an{" "}
              <a href="mailto:hallo@shift10.ch" style={{ color: "var(--color-black)", textDecoration: "underline", textDecorationThickness: 1, textUnderlineOffset: 4 }}>hallo@shift10.ch</a>.
            </p>
          </div>
          <div>
            {items.map((it, i) => (
              <div key={i} className={"faq-item" + (open === i ? " open" : "")} onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="faq-q">
                  <h3 className="faq-question">{it.q}</h3>
                  <span className="faq-toggle" />
                </div>
                <div className="faq-answer">
                  <p>{it.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { FAQSection });
