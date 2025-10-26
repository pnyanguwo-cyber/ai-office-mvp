import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Save, Download, Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight, List, ListOrdered, Sparkles } from 'lucide-react';

export default function WordEditor() {
  const [content, setContent] = useState('Start writing your document here...');
  const [fontSize, setFontSize] = useState('16px');

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/10 rounded-lg transition">
              <Home className="w-5 h-5" />
            </Link>
            <input type="text" defaultValue="Untitled Document" className="bg-transparent text-lg font-semibold focus:outline-none focus:bg-white/5 px-3 py-1 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition flex items-center gap-2">
              <Save className="w-4 h-4" />Save
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg transition flex items-center gap-2">
              <Download className="w-4 h-4" />Export
            </button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 flex-wrap">
          <select value={fontSize} onChange={(e) => setFontSize(e.target.value)} className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm">
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="24px">24px</option>
          </select>
          <div className="flex items-center gap-1">
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><Bold className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><Italic className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><Underline className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><AlignLeft className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><AlignCenter className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><AlignRight className="w-4 h-4" /></button>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><List className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 hover:bg-white/10 rounded transition"><ListOrdered className="w-4 h-4" /></button>
          </div>
          <button className="ml-auto px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded flex items-center gap-2 text-sm transition">
            <Sparkles className="w-4 h-4" />AI Improve
          </button>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-slate-900/20 p-8">
        <div className="max-w-4xl mx-auto bg-white text-black rounded-lg shadow-2xl p-16 min-h-[842px]">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full h-full min-h-[700px] resize-none focus:outline-none"
            style={{ fontSize }}
          />
        </div>
      </main>
    </div>
  );
}
