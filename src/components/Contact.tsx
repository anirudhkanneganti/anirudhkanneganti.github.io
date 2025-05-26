import { FaMailBulk, FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import { MdOutlinePower } from "react-icons/md";
import { FaLeaf } from "react-icons/fa";

const EMAIL = "anirudh.kanneganti@outlook.com";
const PHONE = "+1-123-456-7890";
const GITHUB = "https://github.com/anirudhkanneganti";
const LINKEDIN = "https://linkedin.com/in/anirudhkanneganti";
const RESUME_LINK = "https://your-resume-link.com";

export default function Contact() {
  return (
    <section id="contact" className="mb-8">
      <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
        Contact <FaLeaf className="text-green-500" />
      </h2>
      <div className="flex flex-col gap-2 text-[1rem]">
        <span className="flex items-center gap-2">
          <FaMailBulk className="text-green-600" />
          <a
            href={`mailto:${EMAIL}`}
            className="text-green-800 dark:text-green-100 underline"
          >
            {EMAIL}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <FaLinkedin className="text-blue-700" />
          <a
            href={LINKEDIN}
            className="text-green-800 dark:text-green-100 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {LINKEDIN.replace("https://", "")}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <FaGithub className="text-green-700" />
          <a
            href={GITHUB}
            className="text-green-800 dark:text-green-100 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {GITHUB.replace("https://", "")}
          </a>
        </span>
        <span className="flex items-center gap-2">
          <FaFileAlt className="text-emerald-600" />
          <a
            href={RESUME_LINK}
            className="text-green-800 dark:text-green-100 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </span>
        <span className="flex items-center gap-2">
          <MdOutlinePower className="text-green-600" />
          <a
            href={`tel:${PHONE}`}
            className="text-green-800 dark:text-green-100 underline"
          >
            {PHONE}
          </a>
        </span>
      </div>
    </section>
  );
}
