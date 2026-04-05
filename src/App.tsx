import React, { useState, useEffect } from 'react';
import {
  Instagram, MapPin, Phone, Clock, CheckCircle2, ArrowRight, Menu, X,
  Dumbbell, Users, Zap, ShieldCheck, MessageCircle, Navigation, GalleryHorizontal, Star
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
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
    className={compact ? `h-10 w-auto ${className}` : `h-14 md:h-16 w-auto ${className}`}
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

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles} ${className}`}>
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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Modalidades', href: '#modalidades' },
    { name: 'Planos', href: '#planos' },
    { name: 'Horários', href: '/horarios', isExternal: true },
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
              link.isExternal ? (
                <Link key={link.name} to={link.href} className="text-xs font-black uppercase tracking-widest hover:text-brand-green transition-colors">
                  {link.name}
                </Link>
              ) : (
                <a key={link.name} href={link.href} className="text-xs font-black uppercase tracking-widest hover:text-brand-green transition-colors">
                  {link.name}
                </a>
              )
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween' }} className="fixed inset-0 z-40 bg-brand-black flex flex-col p-10 lg:hidden">
            <div className="flex items-center justify-between mt-6">
              <BrandLogo />
            </div>
            <div className="flex flex-col gap-8 mt-16">
              {navLinks.map((link) => (
                link.isExternal ? (
                  <Link key={link.name} to={link.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase italic hover:text-brand-green">
                    {link.name}
                  </Link>
                ) : (
                  <a key={link.name} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-4xl font-display uppercase italic hover:text-brand-green">
                    {link.name}
                  </a>
                )
              ))}
              <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} className="mt-10">
                Falar no WhatsApp
              </NeonButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-brand-green py-2 overflow-hidden whitespace-nowrap relative z-20 border-y border-black/10">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
          className="flex gap-10 items-center"
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black font-display italic uppercase text-sm tracking-tighter flex items-center gap-4">
              #NOPAINNOGAIN <Zap size={14} /> SUPERAÇÃO <Zap size={14} /> DISCIPLINA <Zap size={14} /> QUALIDADE DE VIDA <Zap size={14} />
            </span>
          ))}
        </motion.div>
      </div>

      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} className="w-full h-full object-cover opacity-55" alt="Academia Blackout" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/40 to-transparent" />
          <div className="absolute inset-0 bg-carbon opacity-20" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-8 max-w-[230px] md:max-w-[320px]">
              <BrandLogo />
            </div>

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
              <Link to="/horarios" className="flex items-center justify-center gap-3 font-display uppercase italic text-xl text-white hover:text-brand-green transition-all border-2 border-white/10 px-8 py-4 hover:border-brand-green/50">
                VER HORÁRIOS E AULAS <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </motion.div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="card-dark group border-l-4 border-l-brand-green/20 hover:border-l-brand-green"
              >
                <div className="text-brand-green mb-6 group-hover:scale-110 transition-transform duration-300">{b.icon}</div>
                <h3 className="text-xl font-display mb-3 italic uppercase tracking-tight group-hover:text-brand-green transition-colors">{b.title}</h3>
                <p className="text-brand-silver/70 font-accent font-bold text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="py-32 bg-brand-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-green/10 rounded-full blur-3xl" />
              <SectionTitle subtitle="Nossa Essência">SOBRE A BLACKOUT</SectionTitle>
              <div className="space-y-6 text-brand-silver/80 font-accent font-bold text-lg leading-relaxed">
                <p>
                  A <span className="text-white font-black">Blackout Academia</span> é o lugar certo para quem quer treinar com estrutura, bom atendimento e <span className="text-brand-green">preço justo</span>.
                </p>
                <p>
                  Localizada na Rua Aureliano Lessa, 97, dentro do <span className="text-white">Social Ramos Clube</span>, a academia foca em transformação física, qualidade de vida e constância no treino.
                </p>
                <p>
                  Ambiente limpo, professores prestativos, equipamentos bem cuidados e uma rotina pensada para quem quer resultado sem complicação.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12">
                <div className="border-l-2 border-brand-green pl-4">
                  <h4 className="text-white font-display italic uppercase text-sm mb-1">Local</h4>
                  <p className="text-brand-green font-black text-xs uppercase tracking-widest">Ramos, Rio de Janeiro</p>
                </div>
                <div className="border-l-2 border-brand-green pl-4">
                  <h4 className="text-white font-display italic uppercase text-sm mb-1">Clima</h4>
                  <p className="text-brand-green font-black text-xs uppercase tracking-widest">Treino, foco e constância</p>
                </div>
              </div>

              <div className="mt-12">
                <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.visit)}>
                  QUERO CONHECER A ACADEMIA
                </NeonButton>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative">
              <div className="absolute inset-0 border-2 border-brand-green/20 translate-x-4 translate-y-4 -z-10" />
              <div className="relative h-[560px] overflow-hidden group">
                <img src={aboutImage} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" alt="Ambiente Blackout" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 bg-brand-green/90 p-4 backdrop-blur-sm">
                  <p className="text-black font-display italic uppercase text-sm text-center">
                    Treino de verdade em um ambiente organizado e com identidade própria.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      <section className="py-32 bg-brand-dark relative overflow-hidden border-y border-white/5"> 
        <div className="absolute inset-0 bg-carbon opacity-10 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10"> 
          <SectionTitle subtitle="A academia de perto">ESTRUTURA REAL, CLIMA REAL</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"> 
            {galleryImages.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group border border-white/5 bg-black/40 overflow-hidden"
              >
                <div className="relative h-80 overflow-hidden"> 
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                </div>
                <div className="p-6"> 
                  <div className="flex items-center gap-2 mb-3 text-brand-green"> 
                    <GalleryHorizontal size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Blackout real</span>
                  </div>
                  <h3 className="text-2xl font-display italic uppercase leading-none mb-3">{item.title}</h3>
                  <p className="text-brand-silver/70 font-accent font-bold text-sm leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="modalidades" className="py-32 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-green/5 skew-x-[-20deg] translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Treinos">MODALIDADES & AULAS</SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {modalities.map((m, i) => (
              <div key={i} className="relative h-96 group overflow-hidden border-2 border-white/5 hover:border-brand-green/50 transition-all duration-500">
                <img src={m.img} className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700" alt={m.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent group-hover:via-black/25 transition-all" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-display italic uppercase text-white group-hover:text-brand-green transition-colors leading-none">{m.name}</h3>
                  <p className="text-brand-silver/80 text-sm font-bold mt-3 leading-relaxed">{m.desc}</p>
                  <div className="w-0 group-hover:w-full h-1 bg-brand-green transition-all duration-500 mt-3" />
                </div>
              </div>
            ))}
            <div className="relative h-96 bg-brand-graphite flex flex-col items-center justify-center p-8 text-center border-2 border-brand-green/20 group hover:border-brand-green transition-all bg-carbon sm:col-span-2 lg:col-span-4">
              <Zap className="text-brand-green mb-4 group-hover:scale-125 transition-transform" size={40} />
              <p className="text-brand-silver font-accent font-black uppercase text-xs tracking-widest mb-4 max-w-3xl leading-relaxed">
                A academia trabalha com musculação e aulas coletivas. Modalidades, turmas e horários podem variar. Consulte a equipe pelo WhatsApp para confirmar a disponibilidade atual.
              </p>
              <Link to="/horarios" className="text-brand-green font-display italic uppercase text-sm border-b-2 border-brand-green hover:pb-1 transition-all">
                VER GRADE COMPLETA
              </Link>
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center">
            <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.classes)}>
              QUAL AULA COMBINA COMIGO?
            </NeonButton>
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-dark border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-carbon opacity-5 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionTitle subtitle="Prova Social">QUEM TREINA, APROVA</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {[
              'Atendimento elogiado por quem treina',
              'Ambiente limpo e bem cuidado',
              'Boa estrutura com preço justo',
            ].map((item, i) => (
              <div key={i} className="border border-brand-green/15 bg-black/30 px-5 py-4 flex items-center gap-3">
                <Star size={16} className="text-brand-green shrink-0" />
                <p className="text-brand-silver/80 text-xs font-black uppercase tracking-widest">{item}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="card-dark">
                <p className="text-brand-silver/80 font-accent font-bold leading-relaxed mb-8">“{t.text}”</p>
                <div className="border-t border-white/5 pt-5">
                  <h4 className="font-display italic uppercase text-white text-lg">{t.name}</h4>
                  <p className="text-brand-green text-[10px] font-black uppercase tracking-widest mt-1">Avaliação adaptada de clientes</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="py-32 bg-brand-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <SectionTitle subtitle="Condições">PLANOS & MATRÍCULA</SectionTitle>
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
            <div className="card-dark bg-carbon flex flex-col justify-between">
              <div>
                <p className="text-brand-green font-accent font-black uppercase tracking-[0.25em] text-xs mb-4">Condição em destaque</p>
                <h3 className="text-4xl md:text-5xl font-display italic uppercase mb-4">Plano Blackout Year</h3>
                <p className="text-brand-silver/75 font-bold text-lg leading-relaxed mb-8">
                  Plano Blackout Year com condição promocional especial: de <span className="text-white font-black">R$120 por mês</span> por <span className="text-brand-green font-black">10x de R$99,90</span>, sem taxa de matrícula e sem avaliação.
                </p>
                <ul className="space-y-4 text-sm font-black uppercase tracking-tight text-brand-silver/80">
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-brand-green" /> Musculação e acesso às atividades da academia</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-brand-green" /> Sem taxa de matrícula</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-brand-green" /> Sem avaliação</li>
                  <li className="flex gap-3 items-center"><CheckCircle2 size={20} className="text-brand-green" /> Consulte a equipe para confirmar detalhes atuais</li>
                </ul>
                <p className="text-brand-silver/45 text-[10px] font-black uppercase tracking-[0.25em] mt-6 leading-relaxed">
                  Condição promocional sujeita à confirmação com a equipe da academia.
                </p>
              </div>
              <div className="mt-10">
                <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.offer)}>
                  QUERO GARANTIR ESSA CONDIÇÃO
                </NeonButton>
              </div>
            </div>

            <div className="relative overflow-hidden border-2 border-brand-green/20 min-h-[420px]">
              <img src={machineImage} alt="Estrutura Blackout" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-brand-green font-accent font-black uppercase tracking-[0.25em] text-xs mb-3">Preço justo para treinar de verdade</p>
                <h4 className="text-3xl font-display italic uppercase mb-4">Foco em evolução</h4>
                <p className="text-brand-silver/85 font-bold leading-relaxed">
                  Estrutura forte, ambiente motivador e uma proposta direta para quem quer sair do sedentarismo e manter constância.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="horarios" className="py-32 bg-brand-black relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:w-1/2">
              <SectionTitle subtitle="Disponibilidade">HORÁRIOS DE FUNCIONAMENTO</SectionTitle>
              <p className="text-brand-silver font-accent font-black uppercase text-xl mb-6 tracking-tight">
                Funcionamos de segunda a sexta, das 06h às 22h, e aos sábados, das 08h às 14h.
              </p>
              <p className="text-brand-silver/70 font-accent font-bold text-lg mb-10 max-w-xl leading-relaxed">
                Organize sua rotina de treino e veja também a página completa com o quadro de aulas coletivas.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.enrollment)}>
                  QUERO TREINAR NESSE HORÁRIO
                </NeonButton>
                <Link to="/horarios" className="flex items-center justify-center gap-3 font-display uppercase italic text-sm text-white hover:text-brand-green transition-all border-2 border-white/10 px-8 py-4 hover:border-brand-green/50">
                  VER QUADRO DE AULAS <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="lg:w-1/2 w-full">
              <div className="bg-brand-graphite border-2 border-white/5 p-4 shadow-2xl relative bg-carbon">
                <img src={scheduleBoard} alt="Quadro de horários Blackout" className="w-full h-[420px] object-cover border border-brand-green/15 bg-black" />
                <div className="absolute bottom-8 left-8 right-8 bg-black/70 backdrop-blur-md border border-brand-green/20 p-4">
                  <p className="text-brand-green font-display italic uppercase text-lg">Treino com horário que encaixa na sua rotina</p>
                  <p className="text-brand-silver/80 text-sm font-bold mt-2">Seg a sex: 06h às 22h • Sábado: 08h às 14h</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contato" className="py-32 bg-brand-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <SectionTitle subtitle="Localização">ONDE ESTAMOS</SectionTitle>
              <div className="space-y-10">
                <div className="flex gap-6">
                  <MapPin className="text-brand-green shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-display italic uppercase mb-2">Endereço</h4>
                    <p className="text-brand-silver/70 font-bold">{GYM_INFO.address}</p>
                    <p className="text-brand-green font-black text-[10px] uppercase tracking-widest mt-1">Dentro do Social Ramos Clube</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Clock className="text-brand-green shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-display italic uppercase mb-2">Horários</h4>
                    <p className="text-brand-silver/70 font-bold">SEG - SEX: {GYM_INFO.hours.weekdays}</p>
                    <p className="text-brand-silver/70 font-bold">SÁB: {GYM_INFO.hours.saturday}</p>
                    <p className="text-brand-silver/70 font-bold text-brand-green">DOM: {GYM_INFO.hours.sunday}</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <Phone className="text-brand-green shrink-0" size={32} />
                  <div>
                    <h4 className="text-xl font-display italic uppercase mb-2">Telefone</h4>
                    <p className="text-brand-silver/70 font-bold">{GYM_INFO.phone}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5">
                  <p className="text-brand-silver/45 text-[10px] font-black uppercase tracking-[0.3em] mb-4">Instagram ativo e atendimento direto no WhatsApp</p>
                  <div className="flex flex-col sm:flex-row gap-4">
                  <NeonButton href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} className="text-sm px-8 py-4">
                    FALAR NO WHATSAPP
                  </NeonButton>
                  <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="border-2 border-white/10 px-6 py-4 flex items-center justify-center gap-3 font-display italic uppercase hover:border-brand-green/50 hover:text-brand-green transition-all">
                    COMO CHEGAR <Navigation size={18} />
                  </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[500px] bg-brand-graphite border border-brand-green/20 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden">
              <iframe src={MAPS_EMBED_URL} width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 bg-brand-black border-t-4 border-brand-green/20 bg-carbon">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <BrandLogo />
              <p className="text-brand-silver/50 text-sm font-accent font-bold leading-relaxed">
                Academia em Ramos com musculação, aulas coletivas, atendimento próximo e foco em constância, superação e qualidade de vida.
              </p>
              <div className="flex gap-4">
                <a href={GYM_INFO.instagram} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-all hover:scale-110">
                  <Instagram size={24} />
                </a>
                <a href={getWhatsAppUrl(WHATSAPP_MESSAGES.general)} target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-green transition-all hover:scale-110">
                  <MessageCircle size={24} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-display italic uppercase text-sm mb-6 tracking-widest">Navegação</h4>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    {link.isExternal ? (
                      <Link to={link.href} className="text-brand-silver/60 hover:text-brand-green text-xs font-black uppercase tracking-widest transition-colors">
                        {link.name}
                      </Link>
                    ) : (
                      <a href={link.href} className="text-brand-silver/60 hover:text-brand-green text-xs font-black uppercase tracking-widest transition-colors">
                        {link.name}
                      </a>
                    )}
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
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/horarios" element={<Schedules />} />
      </Routes>
    </Router>
  );
}
