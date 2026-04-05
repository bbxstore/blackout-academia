import React, { useState, useEffect } from 'react';
import {
  Instagram, MapPin, Phone, Clock, CheckCircle2, ArrowRight, Menu, X,
  Dumbbell, Users, Zap, ShieldCheck, MessageCircle, Navigation, GalleryHorizontal, Star
} from 'lucide-react';
import { GYM_INFO, getWhatsAppUrl, MAPS_URL, MAPS_EMBED_URL, WHATSAPP_MESSAGES } from './constants';
import Schedules from './pages/Schedules';
import logoHorizontal from './assets/logo-horizontal.webp';
import logoSymbol from './assets/logo-symbol.webp';
import heroImage from './assets/gym-hero.webp';
import aboutImage from './assets/gym-floor-1.webp';
import floorImage from './assets/gym-floor-2.webp';
import machineImage from './assets/gym-floor-3.webp';
import neonImage from './assets/gym-neon.webp';

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="mb-16 text-left relative">
    {subtitle && (
      <span className="text-brand-green font-accent font-black tracking-[0.2em] uppercase text-xs mb-3 block">
        // {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-6xl font-display text-white uppercase leading-none diagonal-line inline-block">
      {children}
    </h2>
  </div>
);

const BrandLogo = ({ compact = false, className = '' }: { compact?: boolean; className?: string }) => (
  <img
    src={compact ? logoSymbol : logoHorizontal}
    alt="Blackout Academia"
    className={compact ? `h-14 md:h-16 w-auto ${className}` : `h-28 md:h-32 lg:h-36 w-auto ${className}`}
  />
);

const NeonButton = ({
  children,
  href,
  className = "",
  variant = "primary"
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
  variant?: "primary" | "outline"
}) => {
  const styles = variant === "primary"
    ? "btn-neon"
    : "border-2 border-brand-green text-brand-green font-display uppercase tracking-tighter px-8 py-4 rounded-none hover:bg-brand-green hover:text-black transition-all duration-300 flex items-center justify-center gap-2";

  const external = href.startsWith('http');

  return (
    <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={`${styles} ${className}`}>
      {children}
      <ArrowRight className="w-5 h-5" />
    </a>
  );
};

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Planos', href: '#planos' },
    { name: 'Horários', href: '/horarios' },
    { name: 'Contato', href: '#contato' },
  ];

  const modalities = [
    { name: 'Musculação', img: floorImage, desc: 'Espaço pensado para treino diário, constância e evolução de verdade.' },
    { name: 'Aulas Coletivas', img: neonImage, desc: 'Grade com opções para sair da rotina e manter a motivação lá em cima.' },
    { name: 'Funcional + HIIT', img: machineImage, desc: 'Treinos dinâmicos para condicionamento, intensidade e resistência.' },
    { name: 'Spinning + Ritmos', img: aboutImage, desc: 'Mais variedade para encaixar movimento, cardio e energia na semana.' },
  ];

  const galleryImages = [
    { img: heroImage, title: 'Recepção visual da marca', text: 'Logo forte, luz verde e identidade própria logo na entrada do treino.' },
    { img: aboutImage, title: 'Ambiente organizado', text: 'Estrutura bem cuidada para quem busca constância e treino de verdade.' },
    { img: floorImage, title: 'Espaço de musculação', text: 'Máquinas distribuídas para trabalhar diferentes grupos musculares.' },
    { img: machineImage, title: 'Clima Blackout', text: 'Academia raiz com visual limpo, escuro e foco total em superação.' },
  ];

  const testimonials = [
    { name: 'Aluno da região', text: 'Gostei da educação do atendente e do treinador. Ambiente bacana e com o que precisamos para treinar bem.' },
    { name: 'Cliente Blackout', text: 'Recepção sensacional, professores prestativos e aparelhos sempre em dia.' },
    { name: 'Treino em Ramos', text: 'Ambiente limpo, equipamentos bem cuidados e sempre tem professor disponível para ajudar.' },
    { name: 'Avaliação real', text: 'Boa academia, bom preço e ótima estrutura para quem quer treinar de verdade.' },
  ];

  return (
    <div className="min-h-screen bg-brand-black text-white selection:bg-brand-green selection:text-black">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-black/90 backdrop-blur-xl py-3 border-b border-brand-green/20' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex items-center justify-between gap-6">
          <a href="#home" className="flex items-center gap-3 group">
            <BrandLogo className="drop-shadow-[0_0_20px_rgba(57,255,20,0.18)]" />
          </a>

          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-xs font-black uppercase tracking-widest hover:text-brand-green transition-colors">
                {link.name}
              </a>
            ))}
            <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} className="text-brand-green border border-brand-green px-5 py-2 text-xs font-black uppercase tracking-widest hover:bg-brand-green hover:text-black transition-all">
              WhatsApp
            </a>
          </nav>

          <button className="lg:hidden text-brand-green" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black flex flex-col p-10 lg:hidden translate-x-0">
          <div className="flex items-center justify-between mt-6">
            <BrandLogo />
          </div>
          <div className="flex flex-col gap-8 mt-16">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase italic hover:text-brand-green">
                {link.name}
              </a>
            ))}
            <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} className="mt-10">
              Falar no WhatsApp
            </NeonButton>
          </div>
        </div>
      )}

      <div className="bg-brand-green py-2 overflow-hidden whitespace-nowrap relative z-20 border-y border-black/10">
        <div className="marquee-track flex gap-10 items-center min-w-max">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-display italic uppercase text-sm tracking-tighter flex items-center gap-4">
              #NOPAINNOGAIN <Zap size={14} /> SUPERAÇÃO <Zap size={14} /> DISCIPLINA <Zap size={14} /> QUALIDADE DE VIDA <Zap size={14} />
            </span>
          ))}
        </div>
      </div>

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} className="w-full h-full object-cover opacity-55" alt="Academia Blackout" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
          <div className="absolute inset-0 bg-carbon opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[3px] w-16 bg-brand-green shadow-[0_0_10px_rgba(57,255,20,0.8)]" />
              <span className="text-brand-green font-black uppercase tracking-[0.4em] text-sm italic">RAMOS, RJ</span>
            </div>

            <h1 className="text-5xl md:text-[6.5rem] font-display leading-[0.9] mb-8 italic uppercase tracking-tighter max-w-6xl">
              <span className="text-metal text-glow-white">TREINE COM ESTRUTURA,</span> <br />
              <span className="text-brand-green text-glow-green">ENERGIA E PREÇO JUSTO</span>
            </h1>

            <p className="text-xl md:text-2xl text-brand-silver mb-8 max-w-3xl font-accent font-black uppercase tracking-tight leading-tight">
              Musculação, aulas coletivas, atendimento próximo e uma rotina pensada para quem quer sair do sofá e entrar em ação.
            </p>

            <div className="flex items-center gap-4 mb-12 flex-wrap">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 flex items-center gap-2">
                <ShieldCheck size={16} className="text-brand-green" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white">Aceitamos Wellhub</span>
              </div>
              <span className="text-brand-silver/40 text-[9px] font-black uppercase tracking-widest">Antigo Gympass</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl">
              {[
                { icon: <MapPin size={18} />, text: 'SOCIAL RAMOS CLUBE' },
                { icon: <ShieldCheck size={18} />, text: 'AMBIENTE LIMPO' },
                { icon: <Users size={18} />, text: 'SUPORTE DOS PROFESSORES' },
                { icon: <Dumbbell size={18} />, text: 'MUSCULAÇÃO + COLETIVAS' },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-brand-silver/80 font-accent font-black text-[10px] md:text-xs uppercase tracking-widest border-l border-brand-green/30 pl-3">
                  <span className="text-brand-green">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} className="text-xl">
                QUERO TREINAR NA BLACKOUT
              </NeonButton>
              <a href="/horarios" className="flex items-center justify-center gap-3 font-display uppercase italic text-xl text-white hover:text-brand-green transition-all border-2 border-white/10 px-8 py-4 hover:border-brand-green/50">
                VER HORÁRIOS E AULAS <ArrowRight className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="beneficios" className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-carbon opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Diferenciais">ESTRUTURA QUE AJUDA VOCÊ A CONTINUAR</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Users size={32} />, title: 'Atendimento Próximo', desc: 'Equipe presente para orientar, apoiar e manter sua rotina de treino no caminho certo.' },
              { icon: <Dumbbell size={32} />, title: 'Academia Raiz', desc: 'Ambiente focado em treino de verdade, com equipamentos bem distribuídos e proposta direta.' },
              { icon: <Zap size={32} />, title: 'Energia de Superação', desc: 'Visual forte, clima motivador e espaço pensado para disciplina e evolução.' },
              { icon: <MapPin size={32} />, title: 'Ponto Conhecido da Região', desc: 'Localizada dentro do Social Ramos Clube, com acesso prático para quem é de Ramos e arredores.' },
              { icon: <ShieldCheck size={32} />, title: 'Aceitamos Wellhub', desc: 'Treine na Blackout usando seu benefício Wellhub. Consulte a equipe para confirmar os detalhes.' },
              { icon: <Clock size={32} />, title: 'Seg a Sáb', desc: 'Horários amplos para encaixar musculação e aulas coletivas na sua rotina.' },
            ].map((b, i) => (
              <div key={i} className="card-dark group border-l-4 border-l-brand-green/20 hover:border-l-brand-green transition-all duration-300 hover:-translate-y-1">
                <div className="text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                <h3 className="text-xl font-display mb-3 italic uppercase tracking-tight group-hover:text-brand-green transition-colors">{b.title}</h3>
                <p className="text-brand-silver/70 font-accent font-bold text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle subtitle="Sobre">BLACKOUT É TREINO DE VERDADE EM RAMOS</SectionTitle>
            <p className="text-brand-silver/80 text-lg font-accent font-bold leading-relaxed mb-6">
              A Blackout Academia é o lugar certo para quem quer treinar com estrutura, bom atendimento e preço justo. Localizada dentro do Social Ramos Clube, a academia une ambiente motivador, disciplina e apoio para quem quer sair do sedentarismo, voltar a treinar ou manter constância.
            </p>
            <p className="text-brand-silver/70 text-base font-accent font-bold leading-relaxed mb-10">
              Ambiente limpo, professores prestativos, equipamentos bem cuidados e uma rotina pensada para transformação física, superação e qualidade de vida.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {['Ambiente motivador', 'Boa manutenção', 'Atendimento elogiado', 'Preço justo'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-white">
                  <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0" /> {item}
                </div>
              ))}
            </div>

            <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.visit)}>QUERO CONHECER A ACADEMIA</NeonButton>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-brand-green/20 pointer-events-none" />
            <img src={aboutImage} alt="Interior da Blackout Academia" className="w-full h-[540px] object-cover" />
          </div>
        </div>
      </section>

      <section id="modalidades" className="py-32 bg-brand-dark">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Aulas e treinos">MAIS OPÇÕES PARA SUA ROTINA</SectionTitle>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {modalities.map((m) => (
              <div key={m.name} className="group overflow-hidden border border-white/10 bg-black/40">
                <div className="h-72 overflow-hidden relative">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-display italic uppercase mb-3 text-white group-hover:text-brand-green transition-colors">{m.name}</h3>
                  <p className="text-brand-silver/70 text-sm font-accent font-bold leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-brand-silver/50 text-xs font-black uppercase tracking-[0.25em] mt-8">Modalidades, turmas e horários podem variar. Consulte a equipe pelo WhatsApp para confirmar a disponibilidade atual.</p>
        </div>
      </section>

      <section id="galeria" className="py-32">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Galeria real">CONHEÇA O CLIMA DA BLACKOUT</SectionTitle>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {galleryImages.map((item) => (
              <div key={item.title} className="bg-brand-dark border border-white/10 overflow-hidden group">
                <img src={item.img} alt={item.title} className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3 text-brand-green"><GalleryHorizontal size={18} /><span className="text-[10px] font-black uppercase tracking-[0.3em]">Blackout</span></div>
                  <h3 className="text-white font-display italic uppercase text-xl mb-2">{item.title}</h3>
                  <p className="text-brand-silver/70 text-sm font-accent font-bold">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="py-32 bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Oferta">PLANO BLACKOUT YEAR</SectionTitle>
          <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-8 items-stretch">
            <div className="border border-brand-green/30 bg-black/60 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-green text-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.25em]">Condição promocional</div>
              <div className="max-w-3xl pt-8">
                <p className="text-brand-silver/50 text-sm font-black uppercase tracking-[0.4em] mb-5">Mais economia para treinar</p>
                <h3 className="text-4xl md:text-6xl font-display italic uppercase leading-none mb-6 text-white">DE R$120/MÊS <span className="text-brand-green block mt-2">POR 10X DE R$99,90</span></h3>
                <p className="text-brand-silver/75 font-accent font-bold text-lg mb-8 leading-relaxed">Sem taxa de matrícula, sem avaliação e com acesso à musculação e atividades da academia. Consulte a equipe para confirmar todos os detalhes da condição atual.</p>
                <div className="grid sm:grid-cols-2 gap-4 mb-10">
                  {['Sem taxa de matrícula', 'Sem avaliação', 'Preço justo para continuar', 'Atendimento próximo para tirar dúvidas'].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-black uppercase tracking-wider text-white">
                      <CheckCircle2 className="text-brand-green w-5 h-5 shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.offer)}>QUERO GARANTIR ESSA CONDIÇÃO</NeonButton>
              </div>
            </div>
            <div className="border border-white/10 bg-black/50 p-8 flex flex-col justify-between">
              <div>
                <p className="text-brand-green text-[10px] font-black uppercase tracking-[0.35em] mb-4">Por que vale a pena</p>
                <h4 className="text-3xl font-display italic uppercase mb-6">TREINE PAGANDO UM VALOR JUSTO</h4>
                <p className="text-brand-silver/70 text-sm font-accent font-bold leading-relaxed mb-8">A proposta da Blackout é unir estrutura funcional, variedade de treino e apoio real para quem quer mudança de estilo de vida sem pagar mais por isso.</p>
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-brand-green pl-4">
                  <p className="text-white text-xs font-black uppercase tracking-[0.25em]">Musculação + coletivas</p>
                </div>
                <div className="border-l-2 border-brand-green pl-4">
                  <p className="text-white text-xs font-black uppercase tracking-[0.25em]">Academia raiz com qualidade</p>
                </div>
                <div className="border-l-2 border-brand-green pl-4">
                  <p className="text-white text-xs font-black uppercase tracking-[0.25em]">Wellhub aceito</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="py-32">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Avaliações">QUEM TREINA AQUI PERCEBE A DIFERENÇA</SectionTitle>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-brand-dark border border-white/10 p-6">
                <div className="flex items-center gap-1 text-brand-green mb-4">{Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                <p className="text-brand-silver/80 text-sm font-accent font-bold leading-relaxed mb-6">“{t.text}”</p>
                <span className="text-white text-[10px] font-black uppercase tracking-[0.35em]">{t.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="horarios" className="py-32 bg-brand-dark">
        <div className="container mx-auto px-6 grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-start">
          <div>
            <SectionTitle subtitle="Funcionamento">HORÁRIOS QUE CABEM NA SUA ROTINA</SectionTitle>
            <p className="text-brand-silver/80 font-accent font-bold text-lg leading-relaxed mb-8">Funcionamos de segunda a sexta, das 06h às 22h, e aos sábados, das 08h às 14h.</p>
            <div className="space-y-4 mb-8">
              {[
                ['Segunda a Sexta', GYM_INFO.hours.weekdays],
                ['Sábado', GYM_INFO.hours.saturday],
                ['Domingo', GYM_INFO.hours.sunday]
              ].map(([day, time]) => (
                <div key={day} className="flex items-center justify-between border-b border-white/10 py-3 text-sm font-black uppercase tracking-widest">
                  <span className="text-white">{day}</span>
                  <span className="text-brand-green">{time}</span>
                </div>
              ))}
            </div>
            <a href="/horarios" className="inline-flex items-center gap-3 font-display uppercase italic text-xl text-white hover:text-brand-green transition-all border-2 border-white/10 px-8 py-4 hover:border-brand-green/50">VER QUADRO DE AULAS <ArrowRight className="w-6 h-6" /></a>
          </div>
          <div className="border border-white/10 overflow-hidden bg-black/50">
            <img src={neonImage} alt="Ambiente Blackout" className="w-full h-80 object-cover" />
            <div className="p-8">
              <p className="text-brand-green text-[10px] font-black uppercase tracking-[0.35em] mb-3">Confirmação rápida</p>
              <h3 className="text-3xl font-display italic uppercase mb-4">FICOU NA DÚVIDA SOBRE A GRADE?</h3>
              <p className="text-brand-silver/70 text-sm font-accent font-bold leading-relaxed mb-6">Em caso de ajuste de grade, turma ou horário, confirme diretamente com a equipe pelo WhatsApp.</p>
              <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.classes)}>QUERO CONFIRMAR OS HORÁRIOS</NeonButton>
            </div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-32">
        <div className="container mx-auto px-6 grid lg:grid-cols-[1fr_1fr] gap-10 items-stretch">
          <div>
            <SectionTitle subtitle="Contato">VENHA CONHECER A BLACKOUT</SectionTitle>
            <p className="text-brand-silver/80 font-accent font-bold text-lg leading-relaxed mb-10">Treino de verdade para quem quer transformação de verdade. Fale com a equipe, tire dúvidas sobre planos, aulas e horários e comece agora.</p>

            <div className="space-y-5 mb-10">
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                <MapPin className="text-brand-green mt-1 shrink-0" />
                <div>
                  <p className="text-white font-display italic uppercase text-lg group-hover:text-brand-green transition-colors">R. Aureliano Lessa, 97</p>
                  <p className="text-brand-silver/60 text-sm font-bold">Dentro do Social Ramos Clube, Ramos - Rio de Janeiro</p>
                </div>
              </a>
              <a href={`tel:${GYM_INFO.phone.replace(/\D/g, '')}`} className="flex items-center gap-4 group">
                <Phone className="text-brand-green shrink-0" />
                <div>
                  <p className="text-white font-display italic uppercase text-lg group-hover:text-brand-green transition-colors">{GYM_INFO.phone}</p>
                  <p className="text-brand-silver/60 text-sm font-bold">Fale com a academia</p>
                </div>
              </a>
              <a href={GYM_INFO.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Instagram className="text-brand-green shrink-0" />
                <div>
                  <p className="text-white font-display italic uppercase text-lg group-hover:text-brand-green transition-colors">Instagram oficial</p>
                  <p className="text-brand-silver/60 text-sm font-bold">@acadblackout</p>
                </div>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)}>CHAMAR NO WHATSAPP</NeonButton>
              <NeonButton href={MAPS_URL} variant="outline">COMO CHEGAR</NeonButton>
            </div>
          </div>

          <div className="border border-white/10 bg-black/40 overflow-hidden min-h-[520px]">
            <iframe
              title="Localização Blackout Academia"
              src={MAPS_EMBED_URL}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[520px]"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 bg-black py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr] gap-10 mb-14">
            <div>
              <BrandLogo className="mb-6 max-w-[260px]" />
              <p className="text-brand-silver/60 max-w-md text-sm font-accent font-bold leading-relaxed">Academia em Ramos com proposta forte, ambiente motivador, treino de verdade, bom atendimento e preço justo para quem quer começar ou manter constância.</p>
            </div>

            <div>
              <h4 className="text-white font-display italic uppercase text-sm mb-6 tracking-widest">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-brand-silver/60 hover:text-brand-green text-xs font-black uppercase tracking-widest transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-display italic uppercase text-sm mb-6 tracking-widest">Contato</h4>
              <ul className="space-y-4">
                <li className="flex gap-3 text-brand-silver/60 text-xs font-bold">
                  <MapPin size={16} className="text-brand-green shrink-0" />
                  <span>{GYM_INFO.address}</span>
                </li>
                <li className="flex gap-3 text-brand-silver/60 text-xs font-bold">
                  <Phone size={16} className="text-brand-green shrink-0" />
                  <span>{GYM_INFO.phone}</span>
                </li>
                <li className="flex gap-3 text-brand-silver/60 text-xs font-bold">
                  <Clock size={16} className="text-brand-green shrink-0" />
                  <div>
                    <p>SEG - SEX: {GYM_INFO.hours.weekdays}</p>
                    <p>SÁB: {GYM_INFO.hours.saturday}</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-white font-display italic uppercase text-sm mb-2 tracking-widest">Benefício</h4>
              <div className="bg-brand-green/10 border border-brand-green/20 p-4 flex items-center gap-4">
                <ShieldCheck className="text-brand-green shrink-0" size={24} />
                <div>
                  <p className="text-white font-display italic uppercase text-xs">Aceitamos Wellhub</p>
                  <p className="text-brand-silver/40 text-[9px] font-black uppercase tracking-widest">Antigo Gympass</p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto border-t border-white/5 pt-12 text-center">
            <p className="text-brand-silver/40 text-[10px] font-black uppercase tracking-[0.4em] leading-loose">
              © {new Date().getFullYear()} BLACKOUT ACADEMIA - RAMOS, RIO DE JANEIRO. <br />
              TREINE COM ESTRUTURA, ENERGIA E PREÇO JUSTO.
            </p>
          </div>
        </div>
      </footer>

      <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-brand-green text-black px-4 py-4 md:px-5 md:py-4 rounded-full hover:scale-110 transition-transform shadow-[0_0_30px_rgba(57,255,20,0.4)] flex items-center justify-center gap-3">
        <MessageCircle size={28} />
        <span className="hidden md:block text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
      </a>
    </div>
  );
};

export default function App() {
  const [path, setPath] = useState(
    typeof window !== 'undefined' ? window.location.pathname : '/'
  );

  useEffect(() => {
    const onPop = () => setPath(window.location.pathname);
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  return path === '/horarios' ? <Schedules /> : <Home />;
}
