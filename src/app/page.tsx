export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Maggie Wang</h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            I'm a senior at Princeton University studying Computer Science, graduating in May 2026. 
            I work on AI research at the intersection of law, policy, and human-computer interaction, 
            focusing on model behavior and human-first conversational experiences.
          </p>
        </header>

        {/* Navigation */}
        <nav className="mb-16">
          <div className="flex space-x-8 border-b border-gray-200 pb-4">
            <a href="#about" className="text-gray-900 font-medium hover:text-gray-600">About</a>
            <a href="#research" className="text-gray-900 font-medium hover:text-gray-600">Research</a>
            <a href="#product" className="text-gray-900 font-medium hover:text-gray-600">Product & Building</a>
          </div>
        </nav>

        {/* About Section */}
        <section id="about" className="mb-16">
          <AboutSection />
        </section>

        {/* Research Section */}
        <section id="research" className="mb-16">
          <ResearchSection />
        </section>

        {/* Product Section */}
        <section id="product" className="mb-16">
          <ProductSection />
        </section>
      </div>
    </main>
  );
}

function AboutSection() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">About</h2>
      
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700 leading-relaxed mb-6">
          I'm a senior at Princeton University studying Computer Science, graduating in May 2026. 
          I work on AI research at the intersection of law, policy, and human-computer interaction, 
          focusing on model behavior and human-first conversational experiences.
        </p>
      </div>

      {/* Academic Background */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Academic Background</h3>
        <div className="border-l-2 border-gray-200 pl-4">
          <div className="mb-2">
            <span className="font-medium text-gray-900">Computer Science, Princeton University</span>
            <span className="text-gray-600 ml-2">(3.93 GPA)</span>
          </div>
          <ul className="text-gray-600 space-y-1">
            <li>Tau Beta Pi Engineering Honor Society</li>
            <li>ChatGPT Education Lab member</li>
          </ul>
        </div>
      </div>

      {/* Recognition */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Recognition</h3>
        <ul className="text-gray-700 space-y-2">
          <li>Princeton Research Day Award ($1,500, top 4 across undergraduate and graduate projects)</li>
          <li>First-author publications at FAccT, CHI, and under review at NeurIPS</li>
          <li>NCWIT Washington Award Winner</li>
          <li>USACO Silver, ICPC NY Regional Qualifier, AIME Qualifier</li>
        </ul>
      </div>

      {/* Leadership */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership</h3>
        <ul className="text-gray-700 space-y-2">
          <li><strong>Director of FemaleFounded:</strong> Grew international conference from 70 to 100+ attendees, $30K fundraising</li>
          <li><strong>AI TigerTrek Director</strong> at Princeton</li>
          <li><strong>Princeton AI Alignment</strong> leadership</li>
          <li><strong>Hack4Impact</strong> Social Chair</li>
        </ul>
      </div>

      {/* Basketball */}
      <div className="text-gray-600 italic">
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
      collaborators: "Robin Jia and PhD student Johnny Wei",
      description: "Developed a \"fair learning\" doctrine that operationalizes legal concepts for LLM training, using causal regression to quantify memorization and balance the interests of AI developers with copyright holders.",
      publication: "First-author paper at FAccT 2025"
    },
    {
      title: "Prompt-Character Divergence",
      lab: "Princeton Digital Humanities Seminar",
      collaborators: "Brian Kernighan and Wouter Haverals",
      description: "Created a responsibility attribution framework that disentangles model bias from user intent in AI-generated content. Explores shared agency in human-AI collaboration.",
      publication: "Won Princeton Research Day Award ($1,500, top 4 across all levels). Paper submitted to NeurIPS Creativity & AI Track"
    },
    {
      title: "PolicyPulse",
      lab: "Princeton HCI",
      collaborators: "Professor Andrés Monroy-Hernández and Varun Rao",
      description: "Built a tool that synthesizes insights from Reddit forums and online community discussions to help policy researchers write more inclusive policy briefs. 73% of researchers found it easy to use and collected 2x more themes compared to traditional methods.",
      publication: "First-author paper at CHI 2025"
    },
    {
      title: "3D Vision Benchmarking",
      lab: "Princeton Vision & Learning Lab",
      collaborators: "Professor Jia Deng alongside Karhan Kayan and Yiming Zuo",
      description: "Benchmarked multimodal LLMs on depth and keypoint estimation from a cognitive science perspective.",
      publication: "Co-authored paper at 3DV 2025"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Research</h2>
      <p className="text-gray-700 mb-8">
        I work on AI research at the intersection of law, policy, and human-computer interaction, 
        building practical frameworks that balance different stakeholder perspectives.
      </p>

      <h3 className="text-xl font-semibold text-gray-900 mb-6">Current Projects</h3>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <h4 className="text-lg font-medium text-gray-900 mb-2">{project.title}</h4>
            <p className="text-sm text-gray-600 mb-2">
              <span className="font-medium">{project.lab}</span> • {project.collaborators}
            </p>
            <p className="text-gray-700 mb-3 leading-relaxed">
              {project.description}
            </p>
            <p className="text-sm text-gray-600 italic">
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
      description: "Led end-to-end product development of an internal knowledge-sharing platform for 350+ Microsoft Research researchers. Built a Reddit-style forum optimized for research workflows using React and FastAPI. Shipped 15+ core features including threaded discussions, intelligent content curation agents, and analytics infrastructure. Integrated Adobe Analytics and built AI agents to help seed conversations.",
      type: "Internal Platform"
    },
    {
      title: "GPTZero",
      description: "Conducted 20+ user interviews with educators and students. Discovered bugs and usability issues that I shared with engineering. Launched \"AI Conversations with Educators\" blog series.",
      type: "User Research"
    },
    {
      title: "HistoryByPeople",
      description: "Won OpenAI x Education Hackathon with an AI platform that teaches history through multiple human perspectives. Students explore events through the eyes of different individuals who lived through those moments. Built using Sora, Runway API, OpenAI API, and voice models to create immersive, multimodal storytelling experiences.",
      type: "Hackathon Winner"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Product & Building</h2>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
              <span className="text-sm text-gray-500">{project.type}</span>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}