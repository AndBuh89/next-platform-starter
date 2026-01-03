"use client";

import { useMemo, useState } from "react";

const CTA_LINK = "https://getgoliathxl10.com/read#aff=AndyBuh";
const QUESTIONS = [
  {
    id: "age",
    q: "1) What’s your age range?",
    a: ["35–44", "45–54", "55–64", "65+"],
    score: [2, 1, 0, 0],
  },
  {
    id: "energy",
    q: "2) How would you rate your daily energy lately?",
    a: ["Low", "Medium", "High"],
    score: [0, 1, 2],
  },
  {
    id: "focus",
    q: "3) How would you describe your focus & mental clarity?",
    a: ["Often distracted", "Mostly focused", "Very sharp"],
    score: [0, 1, 2],
  },
  {
    id: "habits",
    q: "4) How consistent are your daily habits (sleep, meals, routine)?",
    a: ["Very inconsistent", "Somewhat consistent", "Very consistent"],
    score: [0, 1, 2],
  },
  {
    id: "confidence",
    q: "5) How motivated and confident do you feel day-to-day?",
    a: ["Low", "Medium", "High"],
    score: [0, 1, 2],
  },
  {
    id: "satisfaction",
    q: "6) How satisfied are you with your current lifestyle performance?",
    a: ["Not satisfied", "Somewhat satisfied", "Very satisfied"],
    score: [0, 1, 2],
  },
  {
    id: "openness",
    q: "7) How open are you to improving your daily routine for better vitality?",
    a: ["Not interested", "Somewhat open", "Very open"],
    score: [0, 1, 2],
  },
];

