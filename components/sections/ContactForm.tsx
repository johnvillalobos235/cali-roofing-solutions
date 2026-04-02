"use client";

import { useState } from "react";
import { t } from "@/i18n";
import Button from "@/components/ui/Button";
import FadeIn from "@/components/shared/FadeIn";

interface ContactFormProps {
  locale?: string;
  messages: Record<string, unknown>;
}

export default function ContactForm({ messages }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="py-20" id="contact-form">
      <div className="container-narrow max-w-2xl">
        <FadeIn>
          {status === "success" ? (
            <div className="text-center py-12 space-y-4">
              <div className="text-4xl">&#10003;</div>
              <p className="text-lg font-semibold text-n-900">
                {t(messages, "contact.form.success")}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-n-900 mb-2"
                  >
                    {t(messages, "contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full rounded-lg border border-n-800/20 bg-white px-4 py-3 text-sm text-n-900 placeholder:text-n-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-n-900 mb-2"
                  >
                    {t(messages, "contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full rounded-lg border border-n-800/20 bg-white px-4 py-3 text-sm text-n-900 placeholder:text-n-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-n-900 mb-2"
                >
                  {t(messages, "contact.form.phone")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-lg border border-n-800/20 bg-white px-4 py-3 text-sm text-n-900 placeholder:text-n-400 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-n-900 mb-2"
                >
                  {t(messages, "contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-n-800/20 bg-white px-4 py-3 text-sm text-n-900 placeholder:text-n-400 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                />
              </div>
              <Button type="submit" disabled={status === "sending"}>
                {status === "sending"
                  ? "..."
                  : t(messages, "contact.form.submit")}
              </Button>
              {status === "error" && (
                <p className="text-sm text-red-600">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
