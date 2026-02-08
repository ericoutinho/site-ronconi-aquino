
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    { title: "Você entra em contato", desc: "Atendimento inicial para entender sua necessidade." },
    { title: "Analisamos seu caso com atenção", desc: "Estudo técnico aprofundado da situação jurídica." },
    { title: "Apresentamos a melhor estratégia jurídica", desc: "Caminhos claros e eficientes para seus objetivos." },
    { title: "Atuamos com responsabilidade e acompanhamento constante", desc: "Monitoramento e feedback durante todo o processo." }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-navy font-bold mb-4">Um processo simples e transparente</h2>
          <div className="w-20 h-1 bg-sober-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="text-6xl font-bold text-slate-200 absolute -top-8 -left-2 z-0 transition-colors group-hover:text-navy/10 leading-none serif">
                0{idx + 1}
              </div>
              <div className="relative z-10 pt-4">
                <h3 className="text-lg font-bold text-navy mb-3 serif leading-tight">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
              {idx < 3 && (
                <div className="hidden lg:block absolute top-10 -right-4 text-slate-300">
                  <ArrowRight className="w-8 h-8" strokeWidth={1} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
