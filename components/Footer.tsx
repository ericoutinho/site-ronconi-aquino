import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, MessageCircle, Clock, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleTerms = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsTermsOpen(!isTermsOpen);
  };

  const togglePrivacy = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPrivacyOpen(!isPrivacyOpen);
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-16 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-start">
          {/* Coluna 1: Logo, Contatos e Horário */}
          <div className="flex flex-col space-y-8">
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-tight serif leading-tight">
                <span className="text-sober-red">RONCONI</span>
                <span className="text-navy"> & </span>
                <span className="text-sober-red">AQUINO</span>
              </div>
              <span className="text-[10px] tracking-[0.2em] font-medium text-slate-500 uppercase mt-1">Advogados Associados</span>
            </div>

            <div className="space-y-4 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sober-red flex-shrink-0" />
                <span>(27) 99690-5033</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sober-red flex-shrink-0" />
                <span>contato@ronconiaquino.adv.br</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sober-red flex-shrink-0 mt-1" />
                <span>R. São Francisco, 215, Centro, Vitória - ES <br />29015-200</span>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <Clock className="w-4 h-4 text-sober-red flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-navy text-[11px] uppercase tracking-wider mb-1">Horário de Funcionamento</p>
                  <p className="text-xs mb-2">Segunda à Sexta: 09:00h às 18:00h</p>
                  <p className="text-xs">Sábados: 09:00h às 12:00h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Espaço para equilíbrio visual */}
          <div className="hidden lg:flex flex-col items-center">
          </div>

          {/* Coluna 3: Frase Institucional e Redes Sociais */}
          <div className="flex flex-col md:items-end lg:items-end md:text-right space-y-8">
            <p className="text-slate-500 text-[15.4px] leading-relaxed italic max-w-xs">
              "Atuação jurídica pautada na ética, transparência e compromisso com resultados."
            </p>

            <div className="flex gap-4">
              <a href="https://www.facebook.com/ronconiaquino" className="w-[47.92px] h-[47.92px] rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-[#8B1A1A] hover:text-white transition-all shadow-sm" aria-label="Facebook">
                <Facebook className="w-[21.3px] h-[21.3px]" />
              </a>
              <a href="https://www.instagram.com/ronconi_aquino" className="w-[47.92px] h-[47.92px] rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-[#8B1A1A] hover:text-white transition-all shadow-sm" aria-label="Instagram">
                <Instagram className="w-[21.3px] h-[21.3px]" />
              </a>
              <a href="https://wa.me/5527996905033" className="w-[47.92px] h-[47.92px] rounded-full bg-slate-50 flex items-center justify-center text-navy hover:bg-[#8B1A1A] hover:text-white transition-all shadow-sm" aria-label="WhatsApp">
                <MessageCircle className="w-[21.3px] h-[21.3px]" />
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé Inferior: Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-400 font-medium uppercase tracking-[0.2em] gap-4">
          <div>© {new Date().getFullYear()} Ronconi & Aquino Advocacia. Todos os direitos reservados.</div>
          <div className="flex gap-8">
            <a href="#" onClick={toggleTerms} className="hover:text-navy transition-colors">Termos de Uso</a>
            <a href="#" onClick={togglePrivacy} className="hover:text-navy transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>

      {/* Modal de Termos de Uso */}
      {isTermsOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-sm shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-2xl font-bold text-navy serif">Termos de Uso</h3>
              <button onClick={() => setIsTermsOpen(false)} className="text-slate-400 hover:text-navy transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 space-y-6 leading-relaxed">
              <section>
                <h4 className="font-bold text-navy mb-2 serif">1. Aceitação dos Termos</h4>
                <p>Ao acessar e utilizar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nosso site.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">2. Uso do Conteúdo</h4>
                <p>O conteúdo das páginas deste site é para sua informação geral e uso apenas. Ele está sujeito a alterações sem aviso prévio. É proibida a reprodução, distribuição ou modificação de qualquer conteúdo sem autorização prévia por escrito.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">3. Isenção de Responsabilidade</h4>
                <p>As informações contidas neste site não constituem aconselhamento jurídico formal. Embora nos esforcemos para manter as informações atualizadas e corretas, não oferecemos garantias de qualquer tipo sobre a integridade, precisão ou disponibilidade do site ou das informações nele contidas.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">4. Propriedade Intelectual</h4>
                <p>Este site contém material que é de nossa propriedade ou licenciado para nós. Este material inclui, mas não se limita ao design, layout, aparência e gráficos. A reprodução é proibida, exceto em conformidade com o aviso de direitos autorais.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">5. Links para Outros Sites</h4>
                <p>Periodicamente, este site também pode incluir links para outros sites. Esses links são fornecidos para sua conveniência e para fornecer mais informações. Eles não significam que endossamos os sites. Não temos responsabilidade pelo conteúdo dos sites vinculados.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">6. Privacidade e Proteção de Dados</h4>
                <p>O uso de qualquer informação pessoal fornecida através deste site é regido pela nossa Política de Privacidade. Ao utilizar este site, você reconhece que as transmissões pela internet nunca são completamente privadas ou seguras.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">7. Jurisdição</h4>
                <p>O uso deste site e quaisquer disputas decorrentes de tal uso estão sujeitos às leis da República Federativa do Brasil.</p>
              </section>
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setIsTermsOpen(false)}
                className="bg-navy text-white px-6 py-2 rounded-sm font-semibold hover:bg-navy/90 transition-colors"
              >
                Entendi e Aceito
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal de Política de Privacidade */}
      {isPrivacyOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm">
          <div className="bg-white w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-sm shadow-2xl flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-100">
              <h3 className="text-2xl font-bold text-navy serif">Política de Privacidade</h3>
              <button onClick={() => setIsPrivacyOpen(false)} className="text-slate-400 hover:text-navy transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-8 overflow-y-auto text-slate-600 space-y-6 leading-relaxed">
              <section>
                <h4 className="font-bold text-navy mb-2 serif">1. Compromisso com a Privacidade</h4>
                <p>Temos o compromisso de proteger a sua privacidade. Esta política descreve como coletamos, usamos e protegemos as informações pessoais que você nos fornece através deste site.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">2. Coleta de Informações</h4>
                <p>Podemos coletar informações pessoais como nome, e-mail e telefone quando você preenche formulários de contato em nosso site. Também coletamos automaticamente dados de navegação através de cookies para melhorar sua experiência.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">3. Uso das Informações</h4>
                <p>As informações coletadas são utilizadas para responder às suas solicitações, fornecer suporte jurídico inicial, enviar informações relevantes e melhorar as funcionalidades do nosso site.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">4. Compartilhamento de Dados</h4>
                <p>Não vendemos, trocamos ou transferimos suas informações pessoais para terceiros, exceto quando necessário para cumprir uma obrigação legal ou proteger nossos direitos.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">5. Segurança dos Dados</h4>
                <p>Implementamos uma variedade de medidas de segurança para manter a segurança de suas informações pessoais. Utilizamos criptografia e outros protocolos para proteger os dados transmitidos online.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">6. Seus Direitos</h4>
                <p>De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de acessar, corrigir ou excluir suas informações pessoais mantidas por nós. Para exercer esses direitos, entre em contato através dos nossos canais oficiais.</p>
              </section>
              <section>
                <h4 className="font-bold text-navy mb-2 serif">7. Alterações na Política</h4>
                <p>Reservamo-nos o direito de atualizar esta política de privacidade a qualquer momento. Recomendamos que você revise esta página periodicamente para estar ciente de qualquer alteração.</p>
              </section>
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end">
              <button
                onClick={() => setIsPrivacyOpen(false)}
                className="bg-navy text-white px-6 py-2 rounded-sm font-semibold hover:bg-navy/90 transition-colors"
              >
                Ciente e De Acordo
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;