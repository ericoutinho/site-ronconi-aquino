
import React from 'react';
import { Check } from 'lucide-react';

const Differentials: React.FC = () => {
  const points = [
    "Atendimento direto com o advogado",
    "Análise estratégica de cada caso",
    "Atualização constante da legislação",
    "Ética, sigilo e responsabilidade",
    "Foco em soluções eficientes e seguras"
  ];

  return (
    <section id="diferenciais" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-sober-red rounded-sm p-12 md:p-20 relative">
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-white font-bold mb-8">
                Por que escolher nosso escritório?
              </h2>
              <ul className="space-y-4">
                {points.map((point, idx) => (
                  <li key={idx} className="flex items-center text-white/90">
                    <Check className="w-5 h-5 mr-3 text-white flex-shrink-0" strokeWidth={3} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-white/10 pt-8">
                <p className="text-2xl text-white italic serif">
                  "O seu caso é importante para nós."
                </p>
              </div>
            </div>

            <div className="hidden md:block">
              <img
                src={"/differentials-image.jpg"}
                alt="Law Scale Professional"
                className="rounded-sm shadow-2xl grayscale-[0.3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentials;
