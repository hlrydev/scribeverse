"use client";

import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Show loading toast
    const loadingToast = toast.loading("Sending message...");

    try {
      const response = await fetch("https://formspree.io/f/xrbldogn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          id: loadingToast,
          description: "We'll get back to you soon!",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Error sending message", {
          id: loadingToast,
          description: "Please try again later.",
        });
      }
    } catch (error) {
      toast.error("Network error", {
        id: loadingToast,
        description: "Check your connection and try again.",
      });
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <footer
        id="contact"
        className="bg-scribe-dark text-scribe-white px-8 py-16"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">CONTACT/FEEDBACK</h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-scribe-burgundy/80 border border-scribe-crimson rounded px-4 py-3 text-scribe-white placeholder-scribe-white/50 focus:outline-none focus:border-scribe-gold transition-colors"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="E-Mail (Optional)"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-scribe-burgundy/80 border border-scribe-crimson rounded px-4 py-3 text-scribe-white placeholder-scribe-white/50 focus:outline-none focus:border-scribe-gold transition-colors"
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-scribe-burgundy/80 border border-scribe-crimson rounded px-4 py-3 text-scribe-white placeholder-scribe-white/50 focus:outline-none focus:border-scribe-gold transition-colors resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-scribe-gold hover:bg-scribe-gold/90 text-scribe-dark font-semibold py-3 px-6 rounded transition-colors duration-200"
              >
                Send
              </button>
            </form>
          </div>

          {/* Left Column - Company Info */}
          <div className="space-y-2">
            <h2 className="text-scribe-gold text-2xl font-semibold">
              Built by a writer with 🧡 for the worlds we keep rewriting at 2AM.
            </h2>

            <div className="space-y-4 text-scribe-white/80 leading-relaxed">
              <p>
                Scribeverse is your all-in-one writing HQ: a web app designed
                for fiction writers, fanfic authors, and challenge lovers who
                need a space to create, organize, and finish stories without
                losing their minds (or 47 docs named
                "finalfinalREALFINALdraft.docx").
              </p>

              <p>
                The idea was born after countless days of looking for a tool
                that could replace NaNoWriMo, but could also track progress,
                organize projects, obtain feedback, set deadlines, and provide a
                more flexible and complete writing ecosystem than any other tool
                available. So here it is! Meet{" "}
                <span className="text-scribe-gold">Scribeverse</span>.
              </p>
            </div>

            <div className="pt-8">
              <p className="text-scribe-white/60 text-sm">
                © 2025 <span className="text-scribe-gold">Scribeverse</span>.
                All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Toaster position="top-right" />
    </>
  );
}
