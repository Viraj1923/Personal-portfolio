import { ScrollAnimation } from "@/components/ScrollAnimation";
import { ExternalLink, Github } from "lucide-react";
import farmeasy from "@/assets/farmeasy.png";
import fingertalk from "@/assets/fingertalk.png";
import replio from "@/assets/replio.png";
import zerodha from "@/assets/zerodha.png";


const projects = [
  {
    id: 1,
    title: "FingerTalk",
    description:
      "AI-powered sign language recognition platform that supports ASL and ISL, converting hand gestures into text and speech through real-time webcam detection.",
    image:fingertalk,
    github:
      "https://github.com/Viraj1923/FingerTalk-Sign-Language-Recognition",
    live: "https://fingertalk-app.vercel.app",
    tags: [
      "React.js",
      "FastAPI",
      "TensorFlow",
      "MediaPipe",
      "OpenCV",
      "Firebase",
    ],
  },

  {
    id: 2,
    title: "FarmEasy",
    description:
      "Agricultural decision-support web application providing crop recommendation, rainfall estimation, yield prediction, and fertilizer recommendation using machine-learning models and agricultural datasets.",
    image:farmeasy,
    github: "https://github.com/Viraj1923/FarmEasy",
    live: "",
    tags: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Machine Learning",
    ],
  },

  {
    id: 3,
    title: "Replio AI",
    description:
      "AI chat application with Firebase authentication, persistent conversation threads, MongoDB storage, and Gemini-powered responses through a Node.js and Express backend.",
    image: replio,
    github: "https://github.com/Viraj1923/Replio-",
    live: "https://replio-mma-9.vercel.app",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Gemini API",
      "Firebase",
    ],
  },

  {
    id: 4,
    title: "GradeBook",
    description:
      "Student result-management web application that allows teachers to authenticate, create and manage student records, add or edit marks, and display student results.",
    image: "https://opengraph.githubassets.com/1/Viraj1923/GradeBook",
    github: "https://github.com/Viraj1923/GradeBook",
    live: "https://gradebook-v043.onrender.com",
    tags: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "EJS",
      "JWT",
      "bcrypt.js",
    ],
  },

  {
    id: 5,
    title: "Zerodha",
    description:
      "Full-stack Zerodha-inspired stock market application featuring a public investment interface and trading dashboard with watchlist, holdings, positions, order placement, and portfolio visualization.",
    image: zerodha,
    github: "https://github.com/Viraj1923/Zerodha",
    live: "https://zerodha-omega.vercel.app/",
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Chart.js",
    ],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <h2 className="text-4xl font-bold mb-12 gradient-text">
          Featured Projects
        </h2>
      </ScrollAnimation>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ScrollAnimation key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm h-full flex flex-col">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={600}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-sm bg-purple-500/20 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </div>
  );
};

export default Projects;
