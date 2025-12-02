import React from 'react';
import { Triangle, Twitter, Linkedin, Github } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-bg border-t border-brand-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-12 mb-16">
          <div className="text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-6">
              <Triangle className="w-6 h-6 text-white fill-white" />
              <span className="text-xl font-bold tracking-tight text-white">True Aves</span>
            </div>
            <p className="text-brand-muted mb-8 text-lg">
              Ready to redefine your digital presence? Let's build something extraordinary together.
            </p>
            <Button variant="outline" showArrow>Get in Touch</Button>
          </div>

          <div className="flex gap-8">
             <a href="#" className="text-gray-500 hover:text-white transition-colors"><Twitter className="w-6 h-6" /></a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors"><Linkedin className="w-6 h-6" /></a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors"><Github className="w-6 h-6" /></a>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-4">
          <p>&copy; {new Date().getFullYear()} True Aves. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;