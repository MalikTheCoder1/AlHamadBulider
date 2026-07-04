import React, { useState, useMemo, useEffect, useRef } from 'react';
import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import logoImg from '@/imports/WhatsApp_Image_2026-07-03_at_6.37.13_PM.jpeg';
import {
  Building2, Home, Briefcase, ShieldCheck, Award, Mail, Phone, MapPin,
  Users, Factory, ChevronRight, Calculator, Menu, X, CheckCircle2,
  Compass, ArrowUpRight, Clock, HardHat, Layers, Star, TrendingUp,
  ClipboardList, Wrench, BadgeCheck, Handshake, ArrowRight, Play,
  ChevronDown
} from 'lucide-react';

function AlHamdLogo({ className = "h-16" }: { className?: string }) {
  return (
    <ImageWithFallback
      src={logoImg}
      alt="ALHAMD BUILDERS Logo"
      className={`${className} w-auto object-contain`}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-amber-600 uppercase">
      <span className="w-6 h-px bg-amber-500 inline-block" />
      {children}
      <span className="w-6 h-px bg-amber-500 inline-block" />
    </span>
  );
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [estimatedCost, setEstimatedCost] = useState<any>(null);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', projectType: 'Residential', message: ''
  });
  const [estimator, setEstimator] = useState({
    area: 2000, type: 'Residential', quality: 'A-Class Premium'
  });

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const projects = [
    { id: 1, title: 'Zafar Fabrics PVT Ltd', category: 'Industrial', year: '2022', description: 'Comprehensive heavy manufacturing unit, Main Gate, Head office, and Screening Hall structures.', location: 'Khurrianwala, Faisalabad', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Z A Farm House — Paradise', category: 'Residential', year: '2023', description: 'Luxurious elite class modern farm house featuring premium A-class high-end finishings and layout.', location: 'Paradise Valley, Faisalabad', image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Aspire College Khurrianwala', category: 'Institutional', year: '2021', description: 'State-of-the-art educational facility featuring complex multi-story lecture chambers and safe campus design.', location: 'Khurrianwala', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Jinnah Super Market', category: 'Commercial', year: '2020', description: 'Modern shopping commercial plaza layout with elegant Main Gate and strategic reinforced boundary walls.', location: 'Khurrianwala', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'University Town Villa', category: 'Residential', year: '2023', description: "Structural masterpiece 70'×40' residence featuring modern elevations and premium spatial planning.", location: 'Millat Road, Faisalabad', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Best Fiber Industrial Complex', category: 'Industrial', year: '2022', description: 'Massive robust security Boundary Walls and custom Agricultural Farm House layouts tailored to complex needs.', location: 'Faisalabad region', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80' },
    { id: 7, title: 'Zafar Fabric ETP Plant', category: 'Industrial', year: '2021', description: 'Eco-conscious chemical & water filtration structure aligning with strict national sustainability and QHSE rules.', location: 'Faisalabad', image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80' },
  ];

  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  const calculateCost = (e: React.FormEvent) => {
    e.preventDefault();
    const rates: Record<string, Record<string, number>> = {
      Residential: { 'A-Class Premium': 4200, 'Standard Executive': 3400, 'Basic Structure': 2600 },
      Commercial:  { 'A-Class Premium': 5500, 'Standard Executive': 4500, 'Basic Structure': 3500 },
      Industrial:  { 'A-Class Premium': 4800, 'Standard Executive': 3900, 'Basic Structure': 3000 },
    };
    const baseRate = rates[estimator.type]?.[estimator.quality] ?? 3400;
    const rawTotal = estimator.area * baseRate;
    const durationMonths = Math.ceil((estimator.area / 1000) * 2.5 + 4);
    setEstimatedCost({
      total: rawTotal, perSqFt: baseRate,
      materials: Math.round(rawTotal * 0.60),
      labor: Math.round(rawTotal * 0.30),
      permitsAndDesign: Math.round(rawTotal * 0.10),
      duration: durationMonths,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#process', label: 'Process' },
    { href: '#projects', label: 'Projects' },
    { href: '#estimator', label: 'Estimator' },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-amber-400 selection:text-slate-900" style={{ fontFamily: "'Inter', sans-serif" }}>

      {/* ── TOP INFO BAR ── */}
      <div className="bg-slate-950 text-slate-400 py-2.5 px-4 text-[11px]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-1.5">
          <div className="flex items-center gap-5">
            <a href="tel:+923005830118" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Phone className="w-3 h-3 text-amber-500" /> +92 300 5830118
            </a>
            <a href="mailto:alhamadbuilders786@gmail.com" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
              <Mail className="w-3 h-3 text-amber-500" /> alhamadbuilders786@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-slate-500">
            <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
            Near Total Petroleum, Jaranwala Road, Khurrianwala, Pakistan
          </div>
        </div>
      </div>

      {/* ── HEADER ── */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-lg backdrop-blur-md' : 'bg-white border-b border-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <a href="#" className="flex items-center shrink-0">
            <AlHamdLogo className="h-14" />
          </a>
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(l => (
              <a key={l.href} href={l.href}
                className="text-sm font-semibold text-slate-600 hover:text-slate-900 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all">
                {l.label}
              </a>
            ))}
            <a href="#contact"
              className="ml-3 bg-amber-500 text-slate-900 text-sm font-black px-5 py-2.5 rounded-lg hover:bg-amber-400 transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5">
              Get A Quote <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 text-slate-700">
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-5 space-y-1 shadow-xl absolute w-full left-0">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} onClick={() => setMobileMenuOpen(false)}
                className="block py-2.5 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}
              className="block text-center bg-amber-500 text-slate-900 py-3 rounded-lg text-sm font-black mt-2">
              Get A Quote
            </a>
          </div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative bg-slate-950 text-white overflow-hidden min-h-[92vh] flex items-center">
        {/* Background image overlay */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80"
            alt="Construction site"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/60" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.08)_0%,_transparent_60%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24 lg:py-32 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Left */}
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-bold tracking-widest uppercase">
                <HardHat className="w-3.5 h-3.5" /> Premier Construction — Faisalabad, Pakistan
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-black leading-[1.05] tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                We Build Your<br />
                <span className="text-amber-400">Vision</span> Into<br />
                <span className="text-slate-300">Reality.</span>
              </h1>

              <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
                ALHAMD BUILDERS delivers engineering excellence across industrial plants, elite farmhouses, commercial plazas, and institutional campuses — built to last generations.
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <a href="#estimator"
                  className="bg-amber-500 text-slate-900 font-black px-8 py-3.5 rounded-lg hover:bg-amber-400 transition-all shadow-xl shadow-amber-500/25 flex items-center gap-2 group">
                  <Calculator className="w-4 h-4" />
                  Estimate Cost
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
                <a href="#projects"
                  className="border border-slate-700 text-white font-bold px-8 py-3.5 rounded-lg hover:bg-slate-800 transition-colors flex items-center gap-2">
                  View Projects
                </a>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 pt-4 border-t border-slate-800">
                {[
                  { val: '10+', label: 'Years Experience' },
                  { val: '50+', label: 'Projects Delivered' },
                  { val: '100%', label: 'On-Time Handovers' },
                  { val: '4', label: 'Cities Served' },
                ].map(s => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-amber-400">{s.val}</div>
                    <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — quick consult card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-500/30 to-transparent rounded-2xl blur-xl" />
                <div className="relative bg-slate-900/90 border border-slate-700/60 rounded-2xl p-7 shadow-2xl backdrop-blur-sm">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-amber-500/15 rounded-lg flex items-center justify-center">
                      <Compass className="w-5 h-5 text-amber-400" />
                    </div>
                    <div>
                      <h3 className="text-base font-black text-white">Free Consultation</h3>
                      <p className="text-xs text-slate-500">Response within 2 hours</p>
                    </div>
                  </div>

                  {contactSubmitted ? (
                    <div className="py-10 text-center space-y-3">
                      <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
                      <h4 className="text-lg font-black text-white">Request Received!</h4>
                      <p className="text-xs text-slate-400 max-w-xs mx-auto">Our Lead Engineer will call you within 2 hours to discuss your project.</p>
                      <button onClick={() => setContactSubmitted(false)}
                        className="mt-4 text-xs font-bold text-amber-400 hover:underline">
                        Submit another →
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-3.5">
                      <div>
                        <input type="text" name="name" required placeholder="Your Full Name"
                          value={formData.name} onChange={handleInputChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors" />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <input type="tel" name="phone" required placeholder="Phone / WhatsApp"
                          value={formData.phone} onChange={handleInputChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors" />
                        <select name="projectType" value={formData.projectType} onChange={handleInputChange}
                          className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-500 text-sm transition-colors">
                          <option value="Residential">Residential</option>
                          <option value="Commercial">Commercial</option>
                          <option value="Industrial">Industrial</option>
                          <option value="Institutional">Institutional</option>
                        </select>
                      </div>
                      <textarea name="message" rows={2} placeholder="Briefly describe your project..."
                        value={formData.message} onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-colors resize-none" />
                      <button type="submit"
                        className="w-full bg-amber-500 text-slate-900 font-black py-3 rounded-lg hover:bg-amber-400 transition-colors text-sm tracking-wide">
                        Send Request — It's Free
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 animate-bounce">
          <ChevronDown className="w-5 h-5" />
        </div>
      </section>

      {/* ── TRUSTED BY STRIP ── */}
      <div className="bg-slate-900 border-y border-slate-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-slate-500 text-xs font-bold uppercase tracking-widest">
            <span className="text-slate-700 text-[10px] tracking-[0.3em]">TRUSTED BY</span>
            {['Zafar Fabrics', 'Best Fiber', 'Aspire College', 'Jinnah Market', 'Paradise Valley Developers'].map(c => (
              <span key={c} className="text-slate-400 hover:text-amber-400 transition-colors cursor-default">{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── ABOUT ── */}
      <section id="about" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Image collage */}
            <div className="relative">
              <div className="grid grid-cols-12 grid-rows-6 gap-3 h-[520px]">
                <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=700&q=80"
                  alt="Construction site" className="col-span-8 row-span-4 rounded-2xl object-cover w-full h-full shadow-xl" />
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80"
                  alt="Commercial building" className="col-span-4 row-span-3 rounded-2xl object-cover w-full h-full shadow-xl col-start-9 row-start-1" />
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                  alt="Luxury villa" className="col-span-4 row-span-3 rounded-2xl object-cover w-full h-full shadow-xl col-start-9 row-start-4" />
                <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=700&q=80"
                  alt="Industrial" className="col-span-8 row-span-2 rounded-2xl object-cover w-full h-full shadow-xl col-start-1 row-start-5" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-amber-500 text-slate-900 rounded-2xl p-5 shadow-2xl shadow-amber-500/30">
                <div className="text-3xl font-black leading-none">10+</div>
                <div className="text-[10px] font-black uppercase tracking-widest mt-1">Years of<br />Excellence</div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-7 lg:pl-4">
              <SectionLabel>Who We Are</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 leading-tight tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Pioneering Landmark Structures Across Pakistan
              </h2>
              <p className="text-slate-600 leading-relaxed">
                <strong>ALHAMD BUILDERS</strong> is a premier civil engineering and construction firm headquartered in Khurrianwala, Faisalabad. Our team of certified engineers, project managers, and skilled craftsmen have delivered landmark structures across residential, commercial, industrial, and institutional sectors.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Award, title: 'Proven Structural Legacy', desc: 'From industrial treatment plants to elite farmhouses — our portfolio speaks before we do.' },
                  { icon: Layers, title: 'Modern Engineering Standards', desc: 'BIM-informed planning, eco-friendly materials, and certified structural concrete on every build.' },
                  { icon: BadgeCheck, title: 'PEPRA Registered Contractor', desc: 'Fully registered and compliant with national construction safety codes and QHSE standards.' },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-lg flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{title}</h4>
                      <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <a href="#projects"
                className="inline-flex items-center gap-2 font-bold text-slate-900 border-b-2 border-amber-500 pb-0.5 hover:text-amber-600 transition-colors text-sm">
                View our complete portfolio <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.07)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel>Our Services</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Every Structure, Every Scale
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              From massive industrial complexes to intimate residential villas — we bring the same relentless standard of quality to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Factory, title: 'Industrial Units', color: 'amber', tag: '10+ Yrs Quality', desc: 'Custom factory layouts, screening halls, boundary enclosures, and environment treatment plants for heavy industrial mills.' },
              { icon: Briefcase, title: 'Commercial Plazas', color: 'slate', tag: 'Structural Durability', desc: 'Multi-level business plazas, shopping markets, and commercial gate structures optimized for high-ROI investments.' },
              { icon: Home, title: 'Luxury Residential', color: 'amber', tag: 'Turnkey A-Class', desc: 'Elite farmhouses, modern villas, and private residences with premium marble, solid wood, and bespoke interiors.' },
              { icon: Building2, title: 'Institutional', color: 'slate', tag: 'Certified Formwork', desc: 'Educational campuses, multi-story institutes, research labs, and large-scale public infrastructure layouts.' },
            ].map(({ icon: Icon, title, color, tag, desc }) => (
              <div key={title}
                className="group bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-amber-500/40 hover:bg-slate-800/60 transition-all duration-300 cursor-default">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${color === 'amber' ? 'bg-amber-500/10' : 'bg-slate-700/50'}`}>
                  <Icon className={`w-6 h-6 ${color === 'amber' ? 'text-amber-400' : 'text-slate-300'}`} />
                </div>
                <h3 className="text-base font-black text-white mb-2">{title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">{desc}</p>
                <span className={`text-[10px] font-black uppercase tracking-widest ${color === 'amber' ? 'text-amber-500' : 'text-slate-500'}`}>{tag}</span>
              </div>
            ))}
          </div>

          {/* QHSE Banner */}
          <div className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-8 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                <HardHat className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h4 className="font-black text-white text-lg">"Building it Once and Building it Right."</h4>
                <p className="text-slate-400 text-xs mt-1">Zero-injury environments · Eco-friendly execution · Certified structural concrete on every site.</p>
              </div>
            </div>
            <a href="#contact"
              className="shrink-0 bg-amber-500 text-slate-900 font-black text-sm px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors whitespace-nowrap">
              Start Your Project
            </a>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section id="process" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              From Blueprint to Handover
            </h2>
            <p className="text-slate-500 text-sm">A streamlined 5-step process that keeps every project on time, on budget, and on quality.</p>
          </div>

          <div className="relative">
            {/* Connector line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="grid lg:grid-cols-5 gap-8">
              {[
                { step: '01', icon: ClipboardList, title: 'Site Consultation', desc: 'Free on-site visit. We assess your land, discuss requirements, and understand your vision in full.' },
                { step: '02', icon: Compass, title: 'Design & Planning', desc: 'Architectural drawings, structural calculations, and material schedules prepared by certified engineers.' },
                { step: '03', icon: BadgeCheck, title: 'Approvals & Permits', desc: 'We handle all documentation, municipal approvals, and permit submissions on your behalf.' },
                { step: '04', icon: Wrench, title: 'Construction Phase', desc: 'Supervised execution with daily progress reporting. Quality checks at every structural milestone.' },
                { step: '05', icon: Handshake, title: 'Handover & Warranty', desc: 'Full walkthrough, defect-free delivery, and post-completion support warranty for your peace of mind.' },
              ].map(({ step, icon: Icon, title, desc }) => (
                <div key={step} className="relative flex flex-col items-center text-center group">
                  <div className="relative z-10 w-14 h-14 bg-white border-2 border-slate-200 group-hover:border-amber-400 rounded-full flex items-center justify-center mb-5 shadow-sm transition-colors">
                    <Icon className="w-6 h-6 text-slate-600 group-hover:text-amber-600 transition-colors" />
                  </div>
                  <span className="text-[10px] font-black text-amber-500 tracking-widest mb-1">{step}</span>
                  <h4 className="font-black text-slate-900 mb-2 text-sm">{title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-24 lg:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <SectionLabel>Portfolio</SectionLabel>
              <h2 className="text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Landmarks Built by<br />Al Hamd
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {['All', 'Residential', 'Industrial', 'Commercial', 'Institutional'].map(tab => (
                <button key={tab} onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider transition-all ${
                    activeTab === tab
                      ? 'bg-slate-900 text-amber-400 shadow-lg'
                      : 'bg-white border border-slate-200 text-slate-500 hover:text-slate-900 hover:border-slate-300'
                  }`}>
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <div key={project.id}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative overflow-hidden h-52">
                  <img src={project.image} alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-slate-900/80 text-amber-400 text-[10px] font-black uppercase px-2.5 py-1 rounded-md backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/90 text-slate-600 text-[10px] font-bold px-2 py-1 rounded-md backdrop-blur-sm">
                    {project.year}
                  </div>
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="font-black text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 mb-3">
                      <MapPin className="w-3 h-3 text-amber-500 shrink-0" /> {project.location}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-black uppercase text-slate-400">
                    <span>Structural Design</span>
                    <span className="flex items-center gap-1 text-emerald-600">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(245,158,11,0.06)_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
            <SectionLabel>Client Testimonials</SectionLabel>
            <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Zafar Mehmood', role: 'Director, Zafar Fabrics PVT Ltd', review: 'ALHAMD BUILDERS constructed our entire factory complex — from the main gate to the environment treatment plant. Exceptional quality and they delivered ahead of schedule. Highly recommended for any industrial project.' },
              { name: 'Saqib Raza', role: 'Property Developer, Paradise Valley', review: 'The farm house they built for us in Paradise Phase 2 exceeded every expectation. The A-class finishing, the structural integrity, the attention to detail — absolutely world class. Our go-to builders for all future projects.' },
              { name: 'Principal, Aspire College', role: 'Khurrianwala Campus', review: 'They understood our unique requirements for a safe educational environment perfectly. The multi-story campus was delivered on time, within budget, and to the highest construction standards. Our students are proud of their institution.' },
            ].map(t => (
              <div key={t.name} className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6 flex flex-col gap-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed flex-grow">"{t.review}"</p>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-700">
                  <div className="w-9 h-9 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 font-black text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">{t.name}</div>
                    <div className="text-[10px] text-slate-500">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COST ESTIMATOR ── */}
      <section id="estimator" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel>Budget Calculator</SectionLabel>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Estimate Your Construction Cost
            </h2>
            <p className="text-slate-500 text-sm">Real PKR estimates based on current Faisalabad regional material and labor rates.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            {/* Controls */}
            <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-7 text-white">
              <h3 className="font-black text-base mb-6 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" /> Configure Project
              </h3>
              <form onSubmit={calculateCost} className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold uppercase text-slate-400 tracking-wider">Covered Area</label>
                    <span className="text-amber-400 font-black text-sm">{estimator.area.toLocaleString()} Sq Ft</span>
                  </div>
                  <input type="range" min="500" max="15000" step="100" value={estimator.area}
                    onChange={e => setEstimator(p => ({ ...p, area: parseInt(e.target.value) }))}
                    className="w-full accent-amber-500 cursor-pointer" />
                  <div className="flex justify-between text-[10px] text-slate-600 mt-1.5 font-mono">
                    <span>500</span><span>15,000 Sq Ft</span>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-3">Project Type</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Residential', 'Commercial', 'Industrial'].map(t => (
                      <button key={t} type="button" onClick={() => setEstimator(p => ({ ...p, type: t }))}
                        className={`py-2.5 rounded-lg text-xs font-black border transition-all ${
                          estimator.type === t
                            ? 'bg-amber-500 border-amber-500 text-slate-900'
                            : 'border-slate-700 text-slate-400 hover:border-slate-500'
                        }`}>{t}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase text-slate-400 tracking-wider block mb-3">Finishing Quality</label>
                  <div className="space-y-2">
                    {[
                      { name: 'Basic Structure', desc: 'Slab, pillars, brick walls, grey plaster. No premium tiles.' },
                      { name: 'Standard Executive', desc: 'Grade-A brick, standard tiles, classic local woodwork.' },
                      { name: 'A-Class Premium', desc: 'Imported marble, solid ash wood, elite bath fittings.' },
                    ].map(q => (
                      <label key={q.name} onClick={() => setEstimator(p => ({ ...p, quality: q.name }))}
                        className={`flex gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                          estimator.quality === q.name
                            ? 'border-amber-500 bg-amber-500/10'
                            : 'border-slate-700 hover:border-slate-600'
                        }`}>
                        <input type="radio" name="quality" checked={estimator.quality === q.name} onChange={() => {}} className="mt-0.5 accent-amber-500 shrink-0" />
                        <div>
                          <div className="text-xs font-black text-white">{q.name}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{q.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit"
                  className="w-full bg-amber-500 text-slate-900 font-black py-3.5 rounded-xl hover:bg-amber-400 transition-colors text-sm">
                  Generate Estimate →
                </button>
              </form>
            </div>

            {/* Result */}
            <div className="lg:col-span-7 bg-slate-50 border border-slate-100 rounded-2xl p-7 min-h-[480px] flex flex-col justify-center">
              {estimatedCost ? (
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] text-amber-600 font-black uppercase tracking-widest mb-1">Estimate Ready</div>
                    <h4 className="text-2xl font-black text-slate-900">PKR {estimatedCost.total.toLocaleString()}</h4>
                    <p className="text-xs text-slate-400 mt-1">Based on {estimator.area.toLocaleString()} Sq Ft · {estimator.type} · {estimator.quality}</p>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: 'Rate / Sq Ft', value: `PKR ${estimatedCost.perSqFt}` },
                      { label: 'Est. Duration', value: `${estimatedCost.duration} Months` },
                      { label: 'Labor Cost', value: `PKR ${estimatedCost.labor.toLocaleString()}` },
                    ].map(s => (
                      <div key={s.label} className="bg-white rounded-xl p-4 border border-slate-100">
                        <div className="text-[10px] text-slate-400 font-semibold uppercase">{s.label}</div>
                        <div className="font-black text-slate-900 text-sm mt-1">{s.value}</div>
                      </div>
                    ))}
                  </div>

                  <div>
                    <div className="text-xs font-bold text-slate-600 mb-3 uppercase tracking-wider">Cost Breakdown</div>
                    <div className="space-y-2.5">
                      {[
                        { label: 'Materials & Supply', pct: 60, amount: estimatedCost.materials, color: 'bg-amber-500' },
                        { label: 'Skilled Labor', pct: 30, amount: estimatedCost.labor, color: 'bg-slate-600' },
                        { label: 'Design & Permits', pct: 10, amount: estimatedCost.permitsAndDesign, color: 'bg-blue-400' },
                      ].map(b => (
                        <div key={b.label}>
                          <div className="flex justify-between text-[11px] mb-1">
                            <span className="text-slate-600 font-semibold">{b.label}</span>
                            <span className="text-slate-400">PKR {b.amount.toLocaleString()} ({b.pct}%)</span>
                          </div>
                          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-xs text-amber-800 leading-relaxed">
                    <strong>Disclaimer:</strong> These estimates are indicative based on current regional rates. Actual costs vary with site conditions and final design specifications.
                  </div>

                  <a href="#contact"
                    className="inline-flex items-center gap-2 bg-slate-900 text-white font-black px-6 py-3 rounded-xl text-sm hover:bg-slate-800 transition-colors">
                    Request Formal Quotation <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              ) : (
                <div className="text-center py-16 space-y-4">
                  <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto">
                    <Calculator className="w-8 h-8 text-slate-300" />
                  </div>
                  <h4 className="font-black text-slate-900">Configure & Calculate</h4>
                  <p className="text-sm text-slate-400 max-w-xs mx-auto">Set your area, project type, and quality level — then click Generate to see a detailed PKR breakdown.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── CEO MESSAGE ── */}
      <section className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(245,158,11,0.06)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-4">
              <div className="aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col justify-end">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-28 h-28 rounded-full bg-slate-700 flex items-center justify-center">
                    <Users className="w-14 h-14 text-slate-500" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/20 to-transparent" />
                <div className="relative p-6">
                  <div className="text-amber-400 text-[10px] font-black uppercase tracking-widest mb-1">Founder & CEO</div>
                  <h3 className="text-xl font-black text-white">Muhammad Zahid</h3>
                  <p className="text-slate-400 text-xs">ALHAMD BUILDERS, Khurrianwala</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 space-y-7 lg:pl-4">
              <SectionLabel>Leadership Message</SectionLabel>
              <h2 className="text-4xl font-black tracking-tight leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                We Are Partners in Your Success, Not Just Contractors.
              </h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                <p>At ALHAMD BUILDERS, we approach each project as a long-term partnership. We are committed to delivering structures that serve their purpose beautifully and endure for generations — built on the principles of integrity, precision, and accountability.</p>
                <p>Our dedicated team of engineers and skilled workers brings every blueprint to life with the highest standards of craftsmanship. We ensure transparent communication, realistic timelines, and zero compromises on structural safety.</p>
              </div>
              <blockquote className="border-l-4 border-amber-500 pl-5 py-2 text-white font-bold text-base italic">
                "Our reputation is built brick by brick — and we take that responsibility seriously on every single project we undertake."
              </blockquote>
              <div className="flex items-center gap-4 pt-2">
                <div>
                  <div className="font-black text-white">Muhammad Zahid</div>
                  <div className="text-xs text-slate-500">CEO & Founder, ALHAMD BUILDERS</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUES ── */}
      <section id="values" className="py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <SectionLabel>Our Principles</SectionLabel>
            <h2 className="text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              Values That Build Our Reputation
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { n: '01', title: 'Excellence in Execution', desc: 'From foundation concrete mixes to final plaster — zero errors, perfect alignment, every time.' },
              { n: '02', title: 'Transparent Partnership', desc: 'Collaborative client relationships with no hidden costs, no surprise markups — ever.' },
              { n: '03', title: 'Continuous Improvement', desc: 'Modern methodologies, specialized tools, and eco-friendly treatment in all our procedures.' },
              { n: '04', title: 'Commitment to Growth', desc: 'Supporting Pakistan\'s local workforce through expert training and skill development programs.' },
              { n: '05', title: 'Client Satisfaction First', desc: 'On-time handovers, within budget, to the exact specification agreed at the start.' },
              { n: '06', title: 'Social Responsibility', desc: 'Eco-friendly systems that minimize industrial carbon runoff and protect our communities.' },
            ].map(v => (
              <div key={v.n} className="group flex gap-4 p-5 rounded-2xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all">
                <span className="text-2xl font-black text-slate-100 group-hover:text-amber-200 transition-colors shrink-0 leading-none pt-0.5">{v.n}</span>
                <div>
                  <h4 className="font-black text-slate-900 text-sm mb-1.5">{v.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className="py-20 bg-amber-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_rgba(255,255,255,0.1)_0%,_transparent_60%)]" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <h2 className="text-4xl font-black text-slate-900 tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Build Something Extraordinary?
          </h2>
          <p className="text-slate-800 text-base max-w-xl mx-auto">
            Get a free site consultation and detailed quotation from our certified engineering team — no obligation, no fees.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="#contact"
              className="bg-slate-900 text-white font-black px-8 py-3.5 rounded-xl hover:bg-slate-800 transition-colors flex items-center gap-2">
              Request Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
            <a href="tel:+923005830118"
              className="bg-white/30 backdrop-blur-sm text-slate-900 font-black px-8 py-3.5 rounded-xl hover:bg-white/50 transition-colors flex items-center gap-2">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 lg:py-32 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(245,158,11,0.05)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-14 items-start">

            {/* Info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <SectionLabel>Get In Touch</SectionLabel>
                <h2 className="text-4xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {"Let's Build Your\nLegacy Together"}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Whether it's a massive industrial plant or your dream home — our team is ready to bring your vision to life.
                </p>
              </div>
              <div className="space-y-5">
                {[
                  { icon: Phone, title: 'Call / WhatsApp', lines: ['+92 300 5830118', 'Mon–Sat · 9 AM – 6 PM PKT'] },
                  { icon: Mail, title: 'Email', lines: ['alhamadbuilders786@gmail.com', 'info@alhamadbuilders.com'] },
                  { icon: MapPin, title: 'Headquarters', lines: ['Near Total Petroleum, Jaranwala Road', 'Khurrianwala, Faisalabad, Pakistan'] },
                ].map(({ icon: Icon, title, lines }) => (
                  <div key={title} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <div>
                      <div className="text-xs font-black text-white uppercase tracking-wider mb-0.5">{title}</div>
                      {lines.map(l => <div key={l} className="text-xs text-slate-400">{l}</div>)}
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                <ShieldCheck className="w-6 h-6 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-black text-white">PEPRA Registered · QHSE Certified</div>
                  <div className="text-[10px] text-slate-500">Compliant with national construction safety codes</div>
                </div>
              </div>
            </div>

            {/* Map area */}
            <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden border border-slate-800">
              <div className="p-5 border-b border-slate-800 flex items-center justify-between">
                <div>
                  <h4 className="font-black text-white text-sm">Khurrianwala & Faisalabad Coverage</h4>
                  <p className="text-[10px] text-slate-500 mt-0.5">Serving Millat Road, Paradise Phase 2, Industrial Zones & beyond</p>
                </div>
                <Compass className="w-6 h-6 text-amber-400" />
              </div>
              <div className="relative bg-slate-800 h-72 flex items-center justify-center">
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:40px_40px]" />
                <div className="relative text-center space-y-3 p-8">
                  <div className="inline-flex items-center gap-1.5 bg-amber-500 text-slate-900 font-black text-[10px] px-3 py-1.5 rounded-full uppercase tracking-wide">
                    <MapPin className="w-3 h-3" /> Our Headquarters
                  </div>
                  <h4 className="font-black text-white text-base">Near Total Petroleum Station</h4>
                  <p className="text-xs text-slate-400 max-w-xs mx-auto">Accessible directly from the Faisalabad–Lahore Expressway at Khurrianwala Junction.</p>
                  <div className="flex flex-wrap justify-center gap-2 pt-1">
                    {['✓ Aspire College', '✓ Zafar Fabrics', '✓ Paradise Phase 2', '✓ Jinnah Market'].map(t => (
                      <span key={t} className="text-[9px] font-bold bg-slate-700 border border-slate-600 px-2 py-1 rounded text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="p-4 flex items-center gap-2.5 text-xs text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 block shrink-0 animate-ping" />
                Free site inspection visits available throughout Khurrianwala district
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-black text-slate-500 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
            <div className="md:col-span-4 space-y-4">
              <AlHamdLogo className="h-16" />
              <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
                Leading Pakistan's construction industry with certified quality, superior engineering, and a legacy built on trust and transparency since over a decade.
              </p>
              <div className="flex gap-3 pt-2">
                {['FB', 'IG', 'WA'].map(s => (
                  <div key={s} className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-[10px] font-black text-slate-500 hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">{s}</div>
                ))}
              </div>
            </div>
            <div className="md:col-span-2 space-y-3">
              <h5 className="text-xs font-black text-white uppercase tracking-widest">Services</h5>
              <ul className="space-y-2 text-xs">
                {['Industrial Units', 'Residential Villas', 'Commercial Plazas', 'Institutional', 'Treatment Plants'].map(s => (
                  <li key={s}><a href="#services" className="hover:text-amber-400 transition-colors">{s}</a></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-black text-white uppercase tracking-widest">Projects</h5>
              <ul className="space-y-2 text-xs">
                {['Zafar Fabrics PVT Ltd', 'Z A Farm House', 'Aspire College', 'Jinnah Super Market', 'University Town Villa'].map(p => (
                  <li key={p}><a href="#projects" className="hover:text-amber-400 transition-colors">{p}</a></li>
                ))}
              </ul>
            </div>
            <div className="md:col-span-3 space-y-3">
              <h5 className="text-xs font-black text-white uppercase tracking-widest">Contact</h5>
              <div className="space-y-2 text-xs">
                <p>Near Total Petroleum, Jaranwala Road,<br />Khurrianwala, Faisalabad, Pakistan</p>
                <p className="text-white font-bold">+92 300 5830118</p>
                <p>alhamadbuilders786@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px]">
            <span>&copy; {new Date().getFullYear()} ALHAMD BUILDERS. All Rights Reserved.</span>
            <div className="flex gap-5">
              <a href="#about" className="hover:text-slate-300 transition-colors">QHSE Policy</a>
              <a href="#estimator" className="hover:text-slate-300 transition-colors">Rates Guide</a>
              <a href="#contact" className="hover:text-slate-300 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
