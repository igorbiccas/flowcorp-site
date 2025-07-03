import React from 'react';
import { InstagramIcon, TwitterIcon } from './icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 border-t border-brand-border">
      <div className="container mx-auto px-6 text-center text-brand-text-secondary">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <p className="text-sm">&copy; {currentYear} Selfbrain. Todos os direitos reservados.</p>
            <div className="flex items-center gap-x-8">
                <a href="https://selfbrain.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-cyan transition-colors">Selfbrain</a>
                <a href="https://x.com/selfbrain_" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-cyan transition-colors flex items-center gap-2">
                  <TwitterIcon /> Twitter
                </a>
                <a href="https://www.instagram.com/selfbrain_/" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-brand-cyan transition-colors flex items-center gap-2">
                  <InstagramIcon /> Instagram
                </a>
            </div>
          </div>
      </div>
    </footer>
  );
};

export default Footer;