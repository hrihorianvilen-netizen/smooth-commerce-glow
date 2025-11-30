import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  BarChart3,
  RefreshCcw,
  Smartphone,
  Users,
  Lock,
  Webhook,
  Clock,
} from "lucide-react";

const mainFeatures = [
  {
    icon: CreditCard,
    title: "All Payment Methods",
    description:
      "Accept credit cards, debit cards, digital wallets like Apple Pay and Google Pay, bank transfers, and 100+ local payment methods.",
    benefits: [
      "Visa, Mastercard, Amex, Discover",
      "Apple Pay, Google Pay, Samsung Pay",
      "ACH, SEPA, Wire Transfers",
      "Klarna, Afterpay, Affirm",
    ],
  },
  {
    icon: Shield,
    title: "Advanced Security",
    description:
      "Bank-grade security with PCI DSS Level 1 compliance, 3D Secure, and AI-powered fraud prevention to protect every transaction.",
    benefits: [
      "PCI DSS Level 1 certified",
      "3D Secure 2.0 authentication",
      "Machine learning fraud detection",
      "Real-time risk scoring",
    ],
  },
  {
    icon: Globe,
    title: "Global Payments",
    description:
      "Accept payments from 195+ countries with automatic currency conversion, localized payment methods, and multi-language checkout.",
    benefits: [
      "135+ currencies supported",
      "Dynamic currency conversion",
      "Local payment methods",
      "Multi-language checkout",
    ],
  },
  {
    icon: Zap,
    title: "Instant Payouts",
    description:
      "Get your money faster with instant payouts to your bank account. No more waiting days for your funds to settle.",
    benefits: [
      "Same-day payouts available",
      "Automatic payout scheduling",
      "Multiple bank accounts",
      "Detailed payout reports",
    ],
  },
];

const additionalFeatures = [
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Real-time insights into your revenue, conversion rates, and customer behavior.",
  },
  {
    icon: RefreshCcw,
    title: "Recurring Billing",
    description:
      "Easily manage subscriptions with flexible billing cycles and automatic retries.",
  },
  {
    icon: Smartphone,
    title: "Mobile SDK",
    description:
      "Native SDKs for iOS and Android with pre-built UI components.",
  },
  {
    icon: Users,
    title: "Multi-User Access",
    description:
      "Invite team members with role-based permissions and audit logs.",
  },
  {
    icon: Lock,
    title: "Tokenization",
    description:
      "Securely store card details for one-click checkout experiences.",
  },
  {
    icon: Webhook,
    title: "Webhooks & API",
    description:
      "Real-time event notifications and comprehensive REST API.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock support via chat, email, and phone for all plans.",
  },
  {
    icon: CreditCard,
    title: "Virtual Cards",
    description:
      "Issue virtual cards for expenses, payouts, and vendor payments.",
  },
];

export default function Features() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Powerful Features for{" "}
              <span className="text-gradient">Modern Payments</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              Everything you need to accept payments, manage subscriptions, and
              grow your business globally.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div
                  className={`animate-fade-in-up ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h2 className="font-display text-3xl font-bold text-foreground mb-4">
                    {feature.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-3 text-foreground"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <ArrowRight className="w-3 h-3 text-primary" />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`card-elevated p-8 lg:p-12 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                    <feature.icon className="w-24 h-24 text-primary/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              And Much More
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover all the tools you need to build a world-class payment
              experience.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="card-elevated p-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Join thousands of businesses using PayFlow. Start accepting payments
            in minutes.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <Link to="/checkout">
                Start Free Trial
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/about">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
