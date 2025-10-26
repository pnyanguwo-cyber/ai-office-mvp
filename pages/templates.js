import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Filter, FileText, Presentation, FileSpreadsheet, FileImage, Globe } from 'lucide-react';

export default function Templates() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const templates = [
    { id: 1, name: 'Business Proposal', type: 'powerpoint', category: 'business', thumbnail: 'from-blue-600 to-cyan-500' },
    { id: 2, name: 'Budget Planner', type: 'excel', category: 'business', thumbnail: 'from-green-600 to-emerald-500' },
    { id: 3, name: 'Tender Response', type: 'word', category: 'government', thumbnail: 'from-indigo-600 to-blue-500' },
    { id: 4, name: 'ZimRA Tax Form', type: 'pdf', category: 'government', thumbnail: 'from-red-600 to-pink-500' },
    { id: 5, name: 'CV Template', type: 'word', category: 'personal', thumbnail: 'from-purple-600 to-violet-500' },
    { id: 6, name: 'Portfolio Website', type: 'website', category: 'personal', thumbnail: 'from-orange-600 to-red-500' },
  ];

  const getIcon = (type) => {
    switch(type) {
      case 'powerpoint': return Presentation;
      case 'word': return FileText;
      case 'excel': return FileSpreadsheet;
      case 'pdf': return FileImage;
      case 'website': return Globe;
      default: return FileText;
    }
  };

  const getLink = (type) => `/editor/${type === 'powerpoint' ? 'powerpoint' : type === 'word' ? 'word' : type === 'excel' ? 'excel' : type === 'pdf' ? 'pdf' : 'website'}`;

  const filtered = templates.filter(t => 
    t.name.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'all' || t.category === category)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <nav className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-xl"></div>
            <span className="text-xl font-bold">AI Office</span>
          </Link>
          <Link href="/dashboard" className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition">Dashboard</Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-5xl font-bold mb-4">Template Library</h1>
        <p className="text-xl text-gray-400 mb-12">Start with professional templates</p>

        <div className="flex gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search templates..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500"
            />
          </div>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-emerald-500"
          >
            <option value="all">All Categories</option>
            <option value="business">Business</option>
            <option value="government">Government</option>
            <option value="personal">Personal</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(template => {
            const Icon = getIcon(template.type);
            return (
              <Link key={template.id} href={getLink(template.type)}>
                <div className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition overflow-hidden cursor-pointer">
                  <div className={`aspect-video bg-gradient-to-br ${template.thumbnail} flex items-center justify-center`}>
                    <Icon className="w-12 h-12 text-white/70 group-hover:scale-110 transition" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-1 group-hover:text-emerald-400 transition">{template.name}</h3>
                    <p className="text-sm text-gray-400 capitalize">{template.type}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
