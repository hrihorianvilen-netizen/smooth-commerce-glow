import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: CreditCard,
    title: "Accept All Cards",
    description: "Support for Visa, Mastercard, Amex, and 100+ local payment methods worldwide.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "PCI DSS Level 1 compliant with advanced fraud detection and prevention.",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Go live in minutes with our simple API integration and dashboard.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Accept payments from 195+ countries with automatic currency conversion.",
  },
];

const stats = [
  { value: "99.99%", label: "Uptime SLA" },
  { value: "$50B+", label: "Processed Annually" },
  { value: "10M+", label: "Happy Customers" },
  { value: "195+", label: "Countries Supported" },
];

const testimonials = [
  {
    quote: "PayFlow transformed our checkout experience. Conversion rates increased by 40% within the first month.",
    author: "Sarah Chen",
    role: "CEO, TechStart Inc",
    avatar: "SC",
  },
  {
    quote: "The security features and fraud detection are unmatched. We've had zero chargebacks since switching.",
    author: "Michael Ross",
    role: "CTO, E-Commerce Plus",
    avatar: "MR",
  },
  {
    quote: "Integration was seamless. Their documentation and support team are exceptional.",
    author: "Emily Watson",
    role: "Lead Developer, ShopMax",
    avatar: "EW",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "2.9%",
    description: "Perfect for small businesses just getting started",
    features: ["All payment methods", "Basic analytics", "Email support", "Standard checkout"],
  },
  {
    name: "Professional",
    price: "2.5%",
    description: "For growing businesses with higher volume",
    features: ["Everything in Starter", "Advanced analytics", "Priority support", "Custom checkout", "Fraud protection"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: ["Everything in Pro", "Dedicated manager", "Custom integrations", "Volume discounts", "SLA guarantee"],
  },
];

export default function Index() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.1),transparent_50%)]" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 animate-fade-in">
              <Zap className="w-4 h-4" />
              <span>Now with AI-powered fraud detection</span>
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Accept Payments{" "}
              <span className="text-gradient">Worldwide</span>
              <br />
              with Confidence
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              The complete payment platform for modern businesses. Accept cards, wallets, and local payment methods with one simple integration.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/checkout">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/features">View Demo</Link>
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>No monthly fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Accept Payments
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete toolkit designed for conversion, security, and scale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              No hidden fees. No surprises. Pay only for what you use.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative card-elevated p-8 ${
                  tier.popular ? "ring-2 ring-primary" : ""
                } animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <div className="font-display text-4xl font-bold text-foreground mb-2">
                    {tier.price}
                    {tier.price !== "Custom" && (
                      <span className="text-lg font-normal text-muted-foreground">
                        + 30¢
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/checkout">
                    {tier.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See why thousands of businesses choose PayFlow for their payment needs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.author}
                className="card-elevated p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of businesses already using PayFlow. Set up in minutes, not days.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <Link to="/checkout">
                Create Free Account
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/about">Talk to Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
