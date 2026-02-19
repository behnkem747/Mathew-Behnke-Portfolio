export default function Resume() {
  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Resume</h1>

        <a
          href="/resume.pdf"
          download
          className="rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800"
        >
          Download PDF
        </a>
      </div>

      <div className="h-[80vh] w-full overflow-hidden rounded-lg border">
        <iframe
          src="/resume.pdf"
          title="Resume"
          className="h-full w-full"
        />
      </div>
    </section>
  );
}
