import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Home, 
  Briefcase, 
  ShieldCheck, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  Users, 
  Factory, 
  ChevronRight, 
  Filter, 
  Calculator, 
  Menu, 
  X, 
  CheckCircle2, 
  FileText, 
  Compass, 
  ArrowUpRight, 
  Clock, 
  HardHat, 
  DollarSign, 
  Layers 
} from 'lucide-react';

// Color Palette Definition: 
// Primaries: Deep Slate/Charcoal (slate-900/800), Warm Vibrant Gold (amber-500/600), Rich Crimson (rose-600) to coordinate with the new logo.

function AlHamdLogo({ className = "h-16 md:h-20" }) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    // Beautiful vector representation fallback representing the 3D gold ring, houses, and red calligraphy of the new logo
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <svg viewBox="0 0 100 100" className="h-full w-auto">
          {/* Gold Ring */}
          <circle cx="45" cy="45" r="36" fill="none" stroke="url(#goldGradient)" strokeWidth="4.5" />
          
          {/* Highrise Buildings in background */}
          <rect x="25" y="28" width="10" height="35" fill="#64748b" />
          <rect x="38" y="15" width="14" height="48" fill="#475569" />
          <rect x="55" y="24" width="12" height="39" fill="#334155" />
          
          {/* House Frontages */}
          <polygon points="18,72 45,42 72,72" fill="#1e293b" stroke="url(#goldGradient)" strokeWidth="1.5" />
          <polygon points="52,72 72,50 92,72" fill="#0f172a" stroke="url(#goldGradient)" strokeWidth="1.5" />
          
          {/* Crimson Red Urdu/Arabic Script "الحمد" calligraphic vector likeness */}
          <path d="M 32,58 C 34,48 42,42 50,42 C 58,42 66,50 64,58 C 62,66 50,70 34,62 C 48,60 62,68 74,54" fill="none" stroke="#dc2626" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M 32,58 C 34,48 42,42 50,42 C 58,42 66,50 64,58 C 62,66 50,70 34,62 C 48,60 62,68 74,54" fill="none" stroke="url(#goldGradient)" strokeWidth="1.8" strokeLinecap="round" />
          
          <defs>
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>
        </svg>
        <div className="flex flex-col justify-center">
          <span className="font-black text-xl tracking-wider text-slate-900 leading-none">ALHAMD</span>
          <span className="text-[10px] font-bold text-amber-600 tracking-[0.25em] uppercase mt-0.5">BUILDERS</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src="1000047950.jpg" 
      alt="ALHAMD BUILDERS" 
      className={`${className} object-contain transition-transform duration-300 hover:scale-105`}
      onError={() => setImgError(true)}
    />
  );
}

