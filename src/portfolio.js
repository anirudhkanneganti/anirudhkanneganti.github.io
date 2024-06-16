const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://anirudhkanneganti.github.io/',
  title: 'AK',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Anirudh Kanneganti',
  role: 'Machine Learning Engineer',
  description:
    'Diligent Computer Science graduate with 8 years of experience in Machine Learning, AI Solutions, and Data Analytics. Overseen full SDLC of 5+ advanced analytics projects, incorporating ML models from concept to production. Conducted active research on model compression, focused on quantization, and advancing LLMs with RAG based distillation. Served as offshore innovation lead, driving AI/ML pilot projects, and guided teams in two annual hackathons. Mentored teams in addressing complex data engineering challenges and trained developers on cutting-edge machine learning algorithms and data science technologies. Certified Microsoft Data Scientist Associate with knowledge in leveraging cloud technologies for scalable ML solutions. Collaborative team player with strong communication, leadership, and problem-solving abilities.',
  resume: 'https://1drv.ms/b/s!AtaCrYYZxkXPlR_sL6brF8wm-kF4?e=uvtTuH',
  social: {
    linkedin: 'https://linkedin.com/in/anirudhkanneganti',
    github: 'https://github.com/anirudhkanneganti',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Integer-only Inference of Vision-Language Models (I-VLM)',
    description:
      'I-VLM introduces a integer-only quantization framework for VLMs that facilitates inference through integer arithmetic and bit-shifting techniques, eliminating the need for floating-point computations.',
    stack: ['Python', 'Quantization', 'PyTorch'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Step-by-Step Distillation with RAG',
    description:
      'Distillation of large language models into specialized student models using RAG. Supplementing teacher with RAG based context',
    stack: ['Python', 'RAG', 'Distillation', 'PyTorch'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'PTQ4CLIP - Post Training Quantization of CLIP',
    description:
      'Implements a Post Training Quantization strategy for CLIP, based on twin uniform quantization and using a Hessian guided metric to find the scaling factor.',
    stack: ['CLIP', 'Quantization', 'PyTorch'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'C++',
  'SQL',
  'Power BI',
  'Azure Data Factory',
  'PySpark',
  'Pandas',
  'NumPy',
  'Machine Learning',
  'Neural Networks',
  'Deep Learning',
  'NLP',
  'LLMs',
  'Transformers',
  'Prompt Engineering',
  'RAG',
  'Quantization',
  'Distillation',
  'PyTorch',
  'Scikit-Learn',
  'Azure ML',
  'MLflow',
  'Hugging Face',
  'Windows',
  'Linux',
  'Git',
  'GitHub'

]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'anirudh.kanneganti@outlook.com',
}

export { header, about, projects, skills, contact }