export default function Page() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const done = step >= QUESTIONS.length;

  const total = useMemo(() => {
    return QUESTIONS.reduce((sum, q) => {
      const idx = answers[q.id];
      if (idx === undefined) return sum;
      return sum + q.score[idx];
    }, 0);
  }, [answers]);

  const band = useMemo(() => {
    // max score = 14
    if (total <= 5) return "Low Vitality";
    if (total <= 10) return "Moderate Vitality";
    return "Strong Vitality";
  }, [total]);

  const headline = useMemo(() => {
    if (band === "Low Vitality") return "Your daily vitality habits look underpowered";
    if (band === "Moderate Vitality") return "Your daily vitality habits look average";
    return "Your daily vitality habits look strong";
  }, [band]);

  const summary = useMemo(() => {
    if (band === "Low Vitality")
      return "Your inputs suggest daily energy, focus and routine habits may be holding you back. Next: a simple lifestyle-based daily routine designed to support energy, confidence and consistency.";
    if (band === "Moderate Vitality")
      return "You have a solid baseline, but there’s room to optimize your daily routine for stronger energy, focus and drive. Next: a simple daily routine you can follow.";
    return "You’re in a strong zone. If you want consistent performance over time, a simple routine can help you maintain momentum.";
  }, [band]);

  const progress = Math.round((Math.min(step, QUESTIONS.length) / QUESTIONS.length) * 100);

  const pick = (idx) => {
    const q = QUESTIONS[step];
    setAnswers((p) => ({ ...p, [q.id]: idx }));
    if (step < QUESTIONS.length - 1) setStep(step + 1);
    else setStep(QUESTIONS.length);
  };

  const back = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div style={styles.bg}>
      <div style={styles.wrap}>
        <div style={styles.top}>
          <div style={styles.brand}>
            <span style={styles.dot} />
            VitalFlow Check
          </div>
          <div style={styles.pill}>USA • Men 35+ • 60-second check</div>
        </div>

        <div style={styles.grid}>
          <div style={styles.card}>
            <div style={{ ...styles.pill, display: "inline-flex", gap: 8, alignItems: "center" }}>
              <span style={{ ...styles.dot, width: 8, height: 8 }} />
              Informational • Lifestyle-based • Non-medical
            </div>

            <h1 style={styles.h1}>
              Men’s Daily Vitality Check
              <br />
              in 60 seconds
            </h1>

            <p style={styles.sub}>
              A short lifestyle self-check focused on daily energy, focus and confidence habits. This is <b>not</b> medical
              advice.
            </p>

            <div style={styles.kpis}>
              <div style={styles.kpi}>
                <b>Fast</b>
                <span style={styles.kpiSpan}>~7 questions</span>
              </div>
              <div style={styles.kpi}>
                <b>Personalized</b>
                <span style={styles.kpiSpan}>score + next step</span>
              </div>
              <div style={styles.kpi}>
                <b>Practical</b>
                <span style={styles.kpiSpan}>simple daily routine</span>
              </div>
            </div>

            <div style={styles.divider} />
            <div style={styles.small}>
              <b>Disclaimer:</b> informational only. No diagnosis, treatment, cure, or prevention claims.
            </div>
          </div>

          <div style={styles.card} id="quizCard">
            <div style={styles.quizTop}>
              <div style={{ fontWeight: 800 }}>Vitality Check</div>
              <div style={styles.pill}>{done ? "Completed" : `Step ${step + 1} of ${QUESTIONS.length}`}</div>
            </div>

            <div style={styles.progress}>
              <div style={{ ...styles.bar, width: `${progress}%` }} />
            </div>

            {!done ? (
              <div style={{ marginTop: 14 }}>
                <div style={styles.q}>{QUESTIONS[step].q}</div>
                <div style={styles.opts}>
                  {QUESTIONS[step].a.map((label, idx) => (
                    <button key={label} onClick={() => pick(idx)} style={styles.optBtn}>
                      {label}
                    </button>
                  ))}
                </div>

                <div style={{ marginTop: 14, display: "flex", gap: 10 }}>
                  <button onClick={back} style={styles.backBtn} disabled={step === 0}>
                    Back
                  </button>
                  <div style={{ flex: 1 }} />
                </div>
              </div>
            ) : (
              <div style={{ marginTop: 14 }}>
                <div style={styles.scorePill}>
                  <span
                    style={{
                      ...styles.badge,
                      background:
                        band === "Low Vitality" ? "#fb7185" : band === "Strong Vitality" ? "#34d399" : "#fbbf24",
                    }}
                  />
                  Vitality Score: {band}
                </div>

                <h2 style={styles.h2}>{headline}</h2>
                <p style={styles.resultP}>{summary}</p>

                <a
  href={CTA_LINK}
  target="_blank"
  rel="nofollow noopener"
  style={styles.cta}
  onClick={() => {
    if (window.ttq) window.ttq.track("CompleteRegistration");
  }}
>
  View the daily vitality routine
                </a>

                <div style={styles.small2}>Tip: open it in a new tab so you can come back to your score.</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    background:
      "radial-gradient(1200px 600px at 20% 10%, rgba(96,165,250,.18), transparent), radial-gradient(900px 500px at 80% 30%, rgba(94,234,212,.14), transparent), #0b1220",
    color: "#eaf0ff",
    padding: 24,
  },
  wrap: { maxWidth: 980, margin: "0 auto" },
  top: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 14, marginBottom: 18 },
  brand: { display: "flex", alignItems: "center", gap: 10, fontWeight: 800, letterSpacing: ".3px" },
  dot: { width: 10, height: 10, borderRadius: 999, background: "linear-gradient(135deg,#5eead4,#60a5fa)" },
  pill: {
    fontSize: 12,
    color: "#9fb0d0",
    border: "1px solid rgba(159,176,208,.25)",
    padding: "8px 10px",
    borderRadius: 999,
  },
  grid: { display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 18, alignItems: "stretch" },
  card: {
    background: "linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))",
    border: "1px solid rgba(159,176,208,.18)",
    borderRadius: 22,
    padding: 22,
    boxShadow: "0 20px 60px rgba(0,0,0,.35)",
  },
  h1: { fontSize: 40, lineHeight: 1.05, margin: "10px 0 10px" },
  sub: { color: "#9fb0d0", fontSize: 16, lineHeight: 1.55, margin: "0 0 16px" },
  kpis: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginTop: 16 },
  kpi: { border: "1px solid rgba(159,176,208,.18)", borderRadius: 16, padding: 12, background: "rgba(15,26,51,.35)" },
  kpiSpan: { color: "#9fb0d0", fontSize: 12 },
  divider: { height: 1, background: "rgba(159,176,208,.18)", margin: "14px 0" },
  small: { fontSize: 11, color: "rgba(234,240,255,.55)" },
  quizTop: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10, marginBottom: 10 },
  progress: { height: 10, background: "rgba(159,176,208,.16)", borderRadius: 999, overflow: "hidden" },
  bar: { height: "100%", background: "linear-gradient(90deg,#5eead4,#60a5fa)" },
  q: { marginTop: 10, fontWeight: 800, fontSize: 16 },
  opts: { display: "grid", gap: 10, marginTop: 12 },
  optBtn: {
    textAlign: "left",
    padding: 12,
    borderRadius: 16,
    border: "1px solid rgba(159,176,208,.18)",
    background: "rgba(15,26,51,.35)",
    color: "#eaf0ff",
    cursor: "pointer",
    fontWeight: 700,
  },
  backBtn: {
    padding: "10px 14px",
    borderRadius: 14,
    border: "1px solid rgba(159,176,208,.25)",
    background: "transparent",
    color: "#eaf0ff",
    cursor: "pointer",
    fontWeight: 700,
    opacity: 0.9,
  },
  scorePill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 10px",
    borderRadius: 999,
    border: "1px solid rgba(159,176,208,.25)",
    background: "rgba(15,26,51,.35)",
    fontSize: 12,
    marginBottom: 10,
  },
  badge: { width: 10, height: 10, borderRadius: 999, background: "#fbbf24" },
  h2: { margin: "10px 0 8px", fontSize: 22 },
  resultP: { margin: "0 0 14px", color: "#9fb0d0", lineHeight: 1.55 },
  cta: {
    display: "inline-block",
    width: "100%",
    textAlign: "center",
    padding: "12px 16px",
    borderRadius: 14,
    background: "linear-gradient(135deg,#5eead4,#60a5fa)",
    color: "#061224",
    fontWeight: 900,
    textDecoration: "none",
  },
  small2: { marginTop: 10, fontSize: 11, color: "rgba(234,240,255,.55)" },
};
