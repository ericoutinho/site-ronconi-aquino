import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center pt-20">
      {/* Background with real corporate law office image and dark navy overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="bg-hero-image.jpg"
          alt="Ambiente Jurídico Corporativo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#00152F]/85"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-12 gap-12">
        <div className="md:col-span-8 lg:col-span-7 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl text-white font-bold leading-[1.15] mb-6">
            Advocacia estratégica, ética e focada em resultados
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-light">
            A atuação de nossa equipe é pautada na seriedade, transparência, atenção técnica e no compromisso real com a sua segurança jurídica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contato" 
              className="bg-sober-red text-white px-8 py-4 rounded-sm font-bold text-lg hover-sober-red transition-all shadow-lg text-center inline-block"
            >
              Agende uma consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;