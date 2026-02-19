import ButtonLink from "../components/ButtonLink";

export default function Home() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-medium text-gray-600">Portfolio</p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Hi! I’m Mathew Behnke.
        </h1>

        <p className="max-w-2xl text-lg text-gray-700">
          I’m a student at MSOE pursuing a Bachelor of Science in Software Engineering 
          with a minor in Data Science. I have a passion for building web applications 
          and learning new technologies. I’m currently looking for internship opportunities 
          for the summer of 2026. Feel free to check out my resume and projects, and don’t 
          hesitate to reach out if you’d like to connect!
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <ButtonLink to="/projects" variant="primary">
          View Projects
        </ButtonLink>

        <ButtonLink to="/contact" variant="secondary">
          Contact Me
        </ButtonLink>
      </div>
    </section>
  );
}
