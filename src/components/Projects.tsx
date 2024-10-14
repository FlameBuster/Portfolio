const Projects = () => {
  return (
    <section id="projects">
      <h1>Projects</h1>
      <p>Here are some of my recent works:</p>

      <div className="projects-container">
        <div className="project-card">
          <h2>CAM Project</h2>
          <p>
            A Web Application ,Corps Archival Museum to facilitate the
            digitization and management of various artifacts.
          </p>
          <p>
            <strong>Tech Stack:</strong> Next.js, Node.js, MongoDB
          </p>
          <a
            href="https://cam-build-flamebusters-projects.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Visit Project
          </a>
        </div>

        <div className="project-card">
          <h2>Youtube-Summarizer</h2>
          <p>
            The YouTube Summarizer App simplifies long videos by generating
            concise, easy-to-read summaries. Powered by advanced natural
            language processing, it quickly analyzes video content and produces
            clear summaries
          </p>
          <p>
            <strong>Tech Stack:</strong> React, Tailwind CSS, Node.js,
            Express.js Python ( Hugging Face).
          </p>
          <a
            href="https://yt-summarizer-frontend.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="project-button"
          >
            Visit Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
