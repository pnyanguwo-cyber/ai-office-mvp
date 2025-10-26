import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, FileSpreadsheet, Presentation, FileImage, Globe, Sparkles, ArrowRight, Check, Star, Users, Zap, Shield, Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const documentTypes = [
    {
      id: 'powerpoint',
      name: 'PowerPoint',
      description: 'Create stunning presentations with AI-powered slides',
      icon: Presentation,
      color: 'from-orange-500 to-red-500',
      link: '/editor/powerpoint',
      features: ['Auto layouts', 'Theme library', 'Smart animations']
    },
    {
      id: 'word',
      name: 'Word Document',
      description: 'Professional documents with intelligent formatting',
      icon: FileText,
      color: 'from-blue-500 to-indigo-500',
      link: '/editor/word',
      features: ['Rich formatting', 'AI writing', 'Templates']
    },
    {
      id: 'excel',
      name: 'Excel Spreadsheet',
      description: 'Smart spreadsheets with automated calculations',
      icon: FileSpreadsheet,
      color: 'from-green-500 to-emerald-500',
      link: '/editor/excel',
      features: ['Auto formulas', 'Charts', 'Data insights']
    },
    {
      id: 'pdf',
      name: 'PDF Designer',
      description: 'Design beautiful PDFs with drag-and-drop',
      icon: FileImage,
      color: 'from-red-500 to-pink-500',
      link: '/editor/pdf',
      features: ['Layout builder', 'Print ready', 'Interactive']
    },
    {
      id: 'website',
      name: 'Website Builder',
      description: 'Build responsive websites without coding',
      icon: Globe,
      color: 'from-purple-500 to-violet-500',
      link: '/editor/website',
      features: ['Responsive', 'Components', 'Export code']
    }
  ];

  const stats = [
    { label: 'Active Users', value: '2,500+', icon: Users },
    { label: 'Documents Created', value: '50,000+', icon: FileText },
    { label: 'Time Saved', value: '10,000hrs', icon: Zap },
    { label: 'Customer Rating', value: '4.9/5', icon: Star }
  ];

  const features = [
    { icon: Sparkles, title: 'AI-Powered Generation', desc: 'Create professional documents in seconds with Groq AI' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Instant generation and real-time editing' },
    { icon: Shield, title: 'Secure & Private', desc: 'Your documents are encrypted and protected' },
    { icon: Globe, title: 'Zimbabwe-Friendly', desc: 'EcoCash, OneMoney, USD & ZWL support' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="relative border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-green-400 to-teal-500 rounded-xl animate-spin" style={{animationDuration: '3s'}}></div>
                <div className="absolute inset-0.5 bg-slate-950 rounded-xl"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-lg"></div>
              </div>
              <span className="text-xl font-bold">AI Office</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <Link href="/templates" className="text-gray-300 hover:text-white transition">Templates</Link>
              <Link href="/dashboard" className="text-gray-300 hover:text-white transition">Dashboard</Link>
              <Link href="/payment" className="text-gray-300 hover:text-white transition">Pricing</Link>
              <Link href="/login" className="px-4 py-2 text-gray-300 hover:text-white transition">Login</Link>
              <Link href="/signup" className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg font-medium transition">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 hover:bg-white/10 rounded-lg transition">
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-white/10">
              <Link href="/templates" className="block px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition">Templates</Link>
              <Link href="/dashboard" className="block px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition">Dashboard</Link>
              <Link href="/payment" className="block px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition">Pricing</Link>
              <Link href="/login" className="block px-4 py-2 text-gray-300 hover:bg-white/5 rounded-lg transition">Login</Link>
              <Link href="/signup" className="block px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 rounded-lg font-medium text-center">Get Started</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-sm text-emerald-400 mb-8">
          <Sparkles className="w-4 h-4" />
          Powered by Groq AI - Lightning Fast Generation
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Professional Documents,
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent">
            Generated Instantly
          </span>
        </h1>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
          Create PowerPoints, Word docs, Excel sheets, PDFs and websites with AI. 
          No Microsoft Office needed. Built for Zimbabwe.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl font-semibold text-lg transition flex items-center gap-2">
            Start Creating Free
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/templates" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-lg transition">
            View Templates
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Icon className="w-8 h-8 text-emerald-400 mb-3 mx-auto" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Document Types */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Document Type</h2>
          <p className="text-xl text-gray-400">Click any card to start creating</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {documentTypes.map((doc) => {
            const Icon = doc.icon;
            return (
              <Link key={doc.id} href={doc.link}>
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition cursor-pointer h-full">
                  {/* Gradient glow on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${doc.color} opacity-0 group-hover:opacity-10 rounded-2xl transition duration-500`}></div>
                  
                  <div className="relative">
                    <div className={`w-16 h-16 bg-gradient-to-r ${doc.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{doc.name}</h3>
                    <p className="text-gray-400 mb-6">{doc.description}</p>
                    
                    <div className="space-y-2 mb-6">
                      {doc.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                          <Check className="w-4 h-4 text-emerald-400" />
                          {feature}
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-emerald-400 font-medium group-hover:gap-3 transition-all">
                      Start Creating
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Features */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose AI Office?</h2>
          <p className="text-xl text-gray-400">Everything you need to create professional documents</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative bg-gradient-to-r from-emerald-600/20 to-green-600/20 border border-emerald-500/30 rounded-3xl p-12 text-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-teal-500/10"></div>
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands creating professional documents with AI</p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/signup" className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl font-semibold text-lg transition">
                Start Free Trial
              </Link>
              <Link href="/payment" className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl font-semibold text-lg transition">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10 py-12 bg-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-lg"></div>
                <span className="text-lg font-bold">AI Office</span>
              </div>
              <p className="text-gray-400 text-sm">Professional documents, instantly generated with AI.</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/templates" className="block hover:text-white transition">Templates</Link>
                <Link href="/payment" className="block hover:text-white transition">Pricing</Link>
                <Link href="/dashboard" className="block hover:text-white transition">Dashboard</Link>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition">About</a>
                <a href="#" className="block hover:text-white transition">Contact</a>
                <a href="#" className="block hover:text-white transition">Support</a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <a href="#" className="block hover:text-white transition">Privacy Policy</a>
                <a href="#" className="block hover:text-white transition">Terms of Service</a>
                <a href="#" className="block hover:text-white transition">Cookie Policy</a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 AI Office. Built for Zimbabwe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
