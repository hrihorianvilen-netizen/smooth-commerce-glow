import { Link } from "react-router-dom";
import { CreditCard, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Security", path: "/about" },
    { name: "Integrations", path: "/features" },
  ],
  company: [
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/about" },
    { name: "Blog", path: "/about" },
    { name: "Press", path: "/about" },
  ],
  support: [
    { name: "Help Center", path: "/about" },
    { name: "Documentation", path: "/about" },
    { name: "Contact Us", path: "/about" },
    { name: "Status", path: "/about" },
  ],
  legal: [
    { name: "Privacy Policy", path: "/about" },
    { name: "Terms of Service", path: "/about" },
    { name: "Cookie Policy", path: "/about" },
    { name: "Compliance", path: "/about" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <CreditCard className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-2xl font-semibold">
                PayFlow
              </span>
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">
              Secure, fast, and reliable payment solutions for modern businesses. Accept payments worldwide with ease.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-background/70">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@payflow.com</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2024 PayFlow. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-background/60">Secured by</span>
            <div className="flex items-center gap-4">
              <div className="px-3 py-1 bg-background/10 rounded text-xs font-medium">
                SSL
              </div>
              <div className="px-3 py-1 bg-background/10 rounded text-xs font-medium">
                PCI DSS
              </div>
              <div className="px-3 py-1 bg-background/10 rounded text-xs font-medium">
                SOC 2
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
