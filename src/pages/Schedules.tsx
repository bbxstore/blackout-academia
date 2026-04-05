import React, { useEffect } from 'react';
import { Clock, MessageCircle, ArrowLeft, Sun, Moon, Info } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GYM_INFO, getWhatsAppUrl, WHATSAPP_MESSAGES } from '../constants';
import logoHorizontal from '../assets/logo-horizontal.webp';
import scheduleBoard from '../assets/schedule-board.jpg';

const ScheduleCard = ({ title, classes, icon: Icon }: { title: string; classes: any[]; icon: any }) => (
  <div className="card-dark border-l-4 border-l-brand-green/20 hover:border-l-brand-green transition-all duration-300">
    <div className="flex items-center gap-3 mb-8">
      <div className="text-brand-green bg-brand-green/10 p-3">
        <Icon size={24} />
      </div>
      <h3 className="text-2xl font-display italic uppercase tracking-tight">{title}</h3>
    </div>

    <div className="space-y-6">
      {classes.map((item, idx) => (
        <div key={idx} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
          <h4 className="text-brand-green font-accent font-black uppercase text-xs tracking-widest mb-3">
            // {item.day}
          </h4>
          <div className="space-y-2">
            {item.sessions.map((session: any, sIdx: number) => (
              <div key={sIdx} className="flex justify-between items-center group gap-3">
                <span className="text-white font-display italic uppercase text-lg group-hover:text-brand-green transition-colors">
                  {session.name}
                </span>
                <span className="bg-white/5 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-brand-silver border border-white/10 group-hover:border-brand-green/30 transition-colors whitespace-nowrap">
                  {session.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function Schedules() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const morningClasses = [
    { day: 'Segunda', sessions: [{ name: 'Ritbox', time: '08h' }] },
    { day: 'Terça', sessions: [{ name: 'Funcional', time: '07h' }, { name: 'Spinning e Jump', time: '08h' }] },
    { day: 'Quarta', sessions: [{ name: 'Ritbox', time: '08h' }] },
    { day: 'Quinta', sessions: [{ name: 'Funcional', time: '07h' }, { name: 'Spinning e Jump', time: '08h' }] },
  ];

  const nightClasses = [
    { day: 'Segunda', sessions: [{ name: 'Spinning', time: '19h' }, { name: 'Ritmos', time: '19h' }] },
    { day: 'Terça', sessions: [{ name: 'Jump', time: '18h' }, { name: 'HIIT', time: '19h' }] },
    { day: 'Quarta', sessions: [{ name: 'Spinning', time: '19h' }, { name: 'Ritmos', time: '19h' }] },
    { day: 'Quinta', sessions: [{ name: 'Jump', time: '18h' }, { name: 'HIIT', time: '19h' }] },
    { day: 'Sexta', sessions: [{ name: 'Spinning', time: '19h' }] },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black">
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl py-4 border-b border-brand-green/20">
        <div className="container mx-auto px-6 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-3 group min-w-0">
            <ArrowLeft className="text-brand-green group-hover:-translate-x-1 transition-transform shrink-0" />
            <img src={logoHorizontal} alt="Blackout Academia" className="h-20 md:h-24 lg:h-28 w-auto min-w-0" />
          </Link>

          <a
            href={getWhatsAppUrl(WHATSAPP_MESSAGES.classes)}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-green text-black px-4 py-2 text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-transform whitespace-nowrap"
          >
            Falar no WhatsApp
          </a>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-20">
            <span className="text-brand-green font-accent font-black tracking-[0.4em] uppercase text-xs mb-4 block">
              // Planeje seu treino
            </span>
            <h1 className="text-5xl md:text-8xl font-display italic uppercase leading-none mb-8 tracking-tighter">
              HORÁRIOS & <br />
              <span className="text-brand-green text-glow-green">AULAS COLETIVAS.</span>
            </h1>
            <p className="text-brand-silver/70 font-accent font-bold text-lg max-w-2xl leading-relaxed">
              Organize sua rotina de treino e veja os horários da Blackout. Em caso de ajuste de grade, confirme diretamente com a equipe pelo WhatsApp antes de sair de casa.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
            <div className="lg:col-span-1">
              <div className="bg-brand-graphite border-2 border-brand-green/20 p-8 bg-carbon relative h-full">
                <div className="flex items-center gap-3 mb-10">
                  <div className="text-brand-green">
                    <Clock size={32} />
                  </div>
                  <h2 className="text-3xl font-display italic uppercase tracking-tight">Funcionamento</h2>
                </div>

                <div className="space-y-4">
                  {[
                    { day: 'SEG A SEX', time: '06h às 22h' },
                    { day: 'SÁBADO', time: '08h às 14h' },
                    { day: 'DOMINGO', time: 'FECHADO', closed: true },
                  ].map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center py-4 border-b border-white/5 last:border-0 gap-4">
                      <span className="font-display italic uppercase text-lg">{item.day}</span>
                      <span className={`font-accent font-black uppercase tracking-widest text-xs px-3 py-1 whitespace-nowrap ${item.closed ? 'text-red-500 bg-red-500/10' : 'text-brand-green bg-brand-green/10'}`}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-10 overflow-hidden border border-brand-green/15 bg-black">
                  <img src={scheduleBoard} alt="Quadro de horários Blackout" className="w-full h-auto object-cover" />
                </div>

                <div className="mt-8 p-4 bg-brand-green/5 border border-brand-green/10 flex gap-4 items-start">
                  <Info className="text-brand-green shrink-0" size={20} />
                  <p className="text-[10px] text-brand-silver/60 font-accent font-black uppercase tracking-widest leading-relaxed">
                    Se houver qualquer dúvida visual em algum horário da grade, considerar apenas o que estiver claramente legível e confirmar o restante com a equipe.
                  </p>
                </div>
              </div>
            </div>

            <ScheduleCard title="Aulas manhã" classes={morningClasses} icon={Sun} />
            <ScheduleCard title="Aulas noite" classes={nightClasses} icon={Moon} />
          </div>

          <section className="bg-brand-green py-20 px-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-carbon opacity-20" />
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="bg-black text-brand-green px-4 py-1 font-display italic text-sm mb-6 skew-x-[-12deg] inline-block">
                ação imediata
              </div>
              <h2 className="text-4xl md:text-7xl font-display italic uppercase text-black leading-none mb-6 tracking-tighter">
                QUER CONFIRMAR <br />
                <span className="text-white drop-shadow-lg">TURMA OU PLANO?</span>
              </h2>
              <p className="text-black font-accent font-black uppercase text-sm md:text-base tracking-widest mb-10 max-w-xl leading-relaxed">
                Fale agora com a equipe no WhatsApp e tire suas dúvidas sobre matrícula, aulas coletivas, horários e disponibilidade atual.
                <span className="text-black/60 text-[10px] mt-2 block">Também atendemos via Wellhub (antigo Gympass)</span>
              </p>
              <a
                href={getWhatsAppUrl(WHATSAPP_MESSAGES.enrollment)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-brand-green px-12 py-6 font-display italic uppercase text-2xl hover:scale-105 transition-transform flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
              >
                Falar no WhatsApp <MessageCircle size={28} />
              </a>
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-white/5 bg-brand-black">
        <div className="container mx-auto px-6 text-center">
          <p className="text-brand-silver/30 text-[10px] font-black uppercase tracking-[0.4em]">
            © {new Date().getFullYear()} {GYM_INFO.name} - Ramos, RJ.
          </p>
        </div>
      </footer>
    </div>
  );
}
