import React, { useState } from 'react';
import Link from 'next/link';
import { Plus, Download, Save, Undo, Redo, Type, Image as ImageIcon, Palette, Sparkles, ChevronDown, ChevronLeft, ChevronRight, Trash2, Copy, Home, Star, Settings } from 'lucide-react';

export default function PowerPointEditor() {
  const [slides, setSlides] = useState([
    { id: 1, title: 'Title Slide', content: 'Click to edit', theme: 'gradient1' },
    { id: 2, title: 'Agenda', content: 'Key points here', theme: 'gradient1' },
    { id: 3, title: 'Main Content', content: 'Your content', theme: 'gradient1' }
  ]);
  const [activeSlide, setActiveSlide] = useState(0);
  const [leftSidebarOpen, setLeftSidebarOpen] = useState(true);
  const [rightSidebarOpen, setRightSidebarOpen] = useState(true);
  const [editingTitle, setEditingTitle] = useState(false);
  const [editingContent, setEditingContent] = useState(false);

  const themes = [
    { id: 'gradient1', name: 'Ocean Blue', bg: 'from-blue-600 via-blue-500 to-cyan-500' },
    { id: 'gradient2', name: 'Sunset', bg: 'from-orange-600 via-red-500 to-pink-500' },
    { id: 'gradient3', name: 'Forest', bg: 'from-green-600 via-emerald-500 to-teal-500' },
    { id: 'gradient4', name: 'Purple Dream', bg: 'from-purple-600 via-violet-500 to-indigo-500' },
    { id: 'gradient5', name: 'Dark Mode', bg: 'from-gray-900 via-gray-800 to-slate-800' },
    { id: 'gradient6', name: 'Professional', bg: 'from-slate-700 via-gray-700 to-zinc-700' }
  ];

  const fonts = ['Inter', 'Roboto', 'Montserrat', 'Playfair Display', 'Open Sans', 'Lato'];
  const fontSizes = ['16px', '20px', '24px', '32px', '40px', '48px', '64px'];

  const [selectedFont, setSelectedFont] = useState('Inter');
  const [selectedFontSize, setSelectedFontSize] = useState('24px');

  const addSlide = () => {
    const newSlide = {
      id: slides.length + 1,
      title: `Slide ${slides.length + 1}`,
      content: 'Click to edit content',
      theme: slides[activeSlide]?.theme || 'gradient1'
    };
    setSlides([...slides, newSlide]);
    setActiveSlide(slides.length);
  };

  const deleteSlide = (index) => {
    if (slides.length === 1) return;
    const newSlides = slides.filter((_, i) => i !== index);
    setSlides(newSlides);
    setActiveSlide(Math.max(0, index - 1));
  };

  const duplicateSlide = (index) => {
    const slideToDuplicate = { ...slides[index], id: slides.length + 1 };
    const newSlides = [...slides];
    newSlides.splice(index + 1, 0, slideToDuplicate);
    setSlides(newSlides);
    setActiveSlide(index + 1);
  };

  const changeTheme = (themeId) => {
    const newSlides = [...slides];
    newSlides[activeSlide].theme = themeId;
    setSlides(newSlides);
  };

  const updateSlideTitle = (value) => {
    const newSlides = [...slides];
    newSlides[activeSlide].title = value;
    setSlides(newSlides);
  };

  const updateSlideContent = (value) => {
    const newSlides = [...slides];
    newSlides[activeSlide].content = value;
    setSlides(newSlides);
  };

  const regenerateWithAI = async () => {
    // Placeholder for Groq AI integration
    alert('AI regeneration coming soon! Will use Groq API to regenerate content.');
  };

  const currentTheme = themes.find(t => t.id === slides[activeSlide]?.theme) || themes[0];

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col overflow-hidden">
      {/* Top Toolbar */}
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/10 rounded-lg transition">
              <Home className="w-5 h-5" />
            </Link>
            <div className="h-6 w-px bg-white/10"></div>
            <input
              type="text"
              defaultValue="Untitled Presentation"
              className="bg-transparent text-lg font-semibold focus:outline-none focus:bg-white/5 px-3 py-1 rounded"
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/10 rounded-lg transition" title="Undo">
              <Undo className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-lg transition" title="Redo">
              <Redo className="w-5 h-5" />
            </button>
            <div className="h-6 w-px bg-white/10 mx-2"></div>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg transition flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export
            </button>
          </div>
        </div>

        {/* Secondary Toolbar */}
        <div className="border-t border-white/10 px-4 py-2 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Type className="w-4 h-4 text-gray-400" />
            <select
              value={selectedFont}
              onChange={(e) => setSelectedFont(e.target.value)}
              className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm focus:outline-none focus:border-emerald-500"
            >
              {fonts.map(font => <option key={font} value={font}>{font}</option>)}
            </select>
          </div>

          <select
            value={selectedFontSize}
            onChange={(e) => setSelectedFontSize(e.target.value)}
            className="bg-white/5 border border-white/10 rounded px-3 py-1 text-sm focus:outline-none focus:border-emerald-500"
          >
            {fontSizes.map(size => <option key={size} value={size}>{size}</option>)}
          </select>

          <div className="flex items-center gap-1">
            <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded font-bold text-sm transition">B</button>
            <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded italic text-sm transition">I</button>
            <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded underline text-sm transition">U</button>
          </div>

          <button className="px-3 py-1 bg-white/5 hover:bg-white/10 rounded flex items-center gap-2 text-sm transition">
            <ImageIcon className="w-4 h-4" />
            Add Image
          </button>

          <button
            onClick={regenerateWithAI}
            className="ml-auto px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded flex items-center gap-2 text-sm transition"
          >
            <Sparkles className="w-4 h-4" />
            AI Regenerate
          </button>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Slide Thumbnails */}
        <aside className={`border-r border-white/10 bg-slate-900/30 transition-all duration-300 ${leftSidebarOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-sm text-gray-400">SLIDES ({slides.length})</h3>
              <button
                onClick={() => setLeftSidebarOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={addSlide}
              className="w-full mb-4 px-4 py-3 bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 rounded-lg flex items-center justify-center gap-2 text-sm transition"
            >
              <Plus className="w-4 h-4" />
              New Slide
            </button>

            <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
              {slides.map((slide, index) => {
                const slideTheme = themes.find(t => t.id === slide.theme) || themes[0];
                return (
                  <div
                    key={slide.id}
                    onClick={() => setActiveSlide(index)}
                    className={`group relative cursor-pointer rounded-lg overflow-hidden transition ${
                      activeSlide === index ? 'ring-2 ring-emerald-500' : 'hover:ring-2 hover:ring-white/20'
                    }`}
                  >
                    <div className={`aspect-video bg-gradient-to-br ${slideTheme.bg} p-3 flex flex-col justify-between`}>
                      <div className="text-xs font-bold text-white/90 line-clamp-2">{slide.title}</div>
                      <div className="text-[10px] text-white/70 line-clamp-2">{slide.content}</div>
                    </div>
                    <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-sm px-2 py-0.5 rounded text-xs">
                      {index + 1}
                    </div>
                    
                    {/* Hover actions */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-2">
                      <button
                        onClick={(e) => { e.stopPropagation(); duplicateSlide(index); }}
                        className="p-2 bg-white/20 hover:bg-white/30 rounded transition"
                        title="Duplicate"
                      >
                        <Copy className="w-3 h-3" />
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); deleteSlide(index); }}
                        className="p-2 bg-red-500/50 hover:bg-red-500/70 rounded transition"
                        title="Delete"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Toggle Left Sidebar Button */}
        {!leftSidebarOpen && (
          <button
            onClick={() => setLeftSidebarOpen(true)}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-slate-800 hover:bg-slate-700 border-r border-white/10 rounded-r-lg transition z-10"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Main Canvas */}
        <main className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-900/20 overflow-auto">
          <div className="relative">
            {/* Slide Canvas */}
            <div className={`w-[960px] h-[540px] bg-gradient-to-br ${currentTheme.bg} rounded-2xl shadow-2xl overflow-hidden`}>
              <div className="h-full flex flex-col justify-center items-center p-16 text-center">
                {/* Title */}
                {editingTitle ? (
                  <input
                    type="text"
                    value={slides[activeSlide]?.title}
                    onChange={(e) => updateSlideTitle(e.target.value)}
                    onBlur={() => setEditingTitle(false)}
                    autoFocus
                    className="w-full bg-white/10 backdrop-blur-sm text-5xl font-bold text-white border-2 border-white/30 rounded-lg px-6 py-4 mb-8 focus:outline-none focus:border-white/50"
                    style={{ fontFamily: selectedFont }}
                  />
                ) : (
                  <h1
                    onClick={() => setEditingTitle(true)}
                    className="text-5xl font-bold text-white mb-8 cursor-pointer hover:bg-white/10 px-6 py-4 rounded-lg transition"
                    style={{ fontFamily: selectedFont }}
                  >
                    {slides[activeSlide]?.title}
                  </h1>
                )}

                {/* Content */}
                {editingContent ? (
                  <textarea
                    value={slides[activeSlide]?.content}
                    onChange={(e) => updateSlideContent(e.target.value)}
                    onBlur={() => setEditingContent(false)}
                    autoFocus
                    className="w-full h-48 bg-white/10 backdrop-blur-sm text-2xl text-white border-2 border-white/30 rounded-lg px-6 py-4 focus:outline-none focus:border-white/50 resize-none"
                    style={{ fontFamily: selectedFont, fontSize: selectedFontSize }}
                  />
                ) : (
                  <p
                    onClick={() => setEditingContent(true)}
                    className="text-2xl text-white/90 cursor-pointer hover:bg-white/10 px-6 py-4 rounded-lg transition"
                    style={{ fontFamily: selectedFont, fontSize: selectedFontSize }}
                  >
                    {slides[activeSlide]?.content}
                  </p>
                )}
              </div>
            </div>

            {/* Slide Navigation */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
                disabled={activeSlide === 0}
                className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <span className="text-sm text-gray-400">
                Slide {activeSlide + 1} of {slides.length}
              </span>
              
              <button
                onClick={() => setActiveSlide(Math.min(slides.length - 1, activeSlide + 1))}
                disabled={activeSlide === slides.length - 1}
                className="p-2 bg-white/10 hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg transition"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </main>

        {/* Right Sidebar - Properties */}
        <aside className={`border-l border-white/10 bg-slate-900/30 transition-all duration-300 ${rightSidebarOpen ? 'w-80' : 'w-0'} overflow-hidden`}>
          <div className="p-4 h-full overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-semibold text-sm text-gray-400">PROPERTIES</h3>
              <button
                onClick={() => setRightSidebarOpen(false)}
                className="p-1 hover:bg-white/10 rounded transition"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Themes Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Palette className="w-4 h-4 text-gray-400" />
                <h4 className="font-semibold text-sm">THEMES</h4>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {themes.map(theme => (
                  <button
                    key={theme.id}
                    onClick={() => changeTheme(theme.id)}
                    className={`aspect-video bg-gradient-to-br ${theme.bg} rounded-lg transition ${
                      slides[activeSlide]?.theme === theme.id ? 'ring-2 ring-emerald-500' : 'hover:ring-2 hover:ring-white/30'
                    }`}
                    title={theme.name}
                  >
                    <span className="sr-only">{theme.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Layout Section */}
            <div className="mb-8">
              <h4 className="font-semibold text-sm mb-4">LAYOUT</h4>
              <div className="space-y-2">
                <button className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition">
                  Title Slide
                </button>
                <button className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition">
                  Title + Content
                </button>
                <button className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition">
                  Two Columns
                </button>
                <button className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-left text-sm transition">
                  Blank
                </button>
              </div>
            </div>

            {/* AI Tools Section */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <h4 className="font-semibold text-sm">AI TOOLS</h4>
              </div>
              <div className="space-y-2">
                <button
                  onClick={regenerateWithAI}
                  className="w-full p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-lg text-left text-sm transition"
                >
                  Regenerate Content
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-lg text-left text-sm transition">
                  Improve Writing
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-lg text-left text-sm transition">
                  Generate Image
                </button>
                <button className="w-full p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 border border-purple-500/30 rounded-lg text-left text-sm transition">
                  Make Shorter
                </button>
              </div>
            </div>

            {/* Slide Settings */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-4 h-4 text-gray-400" />
                <h4 className="font-semibold text-sm">SETTINGS</h4>
              </div>
              <div className="space-y-3">
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">Transition</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded px-3 py-2 text-sm focus:outline-none focus:border-emerald-500">
                    <option>None</option>
                    <option>Fade</option>
                    <option>Slide</option>
                    <option>Zoom</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">Duration</label>
                  <input
                    type="range"
                    min="0.5"
                    max="3"
                    step="0.5"
                    defaultValue="1"
                    className="w-full"
                  />
                  <div className="text-xs text-gray-400 text-right mt-1">1.0s</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Toggle Right Sidebar Button */}
        {!rightSidebarOpen && (
          <button
            onClick={() => setRightSidebarOpen(true)}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-slate-800 hover:bg-slate-700 border-l border-white/10 rounded-l-lg transition z-10"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Bottom Status Bar */}
      <footer className="border-t border-white/10 bg-slate-900/50 px-4 py-2 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-4">
          <span>Last saved: Just now</span>
          <span>•</span>
          <span>Auto-save: On</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="hover:text-white transition">
            <Star className="w-4 h-4" />
          </button>
          <span>100% zoom</span>
        </div>
      </footer>
    </div>
  );
}
