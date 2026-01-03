"use client";

import { useState } from "react";

const DIGISTORE_AFFILIATE_LINK =
  "https://getgoliathxl10.com/read#aff=AndyBuh";

const questions = [
  { q: "How would you rate your daily energy?", a: ["Low", "Medium", "High"] },
  { q: "How is your sleep quality?", a: ["Poor", "Average", "Great"] },
  { q: "How often do you exercise?", a: ["Rarely", "Sometimes", "Often"] },
  { q: "How is your daily focus?", a: ["Low", "Medium", "Sharp"] },
  { q: "How would you rate your confidence?", a: ["Low", "Medium", "High"] },
];

export default function Page() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState([]);

  const next = () => {
    if (step < questions.length - 1) setStep(step + 1);
    else window.location.href = DIGISTORE_AFFILIATE_LINK;
  };

  return (
    <div style={{minHeight:"100vh",background:"#050c1a",color:"white",display:"flex",alignItems:"center",justifyContent:"center",padding:24}}>
      <div style={{maxWidth:480,width:"100%",background:"#0d1b3d",borderRadius:16,padding:24,boxShadow:"0 0 40px rgba(0,0,0,.6)"}}>
        <h1 style={{fontSize:28,fontWeight:700,marginBottom:16}}>Men’s Vitality Check</h1>
        <p style={{opacity:.7,marginBottom:20}}>Answer 5 quick questions to see your result</p>
        <div>
          <p style={{marginBottom:12,fontWeight:600}}>{questions[step].q}</p>
          {questions[step].a.map(a => (
            <button key={a} onClick={next} style={{display:"block",width:"100%",padding:12,borderRadius:10,border:"none",marginBottom:10,fontWeight:600,background:"#2563eb",color:"white",cursor:"pointer"}}>{a}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
