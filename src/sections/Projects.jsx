import ProjectCard from "../components/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
  title: "ConnectHub – Smart Contact Manager",
  description:
    "Developed a Smart Contact Manager web application that allows users to securely add, store, and manage contact details. Implemented user authentication, contact categorization, and CRUD operations with a clean and intuitive interface for seamless contact management.",
  tags: [
    "Java",
    "Spring Boot",
    "Thymeleaf",
    "MySQL",
    "Spring Security",
    "REST API",
    "Bootstrap",
  ],
  githubLink: "https://github.com/vikas9616/ConnectHub",
  imageUrl: "src/assets/smc.png", // Add your image URL here
},

    {
      title: "Chat Application",
      description: "Developed ChatApp, a real-time chat platform using Spring Boot (WebSocket) and React, enabling low-latency one-to-one and group messaging with a responsive UI and scalable backend.",
      tags: ["Java", "Spring Boot", "WebSocket", "React", "MongoDB", "Docker"],
      githubLink: "https://github.com/vikas9616/chat-application",
      imageUrl: "src/assets/chatapp.png", // Add your image URL here
    },
    {
      title: "Salon Booking Microservices Platform",
      description:
        "Developed a scalable microservices-based platform for salon management using Spring Boot. Comprises 7 independent services (User, Booking, Category, Payment, Service-Offering, Salon) communicating via REST APIs. Features service isolation, independent deployability, and horizontal scalability with externalised configuration for dev/test/prod environments.",
      tags: [
        "Java",
        "Spring Boot",
        "Microservices",
        "REST API",
        "Spring Data JPA",
        "Maven",
        "Docker",
      ],
      githubLink: "https://github.com/vikas9616/microservice",
      imageUrl: "https://img.freepik.com/free-photo/computer-program-coding-screen_53876-138060.jpg?semt=ais_hybrid&w=740&q=80",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-dark-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My technical solutions to real-world problems - demonstrated through
            these projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;