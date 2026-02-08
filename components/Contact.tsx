import React from 'react';
import { Lock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-8 serif">Precisa de orientação jurídica?</h2>
            <div className="space-y-6 text-slate-300 text-lg">
              <p>Não deixe seus direitos em risco por falta de informação ou orientação adequada.</p>
              <p>Fale agora com um advogado e entenda qual é o melhor caminho para o seu caso.</p>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-6">
              <a
                href="tel:27996905033"
                className="bg-sober-red text-white px-8 py-4 rounded-sm font-bold hover-sober-red transition-all text-center shadow-lg inline-block"
              >
                Entrar em contato agora
              </a>
              <a
                href="https://wa.me/5527996905033"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/30 text-white px-8 py-4 rounded-sm font-bold hover:bg-white/10 transition-all text-center inline-block"
              >
                Agendar consulta jurídica
              </a>
            </div>
          </div>

          <div className="bg-white/5 p-10 rounded-sm border border-white/10 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-6 text-white serif">Fale conosco</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-semibold">Nome Completo</label>
                <input type="text" required className="w-full bg-navy/50 border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-sober-red transition-colors text-slate-600" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-semibold">Telefone / WhatsApp</label>
                <input type="tel" required className="w-full bg-navy/50 border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-sober-red transition-colors text-slate-600" />
              </div>
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-2 font-semibold">Mensagem</label>
                <textarea rows={4} required className="w-full bg-navy/50 border border-white/10 px-4 py-3 rounded-sm focus:outline-none focus:border-sober-red transition-colors text-slate-600 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-sober-red py-4 rounded-sm font-bold hover-sober-red transition-all flex items-center justify-center gap-3">
                <Lock className="w-4 h-4" />
                Enviar Mensagem Segura
              </button>
              <p className="text-center text-[10px] text-slate-500 uppercase tracking-widest mt-4">
                Privacidade e Sigilo Profissional Garantidos
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;