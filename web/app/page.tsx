"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Target, ArrowRight, Building, Zap, Leaf, Globe, CheckCircle2, Mail, MapPin, DollarSign, Sparkles, Clock, Shield, Star, Phone, Award } from "lucide-react";

// Investor data with verified backstories - Updated Jan 2, 2026 v2
const institutionalInvestors = [
  {
    name: "Rockpoint Group",
    type: "Private Equity",
    tagline: "Boston-Based Multifamily Focus",
    highlight: "$5.1B Fund VII • 95K Units Deployed",
    location: "500 Boylston St, Boston",
    fit: "Fresh capital actively deploying in 2025-2026",
    color: "from-blue-500 to-cyan-500",
    action: "info@rockpoint.com",
    backstory: "Founded in 2003 by Bill Walton & Keith Gelb. Headquartered at 500 Boylston St in Boston, Rockpoint is a value-add multifamily specialist—they buy underperforming properties, renovate, and hold for the long term. With $15B+ AUM and 97,000+ multifamily units deployed, they've been through multiple real estate cycles and know the New England market.",
  },
  {
    name: "The Davis Companies",
    type: "Private Equity/Developer",
    tagline: "Vertically Integrated Platform",
    highlight: "$12.8B AUM • $977M Fund V (2024)",
    location: "Boston HQ",
    fit: "Similar business model • Proven multifamily expertise",
    color: "from-violet-500 to-purple-500",
    action: "thedaviscompanies.com",
    backstory: "Founded in 1976, Davis is a vertically integrated real estate platform with nearly 50 years of history. They develop, acquire, and manage their own deals—giving them operational control most pure capital providers don't have. Known for the Domain office complex in Seaport and extensive multifamily holdings across Greater Boston.",
  },
  {
    name: "Fifth Wall",
    type: "Climate-Tech VC",
    tagline: "Real Estate Decarbonization",
    highlight: "$740M Climate Fund • Largest PropTech VC",
    location: "Global / Boston Presence",
    fit: "ESG-aligned strategic capital for sustainable development",
    color: "from-emerald-500 to-green-500",
    action: "fifthwall.com",
    backstory: "Founded by Brendan Wallace (formerly at Blackstone) in 2016. Backed by major real estate players like Prologis, Equity Residential, and Lennar. They invest in technologies that make real estate more sustainable, efficient, and valuable. Your ESG angle is exactly their thesis.",
  },
];

const individualInvestors = [
  {
    name: "LaunchPad Venture Group",
    type: "Angel Network",
    tagline: "New England's Most Active Angels",
    highlight: "175+ Members • $125M+ Deployed Since 2001",
    location: "Boston, MA",
    fit: "Apply online to present • Direct access to individual wealth",
    color: "from-orange-500 to-amber-500",
    action: "launchpadventuregroup.com",
    backstory: "Active since 2001, LaunchPad has 175+ individual investor members who've deployed $125M+ into 150+ startups. Unlike pooled angel funds, each member invests directly—so one presentation can build 175 individual relationships. Led by Managing Director Ian Levine, their Catalyst networking events are where deals actually get done in New England.",
  },
  {
    name: "Golden Seeds",
    type: "Angel Network",
    tagline: "280+ Members Nationwide • Boston Chapter Active",
    highlight: "Women-Led Investing • Multiple Sectors",
    location: "Boston Chapter",
    fit: "Active Boston chapter • Diverse investor base",
    color: "from-yellow-500 to-amber-500",
    action: "goldenseeds.com (Boston Chapter)",
    backstory: "Founded in 2005, Golden Seeds has grown to 280+ members nationwide with active chapters including Boston. They've deployed $175M+ into 235+ companies led by women and diverse founders. Their Boston chapter is active in climate tech and real estate—your sustainable development approach aligns with their investment thesis.",
  },
  {
    name: "Joe Caruso",
    type: "Super-Angel",
    tagline: "Bantam Group • 'Grand Vizier' Model",
    highlight: "269+ Investments • 74+ Exits",
    location: "Boston, MA",
    fit: "Boston's most connected super-angel • Hands-on advisory",
    color: "from-rose-500 to-pink-500",
    action: "Network through Boston tech ecosystem",
    backstory: "A Boston legend. Joe operates Bantam Group almost as a one-person show—he's made 269+ investments and overseen 74+ exits. Known as the 'Grand Vizier' for his hands-on advisory approach. He doesn't just write checks; he wakes founders up, mediates disputes, and makes introductions. Find him through Boston tech events or Common Angels.",
  },
];

