import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Wordle-Style Game (Java)",
      tech: "Java | Git",
      image: "/wordle-personal.png",
      description:
        "Collaborated within a software engineering team to design and develop a Wordle-style word-guessing game in Java. Used Git and GitHub for version control, task coordination, and peer code reviews. Built a secure login system using file I/O to store player credentials and statistics. Gained hands-on experience in collaborative software development and project planning.",
    },
    {
      title: "ROSIE Dashboard (In Progress)",
      tech: "React | JavaScript | Docker | GitLab",
      image: "/dashboard.jpg",
      description:
        "Inheriting and extending a supercomputer metrics dashboard originally developed by previous students. Developing a React-based web client to display CPU, GPU, memory, and network usage in real time. Integrated front-end components with backend API endpoints to replace mock data with live data. Worked within a containerized development environment using Docker and collaborated via GitLab using feature branches and code reviews.",
    },
    {
      title: "ASL Letter Recognition",
      tech: "Python | TensorFlow | CNN | Computer Vision",
      image: "/ASL_DATA (2).png",
      description:
        "Developed a computer vision model to classify American Sign Language letters from image data. Built and trained a convolutional neural network (CNN) and applied data augmentation and transfer learning to significantly improve model accuracy. Compared the CNN model against a logistic regression baseline to demonstrate the advantages of deep learning for image classification tasks.",
    },
    {
      title: "Population Density Map",
      tech: "MongoDB | React | JavaScript | Tailwind | Leaflet",
      image: "/popdensity.png",
      description:
        "I was part of a duo that developed a modern React web application that visualizes global population density on an interactive world map with heat color scales. Features include multiple metrics, country detail panels, responsive design, dark mode, and real-time analytics backed by an Express API and MongoDB.",
    },
    {
      title: "Personal Portfolio Website",
      tech: "React | TypeScript | Tailwind CSS | HTML",
      image: "/React-Typescript.webp",
      description: "Designed and developed a personal portfolio website using React, TypeScript, and Tailwind CSS to showcase my projects and skills with web development.",
    },
  ];

  return (
    <section className="space-y-10">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tech={project.tech}
            description={project.description}
            image={project.image}
          />
        ))}
      </div>
    </section>
  );
}