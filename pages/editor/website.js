import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Save, Download, Monitor, Smartphone, Tablet, Plus } from 'lucide-react';

export default function WebsiteEditor() {
  const [viewport, setViewport] = useState('desktop');

  const viewportSizes = {
    desktop: 'w-full',
    tablet: 'w-[768px]',
    mobile: 'w-[375px]'
  };

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/10 rounded-lg transition">
              <Home className="w-5 h-5" />
            </Link>
            <input type="text" defaultValue="My Website" className="bg-transparent text-lg font-semibold focus:outline-none focus:bg-white/5 px-3 py-1 rounded" />
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
              <button onClick={() => setViewport('desktop')} className={`p-2 rounded ${viewport === 'desktop' ? 'bg-white/10' : ''} transition`}>
                <Monitor className="w-5 h-5" />
              </button>
              <button onClick={() => setViewport('tablet')} className={`p-2 rounded ${viewport === 'tablet' ? 'bg-white/10' : ''} transition`}>
                <Tablet className="w-5 h-5" />
              </button>
              <button onClick={() => setViewport('mobile')} className={`p-2 rounded ${viewport === 'mobile' ? 'bg-white/10' : ''} transition`}>
                <Smartphone className="w-5 h-5" />
              </button>
            </div>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition flex items-center gap-2">
              <Save className="w-4 h-4" />Save
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg transition flex items-center gap-2">
              <Download className="w-4 h-4" />Export Code
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-white/10 bg-slate-900/30 p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4">Components</h3>
          <div className="space-y-2">
            {['Header', 'Hero Section', 'Features Grid', 'Testimonials', 'CTA Banner', 'Footer'].map(comp => (
              <button key={comp} className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg text-left transition">
                <Plus className="w-4 h-4 inline mr-2" />{comp}
              </button>
            ))}
          </div>
        </aside>

        <main className="flex-1 overflow-auto bg-slate-900/20 p-8">
          <div className={`${viewportSizes[viewport]} mx-auto bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300`}>
            <div className="h-[600px] flex items-center justify-center text-gray-400">
              <div className="text-center">
                <p className="mb-4">Drag components here to build your website</p>
                <p className="text-sm">Responsive preview: {viewport}</p>
              </div>
            </div>
          </div>
        </main>

        <aside className="w-80 border-l border-white/10 bg-slate-900/30 p-4 overflow-y-auto">
          <h3 className="font-semibold mb-4">Properties</h3>
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Background Color</label>
              <input type="color" className="w-full h-10 rounded cursor-pointer" />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block">Text Color</label>
              <input type="color" className="w-full h-10 rounded cursor-pointer" />
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
