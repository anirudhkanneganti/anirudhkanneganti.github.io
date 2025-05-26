import { FaDatabase, FaRobot, FaBrain, FaLeaf } from "react-icons/fa";
import { DataFactoriesAnalytics } from "@threeveloper/azure-react-icons";

const PROJECTS = [
  {
    name: "kafka-delta-stream",
    desc: "Kafka streaming to Delta Lake: Fast, reliable, scalable real-time data engineering (Python, Spark, Databricks, Azure).",
    icon: <FaDatabase className="text-green-700 text-2xl" />,
    link: "https://github.com/yourusername/kafka-delta-stream",
  },
  {
    name: "Azure Lakehouse Solutions",
    desc: "Modern data warehousing & analytics with Azure Synapse, Data Lake, Lakehouse & Power BI patterns—cloud-scale and sustainable.",
    icon: (
      <span className="flex items-center gap-1">
        <DataFactoriesAnalytics className="text-sky-500 text-2xl" />
      </span>
    ),
    link: "https://github.com/yourusername/azure-lakehouse",
  },
  {
    name: "RAG-based Distillation for Small LMs",
    desc: "Step-by-step RAG distillation: Efficiently train task-specific small language models (T5 student, Llama3 8B teacher, CQA task).",
    icon: <FaRobot className="text-green-800 text-2xl" />,
    link: "https://github.com/yourusername/rag-distillation",
  },
  {
    name: "PTQ4CLIP - Quantized Vision-Language Models",
    desc: "Post-training quantization for CLIP using twin uniform & Hessian. 8-bit, lossless on ImageNet, VQA/Retrieval/Captioning.",
    icon: <FaBrain className="text-emerald-600 text-2xl" />,
    link: "https://github.com/yourusername/ptq4clip",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mb-12">
      <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
        Projects <FaLeaf className="text-green-500" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="rounded-2xl shadow hover:shadow-xl p-5 flex flex-col bg-green-50 dark:bg-[#52b788] transition-all border border-green-100 dark:border-green-900 min-h-[140px]"
          >
            <div className="flex items-center gap-2 mb-2">
              {project.icon}
              <span className="font-bold text-lg text-green-900 dark:text-green-900">{project.name}</span>
            </div>
            <div className="flex-1 text-green-800 dark:text-green-800 mb-2 text-[0.97rem]">
              {project.desc}
            </div>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-700 dark:text-green-200 text-xs underline hover:text-green-900 dark:hover:text-green-300 transition"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
