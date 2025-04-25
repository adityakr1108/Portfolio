
import { ProjectType } from '../components/ProjectCard';

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Smart AI Voice Assistant",
    description: "A mobile application that uses AI to understand natural language commands and perform tasks based on user voice input.",
    tags: ["Python", "TensorFlow", "React Native", "NLP"],
    category: ["Data Science"],
    github: "https://github.com/adityakr1108/Python-Daily-Project",
    // demo: "https://demo.example.com",  
    image: "https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=1000&auto=format&fit=crop"
  },
  {
    "id": 2,
    "title": "Journal Management System",
    "description": "A secure Spring Boot-based platform for managing private journal entries with secure authentication, stateless APIs, and encrypted password storage.",
    "tags": ["Java", "Spring Boot", "Spring Security", "H2", "REST API", "BCrypt", "Lombok"],
    "category": ["Backend"],
    "github": "https://github.com/adityakr1108/Journal-Management",
    "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop"
  },  
  {
    "id": 3,
    "title": "Virtual Classroom Platform",
    "description": "A real-time virtual classroom built with Django and WebRTC for live video conferencing, chat, and role-based dashboards for teachers and students.",
    "tags": ["Django", "WebRTC", "Django Channels", "Redis", "WebSockets", "HTML", "CSS", "JavaScript"],
    "category": ["Full Stack","Backend", "Real-time Communication"],
    "github": "https://github.com/adityakr1108/AURO_EDU_VIRTUAL_CLASSROOM_TASK-6",
    "image": "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Smart Voice Assistant App",
    description: "A mobile voice assistant app that transcribes conversations, extracts key points and dates, and adds them to the calendar with reminders using AI.",
    tags: ["Flutter", "Kotlin", "Android", "Gemini API", "Speech-to-Text", "AI"],
    category: ["Mobile", "AI"],
    github: "https://github.com/adityakr1108/Smart-AI-Voice-Assistant-Mobile-App", // Replace with your actual GitHub link
    image: "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?q=80&w=1000&auto=format&fit=crop" // You can use a relevant mobile or AI image
  },
  {
    id: 5,
    title: "N-Queen Visualizer",
    description: "An interactive visualizer that demonstrates the backtracking algorithm used to solve the N-Queen problem, helping users understand the step-by-step solution process.",
    tags: ["JavaScript", "HTML", "CSS", "Backtracking", "Visualization"],
    category: ["Web", "Algorithms","Full Stack"],
    github: "https://github.com/adityakr1108/NQueenVisulaizer", // Replace with your actual GitHub link
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop" // Optional: use a board/algorithmic style image
  },
  
  {
    id: 6,
    title: "AI Query Management System",
    description: "A smart system designed to manage and respond to user queries efficiently using AI-based classification, priority handling, and auto-suggestions for replies.",
    tags: ["Flask", "Python", "AI", "NLP", "MongoDB", "Gemini API"],
    category: ["Web", "Full Stack"],
    github: "https://github.com/adityakr1108/Query-Management", // Replace with your actual GitHub link
    image: "https://plus.unsplash.com/premium_photo-1681666713641-8d722b681edc?q=80&w=2110&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000&auto=format&fit=crop" // Professional, tech-oriented image
  }
  
];
