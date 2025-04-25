
export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      "Java",
      "C++",
      "Python",
      "JavaScript/TypeScript",
      "SQL",
      "R",
    ]
  },
  {
    category: "Data Science & ML",
    skills: [
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Data Visualization",
      "Statistical Analysis"
    ]
  },
  {
    category: "Frameworks & Libraries",
    skills: [
      "Spring Boot",
      "React",
      "Node.js",
      "Express",
    ]
  },
  {
    category: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ]
  },
  // {
  //   category: "DevOps & Tools",
  //   skills: [
  //     "Git",
  //     "Docker",
  //     "Kubernetes",
  //     "AWS",
  //     "CI/CD",
  //     "Jenkins",
  //     "Linux"
  //   ]
  // }
];
