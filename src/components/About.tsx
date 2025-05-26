import { PiLeafFill } from "react-icons/pi";
import { GiFern } from "react-icons/gi";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";

const GITHUB = "https://github.com/anirudhkanneganti";
const LINKEDIN = "https://linkedin.com/in/anirudhkanneganti";
const RESUME_LINK = "https://your-resume-link.com";

// Horizontal row of leaf/fern icons
const LeafRow = () => (
  <span className="inline-flex gap-1 items-center ml-2 align-middle">
    <PiLeafFill className="text-green-500 text-lg" />
    <GiFern className="text-emerald-600 text-lg" />
    <PiLeafFill className="text-green-700 text-lg" />
    <GiFern className="text-emerald-800 text-lg" />
    <PiLeafFill className="text-lime-500 text-lg" />
  </span>
);

export default function About() {
  return (
    <section
      id="about"
      className="mb-12 flex flex-col md:flex-row gap-8 items-start"
    >
      {/* Profile photo and social icons column */}
      <div className="w-36 flex-shrink-0 flex flex-col items-center">
        <div className="w-36 h-36 rounded-xl overflow-hidden border-4 border-green-200 shadow-md bg-white mt-1">
          <img
            src="/profile.png"
            alt="Anirudh Kanneganti"
            className="object-cover w-full h-full"
          />
        </div>
        {/* Social media row underneath */}
        <div className="flex gap-4 mt-3">
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub className="text-2xl text-green-800 dark:text-green-200 hover:text-green-600 transition" />
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl text-green-800 dark:text-green-200 hover:text-blue-700 transition" />
          </a>
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            title="Resume"
          >
            <FaFileAlt className="text-2xl text-green-800 dark:text-green-200 hover:text-emerald-700 transition" />
          </a>
        </div>
      </div>
      {/* Summary and bullets column */}
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-extrabold text-green-900 dark:text-green-200 tracking-tight mb-5">
          Anirudh Kanneganti
        </h1>
        <div className="flex items-center mb-2">
          <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-0">
            About Me
          </h2>
          <LeafRow />
        </div>
        <p className="text-[1.07rem] mb-3">
          Data Engineer & Machine Learning Developer passionate about cloud-scale pipelines, real-time analytics, and robust AI. I blend deep experience with Azure, Databricks, and modern ML with a love for clean code and green design.
        </p>
        <ul className="mb-4 pl-5 list-disc text-green-800 dark:text-green-100 text-[1rem] space-y-1">
          <li>10+ years in Data Engineering & Analytics</li>
          <li>
            Specialized in Azure, Databricks, Kafka, Delta Lake, Synapse,
            Power BI
          </li>
          <li>
            AI/ML R&D: Language Model Distillation, Quantization,
            Vision-Language Models
          </li>
          <li>
            Cloud migration, real-time streaming, scalable architectures
          </li>
          <li>
            Passion for sustainable, efficient, and beautiful solutions
          </li>
        </ul>
      </div>
    </section>
  );
}
