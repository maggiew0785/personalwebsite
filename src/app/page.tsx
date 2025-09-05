'use client';

import React, { useState } from 'react';
import { ExternalLink, Github, Book, Award, Users, Code, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <main className="min-h-screen bg-white font-serif">
      <div className="max-w-4xl mx-auto px-8 py-20">
        {/* Header */}
        <header className="mb-20">
          <div className="flex items-start space-x-8 mb-12">
            <div className="flex-shrink-0">
              <Image
                src="/MaggieWang_Headshot.jpg"
                alt="Maggie Wang"
                width={150}
                height={150}
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="flex-1">
              <h1 className="text-6xl font-light text-gray-900 mb-6 tracking-tight">
                Maggie Wang
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mb-6">
                Senior at Princeton University studying Computer Science, graduating May 2026
              </p>
              
              <div className="flex space-x-8 text-sm">
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
        <nav className="mb-20">
          <div className="flex space-x-12 text-lg font-light border-b border-gray-200">
            <button 
              onClick={() => setActiveTab('about')}
              className={`pb-4 transition-colors ${
                activeTab === 'about' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              About
            </button>
            <button 
              onClick={() => setActiveTab('research')}
              className={`pb-4 transition-colors ${
                activeTab === 'research' 
                  ? 'text-gray-900 border-b-2 border-gray-900' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Research
            </button>
            <button 
              onClick={() => setActiveTab('product')}
              className={`pb-4 transition-colors ${
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
      <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-tight">About</h2>
     
      <div className="mb-16">
        <p className="text-lg text-gray-700 leading-relaxed font-light">
          I'm a senior at Princeton University studying Computer Science, graduating in May 2026. My research has spanned computer vision, policy, and AI safety, but I'm currently interested in model behavior, particularly when human preference isn't the ultimate goal and how AI can better support learning and critical thinking.
          <br />
          <br />
          I am particularly passionate about bridging AI research insights with practical product applications.
        </p>
      </div>

      {/* Academic Background */}
      <div className="mb-12">
        <h3 className="text-xl font-medium text-gray-900 mb-6">Academic Background</h3>
        <div className="pl-6 border-l border-gray-300">
          <p className="text-gray-900 font-medium mb-2">Computer Science, Princeton University <span className="text-gray-600 font-light">(3.93 GPA)</span></p>
          <p className="text-gray-600 font-light">Tau Beta Pi Engineering Honor Society</p>
          <p className="text-gray-600 font-light">Expected May 2026</p>
        </div>
      </div>

      {/* Recognition */}
      <div className="mb-12">
        <h3 className="text-xl font-medium text-gray-900 mb-6">Recognition</h3>
        <div className="space-y-3 font-light">
          <p className="text-gray-700">Princeton Research Day Award ($1,500, top 4 across all levels)</p>
          <p className="text-gray-700">First-author publications at FAccT, CHI, and under review at NeurIPS</p>
          <p className="text-gray-700">NCWIT Washington Award Winner</p>
          <p className="text-gray-700">USACO Silver, ICPC NY Regional Qualifier, AIME Qualifier</p>
        </div>
      </div>

      {/* Leadership */}
      <div className="mb-12">
        <h3 className="text-xl font-medium text-gray-900 mb-6">Leadership</h3>
        <div className="space-y-4 font-light">
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
        </div>
      </div>

      <div className="text-gray-600 italic font-light text-center pt-8 border-t border-gray-200">
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
      <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-tight">Research</h2>
      
      <p className="text-lg text-gray-700 leading-relaxed font-light mb-16">
        I work on AI research at the intersection of law, policy, and human-computer interaction,
        building practical frameworks that balance different stakeholder perspectives.
      </p>

      <h3 className="text-xl font-medium text-gray-900 mb-8">Current Projects</h3>
     
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="pb-8 border-b border-gray-200 last:border-b-0">
            <div className="flex items-start justify-between mb-3">
              <h4 className="text-xl font-medium text-gray-900">{project.title}</h4>
              {project.link && (
                <a 
                  href={project.link} 
                  className="text-gray-600 hover:text-black transition-colors ml-4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
            <p className="text-sm text-gray-600 mb-4 font-light">
              {project.lab} • {project.collaborators}
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed font-light">
              {project.description}
            </p>
            <p className="text-sm text-gray-900 font-medium">
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
      position: "Team Lead",
      duration: "2024",
      location: "San Francisco, CA",
      description: "Won OpenAI x Education Hackathon with an AI platform that teaches history through multiple human perspectives. Students explore events through the eyes of different individuals who lived through those moments. Built using Sora, Runway API, OpenAI API, and voice models to create immersive, multimodal storytelling experiences.",
      type: "Hackathon Winner"
    }
  ];

  return (
    <div>
      <h2 className="text-3xl font-light text-gray-900 mb-12 tracking-tight">Product & Building</h2>
     
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="pb-8 border-b border-gray-200 last:border-b-0">
            <div className="mb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">{project.title}</h3>
              <div className="text-gray-700 font-light">
                <p className="font-medium">{project.company}</p>
                <p className="text-sm">{project.position} • {project.duration}</p>
                <p className="text-sm text-gray-600">{project.location}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed font-light">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}