import ProjectCard from "../components/ProjectCard";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Patna Metro Route Finder Voice Assistant",
      description:
        "Developed a first-of-its-kind Patna Metro Route Finder web application, providing users with accurate live metro routes, fare calculation, and distance details. Integrated an intelligent chatbot assistant to offer seamless query support and enhance user experience",
      tags: [
        "Java",
        "Spring Boot",
        "Monolithic",
        "React.js",
        "MongoDB",
        "Docker",
        "AWS",
      ],
      githubLink: "https://github.com/vikas9616/Patna-Metro",
      imageUrl: "https://your-image-url.com/patna-metro.jpg", // Add your image URL here
    },
    {
      title: "ByteBuzz Chat App",
      description: "Developed Bytebuzz, a real-time chat platform using Spring Boot (WebSocket) and React, enabling low-latency one-to-one and group messaging with a responsive UI and scalable backend.",
      tags: ["Java", "Spring Boot", "WebSocket", "React", "MongoDB", "Docker"],
      githubLink: "https://github.com/vikas9616/bytebuzz-chat-app",
      imageUrl: "https://your-image-url.com/bytebuzz.jpg", // Add your image URL here
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
      imageUrl: "https://your-image-url.com/microservice.jpg",
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