const wealthManagement = [
  {
    name: "Eastern Bank - Cambridge Trust",
    type: "Wealth Management",
    highlight: "$9.2B AUM • Largest Bank-Owned Advisor in MA",
    contact: "Wealth Management Division",
    fit: "Gatekeeper to 100+ HNW family clients",
    backstory: "Eastern Bank acquired Cambridge Trust in July 2024, creating Massachusetts's largest bank-owned investment advisor with $9.2B AUM. Their wealth management division serves families with substantial real estate holdings and actively seeks alternative investments for clients seeking diversification beyond stocks and bonds.",
  },
  {
    name: "Bessemer Trust",
    type: "Multi-Family Office",
    highlight: "118 Years • Boston Office",
    contact: "bessemertrust.com/wealth-management-boston",
    fit: "Multi-gen family wealth • Real estate allocations",
    backstory: "Bessemer has been managing family wealth since 1907—that's 118 years through market crashes, wars, and cycles. Their Boston office serves multi-generational families who allocate 15-25% to real estate. They're not looking for quick wins—they're looking for long-term relationships with proven developers.",
  },
];

const marketStats = [
  { label: "Institutional Investors", value: "45+", icon: Building2 },
  { label: "Individual Access", value: "500+", icon: Users },
  { label: "Capital Identified", value: "$100B+", icon: DollarSign },
  { label: "MA Volume (2025)", value: "$710M", icon: TrendingUp },
];

const benefits = [
  { icon: Clock, title: "Save 100+ Hours", desc: "Skip the research maze. Get a vetted, actionable list in minutes, not months." },
  { icon: Target, title: "High-Probability Leads", desc: "Every investor has capital actively deploying and thesis aligned with your projects." },
  { icon: Shield, title: "Relationship-Ready", desc: "Contact paths, warm intro strategies, and talking points included for each investor." },
  { icon: Star, title: "Competitive Edge", desc: "Know the landscape better than competitors. Walk into conversations prepared." },
];

function StatCard({ stat, index }: { stat: typeof marketStats[0]; index: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(1), index * 150);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: count ? 1 : 0, y: count ? 0 : 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="glass-dark rounded-2xl p-6 glow hover:scale-105 transition-transform duration-300">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
        <stat.icon className="w-8 h-8 text-emerald-400 mb-3" />
        <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
        <div className="text-slate-400 text-sm">{stat.label}</div>
      </div>
    </motion.div>
  );
}

