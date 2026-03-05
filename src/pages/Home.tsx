import ButtonLink from "../components/ButtonLink";

export default function Home() {
  return (
    <>
      {/* Full-screen background split (Home page only) */}
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(to_right,_#F8F6F0_75%,_#9ea2ff_25%)]" />

      <section className="grid items-center gap-10 md:grid-cols-2">
        {/* Left Side - Text */}
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Hi! I’m Mathew Behnke.
            </h1>

            <p className="max-w-xl text-lg text-gray-700">
              I’m a student at MSOE pursuing a Bachelor of Science in Software
              Engineering with a minor in Data Science. I have a passion for
              building software solutions and learning new technologies. 
              Feel free to check out my resume and projects, and don’t
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
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Professional-Picture.jpg"
            alt="Mathew Behnke"
            className="h-100 w-100 rounded-2xl object-cover shadow-lg ring-1 ring-gray-200"
          />
        </div>
      </section>
    </>
  );
}