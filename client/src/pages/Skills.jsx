import {
  Code2,
  Layout,
  Server,
  Database,
  Cloud,
  Terminal,
  Wrench,
  Users,
  Brain,
  MessageSquare,
  GitBranch,
  Boxes,
  Braces,
  Cpu,
  Network,
} from "lucide-react";
import { ScrollAnimation } from "@/components/ScrollAnimation";
import {
  JavaScriptLogo,
  ReactLogo,
  TypeScriptLogo,
  NodeLogo,
  MongoDBLogo,
  VSCodeLogo,
  GitLogo,
  TailwindLogo,
  VercelLogo,
  PythonLogo,
  ExpressLogo,
  RenderLogo,
  PostmanLogo,
} from "@/components/TechLogos";

const skills = [
  {
    category: "Programming Languages",
    icon: <Code2 className="w-6 h-6" />,
    items: [
      { name: "JavaScript", icon: <JavaScriptLogo /> },
      { name: "TypeScript", icon: <TypeScriptLogo /> },
      { name: "Python", icon: <PythonLogo /> },
      { name: "Java", icon: <Code2 className="w-4 h-4" /> },
    ],
  },
  {
    category: "Front-End Development",
    icon: <Layout className="w-6 h-6" />,
    items: [
      { name: "React.js", icon: <ReactLogo /> },
      { name: "Tailwind", icon: <TailwindLogo /> },
      { name: "HTML/CSS", icon: <Code2 className="w-4 h-4" /> },
    ],
  },
  {
    category: "Back-End Development",
    icon: <Server className="w-6 h-6" />,
    items: [
      { name: "Node.js", icon: <NodeLogo /> },
      { name: "Express", icon: <ExpressLogo /> },
      { name: "FastAPI", icon: <Server className="w-4 h-4" /> },
      { name: "Flask", icon: <Server className="w-4 h-4" /> },
    ],
  },
  {
    category: "Databases & Cloud",
    icon: <Database className="w-6 h-6" />,
    items: [
      { name: "PostgreSQL", icon: <Database className="w-4 h-4" /> },
      { name: "MongoDB", icon: <MongoDBLogo /> },
      { name: "MySQL", icon: <Database className="w-4 h-4" /> },


    ],
  },
  {
    category: "Version Control & DevOps",
    icon: <GitBranch className="w-6 h-6" />,
    items: [
      { name: "Git", icon: <GitLogo /> },
      { name: "GitHub", icon: <GitLogo /> },
      { name: "Vercel", icon: <VercelLogo /> },
      { name: "Render", icon: <RenderLogo /> },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: <Wrench className="w-6 h-6" />,
    items: [
      { name: "TensorFlow", icon: <Brain className="w-4 h-4" /> },
      { name: "OpenCV", icon: <Brain className="w-4 h-4" /> },
      { name: "LLM Integration", icon: <Brain className="w-4 h-4" /> },
      { name: "Hugging Face", icon: <Brain className="w-4 h-4" /> },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: <Terminal className="w-6 h-6" />,
    items: [
      { name: "VS Code", icon: <VSCodeLogo /> },
      { name: "Postman", icon: <PostmanLogo /> },
      { name: "Bootstrap", icon: <Layout className="w-4 h-4" /> },
      { name: "AWS CloudFormation", icon: <Cloud className="w-4 h-4" /> },

    ],
  },
  {
    category: "Core Computer Science", // DSA, OOP, DBMS, OS, Networking
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "DSA", icon: <Boxes className="w-4 h-4" /> },
      { name: "OOP", icon: <Braces className="w-4 h-4" /> },
      { name: "DBMS", icon: <Database className="w-4 h-4" /> },
      { name: "OS", icon: <Cpu className="w-4 h-4" /> },
    ],
  },
  {
    category: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    items: [
      { name: "Teamwork", icon: <Users className="w-4 h-4" /> },
      { name: "Communication", icon: <MessageSquare className="w-4 h-4" /> },

    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-4 gradient-text">
          Technical Skills
        </h2>
      </ScrollAnimation>

      <ScrollAnimation>
        <p className="text-gray-400 mb-12 max-w-2xl">
          A comprehensive overview of my technical expertise and tools I work
          with
        </p>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skillGroup) => (
          <ScrollAnimation key={skillGroup.category}>
            <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm hover:bg-gray-800/70 transition-all border border-white/5">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2 bg-white/10 rounded-lg">
                  {skillGroup.icon}
                </div>
                <h3 className="text-lg font-semibold">{skillGroup.category}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-700/50 px-4 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-white/10 transition-all group"
                  >
                    <div className="text-gray-400 group-hover:text-white transition-colors">
                      {skill.icon}
                    </div>
                    <span className="text-gray-400 group-hover:text-white transition-colors text-sm">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Skills;
