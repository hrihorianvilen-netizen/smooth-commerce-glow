import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, X, ArrowRight, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups",
    monthlyPrice: 0,
    yearlyPrice: 0,
    transactionFee: "2.9% + 30¢",
    features: [
      { name: "All payment methods", included: true },
      { name: "Basic analytics", included: true },
      { name: "Email support", included: true },
      { name: "Standard checkout", included: true },
      { name: "1 team member", included: true },
      { name: "API access", included: true },
      { name: "Priority support", included: false },
      { name: "Custom checkout", included: false },
      { name: "Advanced fraud protection", included: false },
      { name: "Dedicated account manager", included: false },
    ],
  },
  {
    name: "Professional",
    description: "For growing businesses with higher volume",
    monthlyPrice: 49,
    yearlyPrice: 39,
    transactionFee: "2.5% + 25¢",
    popular: true,
    features: [
      { name: "All payment methods", included: true },
      { name: "Advanced analytics", included: true },
      { name: "Priority support", included: true },
      { name: "Custom checkout", included: true },
      { name: "10 team members", included: true },
      { name: "API access", included: true },
      { name: "Advanced fraud protection", included: true },
      { name: "Webhooks", included: true },
      { name: "Dedicated account manager", included: false },
      { name: "Custom integrations", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations with specific needs",
    monthlyPrice: null,
    yearlyPrice: null,
    transactionFee: "Custom",
    features: [
      { name: "All payment methods", included: true },
      { name: "Custom analytics", included: true },
      { name: "24/7 phone support", included: true },
      { name: "White-label checkout", included: true },
      { name: "Unlimited team members", included: true },
      { name: "Full API access", included: true },
      { name: "Enterprise fraud protection", included: true },
      { name: "Webhooks", included: true },
      { name: "Dedicated account manager", included: true },
      { name: "Custom integrations", included: true },
    ],
  },
];

const faqs = [
  {
    question: "What payment methods do you support?",
    answer:
      "We support all major credit and debit cards (Visa, Mastercard, American Express, Discover), digital wallets (Apple Pay, Google Pay), bank transfers, and 100+ local payment methods worldwide.",
  },
  {
    question: "Are there any hidden fees?",
    answer:
      "No hidden fees. You only pay the transaction fee listed for your plan. There are no setup fees, monthly minimums, or cancellation fees.",
  },
  {
    question: "Can I switch plans at any time?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.",
  },
  {
    question: "What's your refund policy?",
    answer:
      "We offer a 30-day money-back guarantee on all paid plans. If you're not satisfied, we'll refund your subscription fee.",
  },
  {
    question: "Do you offer volume discounts?",
    answer:
      "Yes! If you process over $100,000/month, contact our sales team to discuss custom pricing tailored to your business.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We're PCI DSS Level 1 certified, the highest level of security compliance. We use 256-bit SSL encryption and never store sensitive card data.",
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Simple, Transparent{" "}
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              No hidden fees. No surprises. Choose the plan that fits your
              business.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center gap-4 p-1 bg-secondary rounded-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  !isYearly
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2",
                  isYearly
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Yearly
                <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={cn(
                  "relative card-elevated p-8 animate-fade-in-up",
                  tier.popular && "ring-2 ring-primary"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    {tier.description}
                  </p>
                  <div className="mb-2">
                    {tier.monthlyPrice !== null ? (
                      <>
                        <span className="font-display text-5xl font-bold text-foreground">
                          ${isYearly ? tier.yearlyPrice : tier.monthlyPrice}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                      </>
                    ) : (
                      <span className="font-display text-3xl font-bold text-foreground">
                        Custom
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    + {tier.transactionFee} per transaction
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature) => (
                    <li
                      key={feature.name}
                      className="flex items-center gap-3"
                    >
                      {feature.included ? (
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0" />
                      )}
                      <span
                        className={cn(
                          "text-sm",
                          feature.included
                            ? "text-foreground"
                            : "text-muted-foreground/50"
                        )}
                      >
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={tier.popular ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/checkout">
                    {tier.monthlyPrice === null
                      ? "Contact Sales"
                      : tier.monthlyPrice === 0
                      ? "Start Free"
                      : "Get Started"}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to know about our pricing and plans.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex items-start gap-3 mb-2">
                  <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-muted-foreground pl-8">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Our team is here to help you find the perfect plan for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <Link to="/about">
                Talk to Sales
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/checkout">Start Free Trial</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
