import React, { useState } from 'react';
import Link from 'next/link';
import { FileText, FileSpreadsheet, Presentation, FileImage, Globe, Plus, Search, Filter, Grid, List, MoreVertical, Trash2, Download, Copy, Star, Clock, Folder, Home, User, Settings, LogOut } from 'lucide-react';

export default function Dashboard() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('all');

  const documents = [
    { id: 1, name: 'Q4 Business Proposal', type: 'powerpoint', date: '2 hours ago', thumbnail: 'from-blue-600 to-cyan-500', starred: true },
    { id: 2, name: 'Budget 2024', type: 'excel', date: '5 hours ago', thumbnail: 'from-green-600 to-emerald-500', starred: false },
    { id: 3, name: 'Annual Report', type: 'word', date: '1 day ago', thumbnail: 'from-indigo-600 to-blue-500', starred: true },
    { id: 4, name: 'Marketing Brochure', type: 'pdf', date: '2 days ago', thumbnail: 'from-red-600 to-pink-500', starred: false },
    { id: 5, name: 'Company Website', type: 'website', date: '3 days ago', thumbnail: 'from-purple-600 to-violet-500', starred: false },
    { id: 6, name: 'Tender Response ZimRA', type: 'word', date: '1 week ago', thumbnail: 'from-slate-700 to-gray-700', starred: true },
    { id: 7, name: 'Sales Presentation', type: 'powerpoint', date: '1 week ago', thumbnail: 'from-orange-600 to-red-500', starred: false },
    { id: 8, name: 'Inventory Sheet', type: 'excel', date: '2 weeks ago', thumbnail: 'from-teal-600 to-cyan-500', starred: false },
  ];

  const templates = [
    { name: 'Business Proposal', type: 'powerpoint', icon: Presentation, color: 'from-blue-500 to-cyan-500' },
    { name: 'Invoice Template', type: 'word', icon: FileText, color: 'from-indigo-500 to-blue-500' },
    { name: 'Budget Planner', type: 'excel', icon: FileSpreadsheet, color: 'from-green-500 to-emerald-500' },
    { name: 'ZimRA Form', type: 'pdf', icon: FileImage, color: 'from-red-500 to-pink-500' },
  ];

  const stats = [
    { label: 'Total Documents', value: '24', change: '+3 this week' },
    { label: 'Storage Used', value: '2.4 GB', change: '24% of 10GB' },
    { label: 'AI Generations', value: '156', change: '12 remaining' },
    { label: 'Team Members', value: '1', change: 'Free plan' },
  ];

  const getDocIcon = (type) => {
    switch(type) {
      case 'powerpoint': return Presentation;
      case 'word': return FileText;
      case 'excel': return FileSpreadsheet;
      case 'pdf': return FileImage;
      case 'website': return Globe;
      default: return FileText;
    }
  };

  const getDocLink = (type) => {
    switch(type) {
      case 'powerpoint': return '/editor/powerpoint';
      case 'word': return '/editor/word';
      case 'excel': return '/editor/excel';
      case 'pdf': return '/editor/pdf';
      case 'website': return '/editor/website';
      default: return '/editor/word';
    }
  };

  const filteredDocs = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || doc.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="relative flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-white/10 bg-slate-950/50 backdrop-blur-xl h-screen sticky top-0 flex flex-col">
          <div className="p-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-xl"></div>
              <span className="text-xl font-bold">AI Office</span>
            </Link>
          </div>

          <nav className="flex-1 p-4">
            <div className="space-y-2">
              <Link href="/dashboard" className="flex items-center gap-3 px-4 py-3 bg-white/10 rounded-lg font-medium">
                <Home className="w-5 h-5" />
                Dashboard
              </Link>
              <Link href="/templates" className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition">
                <Folder className="w-5 h-5" />
                Templates
              </Link>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition text-left">
                <Clock className="w-5 h-5" />
                Recent
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 hover:bg-white/5 rounded-lg transition text-left">
                <Star className="w-5 h-5" />
                Starred
              </button>
            </div>

            <div className="mt-8 p-4 bg-gradient-to-br from-emerald-950/50 to-green-950/30 border border-emerald-500/30 rounded-xl">
              <h4 className="font-semibold mb-2">Upgrade to Pro</h4>
              <p className="text-xs text-gray-400 mb-3">Unlimited documents, no watermarks</p>
              <Link href="/payment" className="block text-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg text-sm font-medium transition">
                Upgrade Now
              </Link>
            </div>
          </nav>

          <div className="p-4 border-t border-white/10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-full flex items-center justify-center">
                <User className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm">Guest User</div>
                <div className="text-xs text-gray-400">Free Plan</div>
              </div>
            </div>
            <div className="space-y-1">
              <button className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition text-sm">
                <Settings className="w-4 h-4" />
                Settings
              </button>
              <Link href="/login" className="w-full flex items-center gap-3 px-3 py-2 hover:bg-white/5 rounded-lg transition text-sm">
                <LogOut className="w-4 h-4" />
                Logout
              </Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Header */}
          <header className="border-b border-white/10 bg-slate-950/50 backdrop-blur-xl sticky top-0 z-10">
            <div className="px-8 py-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
                  <p className="text-gray-400">Continue where you left off</p>
                </div>
                <Link href="/" className="px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl font-medium transition flex items-center gap-2">
                  <Plus className="w-5 h-5" />
                  New Document
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-400 mb-2">{stat.label}</div>
                    <div className="text-xs text-emerald-400">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </header>

          <div className="p-8">
            {/* Quick Templates */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Quick Start Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {templates.map((template, i) => {
                  const Icon = template.icon;
                  return (
                    <Link
                      key={i}
                      href={getDocLink(template.type)}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition cursor-pointer"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-r ${template.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold mb-1">{template.name}</h3>
                      <p className="text-sm text-gray-400 capitalize">{template.type}</p>
                    </Link>
                  );
                })}
              </div>
            </section>

            {/* Documents Section */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">My Documents</h2>
                <div className="flex items-center gap-3">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search documents..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500 w-64"
                    />
                  </div>

                  {/* Filter */}
                  <select
                    value={filterType}
                    onChange={(e) => setFilterType(e.target.value)}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-emerald-500"
                  >
                    <option value="all">All Types</option>
                    <option value="powerpoint">PowerPoint</option>
                    <option value="word">Word</option>
                    <option value="excel">Excel</option>
                    <option value="pdf">PDF</option>
                    <option value="website">Website</option>
                  </select>

                  {/* View Toggle */}
                  <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded ${viewMode === 'grid' ? 'bg-white/10' : 'hover:bg-white/5'} transition`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded ${viewMode === 'list' ? 'bg-white/10' : 'hover:bg-white/5'} transition`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Documents Grid/List */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredDocs.map((doc) => {
                    const Icon = getDocIcon(doc.type);
                    return (
                      <div key={doc.id} className="group relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition overflow-hidden">
                        {/* Thumbnail */}
                        <Link href={getDocLink(doc.type)} className="block">
                          <div className={`aspect-video bg-gradient-to-br ${doc.thumbnail} flex items-center justify-center`}>
                            <Icon className="w-12 h-12 text-white/50" />
                          </div>
                        </Link>

                        {/* Info */}
                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <Link href={getDocLink(doc.type)} className="flex-1">
                              <h3 className="font-semibold line-clamp-2 group-hover:text-emerald-400 transition">{doc.name}</h3>
                            </Link>
                            <button className="p-1 hover:bg-white/10 rounded transition">
                              <MoreVertical className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="flex items-center justify-between text-sm text-gray-400">
                            <span className="capitalize">{doc.type}</span>
                            <span>{doc.date}</span>
                          </div>
                        </div>

                        {/* Actions on Hover */}
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition flex gap-1">
                          {doc.starred && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
                          <button className="p-1.5 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded transition" title="Download">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="space-y-2">
                  {filteredDocs.map((doc) => {
                    const Icon = getDocIcon(doc.type);
                    return (
                      <div key={doc.id} className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition">
                        <div className={`w-12 h-12 bg-gradient-to-br ${doc.thumbnail} rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <Link href={getDocLink(doc.type)}>
                            <h3 className="font-semibold hover:text-emerald-400 transition">{doc.name}</h3>
                          </Link>
                          <p className="text-sm text-gray-400 capitalize">{doc.type} • {doc.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {doc.starred && <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}
                          <button className="p-2 hover:bg-white/10 rounded-lg transition" title="Duplicate">
                            <Copy className="w-5 h-5" />
                          </button>
                          <button className="p-2 hover:bg-red-500/20 rounded-lg transition text-red-400" title="Delete">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {filteredDocs.length === 0 && (
                <div className="text-center py-20">
                  <FileText className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No documents found</h3>
                  <p className="text-gray-400 mb-6">Try adjusting your search or filters</p>
                  <Link href="/" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-xl font-medium transition">
                    <Plus className="w-5 h-5" />
                    Create New Document
                  </Link>
                </div>
              )}
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}white/10 rounded-lg transition" title="Download">
                            <Download className="w-5 h-5" />
                          </button>
                          <button className="p-2 hover:bg-
