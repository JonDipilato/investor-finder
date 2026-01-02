"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Building2, Users, TrendingUp, Target, ArrowRight, Building, Zap, Leaf, Globe, CheckCircle2, Mail, MapPin, DollarSign, Sparkles } from "lucide-react";

// Investor data
const institutionalInvestors = [
  {
    name: "Rockpoint Group",
    type: "Private Equity",
    tagline: "Boston-Based Multifamily Focus",
    highlight: "$5.1B Fund VII • 95K Units",
    location: "500 Boylston St, Boston",
    fit: "Fresh capital actively deploying",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "The Davis Companies",
    type: "Private Equity/Developer",
    tagline: "Vertically Integrated Platform",
    highlight: "$12.8B AUM • $977M Fund V",
    location: "Boston HQ",
    fit: "Similar business model",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "Fifth Wall",
    type: "Climate-Tech VC",
    tagline: "Real Estate Decarbonization",
    highlight: "$740M Climate Fund",
    location: "Global / Boston Presence",
    fit: "ESG-aligned strategic capital",
    color: "from-emerald-500 to-green-500",
  },
];

const individualInvestors = [
  {
    name: "LaunchPad Venture Group",
    type: "Angel Network",
    tagline: "New England's Most Active Angels",
    highlight: "175+ Members • $125M Deployed",
    location: "Boston, MA",
    fit: "Concentrated regional investor base",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "Joe Caruso",
    type: "Super-Angel",
    tagline: "Bantam Group",
    highlight: "269+ Investments • 74 Exits",
    location: "Boston, MA",
    fit: "Most connected angel in Boston",
    color: "from-rose-500 to-pink-500",
  },
  {
    name: "Safar Partners",
    type: "Cleantech VC",
    tagline: "Sustainability-Focused",
    highlight: "MIT Ties • 15 Years Cleantech",
    location: "Boston, MA",
    fit: "Climate-tech expertise",
    color: "from-teal-500 to-cyan-500",
  },
];

const marketStats = [
  { label: "Institutional Investors", value: "45+", icon: Building2 },
  { label: "Individual Access", value: "500+", icon: Users },
  { label: "Capital Deployed", value: "$100B+", icon: DollarSign },
  { label: "Massachusetts Volume", value: "$710M", icon: TrendingUp },
];

function StatCard({ stat, index }: { stat: typeof marketStats[0]; index: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
    }, index * 150);
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

function InvestorCard({ investor, index }: { investor: typeof institutionalInvestors[0]; index: number }) {
  const [isVisible, setIsVisible] = useState(false);

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

          <div className="flex items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              {investor.location}
            </div>
            <div className="flex items-center gap-1.5 text-emerald-400">
              <CheckCircle2 className="w-4 h-4" />
              {investor.fit}
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
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-sm text-slate-300">New England Real Estate Capital Intelligence</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="gradient-text">Sustainable Real Estate</span>
            <br />
            <span className="text-emerald-400">Investor Landscape</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto mb-12"
          >
            Curated research into 45+ institutional investors and 500+ individual angels
            actively deploying capital in New England sustainable real estate.
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
            <a href="#institutional" className="group inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all hover:scale-105">
              <Target className="w-5 h-5" />
              View Institutional Investors
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#individual" className="group inline-flex items-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white font-semibold rounded-xl transition-all hover:scale-105">
              <Users className="w-5 h-5" />
              View Individual Channels
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

      {/* Market Context */}
      <section className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto">
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
              <h2 className="text-2xl font-bold text-white">Market Context</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-5">
                <div className="text-3xl font-bold text-emerald-400 mb-2">3x</div>
                <div className="text-slate-400 text-sm">Mass. multifamily volume increase (2024→2025)</div>
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
      <section id="institutional" className="relative py-20 px-6">
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
              Three institutional investors with fresh capital, strong regional presence, and investment theses aligned with sustainable multifamily development.
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
              40+ additional institutional investors identified
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
              Three high-value channels to access 500+ individual investors through angel networks, super-angels, and climate-focused VCs.
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
            <h2 className="text-3xl font-bold text-white mb-4">Unlock Full Investor Intelligence</h2>
            <p className="text-slate-400 mb-8">
              Get complete investor profiles, contact details, outreach strategies, and ongoing market intelligence
              for your sustainable real estate development pipeline.
            </p>
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold rounded-xl transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5" />
              Get Full Access
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-5 h-5 text-slate-500" />
            <span className="text-slate-500 text-sm">New England Sustainable Real Estate Investor Intelligence</span>
          </div>
          <p className="text-slate-600 text-sm">
            Research compiled January 2026 • Data sourced from public filings, industry reports, and investor databases
          </p>
        </div>
      </footer>
    </main>
  );
}
