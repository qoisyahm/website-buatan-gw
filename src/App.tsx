import { useState, useEffect } from 'react';
import { Database, Award, Mail, Github, Linkedin, ExternalLink, ChevronDown } from 'lucide-react';
import "./App.css"

// Liquid Glass Card Component
type GlassCardProps = {
  children?: React.ReactNode;
  className?: string;
  hover?: boolean;
  liquid?: boolean;
  style?: React.CSSProperties;
};

const GlassCard = ({ children, className = '', hover = true, liquid = false, style }: GlassCardProps) => (
  <div className={`${liquid ? 'liquid-glass' : 'glass'} rounded-2xl p-6 transition-all duration-500 ${hover ? 'hover:scale-105 hover:shadow-2xl' : ''} ${className}`} style={{ position: 'relative', ...(style || {}) }}>
    {liquid && (
      <>
        <div className="liquid-blob" style={{
          width: '150px',
          height: '150px',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.4), transparent)',
          top: '-50px',
          left: '-50px',
          animationDelay: '0s'
        }} />
        <div className="liquid-blob" style={{
          width: '120px',
          height: '120px',
          background: 'radial-gradient(circle, rgba(191, 90, 242, 0.4), transparent)',
          bottom: '-40px',
          right: '-40px',
          animationDelay: '10s'
        }} />
      </>
    )}
    <div style={{ position: 'relative', zIndex: 1 }}>
      {children}
    </div>
  </div>
);