function BenefitCard({ benefit, index }: { benefit: typeof benefits[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
        <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
          <benefit.icon className="w-6 h-6 text-emerald-400" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
        <p className="text-slate-400 text-sm">{benefit.desc}</p>
      </div>
    </motion.div>
  );
}

function InvestorCard({ investor, index }: { investor: typeof institutionalInvestors[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="glass rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300 border border-white/10 hover:border-emerald-500/30">
        <div className={`absolute inset-0 bg-gradient-to-br ${investor.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-1">
                {investor.type}
              </div>
              <h3 className="text-xl font-bold text-white">{investor.name}</h3>
              <p className="text-slate-400 text-sm mt-1">{investor.tagline}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${investor.color} flex items-center justify-center`}>
              <Building className="w-6 h-6 text-white" />
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-3 mb-4">
            <div className="text-lg font-semibold text-white">{investor.highlight}</div>
          </div>

          <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {investor.location}
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm text-emerald-400 mb-4">
            <CheckCircle2 className="w-4 h-4" />
            {investor.fit}
          </div>

          {/* Icebreaker section */}
          <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-xl p-3 mb-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="text-xs font-medium text-emerald-400 uppercase tracking-wide">Conversation Starter</span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">{investor.backstory}</p>
          </div>

          <div className="pt-3 border-t border-white/10">
            <div className="text-xs text-slate-500 flex items-center gap-1">
              <ArrowRight className="w-3 h-3" />
              {investor.action}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl animate-float" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Personalization badge - MORE PROMINENT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass border border-emerald-500/30 bg-emerald-500/5">
              <Sparkles className="w-5 h-5 text-emerald-400" />
              <span className="text-base text-slate-200">Prepared exclusively for</span>
              <span className="text-lg font-bold text-white">Brenden Gove</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">The Right Capital</span>
            <br />
            <span className="text-emerald-400">For Your Next Project</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            I've mapped the New England sustainable real estate investment landscape—45+ institutional firms,
            500+ individual angels, and the wealth managers who can introduce you to both. Each investor profile
            includes conversation starters so you can walk in prepared.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {marketStats.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="#why" className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all hover:scale-105">
              <Target className="w-5 h-5" />
              See Why It Matters
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#investors" className="group inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all hover:scale-105">
              <Building className="w-5 h-5" />
              View Investor Targets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-slate-600 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="why" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Why This Research Matters</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Capital raising isn't about finding MORE investors—it's about finding the RIGHT investors.
              This research saves you months of networking and positions you ahead of the conversation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {benefits.map((benefit, index) => (
              <BenefitCard key={benefit.title} benefit={benefit} index={index} />
            ))}
          </div>

          {/* Market Context */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 glow-green"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-2xl font-bold text-white">Massachusetts Market Momentum</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-5">
                <div className="text-3xl font-bold text-emerald-400 mb-2">3x</div>
                <div className="text-slate-400 text-sm">Multifamily volume increase (2024→2025)</div>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <div className="text-3xl font-bold text-emerald-400 mb-2">~7.2%</div>
                <div className="text-slate-400 text-sm">Worcester County cap rates</div>
              </div>
              <div className="bg-white/5 rounded-xl p-5">
                <div className="text-3xl font-bold text-emerald-400 mb-2">~$222K</div>
                <div className="text-slate-400 text-sm">Per-unit multifamily pricing</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Institutional Investors */}
      <section id="investors" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
              <Building2 className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Institutional Capital</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Priority Institutional Investors</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three institutional investors with fresh capital, strong regional presence, and investment theses
              aligned with sustainable multifamily development in Massachusetts. Each includes conversation starters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {institutionalInvestors.map((investor, index) => (
              <InvestorCard key={investor.name} investor={investor} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-slate-600" />
              40+ additional institutional investors profiled
            </div>
          </motion.div>
        </div>
      </section>

      {/* Individual Investors */}
      <section id="individual" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Users className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400">Individual & Angel Capital</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">Individual Investor Access</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Three high-value channels to access 500+ individual investors through angel networks, super-angels,
              and women-led investing groups. Each includes conversation starters.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {individualInvestors.map((investor, index) => (
              <InvestorCard key={investor.name} investor={investor} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-slate-600" />
              Full individual investor strategy available
            </div>
          </motion.div>
        </div>
      </section>

      {/* Wealth Management Gatekeepers */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-4">
              <Shield className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-400">Wealth Management Channel</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">The Gatekeepers</h2>
            <p className="text-slate-400">
              Wealth managers and family offices control access to hundreds of high-net-worth individuals.
              These are the relationships that unlock individual capital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {wealthManagement.map((wm, index) => (
              <motion.div
                key={wm.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-2">{wm.name}</h3>
                <div className="text-emerald-400 text-sm mb-3">{wm.highlight}</div>
                <div className="text-slate-400 text-sm mb-3">{wm.contact}</div>
                <div className="text-slate-500 text-xs mb-3">{wm.fit}</div>
                <div className="bg-violet-500/5 border border-violet-500/10 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Award className="w-3 h-3 text-violet-400" />
                    <span className="text-xs font-medium text-violet-400 uppercase tracking-wide">Conversation Starter</span>
                  </div>
                  <p className="text-slate-300 text-xs leading-relaxed">{wm.backstory}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 md:p-12 text-center border border-emerald-500/20 glow-green"
          >
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
              <Leaf className="w-8 h-8 text-emerald-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Access the Full Investor Database?</h2>
            <p className="text-slate-400 mb-8">
              Get complete investor profiles with direct contact details, outreach strategies, talking points,
              and ongoing market intelligence tailored to your development pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dipilatoautomations@gmail.com?subject=Investor Intelligence - Full Access Request"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Request Full Access
              </a>
              <a
                href="tel:+15083537143"
                className="inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all hover:scale-105"
              >
                <Phone className="w-5 h-5" />
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-slate-500" />
            <span className="text-slate-400 font-medium">New England Real Estate Investor Intelligence</span>
          </div>
          <p className="text-slate-600 text-sm mb-4">
            Prepared exclusively for <span className="text-emerald-400 font-semibold">Brenden Gove</span> • January 2026
          </p>
          <p className="text-slate-700 text-xs mb-2">
            Research sourced from public filings, industry reports, and investor databases. All information
            presented for business development purposes.
          </p>
          <p className="text-slate-800 text-xs mt-4">
            Powered by <span className="text-emerald-500">Dipilato Automations Inc</span>
          </p>
        </div>
      </footer>
    </main>
  );
}
