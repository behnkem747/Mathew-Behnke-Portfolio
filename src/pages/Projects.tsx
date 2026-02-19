const projects = [
  {
    title: "Project 1",
  },
  {
    title: "Project 2",
  },
  {
    title: "Project 3",
  },
  {
    title: "Project 4",
  },
];

export default function Projects() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold">Projects</h1>

      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div key={p.title} className="rounded-lg border p-4">
            <h2 className="font-semibold">{p.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}
