import { PiLeafFill } from "react-icons/pi";

const SKILLS = [
  "Python", "TypeScript", "SQL", "PySpark", "Spark", "Kafka", "Delta Lake",
  "Databricks", "Azure Synapse", "Azure Data Lake", "Power BI", "Snowflake",
  "AWS", "Airflow", "MLOps", "Machine Learning", "NLP", "LLMs", "Vision-Language Models",
  "Quantization", "Data Modeling", "Data Governance", "ETL/ELT", "Real-Time Streaming",
  "CI/CD", "Docker", "Kubernetes", "REST APIs", "Tableau", "Git", "Unix/Linux"
];

export default function Skills() {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-2xl font-semibold text-green-800 dark:text-green-200 mb-4 flex items-center gap-2">
        Skills <PiLeafFill className="text-green-500" />
      </h2>
      <div className="flex flex-wrap gap-3">
        {SKILLS.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full text-sm font-medium shadow bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
