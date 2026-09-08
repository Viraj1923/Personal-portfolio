import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://portfolio-viraj-81pk8y6u9l.vercel.app";

const PAGE_META = {
  "/": {
    title: "Viraj Mulik - Full Stack & AI Developer",
    description:
      "Viraj Mulik — Full-stack developer building practical web applications and AI-powered solutions. Based in India.",
  },
  "/about": {
    title: "About - Viraj Mulik | Full Stack & AI Developer",
    description:
      "Learn about Viraj Mulik — a developer interested in full-stack applications, AI, backend systems, and scalable architecture.",
  },
  "/projects": {
    title: "Projects - Viraj Mulik | Developer Portfolio",
    description:
      "Explore full-stack and AI projects by Viraj Mulik, including sign-language recognition and agriculture-focused applications.",
  },
  "/skills": {
    title: "Skills - Viraj Mulik | Full Stack & AI Developer",
    description:
      "Technical skills of Viraj Mulik — React, Node.js, Python, Java, FastAPI, TensorFlow, databases, and more.",
  },
  "/experience": {
    title: "Experience - Viraj Mulik | Full Stack & AI Developer",
    description:
      "Professional experience and practical development work by Viraj Mulik.",
  },
  "/education": {
    title: "Education - Viraj Mulik | Developer Portfolio",
    description:
      "Educational background and technical learning journey of Viraj Mulik.",
  },
  "/certificates": {
    title: "Certificates - Viraj Mulik | Developer Portfolio",
    description:
      "Technical learning and achievements by Viraj Mulik.",
  },
  "/contact": {
    title: "Contact - Viraj Mulik | Full Stack & AI Developer",
    description:
      "Get in touch with Viraj Mulik for projects, opportunities, or collaborations.",
  },
};

const FALLBACK_META = {
  title: "Viraj Mulik - Full Stack & AI Developer",
  description:
    "Portfolio of Viraj Mulik — a full-stack developer building AI-powered solutions.",
};

export const useSEO = () => {
  const location = useLocation();

  useEffect(() => {
    const meta = PAGE_META[location.pathname] ?? FALLBACK_META;
    const url = `${BASE_URL}${location.pathname}`;

    document.title = meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", meta.title);
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", meta.description);
    document
      .querySelector('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  }, [location.pathname]);
};
