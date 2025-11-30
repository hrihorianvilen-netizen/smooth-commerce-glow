import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Target,
  Heart,
  Lightbulb,
  Users,
  Award,
  Globe,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Customer First",
    description:
      "We obsess over our customers' success. Every feature, every decision is made with you in mind.",
  },
  {
    icon: Heart,
    title: "Trust & Security",
    description:
      "We handle your money with the utmost care. Security and reliability are non-negotiable.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We're constantly pushing boundaries to bring you the most advanced payment solutions.",
  },
  {
    icon: Users,
    title: "Transparency",
    description:
      "No hidden fees, no surprises. We believe in honest, straightforward business.",
  },
];

const stats = [
  { value: "2019", label: "Founded" },
  { value: "500+", label: "Employees" },
  { value: "50K+", label: "Businesses" },
  { value: "$50B+", label: "Processed" },
];

const team = [
  {
    name: "Sarah Chen",
    role: "CEO & Co-Founder",
    bio: "Former VP of Payments at Stripe. Stanford MBA.",
    avatar: "SC",
  },
  {
    name: "Michael Ross",
    role: "CTO & Co-Founder",
    bio: "Ex-Google engineer. Built payment systems for 10+ years.",
    avatar: "MR",
  },
  {
    name: "Emily Watson",
    role: "VP of Engineering",
    bio: "Former AWS principal engineer. Distributed systems expert.",
    avatar: "EW",
  },
  {
    name: "James Park",
    role: "VP of Product",
    bio: "Previously led product at Square. Y Combinator alum.",
    avatar: "JP",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description: "PayFlow was founded in San Francisco with a mission to simplify payments.",
  },
  {
    year: "2020",
    title: "Series A",
    description: "Raised $25M to expand our team and product offerings.",
  },
  {
    year: "2021",
    title: "10K Customers",
    description: "Reached our first major milestone of 10,000 active businesses.",
  },
  {
    year: "2022",
    title: "Global Expansion",
    description: "Launched in Europe and Asia Pacific, supporting 135+ currencies.",
  },
  {
    year: "2023",
    title: "Series B",
    description: "Raised $100M to accelerate growth and product development.",
  },
  {
    year: "2024",
    title: "50K Customers",
    description: "Now serving over 50,000 businesses across 195 countries.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Building the Future of{" "}
              <span className="text-gradient">Payments</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              We're on a mission to make financial infrastructure accessible to
              businesses of all sizes, everywhere in the world.
            </p>
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

      {/* Story Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  PayFlow was born out of frustration. As founders, we experienced
                  firsthand how difficult it was to accept payments online. Legacy
                  providers were expensive, slow to set up, and offered poor
                  developer experiences.
                </p>
                <p>
                  We believed there had to be a better way. So in 2019, we set out
                  to build the payment platform we wished existed – one that was
                  easy to use, affordable, and built for the modern internet
                  economy.
                </p>
                <p>
                  Today, PayFlow powers payments for over 50,000 businesses in 195
                  countries. From startups to enterprises, from e-commerce to
                  subscriptions, we're helping businesses accept payments and grow.
                </p>
              </div>
            </div>
            <div className="card-elevated p-8 lg:p-12 animate-slide-in-right">
              <div className="aspect-video bg-gradient-hero rounded-lg flex items-center justify-center">
                <Globe className="w-24 h-24 text-primary/20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="card-elevated p-6 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our growth story.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div
                    key={milestone.year}
                    className={`relative flex items-start gap-6 md:gap-0 animate-fade-in-up ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 mt-1.5" />
                    <div
                      className={`ml-10 md:ml-0 md:w-1/2 ${
                        index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                      }`}
                    >
                      <div className="card-elevated p-6">
                        <span className="text-sm font-semibold text-primary">
                          {milestone.year}
                        </span>
                        <h3 className="font-display text-lg font-semibold text-foreground mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-32 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the people building the future of payments.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-24 h-24 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-display text-2xl font-bold">
                  {member.avatar}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-sm text-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              Recognized for Excellence
            </h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Forbes Fintech 50",
              "Y Combinator Top Companies",
              "Inc. 5000",
              "Best Places to Work",
            ].map((award, index) => (
              <div
                key={award}
                className="flex items-center gap-2 px-6 py-3 bg-secondary rounded-full animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Award className="w-5 h-5 text-primary" />
                <span className="font-medium text-foreground">{award}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Join Our Team
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            We're always looking for talented people to help us build the future
            of payments.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="secondary"
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
              asChild
            >
              <Link to="/checkout">
                View Open Positions
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="heroOutline"
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
