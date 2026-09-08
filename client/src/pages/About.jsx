import { ScrollAnimation } from "@/components/ScrollAnimation";
import { motion } from "framer-motion";
import { Briefcase, Code2, Globe, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import aboutImage from "@/assets/about.png";

const achievements = [
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "8.95 CGPA",
    description: "B.Tech CSE (AI & ML) KITCoEK",
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: "PBL Winner",
    description: "Recognized across three academic years",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "AI Research Contributor",
    description: "Co-authored an AI research paper",
  },
];

const interests = [
  "Full-Stack Development",
  "Backend Development",
  "Artificial Intelligence",
  "Machine Learning",
  "System Design & Scalable Systems",
  "Cloud Computing",
];

const quickFacts = [
  "B.Tech in CSE(AI & ML)",
  "Full-Stack Development · Backend Systems · AI/ML",
  "Open to work: on-site, hybrid, or remote",
];

const About = () => {
  return (
    <div className="min-h-screen pt-20 px-4 max-w-6xl mx-auto pb-20">
      <ScrollAnimation>
        <motion.div
          className="flex items-center gap-3 mb-10"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold gradient-text">About Me</h2>
        </motion.div>
      </ScrollAnimation>

      {/* Profile */}
      <ScrollAnimation>
        <motion.div
          className="grid lg:grid-cols-[360px_1fr] overflow-hidden rounded-2xl border border-white/5 bg-gray-800/50 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="relative min-h-[360px] lg:min-h-full overflow-hidden">
            <img
              src={aboutImage}
              alt="About Viraj"
              width={600}
              height={600}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-sm text-gray-300 mb-1">Computer Science Graduate</p>
              <h3 className="text-2xl font-bold">Viraj Mulik</h3>
            </div>
          </div>

          <div className="p-7 lg:p-8 flex flex-col justify-center">
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Hi, I’m Viraj, a Computer Science graduate specializing in Artificial Intelligence and Machine Learning. I’m a full-stack developer who enjoys building practical web applications and AI-powered solutions, with a particular interest in backend development, scalable systems, and modern web technologies.
              </p>
              <p>
                My experience spans frontend development, backend services, databases, and machine-learning integrations. I use projects to strengthen my understanding of real-world software development and to solve practical problems, including work involving sign-language recognition and agriculture-focused applications.
              </p>
              <p>
                Alongside development, I have contributed to artificial intelligence research as a co-author of a research paper. I also achieved an 8.95 CGPA during my B.Tech in Computer Science and Engineering (AI & ML) and was recognized as a PBL Winner across three academic years.
              </p>
              <p>
                I’m particularly interested in building reliable software, understanding systems beyond the surface level, and continuously improving as an engineer. My goal is to grow as a software engineer focused on full-stack development, backend systems, and scalable architecture, while working on products that solve meaningful problems.
              </p>
            </div>

            <div className="mt-7 pt-6 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-4 gradient-text">Quick Facts</h3>
              <ul className="space-y-3 text-gray-300">
                {quickFacts.map((fact) => (
                  <motion.li key={fact} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white flex-shrink-0" />
                    <span>{fact}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <a
                href="https://github.com/Viraj1923"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                View GitHub
              </a>
              <Link
                to="/skills"
                className="px-5 py-2.5 bg-white/10 text-white rounded-full font-medium hover:bg-white/20 transition-colors"
              >
                My Skills
              </Link>
            </div>
          </div>
        </motion.div>
      </ScrollAnimation>

      {/* Achievements */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-7 gradient-text">Achievements</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                className="group bg-white/5 border border-white/5 p-5 rounded-xl backdrop-blur-sm hover:bg-white/[0.08] transition-all"
                whileHover={{ y: -3 }}
              >
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center text-white mb-4">
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm leading-relaxed text-gray-400">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>

      {/* Areas of Interest */}
      <ScrollAnimation>
        <div className="mt-16">
          <h3 className="text-2xl font-semibold mb-7 gradient-text">Areas of Interest</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {interests.map((interest) => (
              <motion.div
                key={interest}
                className="bg-white/5 border border-white/5 px-4 py-3.5 rounded-lg backdrop-blur-sm flex items-center gap-3 hover:bg-white/[0.08] transition-all"
                whileHover={{ x: 3 }}
              >
                <Globe className="w-4 h-4 text-gray-400 flex-shrink-0" />
                <span className="text-sm text-gray-300">{interest}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default About;
