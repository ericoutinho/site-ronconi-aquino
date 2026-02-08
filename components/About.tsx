
import React from 'react';
import { Heart, Scale, MessageSquare } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    { title: "Atendimento humanizado", icon: <Heart className="w-8 h-8 text-sober-red" strokeWidth={1.5} /> },
    { title: "Atuação técnica e responsável", icon: <Scale className="w-8 h-8 text-sober-red" strokeWidth={1.5} /> },
    { title: "Comunicação clara e transparente", icon: <MessageSquare className="w-8 h-8 text-sober-red" strokeWidth={1.5} /> }
  ];

  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl text-navy font-bold mb-8 relative after:content-[''] after:block after:w-16 after:h-1 after:bg-sober-red after:mt-4">
              Compromisso com a justiça e com você
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Nosso escritório atua com base na ética, no estudo constante da legislação e na busca das melhores soluções jurídicas para cada cliente.
              </p>
              <p>
                Entendemos que por trás de cada processo existe uma história, um problema real e uma expectativa de solução.
              </p>
              <p>
                Por isso, oferecemos um atendimento próximo, linguagem clara e estratégias jurídicas alinhadas aos seus objetivos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-center p-6 bg-slate-50 border-l-4 border-navy shadow-sm transition-transform hover:-translate-y-1">
                <div className="mr-6 bg-white p-3 rounded-full shadow-sm">
                  {item.icon}
                </div>
                <span className="text-xl font-semibold text-navy serif">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
