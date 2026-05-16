import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

export default function ContentCreatorRoadmap() {
  const [expandedPath, setExpandedPath] = useState('web');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-3">Content Creator Roadmap</h1>
          <p className="text-xl text-gray-300">Two Specialized Career Paths</p>
        </div>

        {/* Main Two Paths */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* PATH 1: WEB CONTENT CREATOR */}
          <div className="relative">
            <button
              onClick={() => setExpandedPath(expandedPath === 'web' ? null : 'web')}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white p-6 rounded-xl font-bold text-xl flex items-center justify-between shadow-lg transition-all"
            >
              <span className="flex items-center">
                <span className="text-3xl mr-3">📝</span>
                Web Content Creator
              </span>
              {expandedPath === 'web' ? <ChevronDown size={28} /> : <ChevronRight size={28} />}
            </button>

            {expandedPath === 'web' && (
              <div className="mt-6 space-y-4">
                {/* Level 1 */}
                <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl p-6 border-l-4 border-blue-400">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-400 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">1</div>
                    <h3 className="text-2xl font-bold text-blue-200">Level 1: Junior Content Writer</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">Duration: 3-6 months</p>
                  <div className="bg-blue-950 rounded p-4 space-y-2">
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Write website copy & product descriptions</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Blog posts & articles</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Basic SEO knowledge</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>WordPress basics</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-400 mr-2">✓</span>
                      <span>Meta descriptions & headlines</span>
                    </div>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl p-6 border-l-4 border-blue-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-300 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">2</div>
                    <h3 className="text-2xl font-bold text-blue-100">Level 2: Content Strategist</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">Duration: 6-12 months</p>
                  <div className="bg-blue-900 rounded p-4 space-y-2">
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span>Content planning & calendars</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span>Advanced SEO optimization</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span>UX writing (buttons, notifications)</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span>Technical documentation</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-300 mr-2">✓</span>
                      <span>Content analytics & performance</span>
                    </div>
                  </div>
                </div>

                {/* Level 3 */}
                <div className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-xl p-6 border-l-4 border-blue-200">
                  <div className="flex items-center mb-3">
                    <div className="bg-blue-200 text-blue-900 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">3</div>
                    <h3 className="text-2xl font-bold text-blue-50">Level 3: Senior Content Manager</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">Duration: 12+ months</p>
                  <div className="bg-blue-800 rounded p-4 space-y-2">
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-200 mr-2">✓</span>
                      <span>Full content strategy & leadership</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-200 mr-2">✓</span>
                      <span>Team management & mentoring</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-200 mr-2">✓</span>
                      <span>Web app content design</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-200 mr-2">✓</span>
                      <span>Brand voice development</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-blue-200 mr-2">✓</span>
                      <span>Marketing & growth strategy</span>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-blue-950 rounded-xl p-4 border border-blue-700">
                  <h4 className="text-blue-200 font-bold mb-3">🛠️ Essential Tools</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <div>WordPress</div>
                    <div>Grammarly</div>
                    <div>SEO Tools (Yoast)</div>
                    <div>Google Analytics</div>
                    <div>Figma</div>
                    <div>Jira/Asana</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* PATH 2: DIGITAL MEDIA CONTENT CREATOR */}
          <div className="relative">
            <button
              onClick={() => setExpandedPath(expandedPath === 'media' ? null : 'media')}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-700 hover:to-purple-600 text-white p-6 rounded-xl font-bold text-xl flex items-center justify-between shadow-lg transition-all"
            >
              <span className="flex items-center">
                <span className="text-3xl mr-3">🎨</span>
                Digital Media Creator
              </span>
              {expandedPath === 'media' ? <ChevronDown size={28} /> : <ChevronRight size={28} />}
            </button>

            {expandedPath === 'media' && (
              <div className="mt-6 space-y-4">
                {/* Level 1 */}
                <div className="bg-gradient-to-r from-purple-900 to-purple-800 rounded-xl p-6 border-l-4 border-purple-400">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-400 text-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">1</div>
                    <h3 className="text-2xl font-bold text-purple-200">Level 1: Graphic & Visual Designer</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">Duration: 3-6 months</p>
                  <div className="bg-purple-950 rounded p-4 space-y-2">
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Poster design</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Invitation design</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Basic image editing</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Design principles & color theory</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-400 mr-2">✓</span>
                      <span>Canva & Adobe Express</span>
                    </div>
                  </div>
                </div>

                {/* Level 2 */}
                <div className="bg-gradient-to-r from-purple-800 to-purple-700 rounded-xl p-6 border-l-4 border-purple-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-300 text-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">2</div>
                    <h3 className="text-2xl font-bold text-purple-100">Level 2: Image & Video Editor</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">Duration: 6-12 months</p>
                  <div className="bg-purple-900 rounded p-4 space-y-2">
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-300 mr-2">✓</span>
                      <span>Professional image editing (Photoshop)</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-300 mr-2">✓</span>
                      <span>Photo retouching & color grading</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-300 mr-2">✓</span>
                      <span>Video editing basics</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-300 mr-2">✓</span>
                      <span>Transitions & effects</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-300 mr-2">✓</span>
                      <span>Audio editing & sound design</span>
                    </div>
                  </div>
                </div>

                {/* Level 3 */}
                <div className="bg-gradient-to-r from-purple-700 to-purple-600 rounded-xl p-6 border-l-4 border-purple-200">
                  <div className="flex items-center mb-3">
                    <div className="bg-purple-200 text-purple-900 rounded-full w-10 h-10 flex items-center justify-center font-bold mr-3">3</div>
                    <h3 className="text-2xl font-bold text-purple-50">Level 3: Multimedia Producer</h3>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">Duration: 12+ months</p>
                  <div className="bg-purple-800 rounded p-4 space-y-2">
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-200 mr-2">✓</span>
                      <span>Advanced video production</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-200 mr-2">✓</span>
                      <span>Motion graphics & animation</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-200 mr-2">✓</span>
                      <span>VFX & special effects</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-200 mr-2">✓</span>
                      <span>Content branding & style</span>
                    </div>
                    <div className="flex items-start text-gray-200">
                      <span className="text-purple-200 mr-2">✓</span>
                      <span>Creative direction & client management</span>
                    </div>
                  </div>
                </div>

                {/* Tools */}
                <div className="bg-purple-950 rounded-xl p-4 border border-purple-700">
                  <h4 className="text-purple-200 font-bold mb-3">🛠️ Essential Tools</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                    <div>Photoshop</div>
                    <div>DaVinci Resolve</div>
                    <div>Adobe Premiere</div>
                    <div>Lightroom</div>
                    <div>After Effects</div>
                    <div>Canva Pro</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700 mb-8">
          <h2 className="text-3xl font-bold text-white mb-6">📊 Content Creator Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="text-blue-300 font-bold py-3 px-4">Aspect</th>
                  <th className="text-blue-300 font-bold py-3 px-4">Web Content Creator</th>
                  <th className="text-purple-300 font-bold py-3 px-4">Digital Media Creator</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr className="border-b border-slate-700 hover:bg-slate-700">
                  <td className="py-3 px-4 font-semibold">Main Focus</td>
                  <td className="py-3 px-4">Text, words, messaging</td>
                  <td className="py-3 px-4">Images, videos, visuals</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700">
                  <td className="py-3 px-4 font-semibold">Primary Skills</td>
                  <td className="py-3 px-4">Writing, SEO, strategy</td>
                  <td className="py-3 px-4">Design, editing, creativity</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700">
                  <td className="py-3 px-4 font-semibold">Key Tools</td>
                  <td className="py-3 px-4">WordPress, Grammarly, Analytics</td>
                  <td className="py-3 px-4">Photoshop, Premiere, DaVinci</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700">
                  <td className="py-3 px-4 font-semibold">Deliverables</td>
                  <td className="py-3 px-4">Articles, guides, copy, docs</td>
                  <td className="py-3 px-4">Posters, videos, images, designs</td>
                </tr>
                <tr className="border-b border-slate-700 hover:bg-slate-700">
                  <td className="py-3 px-4 font-semibold">Works With</td>
                  <td className="py-3 px-4">Designers, developers, marketers</td>
                  <td className="py-3 px-4">Photographers, directors, brands</td>
                </tr>
                <tr className="hover:bg-slate-700">
                  <td className="py-3 px-4 font-semibold">Career Roles</td>
                  <td className="py-3 px-4">Content Manager, UX Writer, SEO</td>
                  <td className="py-3 px-4">Designer, Editor, Producer, Director</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Key Responsibilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl p-8 border border-blue-700">
            <h3 className="text-2xl font-bold text-blue-200 mb-6">📝 Web Content Creator - Daily Tasks</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-200">
                <span className="text-blue-300 mr-3 text-lg">→</span>
                <span>Write and optimize website copy</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-blue-300 mr-3 text-lg">→</span>
                <span>Research keywords for SEO</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-blue-300 mr-3 text-lg">→</span>
                <span>Plan content calendar</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-blue-300 mr-3 text-lg">→</span>
                <span>Write for user experience (buttons, alerts)</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-blue-300 mr-3 text-lg">→</span>
                <span>Analyze content performance</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-blue-300 mr-3 text-lg">→</span>
                <span>Collaborate with designers & developers</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-900 to-purple-800 rounded-xl p-8 border border-purple-700">
            <h3 className="text-2xl font-bold text-purple-200 mb-6">🎨 Digital Media Creator - Daily Tasks</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-200">
                <span className="text-purple-300 mr-3 text-lg">→</span>
                <span>Design posters & promotional materials</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-purple-300 mr-3 text-lg">→</span>
                <span>Edit and enhance photos</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-purple-300 mr-3 text-lg">→</span>
                <span>Edit videos (cut, trim, effects)</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-purple-300 mr-3 text-lg">→</span>
                <span>Color correction & grading</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-purple-300 mr-3 text-lg">→</span>
                <span>Create social media graphics</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-purple-300 mr-3 text-lg">→</span>
                <span>Add animations & visual effects</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Career Progression */}
        <div className="bg-slate-800 rounded-xl p-8 border border-slate-700">
          <h2 className="text-3xl font-bold text-white mb-8">🚀 Career Progression Path</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Web Path Timeline */}
            <div>
              <h3 className="text-xl font-bold text-blue-300 mb-6">Web Content Creator Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="w-1 h-16 bg-blue-500 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <p className="font-bold text-blue-200">Months 1-6</p>
                    <p className="text-gray-300 text-sm">Junior Writer - Learn basics</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="w-1 h-16 bg-blue-400 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <p className="font-bold text-blue-100">Months 7-12</p>
                    <p className="text-gray-300 text-sm">Content Strategist - Advanced skills</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <p className="font-bold text-blue-50">Year 2+</p>
                    <p className="text-gray-300 text-sm">Senior Manager - Leadership role</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Media Path Timeline */}
            <div>
              <h3 className="text-xl font-bold text-purple-300 mb-6">Digital Media Creator Timeline</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                    <div className="w-1 h-16 bg-purple-500 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <p className="font-bold text-purple-200">Months 1-6</p>
                    <p className="text-gray-300 text-sm">Graphic Designer - Design basics</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                    <div className="w-1 h-16 bg-purple-400 mt-2"></div>
                  </div>
                  <div className="pb-8">
                    <p className="font-bold text-purple-100">Months 7-12</p>
                    <p className="text-gray-300 text-sm">Video Editor - Advanced editing</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 bg-purple-300 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  </div>
                  <div>
                    <p className="font-bold text-purple-50">Year 2+</p>
                    <p className="text-gray-300 text-sm">Multimedia Producer - Full creative control</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
