import React from 'react';
import Link from 'next/link';
import { Home, Save, Download, Type, Image, Square } from 'lucide-react';

export default function PDFEditor() {
  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/10 rounded-lg transition">
              <Home className="w-5 h-5" />
            </Link>
            <input type="text" defaultValue="Untitled PDF" className="bg-transparent text-lg font-semibold focus:outline-none focus:bg-white/5 px-3 py-1 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition flex items-center gap-2">
              <Save className="w-4 h-4" />Save
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg transition flex items-center gap-2">
              <Download className="w-4 h-4" />Export PDF
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-white/10 bg-slate-900/30 p-4">
          <h3 className="font-semibold mb-4">Elements</h3>
          <div className="space-y-2">
            <button className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-3 transition">
              <Type className="w-5 h-5" />Text Block
            </button>
            <button className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-3 transition">
              <Image className="w-5 h-5" />Image
            </button>
            <button className="w-full p-3 bg-white/5 hover:bg-white/10 rounded-lg flex items-center gap-3 transition">
              <Square className="w-5 h-5" />Shape
            </button>
          </div>
        </aside>

        <main className="flex-1 overflow-auto bg-slate-900/20 p-8 flex items-center justify-center">
          <div className="w-[595px] h-[842px] bg-white rounded-lg shadow-2xl p-16">
            <div className="text-gray-400 text-center">
              <p className="mb-4">Drag elements from the sidebar to design your PDF</p>
              <p className="text-sm">Click elements to edit</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
