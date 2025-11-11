// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({
  title,
  description,
  tags = [],
  githubLink,
  imageUrl,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 1.05,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 10,
        },
      }}
      viewport={{ once: true }}
      className="h-full bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-dark-700 cursor-pointer"
    >
      {/* Project Image */}
      <div className="h-48 bg-gray-100 dark:bg-dark-700 overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <p className="text-gray-400">No image available</p>
          </div>
        )}
      </div>

      {/* Project Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        {/* Source Code Link */}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium"
          >
            <FiGithub className="mr-2" /> Source Code
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;