import { FaDatabase, FaRobot, FaBrain, FaBlogger } from "react-icons/fa";
import { DataLakeStoreGen1 } from "@threeveloper/azure-react-icons";

const BLOGS = [
  {
    title: "Building Real-Time Data Pipelines with Kafka and Delta Lake",
    icon: <FaDatabase className="text-green-600 text-xl" />,
    link: "https://yourblog.com/kafka-delta-pipelines",
  },
  {
    title: "Azure Lakehouse Patterns: Next-Gen Data Analytics",
    icon: (
      <span className="flex items-center gap-1">
        <DataLakeStoreGen1 className="text-blue-600 text-xl" />
      </span>
    ),
    link: "https://yourblog.com/azure-lakehouse",
  },
  {
    title: "RAG for Language Model Compression: A Deep Dive",
    icon: <FaRobot className="text-green-700 text-xl" />,
    link: "https://yourblog.com/rag-distillation",
  },
  {
    title: "Quantization Demystified: From CLIP to Tiny Models",
    icon: <FaBrain className="text-emerald-700 text-xl" />,
    link: "https://yourblog.com/ptq4clip-quantization",
  },
];

export default function Blogs() {
  return (
    <section id="blogs" className="mb-12">
      <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
        Blogs <FaBlogger className="text-amber-600" />
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        {BLOGS.map((blog) => (
          <div
            key={blog.title}
            className="rounded-2xl shadow hover:shadow-xl p-5 flex flex-col bg-green-50 dark:bg-[#52b788] transition-all border border-green-100 dark:border-green-900 min-h-[100px]"
          >
            <div className="flex items-center gap-2 mb-2">
              {blog.icon}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-green-900 dark:text-green-900 underline"
              >
                {blog.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
