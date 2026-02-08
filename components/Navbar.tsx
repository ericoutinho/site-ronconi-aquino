
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex flex-col">
          <div className="text-xl font-bold tracking-tight serif leading-tight">
            <span className="text-sober-red">RONCONI</span>
            <span className="text-navy"> & </span>
            <span className="text-sober-red">AQUINO</span>
          </div>
          <span className="text-[10px] text-center tracking-[0.3em] font-medium text-slate-500 uppercase">Advogados Associados</span>
        </div>

        <div className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-600">
          <a href="#sobre" className="hover:text-navy transition-colors">Sobre</a>
          <a href="#atuacao" className="hover:text-navy transition-colors">Atuação</a>
          <a href="#diferenciais" className="hover:text-navy transition-colors">Diferenciais</a>
          <a href="#contato" className="bg-sober-red text-white px-6 py-2.5 rounded-sm hover-sober-red transition-all font-semibold shadow-sm">
            Agende uma consulta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