export default function App() {
  // Navigation & Interactive states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [estimatedCost, setEstimatedCost] = useState(null);
  
  // Form submission feedback
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    message: ''
  });

  // Project Estimator state
  const [estimator, setEstimator] = useState({
    area: 2000,
    type: 'Residential',
    quality: 'A-Class Premium'
  });

  // Projects data
  const projects = [
    {
      id: 1,
      title: 'Zafar Fabrics PVT Ltd',
      category: 'Industrial',
      description: 'Comprehensive heavy manufacturing unit, Main Gate, Head office, and Screening Hall structures.',
      location: 'Khurrianwala, Faisalabad',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Z A Farm House in Paradise',
      category: 'Residential',
      description: 'Luxurious elite class modern farm house featuring premium A-class high-end finishings and layout (Paradise Phase 2).',
      location: 'Paradise Valley, Faisalabad',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Aspire College Khurrianwala',
      category: 'Institutional',
      description: 'State-of-the-art educational facility featuring complex multi-story lecture chambers and safe campus design.',
      location: 'Khurrianwala',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Jinnah Super Market',
      category: 'Commercial',
      description: 'Modern shopping commercial plaza layout with elegant Main Gate and strategic reinforced boundary walls.',
      location: 'Khurrianwala',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'University Town Villa',
      category: 'Residential',
      description: 'A structural masterpiece house measuring 70\' × 40\' featuring modern elevations and spatial planning.',
      location: 'Millat Road, Faisalabad',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Best Fiber Industrial Complex',
      category: 'Industrial',
      description: 'Massive robust security Boundary Walls and custom Agricultural Farm House layouts tailored to complex needs.',
      location: 'Faisalabad region',
      image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 7,
      title: 'Zafar Fabric Environment Treatment Plant',
      category: 'Industrial',
      description: 'Eco-conscious chemical & water filtration structure aligning with strict national sustainability and QHSE rules.',
      location: 'Faisalabad',
      image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=800&q=80'
    }
  ];

  // Filtering projects
  const filteredProjects = useMemo(() => {
    if (activeTab === 'All') return projects;
    return projects.filter(p => p.category === activeTab);
  }, [activeTab]);

  // Estimator logic
  const calculateCost = (e) => {
    e.preventDefault();
    let baseRate = 0;
    
    // Pakistani PKR estimate approximation based on typical quality standards
    if (estimator.type === 'Residential') {
      baseRate = estimator.quality === 'A-Class Premium' ? 4200 : estimator.quality === 'Standard Executive' ? 3400 : 2600;
    } else if (estimator.type === 'Commercial') {
      baseRate = estimator.quality === 'A-Class Premium' ? 5500 : estimator.quality === 'Standard Executive' ? 4500 : 3500;
    } else { // Industrial / Institutional
      baseRate = estimator.quality === 'A-Class Premium' ? 4800 : estimator.quality === 'Standard Executive' ? 3900 : 3000;
    }

    const rawTotal = estimator.area * baseRate;
    const durationMonths = Math.ceil((estimator.area / 1000) * 2.5 + 4);

    setEstimatedCost({
      total: rawTotal,
      perSqFt: baseRate,
      materials: Math.round(rawTotal * 0.60),
      labor: Math.round(rawTotal * 0.30),
      permitsAndDesign: Math.round(rawTotal * 0.10),
      duration: durationMonths
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const resetContactForm = () => {
    setFormData({ name: '', email: '', phone: '', projectType: 'Residential', message: '' });
    setContactSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-amber-500 selection:text-white">
      
      {/* --- TOP BRAND BAR --- */}
      <div className="bg-slate-900 text-slate-300 py-2 px-4 text-xs border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-3 h-3 text-amber-500" /> +92 300 5830118
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3 h-3 text-amber-500" /> alhamadbuilders786@gmail.com
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-amber-500" /> Near Total Petroleum, Jaranwala Road, Khurrianwala, Pakistan
          </div>
        </div>
      </div>

      {/* --- HEADER NAVIGATION --- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex justify-between items-center">
          {/* Logo Brand Area using custom uploaded branding */}
          <a href="#" className="flex items-center">
            <AlHamdLogo className="h-20 w-auto" />
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Company Profile</a>
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Our Services</a>
            <a href="#projects" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Projects</a>
            <a href="#estimator" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Cost Estimator</a>
            <a href="#values" className="text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors">Values</a>
            <a href="#contact" className="bg-slate-900 text-white text-sm font-bold px-5 py-2.5 rounded-md hover:bg-amber-500 hover:text-slate-900 transition-all shadow-md">
              Get A Quote
            </a>
          </nav>

          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100 text-slate-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg absolute w-full left-0 animate-fadeIn">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">Company Profile</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">Our Services</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">Projects</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">Cost Estimator</a>
            <a href="#values" onClick={() => setMobileMenuOpen(false)} className="block py-2.5 px-3 rounded-md text-base font-semibold text-slate-700 hover:bg-slate-50 hover:text-slate-900">Values</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-center bg-slate-900 text-white py-3 rounded-md text-base font-bold hover:bg-amber-500 transition-colors">
              Get A Quote
            </a>
          </div>
        )}
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative bg-slate-900 text-white overflow-hidden py-24 lg:py-32">
        {/* Abstract Background pattern */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]" />
          <div className="absolute bg-gradient-to-r from-slate-900 via-slate-900 to-transparent w-full h-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/10 text-amber-500 border border-amber-500/30 tracking-wider uppercase">
                <HardHat className="w-3 h-3" /> Premier Construction Partners in Pakistan
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none text-white">
                We Are Best To Build Your <span className="text-amber-500 underline decoration-slate-600 decoration-wavy decoration-2">Dream</span>
              </h1>
              
              <p className="text-slate-300 text-lg max-w-xl leading-relaxed">
                ALHAMD BUILDERS delivers engineering excellence across industrial plants, elite farmhouses, commercial plazas, and institutional campuses. Based in Faisalabad, building structural legacy since over a decade.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="#estimator" className="bg-amber-500 text-slate-900 font-extrabold px-8 py-3.5 rounded-md hover:bg-amber-400 transition-all shadow-lg flex items-center justify-center gap-2 group">
                  <Calculator className="w-5 h-5 text-slate-900" />
                  Estimate Project Cost
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#projects" className="border-2 border-slate-700 bg-slate-800/50 backdrop-blur-sm text-white font-bold px-8 py-3.5 rounded-md hover:bg-slate-800 hover:border-slate-600 transition-colors text-center">
                  Explore Projects
                </a>
              </div>

              {/* Quick statistics overlay */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
                <div>
                  <div className="text-3xl font-extrabold text-amber-500">10+</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">50+</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Delivered Sites</div>
                </div>
                <div>
                  <div className="text-3xl font-extrabold text-white">100%</div>
                  <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Quality Verified</div>
                </div>
              </div>

            </div>

            {/* Right Interactive Card Column */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-amber-500 rounded-2xl blur-2xl opacity-10" />
              <div className="relative bg-slate-800/90 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg">
                    <Compass className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white leading-tight">Fast Custom Consultation</h3>
                    <p className="text-xs text-slate-400">Response within 2 hours</p>
                  </div>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">Your Full Name</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      placeholder="e.g. Muhammad Ahmad"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-all"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="+92 300..."
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">Project Category</label>
                      <select 
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white focus:outline-none focus:border-amber-500 text-sm transition-all"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Corporate / Commercial">Commercial Plaza</option>
                        <option value="Industrial">Industrial Plant</option>
                        <option value="Institutional">Institutional Building</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase text-slate-300 mb-1">Brief Project Briefing</label>
                    <textarea 
                      name="message"
                      rows="2"
                      placeholder="Tell us about the project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 text-sm transition-all resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-amber-500 text-slate-900 font-extrabold py-3 rounded hover:bg-amber-400 transition-colors shadow-md mt-2 text-sm uppercase tracking-wider"
                  >
                    Submit Request
                  </button>
                </form>

                {contactSubmitted && (
                  <div className="absolute inset-0 bg-slate-900/95 rounded-2xl flex flex-col items-center justify-center p-6 text-center animate-fadeIn">
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mb-3" />
                    <h4 className="text-xl font-bold text-white">Request Lodged Successfully</h4>
                    <p className="text-xs text-slate-400 mt-2 max-w-xs">
                      Our Lead Civil Engineer will contact you shortly to coordinate design blueprints and project details.
                    </p>
                    <button 
                      onClick={resetContactForm}
                      className="mt-6 bg-amber-500 text-slate-900 font-bold px-4 py-2 rounded text-xs hover:bg-amber-400 transition-all"
                    >
                      Submit Another Query
                    </button>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- COMPANY PROFILE --- */}
      <section id="about" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Image Showcase Grid */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-amber-500/10 rounded-xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-slate-900/10 rounded-xl -z-10" />
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img 
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80" 
                    alt="Luxury residential villa design" 
                    className="rounded-lg object-cover shadow-md h-48 w-full"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x480?text=Residential+Villa'; }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80" 
                    alt="Heavy construction site with foundation work" 
                    className="rounded-lg object-cover shadow-md h-64 w-full"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x640?text=Heavy+Construction'; }}
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80" 
                    alt="Sleek corporate real estate infrastructure" 
                    className="rounded-lg object-cover shadow-md h-64 w-full"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x640?text=Corporate+Building'; }}
                  />
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80" 
                    alt="Industrial machinery layout" 
                    className="rounded-lg object-cover shadow-md h-48 w-full"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/600x480?text=Industrial+Unit'; }}
                  />
                </div>
              </div>
            </div>

            {/* Profile details */}
            <div className="space-y-6">
              <span className="text-xs tracking-widest text-amber-600 font-extrabold uppercase block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Pioneering Engineering Excellence & Landmark Structures in Pakistan
              </h2>
              
              <p className="text-slate-600 leading-relaxed text-base">
                <strong>ALHAMD BUILDERS</strong> is a highly respected organization specializing in robust civil engineering and modern turn-key construction services. Backed by a high-performing squadron of certified engineers, project managers, and execution professionals, we build environments optimized to enhance human experiences.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-lg bg-slate-50 border-l-4 border-amber-500">
                  <Award className="w-8 h-8 text-amber-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Proven Structural Legacy</h4>
                    <p className="text-sm text-slate-600">From commercial shopping venues to complex industrial environment treatment systems like the *Zafar Fabrics Water Filtration Plant*.</p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 rounded-lg bg-slate-50 border-l-4 border-slate-900">
                  <Layers className="w-8 h-8 text-slate-900 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900">Cutting-Edge Implementation</h4>
                    <p className="text-sm text-slate-600">We incorporate modern building information modeling, eco-friendly materials, and reliable engineering standards in Pakistan.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a href="#projects" className="inline-flex items-center gap-1.5 font-bold text-amber-600 hover:text-amber-700 hover:underline">
                  Browse completed catalog <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- OUR SERVICES --- */}
      <section id="services" className="py-20 lg:py-28 bg-slate-100 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-xs tracking-widest text-amber-600 font-bold uppercase block">
              Diversified Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              A Decisive Spectrum Of Construction Engineering Services
            </h2>
            <p className="text-slate-600">
              ALHAMD BUILDERS has expanded its wings from classic industrial hubs to contemporary residential properties, smart commercial districts, and educational landmarks.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Industrial */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                <Factory className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Industrial Units</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Custom factory layouts, screening halls, boundary enclosures, and complex structures built for heavy industrial mills like Zafar Fabrics and Best Fiber.
              </p>
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block mt-auto">10+ Years Built Quality</span>
            </div>

            {/* Card 2: Commercial */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-900/10 text-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Corporate & Retail</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Commercial market setups, multi-level business plazas like the bustling Jinnah Super Market Khurrianwala, optimized for commercial investments.
              </p>
              <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block mt-auto">Structural Durability</span>
            </div>

            {/* Card 3: Residential */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-amber-500/10 text-amber-600 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Luxury Residential</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Elite class agricultural farmhouses, modern villas, private residences in premier societies (like University Town) with high-end, bespoke A-class interior finishing.
              </p>
              <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider block mt-auto">Turnkey Solutions</span>
            </div>

            {/* Card 4: Institutional */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-slate-900/10 text-slate-900 rounded-lg flex items-center justify-center mb-6">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Institutional Layouts</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Educational institutes, safety audits, classrooms, research labs, and expansive setups matching the structural designs of Aspire College Khurrianwala.
              </p>
              <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider block mt-auto">Certified Formwork</span>
            </div>

          </div>

          {/* QHSE Sub-Banner */}
          <div className="mt-16 bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
            <div className="absolute right-0 top-0 opacity-10">
              <HardHat className="w-96 h-96 text-amber-500 translate-x-12 translate-y-12" />
            </div>
            <div className="relative z-10 max-w-3xl">
              <span className="inline-block bg-amber-500 text-slate-900 text-xs font-black uppercase px-2.5 py-1 rounded mb-4 tracking-wider">
                QHSE Commitment
              </span>
              <h4 className="text-xl sm:text-2xl font-bold mb-3">
                “Building it Once and Building it Right.”
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                ALHAMD BUILDERS ensures safety compliance, zero injuries, environment-friendly treatment plant installations, and standard structural concrete strengths on every single execution.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* --- INTERACTIVE PROJECTS SHOWCASE --- */}
      <section id="projects" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs tracking-widest text-amber-600 font-bold uppercase block mb-2">
                Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Landmarks Delivered By Al Hamd
              </h2>
            </div>

            {/* Project Category Filter tabs */}
            <div className="flex flex-wrap items-center gap-2 border-b md:border-b-0 pb-3 md:pb-0">
              {['All', 'Residential', 'Industrial', 'Commercial', 'Institutional'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-md text-sm font-bold transition-all ${
                    activeTab === tab 
                      ? 'bg-slate-900 text-amber-500 shadow-md' 
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="group bg-slate-50 rounded-xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                <div className="relative overflow-hidden h-56 bg-slate-200">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/800x600?text=Building+Project'; }}
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-amber-500 text-xs font-black uppercase px-2.5 py-1 rounded">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-amber-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 flex items-center gap-1 mb-3">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" /> {project.location}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold uppercase text-slate-900">
                    <span>Scope: Structural Design</span>
                    <span className="text-amber-600 flex items-center gap-0.5">
                      Verified <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- INTERACTIVE PROJECT COST ESTIMATOR --- */}
      <section id="estimator" className="py-20 lg:py-28 bg-slate-900 text-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-amber-500 rounded-full filter blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="text-xs tracking-widest text-amber-500 font-extrabold uppercase block">
              Budget Calculator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Interactive Construction Cost Estimator
            </h2>
            <p className="text-slate-400">
              Plan your capital budget efficiently. Generate a simulated estimation breakdown matching current Pakistani materials and construction labor rates.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Form settings */}
            <div className="lg:col-span-5 bg-slate-800 border border-slate-700 p-6 sm:p-8 rounded-2xl">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2 text-white">
                <Calculator className="w-5 h-5 text-amber-500" /> Configure Parameters
              </h3>

              <form onSubmit={calculateCost} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">
                    Total Covered Area (Square Feet): <span className="text-amber-500 font-black">{estimator.area} Sq Ft</span>
                  </label>
                  <input 
                    type="range" 
                    min="500" 
                    max="15000" 
                    step="100"
                    value={estimator.area}
                    onChange={(e) => setEstimator(prev => ({ ...prev, area: parseInt(e.target.value) }))}
                    className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>500 Sq Ft</span>
                    <span>7,500 Sq Ft</span>
                    <span>15,000 Sq Ft</span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">Project Sector</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Residential', 'Commercial', 'Industrial'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setEstimator(prev => ({ ...prev, type }))}
                        className={`py-2 px-3 rounded text-xs font-bold transition-all text-center border ${
                          estimator.type === type 
                            ? 'bg-amber-500 border-amber-500 text-slate-900' 
                            : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-300 mb-2">Finishing Standard Quality</label>
                  <div className="space-y-2">
                    {[
                      { name: 'Basic Structure', desc: 'Slab, Pillars, Brick Wall & Grey plaster work (No premium tiles).' },
                      { name: 'Standard Executive', desc: 'Standard wood work, grade-A brick, classic local tiles and fittings.' },
                      { name: 'A-Class Premium', desc: 'Imported marble/porcelain tiles, premium solid ash wood, elite bath fittings.' }
                    ].map((quality) => (
                      <label 
                        key={quality.name}
                        onClick={() => setEstimator(prev => ({ ...prev, quality: quality.name }))}
                        className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                          estimator.quality === quality.name 
                            ? 'bg-slate-900 border-amber-500 text-white' 
                            : 'bg-slate-900/40 border-slate-700 text-slate-400 hover:border-slate-600'
                        }`}
                      >
                        <input 
                          type="radio" 
                          name="quality"
                          checked={estimator.quality === quality.name}
                          onChange={() => {}} // Controlled by label click
                          className="mt-1 accent-amber-500"
                        />
                        <div>
                          <div className="text-xs font-black text-white">{quality.name}</div>
                          <div className="text-[10px] leading-tight mt-0.5 text-slate-400">{quality.desc}</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-amber-500 text-slate-900 font-extrabold py-3.5 rounded hover:bg-amber-400 transition-colors uppercase tracking-wider text-xs shadow-lg"
                >
                  Generate Financial Breakdown
                </button>
              </form>
            </div>

            {/* Simulated Report Output */}
            <div className="lg:col-span-7 bg-slate-800/60 border border-slate-700 rounded-2xl p-6 sm:p-8 min-h-[400px] flex flex-col justify-between">
              {estimatedCost ? (
                <div className="space-y-6 animate-fadeIn">
                  <div className="border-b border-slate-700 pb-4">
                    <span className="text-[10px] tracking-widest text-amber-500 font-extrabold uppercase font-mono block">Financial Report Generated</span>
                    <h4 className="text-xl font-bold text-white flex items-center gap-1.5 mt-1">
                      Estimated Capital Layout <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </h4>
                    <p className="text-xs text-slate-400">Approximated estimates matching Jaranwala Road & Khurrianwala regional supply indexes.</p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                      <span className="text-[10px] uppercase text-slate-400 block font-semibold">Total Cost</span>
                      <span className="text-base sm:text-lg font-black text-amber-500">PKR {(estimatedCost.total).toLocaleString()}</span>
                    </div>
                    <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800">
                      <span className="text-[10px] uppercase text-slate-400 block font-semibold">Avg Rate / SqFt</span>
                      <span className="text-base sm:text-lg font-black text-white">PKR {estimatedCost.perSqFt}</span>
                    </div>
                    <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800 col-span-2 sm:col-span-1">
                      <span className="text-[10px] uppercase text-slate-400 block font-semibold">Time to Handover</span>
                      <span className="text-base sm:text-lg font-black text-white flex items-center gap-1">
                        <Clock className="w-4 h-4 text-amber-500" /> {estimatedCost.duration} Months
                      </span>
                    </div>
                  </div>

                  {/* Visual Distribution Bar */}
                  <div>
                    <span className="text-xs uppercase text-slate-300 font-semibold block mb-2">Cost Distribution breakdown</span>
                    <div className="h-3 w-full rounded-full bg-slate-700 overflow-hidden flex">
                      <div className="h-full bg-amber-500" style={{ width: '60%' }} title="Material Supply" />
                      <div className="h-full bg-slate-300" style={{ width: '30%' }} title="Technical Labor" />
                      <div className="h-full bg-blue-500" style={{ width: '10%' }} title="Permits & Architect" />
                    </div>
                    <div className="flex flex-wrap gap-4 mt-2.5 text-[10px] text-slate-400 font-semibold uppercase">
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-amber-500 block" /> Materials: 60% (~PKR {estimatedCost.materials.toLocaleString()})</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-slate-300 block" /> Labor: 30% (~PKR {estimatedCost.labor.toLocaleString()})</span>
                      <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-blue-500 block" /> Design & Permits: 10% (~PKR {estimatedCost.permitsAndDesign.toLocaleString()})</span>
                    </div>
                  </div>

                  <div className="p-4 bg-amber-500/10 border border-amber-500/20 text-slate-300 rounded-lg text-xs leading-relaxed">
                    <strong>Note:</strong> Estimates generated represent standard cement mixes, high tensile structural steel bars, and expert regional masonry. Real actual pricing will vary with customized site blueprints.
                  </div>

                  <div className="pt-2">
                    <a href="#contact" className="inline-flex items-center gap-2 bg-white text-slate-900 font-extrabold px-6 py-2.5 rounded text-xs hover:bg-amber-500 hover:text-slate-900 transition-all uppercase tracking-wider">
                      Request Formal Quotation <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-6 my-auto">
                  <Calculator className="w-16 h-16 text-slate-600 mb-4 animate-pulse" />
                  <h4 className="text-lg font-bold text-white">Simulation Engine Ready</h4>
                  <p className="text-sm text-slate-400 mt-1 max-w-sm">
                    Enter your covered plot square footage, target quality parameters, and click calculate to view estimated pricing and execution timelines.
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* --- CEO MESSAGE SECTION --- */}
      <section className="py-20 lg:py-28 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column Profile Photo simulated with icon avatar framework */}
            <div className="lg:col-span-5 relative">
              <div className="aspect-[4/5] bg-slate-900 rounded-2xl overflow-hidden shadow-2xl relative flex flex-col justify-end p-8 text-white group">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10" />
                
                {/* Visual placeholder for CEO */}
                <div className="absolute inset-0 flex items-center justify-center p-6 text-slate-700">
                  <Users className="w-48 h-48 opacity-10" />
                </div>

                <div className="relative z-20">
                  <div className="text-amber-500 text-xs font-black uppercase tracking-widest mb-1">Chief Executive Officer</div>
                  <h3 className="text-2xl font-black text-white">Muhammad Zahid</h3>
                  <p className="text-xs text-slate-400">Founder & CEO, ALHAMD BUILDERS</p>
                </div>
              </div>
            </div>

            {/* Message Details */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs tracking-widest text-amber-600 font-bold uppercase block">
                Leader Message
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Relationship Transcends Traditional Client-Contractor Bounds
              </h2>
              
              <div className="text-slate-600 space-y-4 leading-relaxed text-sm">
                <p>
                  At <strong>ALHAMD BUILDERS</strong>, we view our organization as an aligned construction partner committed to delivering exceptional quality construction, value-added engineering design services, and smart resource procurement.
                </p>
                <p>
                  We strive with absolute focus on absolute transparency, zero-injury environments, and cost efficiency. Our dedication to continuously enhancing the quality of our work allows us to consistently exceed developer expectations.
                </p>
                <p className="italic border-l-4 border-amber-500 pl-4 py-1 text-slate-700 font-semibold bg-slate-50">
                  "Our mission is founded on strengthening our hard-earned reputation for integrity, excellence, and professionalism."
                </p>
              </div>

              {/* CEO signature look */}
              <div className="pt-4">
                <div className="text-slate-900 font-black text-lg">Muhammad Zahid</div>
                <div className="text-xs text-slate-500">CEO, Jaranwala Road Khurrianwala HQ</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CORE VALUES --- */}
      <section id="values" className="py-20 lg:py-28 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs tracking-widest text-amber-600 font-bold uppercase block">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Values That Build Our Success
            </h2>
            <p className="text-slate-600 text-sm">
              We ensure each structural execution complies with strict quality metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                title: 'Excellence in Execution',
                desc: 'From initial foundation concrete mixes to final elite farm house plaster coatings, we strive for zero errors and perfect alignment.'
              },
              {
                title: 'Transparent Partnership',
                desc: 'Cultivating authentic, collaborative partnerships with our clients, ensuring budgets match deliverables without surprise markups.'
              },
              {
                title: 'Continuous Improvement',
                desc: 'Embracing modern concrete casting methodologies, specialized structural tools, and eco-friendly treatment procedures.'
              },
              {
                title: 'Commitment to Growth',
                desc: 'Supporting the local Pakistani workforce, fostering expert skills, and offering robust training structures for our construction crew.'
              },
              {
                title: 'Client Satisfaction',
                desc: 'Achieving client handover schedules exactly on plan. Delivering properties on time and within agreed budget parameters.'
              },
              {
                title: 'Social Responsibility',
                desc: 'Promoting eco-friendly filtration structures and building systems minimizing carbon runoffs in critical industrial environments.'
              }
            ].map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex gap-4">
                <div className="text-amber-500 font-black text-xl shrink-0">0{idx + 1}.</div>
                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-base">{val.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* --- MAP & CONTACT INFO SECTION --- */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Direct contact info list */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
              <div>
                <span className="text-xs tracking-widest text-amber-600 font-bold uppercase block mb-2">
                  Locate Us
                </span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  Let’s Design Your Legacy Structure
                </h2>
                <p className="text-slate-600 text-sm mt-3">
                  Have an industrial site layout to execute, or a high-end luxury villa to design? Get directly in touch with our team of elite civil execution experts.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Call/WhatsApp Contacts</h4>
                    <p className="text-xs text-slate-600 mt-1">+92 300 5830118</p>
                    <p className="text-[10px] text-slate-400">Available Monday - Saturday (9:00 AM - 6:00 PM PKT)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-900/10 text-slate-900 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Email Coordination Desk</h4>
                    <p className="text-xs text-slate-600 mt-1">alhamadbuilders786@gmail.com</p>
                    <p className="text-xs text-slate-600">info@alhamadbuilders.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Main Office Location</h4>
                    <p className="text-xs text-slate-600 mt-1">
                      Near Total Petroleum, Jaranwala Road, Khurrianwala, Faisalabad, Pakistan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Badge */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-amber-500" />
                <div>
                  <h5 className="font-bold text-slate-900 text-xs">Registered Civil Contractor</h5>
                  <p className="text-[10px] text-slate-500">Complying with PEPRA guidelines & national structure safety codes.</p>
                </div>
              </div>

            </div>

            {/* Simulated Interactive Map & Quick Direction layout */}
            <div className="lg:col-span-7 bg-slate-100 rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between min-h-[350px]">
              
              {/* Layout mimicking map with beautiful styling */}
              <div className="p-6 bg-slate-900 text-white flex justify-between items-center shrink-0">
                <div>
                  <h4 className="font-bold text-sm">Faisalabad & Khurrianwala Coverage Map</h4>
                  <p className="text-[10px] text-slate-400">Serving urban centers, Millat Road, Paradise Phase 2 & industrial zones.</p>
                </div>
                <Compass className="w-8 h-8 text-amber-500 animate-spin-slow" />
              </div>

              {/* Graphic Representation of Khurrianwala Region Jaranwala Road */}
              <div className="flex-grow relative bg-slate-200 flex items-center justify-center p-8">
                
                {/* Simulated Grid Overlay representing a map plan */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#000_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
                
                <div className="relative text-center space-y-4 max-w-sm">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-500 text-slate-900 font-bold rounded-full text-[10px] shadow-md uppercase tracking-wide mx-auto">
                    <MapPin className="w-3 h-3" /> Headquarters Location
                  </div>
                  <h4 className="font-black text-slate-900 text-lg">Near Total Petroleum Station</h4>
                  <p className="text-xs text-slate-600">
                    Easily accessible directly from the Faisalabad-Lahore expressway route at Khurrianwala Junction.
                  </p>
                  
                  {/* Visual simulated pins representing notable nearby completed structures */}
                  <div className="flex flex-wrap justify-center gap-2 pt-2">
                    <span className="text-[9px] font-bold bg-white border border-slate-300 px-2 py-1 rounded shadow-sm text-slate-700">✓ Aspire College</span>
                    <span className="text-[9px] font-bold bg-white border border-slate-300 px-2 py-1 rounded shadow-sm text-slate-700">✓ Zafar Fabrics</span>
                    <span className="text-[9px] font-bold bg-white border border-slate-300 px-2 py-1 rounded shadow-sm text-slate-700">✓ Paradise Phase 2</span>
                  </div>
                </div>

              </div>

              {/* Simulated navigation instructions */}
              <div className="p-4 bg-white border-t border-slate-200 text-xs text-slate-500 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 block shrink-0 animate-ping" />
                <span>Site inspection visits are provided free of charge throughout Khurrianwala district.</span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-12 gap-8 mb-12">
          
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center">
              <AlHamdLogo className="h-20 w-auto" />
            </div>
            
            <p className="text-xs text-slate-500 leading-relaxed">
              Leading the infrastructure development in Pakistan with certified quality concrete mixes, superior design standards, and a legacy built on integrity and transparency.
            </p>
          </div>

          <div className="md:col-span-2 space-y-3 pt-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Services</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Industrial Units</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Residential Villas</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Commercial Centers</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Institutional Labs</a></li>
              <li><a href="#services" className="hover:text-amber-500 transition-colors">Water Treatment Plant</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 pt-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Delivered Projects</h4>
            <ul className="space-y-1.5 text-xs">
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Zafar Fabrics PVT Ltd</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Z A Farm House in Paradise</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Aspire College Khurrianwala</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">Jinnah Super Market</a></li>
              <li><a href="#projects" className="hover:text-amber-500 transition-colors">University Town Villa</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 space-y-3 pt-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Contact Headquarters</h4>
            <p className="text-xs text-slate-500">
              Near Total Petroleum, Jaranwala Road, Khurrianwala, Pakistan.
            </p>
            <p className="text-xs font-bold text-white">+92 300 5830118</p>
            <p className="text-xs text-slate-500">alhamadbuilders786@gmail.com</p>
          </div>

        </div>

        {/* Footer legalities */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900/60 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <div>
            &copy; {new Date().getFullYear()} ALHAMD BUILDERS. All Rights Reserved.
          </div>
          <div className="flex gap-4">
            <a href="#about" className="hover:text-slate-400">QHSE Policy</a>
            <a href="#estimator" className="hover:text-slate-400">Rates Guide</a>
            <a href="#contact" className="hover:text-slate-400">Support Desk</a>
          </div>
        </div>
      </footer>

    </div>
  );
}