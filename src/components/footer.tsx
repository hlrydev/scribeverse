"use client";

import { useState } from "react";
import { toast } from "sonner";

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

  const handleInstagramClick = () => {
    toast.info("Coming soon!", {
      description: "Our Instagram is still in the works. Stay tuned!",
    });
  };

  const handleTikTokClick = () => {
    // Replace with your actual TikTok URL when ready
    window.open("https://tiktok.com/@scribeuniverse", "_blank");
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

            <div className="pt-8 flex items-center justify-between">
              <p className="text-scribe-white/60 text-sm">
                © 2025 <span className="text-scribe-gold">Scribeverse</span>.
                All rights reserved.
              </p>

              {/* Social Icons */}
              <div className="flex items-center space-x-3">
                {/* TikTok Icon */}
                <button
                  onClick={handleTikTokClick}
                  className="text-scribe-white/60 hover:text-scribe-gold transition-colors duration-200"
                  aria-label="Follow us on TikTok"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </button>

                {/* Instagram Icon */}
                <button
                  onClick={handleInstagramClick}
                  className="text-scribe-white/60 hover:text-scribe-gold transition-colors duration-200"
                  aria-label="Follow us on Instagram"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
