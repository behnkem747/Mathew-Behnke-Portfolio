export default function Contact() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-gray-600">
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Form */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Name</label>
              <input
                className="mt-1 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-gray-400"
                type="text"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <input
                className="mt-1 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-gray-400"
                type="email"
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                className="mt-1 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-gray-400"
                rows={6}
                required
              />
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
            >
              Send Message
            </button>

            <p className="text-xs text-gray-500">
              This form does not work right now :/
            </p>
          </form>
        </div>

        {/* Info */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Quick Info</h2>
          <p className="mt-2 text-sm text-gray-600">
            You can also reach me directly here:
          </p>

          <div className="mt-6 space-y-4">
            <div className="rounded-xl border bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-500">Email</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                behnkemathew@gmail.com
              </p>
            </div>

            <div className="rounded-xl border bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-500">LinkedIn</p>
              <a
                className="mt-1 inline-block text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-500"
                href="https://linkedin.com/in/mathew-behnke/"
                target="_blank"
                rel="noreferrer"
              >
                https://linkedin.com/in/mathew-behnke/
              </a>
            </div>

            <div className="rounded-xl border bg-gray-50 p-4">
              <p className="text-xs font-medium text-gray-500">GitHub</p>
              <a
                className="mt-1 inline-block text-sm font-semibold text-gray-900 underline decoration-gray-300 underline-offset-4 hover:decoration-gray-500"
                href="https://github.com/behnkem747"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/behnkem747
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}