import { useState } from 'react';
import { ExternalLink, Smartphone, Shield, FileText, ArrowRight } from 'lucide-react';

const steps = [
  {
    id: 'step1',
    path: '/spp/step1/index.html',
    title: 'Step 1 — Number Input',
    desc: 'Phone number entry with international dial code selector.',
    icon: Smartphone,
    accent: '#25d366',
  },
  {
    id: 'step2',
    path: '/spp/step2/index.html',
    title: 'Step 2 — Analysis',
    desc: 'Hacking overlay, progress bar, live scan status, HLS video.',
    icon: Shield,
    accent: '#00ff88',
  },
  {
    id: 'step3',
    path: '/spp/step3/index.html',
    title: 'Step 3 — Report',
    desc: 'Findings report, GPS map, pricing card, testimonials.',
    icon: FileText,
    accent: '#ff2d55',
  },
];

function App() {
  const [active, setActive] = useState<string | null>(null);

  if (active) {
    const step = steps.find((s) => s.id === active)!;
    return (
      <div className="min-h-screen bg-[#020408] flex flex-col">
        <header className="flex items-center justify-between px-4 py-3 bg-black/60 border-b border-white/10 backdrop-blur sticky top-0 z-50">
          <button
            onClick={() => setActive(null)}
            className="text-sm text-white/70 hover:text-white transition flex items-center gap-2"
          >
            <ArrowRight className="w-4 h-4 rotate-180" /> Back to menu
          </button>
          <span className="text-xs text-white/50 font-mono">{step.title}</span>
          <a
            href={step.path}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white transition flex items-center gap-1"
          >
            Open <ExternalLink className="w-4 h-4" />
          </a>
        </header>
        <iframe
          src={step.path}
          title={step.title}
          className="flex-1 w-full border-0 bg-black"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#020408] text-white flex flex-col">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] rounded-full bg-[#00ff88]/10 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-[300px] h-[300px] rounded-full bg-[#00e5ff]/10 blur-[100px]" />
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-6 py-16 flex-1 flex flex-col justify-center">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00ff88]/30 bg-[#00ff88]/5 text-[#00ff88] text-xs font-mono mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00ff88] animate-pulse" />
            CLONED FUNNEL PREVIEW
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            WhatSpy — 3-Step Funnel
          </h1>
          <p className="text-white/50 text-base max-w-xl mx-auto">
            Faithful clone of the stalkea.app landing funnel. Each step opens in
            an embedded preview, fully functional with original assets.
          </p>
        </div>

        <div className="grid gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <button
                key={step.id}
                onClick={() => setActive(step.id)}
                className="group text-left bg-white/[0.03] border border-white/10 rounded-2xl p-5 hover:border-white/30 hover:bg-white/[0.06] transition-all"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `${step.accent}1a`,
                      border: `1px solid ${step.accent}40`,
                    }}
                  >
                    <Icon className="w-6 h-6" style={{ color: step.accent }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-white/40">
                        0{i + 1}
                      </span>
                      <h2 className="text-lg font-semibold">{step.title}</h2>
                    </div>
                    <p className="text-sm text-white/50 mt-0.5">{step.desc}</p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </div>
              </button>
            );
          })}
        </div>

        <p className="text-center text-xs text-white/30 mt-10">
          Original source: stalkea.app/spp — cloned for educational purposes.
        </p>
      </main>
    </div>
  );
}

export default App;
