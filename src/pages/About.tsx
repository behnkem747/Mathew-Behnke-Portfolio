export default function About() {
  const card =
    "rounded-2xl border bg-white/90 backdrop-blur p-6 shadow-sm";

  return (
    <div className="mx-auto w-full max-w-5xl space-y-24">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
      </div>

      {/* Row 1 */}
      <section className="grid items-center gap-12 md:grid-cols-2">
        {/* Text */}
        <div className={card}>
          <h2 className="text-2xl font-semibold">General Information</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            My name is Mathew Behnke, I’m a Software Engineering student with a minor in data science at MSOE, and I am in my junior year.
            I’m currently looking for full time internship opportunities for the summer of 2026.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            I'm originally from Oconto Falls, Wisconsin. My interests outside of software engineering
            include fishing, golfing, bowling, basketball, sports cards, video games, and hanging out with my friends and family.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src="/Golf.jpg"
            alt="General Information"
            className="h-80 w-full max-w-sm rounded-2xl object-cover shadow-sm"
          />
        </div>
      </section>

      {/* Row 2 (Staggered) */}
      <section className="grid items-center gap-12 md:grid-cols-2">
        <div className="order-1 md:order-none flex justify-center md:justify-start">
          <img
            src="/gi.jpg"
            alt="Why I Chose Software Engineering"
            className="h-80 w-full max-w-sm rounded-2xl object-cover shadow-sm"
          />
        </div>

        {/* Text */}
        <div className={card}>
          <h2 className="text-2xl font-semibold">Why I Chose Software Engineering</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            I chose software engineering because it combines working within a team enviorment with
            problem-solving. Software is also always evolving, which gives me a chance to always be learning something new.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            I have always been a huge fan of optimization and efficiency, and software engineering
            allows me to express my creativity while applying these principles to real world problems
          </p>
        </div>
      </section>

      {/* Row 3 */}
      <section className="flex justify-center">
        <div className={`${card} max-w-2xl text-center`}>
          <h2 className="text-2xl font-semibold">Career Aspirations</h2>
          <p className="mt-4 leading-relaxed text-gray-700">
            My goal is to gain real-world experience through internships and
            contribute to meaningful software projects. I want to work on a
            team that values thoughtful design.
          </p>
          <p className="mt-4 leading-relaxed text-gray-700">
            Long term, I hope to build impactful applications that positively
            affect people's lives and to continue learning and growing as a software engineer.
          </p>
        </div>
      </section>
    </div>
  );
}