// Button Component
type ButtonProps = {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | string;
  icon?: React.ComponentType<any> | null;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

const Button = ({ children, variant = 'primary', icon: Icon = null, onClick, className = '' }: ButtonProps) => {
  const variants: Record<string, string> = {
    primary: `bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg hover:shadow-xl`,
    secondary: `glass text-white hover:bg-opacity-80`,
  };
  
  return (
    <button 
      onClick={onClick}
      className={`px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
      {Icon && <Icon size={18} />}
    </button>
  );
};

// Hero Section
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Liquid Blobs Background */}
      <div className="absolute inset-0">
        <div className="liquid-blob" style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(10, 132, 255, 0.2), transparent)',
          top: '10%',
          left: '10%',
          animationDelay: '0s',
          animationDuration: '25s'
        }} />
        <div className="liquid-blob" style={{
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle, rgba(94, 92, 230, 0.15), transparent)',
          top: '50%',
          right: '10%',
          animationDelay: '5s',
          animationDuration: '30s'
        }} />
        <div className="liquid-blob" style={{
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(191, 90, 242, 0.2), transparent)',
          bottom: '10%',
          left: '50%',
          animationDelay: '10s',
          animationDuration: '28s'
        }} />
      </div>
      
      {/* Animated Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(10, 132, 255, 0.15), transparent 50%)`,
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
            <div className="inline-block px-4 py-2 liquid-glass rounded-full text-sm text-blue-400 mb-6">
              ✨ Available for opportunities
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
              Kay
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-300 mb-6 animate-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            Data Analyst
          </h2>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
            Mengubah data menjadi keputusan yang terukur dan berdampak.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center animate-in" style={{ animationDelay: '0.5s', opacity: 0 }}>
            <Button variant="primary" icon={ExternalLink}>
              View Projects
            </Button>
            <Button variant="secondary" icon={Mail}>
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-600" />
      </div>
    </section>
  );
};

// About Section
const AboutSection = () => (
  <section className="py-24 px-6">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        About <span className="text-blue-400">Me</span>
      </h2>
      
      <GlassCard liquid={true} className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-300 leading-relaxed mb-6">
          Saya adalah seorang Data Analyst yang passionate dalam mengekstrak insight bermakna dari data kompleks. 
          Dengan pengalaman dalam analisis statistik, visualisasi data, dan machine learning, saya membantu organisasi 
          membuat keputusan berbasis data yang strategis.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Keahlian saya meliputi Python, SQL, Power BI, dan berbagai tools analitik modern untuk mengubah raw data 
          menjadi actionable insights yang mendorong pertumbuhan bisnis.
        </p>
      </GlassCard>
    </div>
  </section>
);

// Skills Section
const SkillsSection = () => {
  const skills = [
    { category: 'Programming', items: ['Python', 'SQL', 'R', 'JavaScript'] },
    { category: 'Data Analysis', items: ['Pandas', 'NumPy', 'Statistical Analysis', 'A/B Testing'] },
    { category: 'Visualization', items: ['Power BI', 'Tableau', 'Matplotlib', 'Seaborn'] },
    { category: 'Machine Learning', items: ['Scikit-learn', 'TensorFlow', 'Predictive Modeling', 'Classification'] },
    { category: 'Tools', items: ['Excel', 'Git', 'Jupyter', 'Google Analytics'] },
    { category: 'Database', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'BigQuery'] },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-surface/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Skills & <span className="text-blue-400">Tech Stack</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Tools dan teknologi yang saya kuasai</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <GlassCard key={idx} className="animate-in" style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}>
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-surface rounded-lg text-sm text-gray-300 border border-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section
const ProjectsSection = () => {
  const projects = [
    {
      title: 'E-Commerce Sales Analytics',
      description: 'Dashboard interaktif untuk menganalisis pola pembelian, churn rate, dan customer segmentation menggunakan Python dan Power BI.',
      tech: ['Python', 'Power BI', 'SQL'],
      impact: '+32% Revenue Growth',
    },
    {
      title: 'Customer Churn Prediction',
      description: 'Model machine learning untuk memprediksi customer churn dengan akurasi 89%, membantu retention strategy.',
      tech: ['Python', 'Scikit-learn', 'XGBoost'],
      impact: '89% Accuracy',
    },
    {
      title: 'Social Media Sentiment Analysis',
      description: 'Analisis sentimen real-time dari social media untuk brand monitoring dan insight konsumen.',
      tech: ['Python', 'NLP', 'Tableau'],
      impact: '10K+ Posts Analyzed',
    },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="text-blue-400">Projects</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Beberapa project terbaik yang telah saya kerjakan</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <GlassCard key={idx} liquid={true} className="flex flex-col animate-in" style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}>
              <div className="mb-4">
                <Database className="text-blue-400 mb-3" size={32} />
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              </div>
              
              <div className="mb-4">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="text-green-400 text-sm font-semibold">
                  📈 {project.impact}
                </div>
              </div>
              
              <button className="mt-auto px-4 py-2 glass rounded-lg text-sm hover:bg-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2">
                View Detail <ExternalLink size={14} />
              </button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Certificates Section
const CertificatesSection = () => {
  const certificates = [
    { name: 'Google Data Analytics Professional Certificate', issuer: 'Google', year: '2024', icon: Award },
    { name: 'Microsoft Certified: Data Analyst Associate', issuer: 'Microsoft', year: '2024', icon: Award },
    { name: 'IBM Data Science Professional Certificate', issuer: 'IBM', year: '2023', icon: Award },
    { name: 'Tableau Desktop Specialist', issuer: 'Tableau', year: '2023', icon: Award },
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-transparent to-surface/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Certificates & <span className="text-blue-400">Achievements</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">Sertifikasi profesional yang telah saya raih</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certificates.map((cert, idx) => (
            <GlassCard key={idx} className="flex items-start gap-4 animate-in" style={{ animationDelay: `${idx * 0.1}s`, opacity: 0 }}>
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl">
                    {(() => {
                      const Icon = cert.icon;
                      return <Icon className="text-blue-400" size={24} />;
                    })()}
                  </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-1">{cert.name}</h3>
                <p className="text-sm text-gray-400">{cert.issuer} • {cert.year}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const ContactSection = () => {
  const socials = [
    { icon: Mail, label: 'Email', value: 'kay@example.com', link: 'mailto:kay@example.com' },
    { icon: Github, label: 'GitHub', value: 'github.com/kay', link: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', value: 'linkedin.com/in/kay', link: 'https://linkedin.com' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="text-blue-400">Connect</span>
        </h2>
        <p className="text-gray-400 mb-12">
          Tertarik untuk berkolaborasi? Mari berdiskusi tentang bagaimana data dapat membantu bisnis Anda.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socials.map((social, idx) => (
            <a 
              key={idx} 
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
                <GlassCard liquid={true} className="text-center hover:bg-blue-500/10">
                {(() => {
                  const Icon = social.icon;
                  return <Icon className="text-blue-400 mx-auto mb-3" size={32} />;
                })()}
                <h3 className="font-semibold mb-1">{social.label}</h3>
                <p className="text-sm text-gray-400">{social.value}</p>
              </GlassCard>
            </a>
          ))}
        </div>
        
        <Button variant="primary" icon={Mail} className="mx-auto">
          Send Message
        </Button>
      </div>
    </section>
  );
};

// Footer
const Footer = () => (
  <footer className="py-8 px-6 border-t border-gray-800">
    <div className="container mx-auto text-center text-gray-500 text-sm">
      <p>© 2026 Kay. Built with React & Tailwind CSS.</p>
      <p className="mt-2">Designed with passion for data and clean code.</p>
    </div>
  </footer>
);

// Main App
export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}