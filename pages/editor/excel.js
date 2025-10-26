import React, { useState } from 'react';
import Link from 'next/link';
import { Home, Save, Download, Plus, Trash2, Sparkles } from 'lucide-react';

export default function ExcelEditor() {
  const [rows, setRows] = useState(Array(15).fill(null).map((_, i) => 
    Array(8).fill('').map((_, j) => i === 0 ? String.fromCharCode(65 + j) : '')
  ));

  const addRow = () => setRows([...rows, Array(8).fill('')]);

  return (
    <div className="h-screen bg-slate-950 text-white flex flex-col">
      <header className="border-b border-white/10 bg-slate-900/50 backdrop-blur-xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="p-2 hover:bg-white/10 rounded-lg transition">
              <Home className="w-5 h-5" />
            </Link>
            <input type="text" defaultValue="Untitled Spreadsheet" className="bg-transparent text-lg font-semibold focus:outline-none focus:bg-white/5 px-3 py-1 rounded" />
          </div>
          <div className="flex items-center gap-2">
            <button onClick={addRow} className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition flex items-center gap-2">
              <Plus className="w-4 h-4" />Add Row
            </button>
            <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg transition flex items-center gap-2">
              <Save className="w-4 h-4" />Save
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg transition flex items-center gap-2">
              <Download className="w-4 h-4" />Export
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-auto bg-slate-900/20 p-8">
        <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
          <table className="w-full border-collapse">
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i === 0 ? 'bg-gray-100' : ''}>
                  <td className="border border-gray-300 p-0 w-12 text-center bg-gray-50 text-gray-600 font-semibold text-sm">
                    {i === 0 ? '' : i}
                  </td>
                  {row.map((cell, j) => (
                    <td key={j} className="border border-gray-300 p-0">
                      <input
                        type="text"
                        value={cell}
                        onChange={(e) => {
                          const newRows = [...rows];
                          newRows[i][j] = e.target.value;
                          setRows(newRows);
                        }}
                        className={`w-full h-10 px-2 focus:outline-none focus:ring-2 focus:ring-emerald-500 ${i === 0 ? 'font-semibold bg-gray-100 text-gray-700' : 'text-gray-900'}`}
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      <footer className="border-t border-white/10 bg-slate-900/50 p-4 flex justify-between text-sm text-gray-400">
        <span>{rows.length - 1} rows × 8 columns</span>
        <button className="px-4 py-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded flex items-center gap-2 text-white transition">
          <Sparkles className="w-4 h-4" />AI Formula Helper
        </button>
      </footer>
    </div>
  );
}
