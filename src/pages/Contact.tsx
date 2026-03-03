'use client';

import type React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const FORMSPREE_FORM_ID = 'xjgeqege';

  const [state, handleSubmit, reset] = useForm(FORMSPREE_FORM_ID);

  return (
    <div className="mx-auto w-full max-w-5xl">
      <div className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
        <p className="mt-2 text-gray-600">
          Send me a message and I’ll get back to you as soon as I can.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Form */}
        <div className="rounded-2xl border bg-[#F8F6F0] p-6 shadow-sm">
          {state.succeeded ? (
            <div className="rounded-xl border bg-white p-5">
              <h2 className="text-lg font-semibold text-gray-900">
                Message sent
              </h2>
              
              <button
                type="button"
                onClick={reset}
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Form-level errors */}
              <ValidationError
                errors={state.errors}
                className="rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700"
              />

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  className="mt-1 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-gray-400"
                  type="text"
                  required
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="mt-1 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-gray-400"
                  type="email"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-600"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="mt-1 w-full rounded-xl border px-4 py-3 text-sm outline-none focus:border-gray-400"
                  rows={6}
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="mt-1 text-xs text-red-600"
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {state.submitting ? 'Sending…' : 'Send Message'}
              </button>

              <p className="text-xs text-gray-500">
                Powered by Formspree.
              </p>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="rounded-2xl border bg-[#F8F6F0] p-6 shadow-sm">
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