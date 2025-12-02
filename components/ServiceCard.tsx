import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon: Icon }) => {
  return (
    <div className="group relative p-8 bg-brand-card rounded-2xl border border-transparent hover:border-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Subtle Gradient Glow on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      <div className="relative z-10">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/5 text-brand-text group-hover:bg-white group-hover:text-black transition-colors duration-300">
          <Icon className="w-7 h-7" />
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{title}</h3>
        <p className="text-brand-muted mb-8 leading-relaxed text-sm">
          {description}
        </p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-gray-400">
              <span className="mr-3 mt-0.5 flex-shrink-0 text-white">
                <Check className="w-4 h-4" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;