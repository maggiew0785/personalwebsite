'use client';

import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className="min-h-screen bg-white font-serif">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 lg:py-20">
        {/* Header */}
        <header className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-8 mb-6 sm:mb-8">
            <div className="flex-shrink-0 mb-4 sm:mb-0 flex justify-center sm:justify-start">
              <Image
                src="/MaggieWang_Headshot.jpg"
                alt="Maggie Wang"
                width={100}
                height={100}
                className="rounded-full object-cover sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px]"
                priority
              />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-light text-gray-900 mb-3 sm:mb-4 lg:mb-6 tracking-tight">
                Maggie Wang
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed font-light max-w-3xl mb-3 sm:mb-4 lg:mb-6">
                Senior at Princeton University studying Computer Science, graduating May 2026
              </p>
              
              <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-2 sm:space-y-0 text-sm items-center sm:items-start">
                <a 
                  href="https://scholar.google.com/citations?hl=en&user=bjy8p8oAAAAJ" 
                  className="text-gray-700 hover:text-black transition-colors underline decoration-gray-300 hover:decoration-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google Scholar
                </a>
                <a 
                  href="https://github.com/maggiew0785" 
                  className="text-gray-700 hover:text-black transition-colors underline decoration-gray-300 hover:decoration-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/maggiewang0785/" 
                  className="text-gray-700 hover:text-black transition-colors underline decoration-gray-300 hover:decoration-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Navigation */}
        <nav className="mb-12 sm:mb-16 lg:mb-20">
          <div className="flex flex-wrap space-x-6 sm:space-x-12 text-base sm:text-lg font-light border-b border-gray-200 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-3 sm:pb-4 transition-colors whitespace-nowrap ${
                activeTab === 'about' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('research')}
              className={`pb-3 sm:pb-4 transition-colors whitespace-nowrap ${
                activeTab === 'research' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Research
            </button>
            <button 
              onClick={() => setActiveTab('product')}
              className={`pb-3 sm:pb-4 transition-colors whitespace-nowrap ${
                activeTab === 'product' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Product & Building
            </button>
          </div>
        </nav>

        {/* Tab Content */}
        <div className="min-h-96">
          {activeTab === 'about' && <AboutSection />}
          {activeTab === 'research' && <ResearchSection />}
          {activeTab === 'product' && <ProductSection />}
        </div>
      </div>
    </main>
  );
}

