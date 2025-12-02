import React from 'react';
import { LayoutGrid, Code, BrainCircuit, ArrowDown } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Button';
import ServiceCard from './components/ServiceCard';

const App: React.FC = () => {
  const services = [
    {
      title: 'UI/UX Designing',
      description: 'We craft intuitive, human-centered interfaces that drive engagement and delight users at every touchpoint.',
      icon: LayoutGrid,
      features: [
        'User Research & Strategy',
        'Wireframing & Prototyping',
        'Design Systems'
      ]
    },
    {
      title: 'Robust Development',
      description: 'Scalable, high-performance engineering for the modern web. We build solid foundations for growth.',
      icon: Code,
      features: [
        'Full-Stack Architecture',
        'React & Next.js Experts',
        'Performance Optimization'
      ]
    },
    {
      title: 'AI & Automation',
      description: 'Leveraging next-gen intelligence to automate complex workflows and create personalized experiences.',
      icon: BrainCircuit,
      features: [
        'Predictive Analytics',
        'Process Automation',
        'Custom AI Models'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative pt-40 pb-32 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
          {/* Decorative background blur */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />

          <div className="relative z-10 animate-[fadeInUp_0.8s_ease-out_forwards]">
            <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <span className="text-xs font-medium tracking-widest uppercase text-gray-400">Digital Innovation Agency</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]">
              Building Tomorrow's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">Digital Experience.</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-brand-muted mb-12 leading-relaxed font-light">
              True Aves is a strategic design and engineering partner for forward-thinking brands. We merge aesthetics with function to define the future.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
              <Button variant="primary" className="w-full sm:w-auto h-14 text-base px-10">
                Start Project
              </Button>
              <Button variant="outline" showArrow className="w-full sm:w-auto h-14 text-base px-10">
                View Our Work
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 bg-[#080808] border-t border-brand-border">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">Our Core Capabilities</h2>
                <p className="text-brand-muted text-lg">
                  We don't just build websites; we build comprehensive digital ecosystems designed to scale.
                </p>
              </div>
              <div className="hidden md:block">
                 <ArrowDown className="w-8 h-8 text-gray-600 animate-bounce" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <ServiceCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  features={service.features}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Minimal CTA strip */}
        <section className="py-24 border-t border-brand-border bg-brand-bg relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/[0.02] rounded-full blur-[100px] pointer-events-none" />
           <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
             <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Have an idea in mind?</h2>
             <p className="text-xl text-brand-muted mb-10">
               Stop waiting. Start building. Join the leading companies working with True Aves.
             </p>
             <Button variant="primary" className="h-14 px-12 text-base">Let's Talk</Button>
           </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default App;