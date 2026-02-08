
import React from 'react';
import { Gavel, Briefcase, Building2, ShieldCheck } from 'lucide-react';

const Expertise: React.FC = () => {
  const areas = [
    { 
      title: "Civil", 
      desc: "Consultoria e litígios cíveis com foco em prevenção e resolução de conflitos.",
      icon: <Gavel className="w-[28.8px] h-[28.8px] text-navy" strokeWidth={1.5} />
    },
    { 
      title: "Trabalhista", 
      desc: "Defesa dos interesses laborais com base na legislação atualizada.",
      icon: <Briefcase className="w-[28.8px] h-[28.8px] text-navy" strokeWidth={1.5} />
    },
    { 
      title: "Empresarial", 
      desc: "Acompanhamento estratégico para segurança jurídica do seu negócio.",
      icon: <Building2 className="w-[28.8px] h-[28.8px] text-navy" strokeWidth={1.5} />
    },
    { 
      title: "Previdenciário", 
      desc: "Auxílio na obtenção de benefícios e planejamento de aposentadorias.",
      icon: <ShieldCheck className="w-[28.8px] h-[28.8px] text-navy" strokeWidth={1.5} />
    }
  ];

  return (
    <section id="atuacao" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[32.4px] md:text-[38.88px] text-navy font-bold mb-4">Como podemos ajudar você</h2>
          <div className="w-20 h-1 bg-sober-red mx-auto"></div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {areas.map((area, idx) => (
            <div key={idx} className="bg-white p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-[57.6px] h-[57.6px] bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-navy/10 transition-colors">
                {area.icon}
              </div>
              <h3 className="text-[21.6px] font-bold text-sober-red mb-4 serif">{area.title}</h3>
              <p className="text-slate-500 text-[15.12px] leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
