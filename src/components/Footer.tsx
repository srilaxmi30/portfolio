import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-muted-foreground">
          © 2025 <span className="text-gradient font-semibold">Srilaxmi Kumba</span>. All rights reserved.
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="mailto:kumbasrilaxmi1@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