function AboutSection() {
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-12 tracking-tight">About</h2>
     
      <div className="mb-12 sm:mb-16">
        <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
          I&apos;m a senior at Princeton University studying Computer Science, graduating in May 2026. My research has explored AI across multiple domains - from fair training frameworks in NLP to human-computer interaction tools - with a consistent focus on systems that enhance human capabilities. I&apos;m increasingly interested in model behavior, particularly how AI can support learning and critical thinking rather than simply optimizing for human preference alignment. 
          <br />
          <br />
          I am particularly passionate about bridging AI research insights with practical product applications.
        </p>
      </div>

      {/* Academic Background */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Academic Background</h3>
        <div className="pl-4 sm:pl-6 border-l border-gray-300">
          <p className="text-gray-900 font-medium mb-2 text-sm sm:text-base">Computer Science, Princeton University <span className="text-gray-600 font-light">(3.93 GPA)</span></p>
          <p className="text-gray-600 font-light text-sm sm:text-base">Tau Beta Pi Engineering Honor Society</p>
          <p className="text-gray-600 font-light text-sm sm:text-base">Expected May 2026</p>
        </div>
      </div>

      {/* Recognition */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Recognition</h3>
        <div className="space-y-2 sm:space-y-3 font-light">
          <p className="text-gray-700 text-sm sm:text-base">Princeton Research Day Award ($1,500, top 4 across all levels)</p>
          <p className="text-gray-700 text-sm sm:text-base">First-author publications at FAccT, CHI, and under review at NeurIPS</p>
          <p className="text-gray-700 text-sm sm:text-base">NCWIT Washington Award Winner, USACO Silver, ICPC NY Regional Qualifier, AIME Qualifier</p>
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-8 sm:mb-12">
        <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">Leadership</h3>
        <div className="space-y-3 sm:space-y-4 font-light">
          <div>
            <p className="text-gray-900 font-medium">ChatGPT Education Lab</p>
            <p className="text-gray-700">I work directly with the product team to test early features and think about how AI is shaping education</p>
          </div>
          
          <div>
            <p className="text-gray-900 font-medium">AI TigerTrek Director</p>
            <p className="text-gray-700">
              <a href="https://www.aiatprinceton.com/" className="underline decoration-gray-300 hover:decoration-black transition-colors" target="_blank" rel="noopener noreferrer">
                Bringing 20 Princeton students to SF for a fully funded trip to meet leaders in AI
              </a>
            </p>
          </div>
          
          <div>
            <p className="text-gray-900 font-medium">FemaleFounded Director</p>
            <p className="text-gray-700">
              <a href="https://femalefounded.webflow.io/" className="underline decoration-gray-300 hover:decoration-black transition-colors" target="_blank" rel="noopener noreferrer">
                Grew international conference from 70 to 100+ attendees, $30K fundraising
              </a>
            </p>
          </div>
          
          <div>
            <p className="text-gray-900 font-medium">Princeton AI Alignment</p>
            <p className="text-gray-700">Leadership role</p>
          </div>
          
          <div>
            <p className="text-gray-900 font-medium">COS 126 Data Structures & Algorithms Teaching Assistant</p>
            <p className="text-gray-700">Lab TA & Precept Assistant for two semesters</p>
          </div>
        </div>
      </div>

      <div className="text-gray-600 italic font-light text-center pt-6 sm:pt-8 border-t border-gray-200 text-sm sm:text-base">
        Outside of work, I love playing basketball. NBA playoff season is my favorite time of year.
      </div>
    </div>
  );
}

function ResearchSection() {
  const projects = [
    {
      title: "Fair Learning Framework",
      lab: "AI Language, Learning, and Robustness Lab (ALLeGRo) at USC",
      collaborators: "Professor Robin Jia and PhD mentor Johnny Wei",
      description: "Developed a \"fair learning\" doctrine that operationalizes legal concepts for LLM training, using causal regression to quantify memorization and balance the interests of AI developers with copyright holders.",
      publication: "First-author paper at FAccT 2025",
      link: "https://arxiv.org/abs/2502.16290"
    },
    {
      title: "Prompt-Character Divergence",
      lab: "Princeton Digital Humanities Seminar",
      collaborators: "Professor Brian Kernighan and Wouter Haverals",
      description: "Created a responsibility attribution framework that disentangles model bias from user intent in AI-generated content. Explores shared agency in human-AI collaboration.",
      publication: "Won Princeton Research Day Award ($1,500, top 4 across all levels). Paper submitted to NeurIPS Creativity & AI Track",
      link: "https://mediacentral.princeton.edu/media/Evaluating%20Infringement%20Propensity%20in%20Text-to-Image%20Models%2C%20Maggie%20Wang%2C%20UG%2026%20(13749)/1_35oblxhv"
    },
    {
      title: "PolicyPulse",
      lab: "Princeton HCI",
      collaborators: "Professor Andrés Monroy-Hernández, Yuhan Liu, and Varun Rao",
      description: "Built a tool that synthesizes insights from Reddit forums and online community discussions to help policy researchers write more inclusive policy briefs. 73% of researchers found it easy to use and collected 2x more themes compared to traditional methods.",
      publication: "First-author paper at CHI 2025",
      link: "https://dl.acm.org/doi/10.1145/3706599.3720266"
    },
    {
      title: "3D Vision Benchmarking",
      lab: "Princeton Vision & Learning Lab",
      collaborators: "Professor Jia Deng alongside Karhan Kayan and Yiming Zuo",
      description: "Benchmarked multimodal LLMs on depth and keypoint estimation from a cognitive science perspective.",
      publication: "Co-authored paper at 3DV 2025",
      link: "https://arxiv.org/abs/2410.10799"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-12 tracking-tight">Research</h2>
      
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light mb-12 sm:mb-16">
        I work on AI research at the intersection of law, policy, and human-computer interaction,
        building practical frameworks that balance different stakeholder perspectives.
      </p>

      <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-6 sm:mb-8">Current Projects</h3>
     
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="pb-6 sm:pb-8 border-b border-gray-200 last:border-b-0">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
              <h4 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-0">{project.title}</h4>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-gray-600 hover:text-black transition-colors self-start sm:ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 font-light">
              {project.lab} • {project.collaborators}
            </p>
            <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed font-light">
              {project.description}
            </p>
            <p className="text-xs sm:text-sm text-gray-900 font-medium">
              {project.publication}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductSection() {
  const projects = [
    {
      title: "MSR Flow",
      company: "Microsoft Research",
      position: "AI Product Management Research Intern",
      duration: "Jun 2025 – Aug 2025",
      location: "Redmond, WA",
      description: "Led end-to-end product development of an internal knowledge-sharing platform for 350+ Microsoft Research researchers. Built a Reddit-style forum optimized for research workflows using React and FastAPI. Shipped 15+ core features including threaded discussions, intelligent content curation agents, and analytics infrastructure. Integrated Adobe Analytics and built AI agents to help seed conversations.",
      type: "Product Management Internship"
    },
    {
      title: "GPTZero Product Research",
      company: "GPTZero (AI Detection Startup)",
      position: "Product Management Intern",
      duration: "Jul 2023 – Sep 2023",
      location: "Remote",
      description: "Conducted 40+ user interviews with educators and students to understand how they navigated AI in their classrooms. Identified bugs and usability issues that informed engineering improvements. Explored what future writing tools for students might look like in the age of AI.",
      type: "Product Management Internship"
    },
    {
      title: "History By People",
      company: "OpenAI x Education Hackathon",
      position: "Winner",
      duration: "August 2025",
      location: "San Francisco, CA",
      description: "Won OpenAI x Education Hackathon with an AI platform that teaches history through multiple human perspectives. Students explore events through the eyes of different individuals who lived through those moments (e.g., 'A farmer along the Nile River in 1000 BCE'). Built chat interface using React frontend and Flask backend that generates immersive historical videos with Sora API, with image fallbacks for seamless storytelling experiences.",
      type: "Hackathon Winner",
      link: "https://github.com/maggiew0785/HistoryByPeople"
    },
    {
      title: "TRU - Personal Biography Generator",
      company: "HackMIT",
      position: "Ideator, Designer & Frontend Developer",
      duration: "Fall 2024",
      location: "HackMIT",
      description: "Created TRU (To Remember U) with a 4-person team, an AI platform that transforms heartfelt family conversations into biographical narratives. Originated the concept of preserving grandparents' stories and wisdom before they're lost to time. Designed user experience in Figma and built frontend using React, JavaScript, and Material UI. Integrated OpenAI Whisper and GPT APIs.",
      type: "Hackathon Project",
      link: "https://github.com/maggiew0785/HackHarvard-Tru"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-8 sm:mb-12 tracking-tight">Product & Building</h2>
     
      <div className="space-y-8 sm:space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="pb-6 sm:pb-8 border-b border-gray-200 last:border-b-0">
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900">{project.title}</h3>
                {project.link && (
                  <a 
                    href={project.link} 
                    className="text-gray-600 hover:text-black transition-colors self-start sm:ml-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
              <div className="text-gray-700 font-light">
                <p className="font-medium text-sm sm:text-base">{project.company}</p>
                <p className="text-xs sm:text-sm">{project.position} • {project.duration}</p>
                <p className="text-xs sm:text-sm text-gray-600">{project.location}</p>
              </div>
            </div>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}