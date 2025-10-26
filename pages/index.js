import React, { useState } from 'react';
import { FileText, Download, Lock, FileSpreadsheet, Presentation, Clock, FolderOpen, Settings, Crown, Menu, X, ChevronRight } from 'lucide-react';

export default function AIOffice() {
  const [docType, setDocType] = useState('powerpoint');
  const [prompt, setPrompt] = useState('');
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [preview, setPreview] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const docTypes = [
    { id: 'powerpoint', name: 'Slides', icon: Presentation, limit: '5 max' },
    { id: 'word', name: 'Document', icon: FileText, limit: '2 pages' },
    { id: 'excel', name: 'Spreadsheet', icon: FileSpreadsheet, limit: '10 rows' }
  ];

  const recentDocs = [
    { name: 'Solar Proposal.pptx', time: '2h ago', type: 'powerpoint' },
    { name: 'Budget Report.xlsx', time: '5h ago', type: 'excel' },
    { name: 'Tender Response.docx', time: '1d ago', type: 'word' },
  ];

  const templates = [
    { category: 'Business', items: ['Proposal', 'Invoice', 'Report'] },
    { category: 'Government', items: ['Tender', 'ZimRA Form', 'Ministry Report'] },
    { category: 'Personal', items: ['CV', 'Letter', 'Budget'] },
  ];

  const handleTemplateClick = (templateName) => {
    const prompts = {
      'Proposal': 'Create a professional business proposal for a solar panel installation project including executive summary, technical specifications, timeline, and budget breakdown',
      'Invoice': 'Generate a detailed invoice template with company details, itemized services, tax calculations, and payment terms',
      'Report': 'Create a comprehensive monthly business performance report with financial overview, key metrics, and recommendations',
      'Tender': 'Generate a government tender response document for office supplies procurement including company profile, technical compliance, and pricing schedule',
      'ZimRA Form': 'Create a ZimRA tax return form with income declarations, deductions, and supporting documentation structure',
      'Ministry Report': 'Generate an official ministry report template with executive summary, departmental updates, budget utilization, and action items',
      'CV': 'Create a professional CV template with personal details, work experience, education, skills, and references',
      'Letter': 'Generate a formal business letter template with proper letterhead, salutation, body paragraphs, and closing',
      'Budget': 'Create a detailed monthly household budget spreadsheet with income sources, expense categories, and savings tracking'
    };
    setPrompt(prompts[templateName] || `Create a ${templateName.toLowerCase()} document`);
  };

  const generateSmartContent = (userPrompt, type) => {
    const promptLower = userPrompt.toLowerCase();
    
    if (type === 'powerpoint') {
      let topic = userPrompt.split(' ').slice(0, 5).join(' ');
      return `SLIDE 1: ${topic}\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\nOpening Statement\n\nSLIDE 2: Executive Overview\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Context and background information\n• Key stakeholders and target audience\n• Project scope and objectives\n• Expected outcomes and deliverables\n\nSLIDE 3: Strategic Approach\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Methodology and implementation framework\n• Timeline and key milestones\n• Resource allocation and team structure\n• Risk management considerations\n\nSLIDE 4: Financial Overview\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Budget breakdown and cost analysis\n• Return on investment projections\n• Funding sources and payment terms\n• Cost-benefit analysis summary\n\nSLIDE 5: Next Steps & Conclusion\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n• Action items and responsibilities\n• Success metrics and KPIs\n• Contact information\n• Thank you and Q&A\n\n⚠️ FREE TIER: Limited to 5 slides | 💎 Upgrade for unlimited slides`;
    } else if (type === 'word') {
      let topic = userPrompt.split(' ').slice(0, 8).join(' ');
      if (promptLower.includes('tender') || promptLower.includes('proposal')) {
        return `${topic.toUpperCase()}\n\nEXECUTIVE SUMMARY\n\nThis document presents a comprehensive response to the requirements outlined in the tender specification. Our organization brings extensive experience, proven track record, and commitment to excellence in delivering high-quality solutions that meet and exceed client expectations.\n\nCOMPANY PROFILE\n\nOur company has been operating in Zimbabwe for over 15 years, providing reliable and innovative solutions to both public and private sector clients. We maintain ISO 9001:2015 certification and comply with all local regulatory requirements including ZimRA tax compliance.\n\nTECHNICAL APPROACH\n\nWe propose a structured methodology that ensures quality delivery within specified timelines. Our approach includes:\n- Detailed project planning and risk assessment\n- Quality assurance at every stage\n- Regular progress reporting and stakeholder communication\n- Post-implementation support and maintenance\n\n═══════════════════════════════════════════════════\n\nPAGE 2\n\nPRICING STRUCTURE\n\nAll prices are quoted in USD and include applicable taxes. We offer competitive rates while maintaining the highest standards of quality and service delivery.\n\nCOMPLIANCE DECLARATION\n\nWe hereby confirm compliance with all tender requirements including:\n- Valid company registration (CR14)\n- Current tax clearance certificate\n- Proof of physical address\n- Banking details and financial statements\n\nREFERENCES\n\nAvailable upon request from government ministries, parastatals, and private sector clients.\n\n⚠️ FREE TIER: Limited to 2 pages | 💎 Upgrade for full document`;
      } else {
        return `${topic.toUpperCase()}\n\nINTRODUCTION\n\nThis document provides a comprehensive overview of the subject matter, presenting key information in a structured and professional format suitable for business and government use.\n\n${userPrompt}\n\nDETAILED ANALYSIS\n\nThe following sections outline the core components, methodologies, and recommendations based on current best practices and industry standards applicable to the Zimbabwean context.\n\nKey considerations include:\n• Regulatory compliance and legal requirements\n• Financial implications and budget allocation\n• Implementation timeline and resource planning\n• Risk mitigation and contingency measures\n\n═══════════════════════════════════════════════════\n\nPAGE 2\n\nRECOMMENDATIONS\n\nBased on the analysis presented, we recommend the following action items:\n\n1. Immediate implementation of priority initiatives\n2. Regular monitoring and evaluation of progress\n3. Stakeholder engagement and communication\n4. Documentation and reporting procedures\n\nCONCLUSION\n\nThis document serves as a foundation for informed decision-making and strategic planning.\n\n⚠️ FREE TIER: Limited to 2 pages | 💎 Upgrade for full document`;
      }
    } else if (type === 'excel') {
      if (promptLower.includes('budget')) {
        return `BUDGET SPREADSHEET\n═══════════════════════════════════════════════════\n\nINCOME SECTION\nRow 1: Category | Amount (USD) | Amount (ZWL) | Notes\nRow 2: Salary/Wages | 1,200.00 | 450,000 | Monthly\nRow 3: Business Income | 800.00 | 300,000 | Variable\nRow 4: Other Income | 200.00 | 75,000 | Occasional\nRow 5: TOTAL INCOME | 2,200.00 | 825,000 |\n\nEXPENSES SECTION\nRow 6: Category | Amount (USD) | Amount (ZWL) | Notes\nRow 7: Rent/Housing | 400.00 | 150,000 | Fixed\nRow 8: Utilities | 150.00 | 56,250 | Variable\nRow 9: Groceries | 300.00 | 112,500 | Weekly\nRow 10: Transport | 100.00 | 37,500 | Daily\n\nSUMMARY: Income vs Expenses | Surplus: $1,250.00\n\n⚠️ FREE TIER: Limited to 10 rows | 💎 Upgrade for unlimited rows`;
      } else {
        return `DATA SPREADSHEET\n═══════════════════════════════════════════════════\n\nRow 1: ID | Item/Description | Quantity | Unit Price | Total | Status\nRow 2: 001 | ${userPrompt.split(' ')[0] || 'Item'} | 10 | $25.00 | $250.00 | Active\nRow 3: 002 | Category B | 15 | $30.00 | $450.00 | Pending\nRow 4: 003 | Category C | 8 | $40.00 | $320.00 | Complete\nRow 5: 004 | Category D | 12 | $35.00 | $420.00 | Active\nRow 6: 005 | Category E | 20 | $22.00 | $440.00 | Active\nRow 7: 006 | Category F | 5 | $50.00 | $250.00 | Pending\nRow 8: 007 | Category G | 18 | $28.00 | $504.00 | Complete\nRow 9: 008 | Category H | 7 | $45.00 | $315.00 | Active\nRow 10: TOTALS | | 95 | | $2,949.00 |\n\n⚠️ FREE TIER: Limited to 10 rows | 💎 Upgrade for unlimited rows`;
      }
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setGenerating(true);
    setGenerated(false);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const content = generateSmartContent(prompt, docType);
    setPreview(content);
    setGenerating(false);
    setGenerated(true);
  };

  const SelectedIcon = docTypes.find(t => t.id === docType)?.icon || FileText;

  return (
    <div className="min-h-screen bg-slate-950 text-white flex">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-green-500/25 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-teal-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <aside className={`fixed lg:sticky top-0 left-0 h-screen bg-slate-950/90 backdrop-blur-xl border-r border-white/5 transition-transform duration-300 z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} ${sidebarOpen ? 'w-64' : 'lg:w-16'}`}>
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-white/5 flex items-center justify-between">
            {sidebarOpen && (
              <div className="flex items-center gap-3">
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 via-green-400 to-teal-500 rounded-full animate-spin" style={{animationDuration: '3s'}}></div>
                  <div className="absolute inset-0.5 bg-slate-950 rounded-full"></div>
                  <div className="absolute inset-2 bg-gradient-to-tr from-emerald-400 to-green-500 rounded-full"></div>
                </div>
                <h1 className="text-lg font-semibold tracking-tight">AI Office</h1>
              </div>
            )}
            <button onClick={() => setSidebarOpen(!sidebarOpen)} className="p-1.5 hover:bg-white/10 rounded-lg transition lg:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {sidebarOpen ? (
              <>
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 px-2">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium">RECENT</span>
                  </div>
                  <div className="space-y-1">
                    {recentDocs.map((doc, i) => (
                      <button key={i} className="w-full flex items-center gap-3 px-2 py-2 rounded-lg hover:bg-white/5 transition text-left group">
                        <div className="w-8 h-8 bg-white/5 rounded-lg flex items-center justify-center group-hover:bg-emerald-600/20 transition">
                          {doc.type === 'powerpoint' && <Presentation className="w-4 h-4 text-emerald-400" />}
                          {doc.type === 'excel' && <FileSpreadsheet className="w-4 h-4 text-emerald-400" />}
                          {doc.type === 'word' && <FileText className="w-4 h-4 text-emerald-400" />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-medium truncate">{doc.name}</div>
                          <div className="text-xs text-gray-500">{doc.time}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3 px-2">
                    <FolderOpen className="w-4 h-4" />
                    <span className="font-medium">TEMPLATES</span>
                  </div>
                  <div className="space-y-3">
                    {templates.map((template, i) => (
                      <div key={i}>
                        <button className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-white/5 transition text-sm font-medium">
                          <span>{template.category}</span>
                          <ChevronRight className="w-4 h-4 text-gray-500" />
                        </button>
                        <div className="mt-1 space-y-0.5 pl-4">
                          {template.items.map((item, j) => (
                            <button key={j} onClick={() => handleTemplateClick(item)} className="w-full text-left px-2 py-1 rounded text-sm text-gray-400 hover:text-gray-200 hover:bg-white/5 transition">
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="flex flex-col items-center gap-4">
                <button className="p-2 hover:bg-white/10 rounded-lg transition"><Clock className="w-5 h-5" /></button>
                <button className="p-2 hover:bg-white/10 rounded-lg transition"><FolderOpen className="w-5 h-5" /></button>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/5 space-y-2">
            {sidebarOpen ? (
              <>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5 transition text-sm">
                  <Settings className="w-4 h-4" />Settings
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg bg-gradient-to-r from-emerald-600/20 to-green-600/20 hover:from-emerald-600/30 hover:to-green-600/30 border border-emerald-500/30 transition text-sm">
                  <Crown className="w-4 h-4 text-emerald-400" />Upgrade Pro
                </button>
              </>
            ) : (
              <>
                <button className="p-2 hover:bg-white/10 rounded-lg transition"><Settings className="w-5 h-5" /></button>
                <button className="p-2 bg-emerald-600/20 hover:bg-emerald-600/30 rounded-lg transition"><Crown className="w-5 h-5 text-emerald-400" /></button>
              </>
            )}
          </div>
        </div>
      </aside>

      <div className="flex-1 flex flex-col min-w-0">
        <header className="relative border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
          <div className="px-4 py-4 flex items-center justify-between">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition">
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 ml-auto">
              <span className="text-xs text-gray-400 hidden md:block">Zimbabwe</span>
              <button className="px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-full text-sm font-medium transition">
                Upgrade
              </button>
            </div>
          </div>
        </header>

        <main className="relative flex-1 overflow-y-auto">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
                Professional documents,<br />
                <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">instantly generated</span>
              </h2>
              <p className="text-gray-400 text-lg">PowerPoint. Word. Excel. Ready in seconds.</p>
              <div className="flex flex-wrap gap-3 justify-center mt-8">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>EcoCash & OneMoney
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>USD & ZWL
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></div>Local Support
                </div>
              </div>
            </div>

            <div className="flex gap-2 mb-6 justify-center">
              {docTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <button key={type.id} onClick={() => setDocType(type.id)} className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition relative ${docType === type.id ? 'bg-white/10 text-white' : 'bg-white/5 text-gray-400 hover:bg-white/8 hover:text-gray-300'}`}>
                    {docType === type.id && (<div className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 via-green-500/20 to-teal-500/20 border border-transparent" style={{backgroundClip: 'padding-box', borderImage: 'linear-gradient(135deg, rgba(16,185,129,0.5), rgba(34,197,94,0.3), rgba(20,184,166,0.5)) 1'}}></div>)}
                    <Icon className="w-4 h-4 relative z-10" />
                    <div className="relative z-10">
                      <div className="text-sm font-medium">{type.name}</div>
                      <div className="text-xs opacity-60">{type.limit}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="relative mb-8">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 via-green-400 to-teal-500 rounded-2xl opacity-50 blur animate-pulse"></div>
              <div className="relative bg-slate-950 rounded-2xl p-6 border border-white/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/5 via-green-500/5 to-teal-500/5"></div>
                <div className="relative">
                  <label className="block text-sm font-medium mb-3 text-gray-300">Describe what you need</label>
                  <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Business proposal for solar installation, monthly budget template, tender response..." className="w-full h-28 px-4 py-3 bg-black/40 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-emerald-500/50 resize-none transition" />
                  <button onClick={handleGenerate} disabled={generating || !prompt.trim()} className={`mt-4 w-full py-3 rounded-xl font-medium transition flex items-center justify-center gap-2 ${generating || !prompt.trim() ? 'bg-gray-800 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white'}`}>
                    {generating ? (<><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Generating...</>) : ('Generate Document')}
                  </button>
                </div>
              </div>
            </div>

            {generated && (
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-transparent to-green-500/10"></div>
                <div className="relative flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center">
                      <SelectedIcon className="w-4 h-4 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Preview</h3>
                  </div>
                  <button className="px-4 py-2 bg-white/10 hover:bg-white/15 rounded-lg flex items-center gap-2 transition text-sm">
                    <Download className="w-4 h-4" />Download
                  </button>
                </div>
                <div className="relative bg-black/40 rounded-xl p-6 border border-white/10">
                  <pre className="whitespace-pre-wrap text-sm text-gray-300 font-mono leading-relaxed">{preview}</pre>
                  <div className="absolute bottom-3 right-3 bg-emerald-600/90 px-2.5 py-1 rounded text-xs font-medium">AI Office</div>
                </div>
                <div className="relative mt-6 bg-gradient-to-br from-emerald-950/50 to-green-950/30 border rounded-xl p-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-green-500/5 to-teal-500/10"></div>
                  <div className="relative flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Lock className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">Unlock unlimited documents</h4>
                        <div className="flex gap-3 text-xs text-gray-400">
                          <span>No limits</span><span>•</span><span>No watermarks</span><span>•</span><span>Gov templates</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <div className="text-lg font-bold text-emerald-400">$10<span className="text-xs text-gray-400">/mo</span></div>
                        <div className="text-xs text-gray-500">or ZWL</div>
                      </div>
                      <button className="px-4 py-2 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 rounded-lg font-medium transition text-sm whitespace-nowrap">Upgrade</button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="font-semibold mb-1.5">Local Payments</h3>
                <p className="text-sm text-gray-400 leading-relaxed">EcoCash, OneMoney, USD & ZWL. Built for Zimbabwe.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </div>
                <h3 className="font-semibold mb-1.5">Government Ready</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Templates for tenders, ZimRA forms, official reports.</p>
              </div>
              <div className="bg-white/5 rounded-xl p-5 border border-white/10 hover:border-white/20 transition">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-green-600 rounded-lg flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="font-semibold mb-1.5">Instant Results</h3>
                <p className="text-sm text-gray-400 leading-relaxed">Professional documents ready in seconds. No Office needed.</p>
              </div>
            </div>
          </div>
        </main>

        <footer className="relative border-t border-white/5 py-6 bg-slate-950/80">
          <div className="px-4 text-center">
            <p className="text-gray-500 text-sm">AI Office • Save 60% vs Microsoft Office • Government Approved</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
