"use client";

//RETURN TO page.tsx BEFORE COMMITING CHANGES

import { Button } from "@/components/ui/button";
import FAQSection from "@/components/faq_section";
import Header from "@components/header_signup_beta";
import BetaSignupPopover from "@/components/popover";

export default function Home() {
  // Function to scroll to the "WE GET IT" section
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features-section");
    if (featuresSection) {
      featuresSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Header />
      {/* Hero Section*/}

      <div className="min-h-[calc(100vh-80px)] md:min-h-screen flex items-center justify-center px-4 overflow-x-hidden">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading: FIX DISPLAY FOR MOBILE FOR TEXT TO APPEAR SMALLER */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "var(--font-major-mono-display)" }}
          >
            <span className="text-secondary">WRite. obsess. </span>
            <span className="text-primary italic">RepeAT.</span>
          </h1>

          {/* Subheading */}
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold text-foreground mb-8 sm:mb-12"
            style={{ fontFamily: "var(--font-major-mono-display)" }}
          >
            your stories deserve a Universe
          </h2>

          {/* Buttons Container - Made Responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
            <BetaSignupPopover>
              <Button
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/10 text-accent font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg"
              >
                join beta waitlist
              </Button>
            </BetaSignupPopover>

            <Button
              size="lg"
              onClick={scrollToFeatures}
              className="w-full sm:w-auto bg-primary hover:bg-primary/10 text-accent font-semibold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-lg cursor-pointer"
            >
              take a look
            </Button>
          </div>

          {/* Handwritten Note with Arrow */}
          <div className="hide-on-mobile relative inline-block mt-8">
            {/* Arrow pointing to first button */}
            <div className="absolute -top-22 -left-48 transform rotate-310">
              <svg
                width="80"
                height="40"
                viewBox="0 0 80 40"
                fill="none"
                className="text-secondary"
              >
                <path
                  d="M5 50 Q30 15 65 25"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M58 20 L65 25 L62 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* Handwritten text */}
            <p
              className="text-sm font-handwritten text-secondary relative -top-8 -left-43 transform rotate-350 font-serif italic"
              style={{ fontFamily: "var(--font-rock-salt)" }}
            >
              at least it'll
              <br />
              be fun trying to
              <br />
              finish that WIP!
            </p>
          </div>
        </div>
      </div>

      {/* WE GET IT - Mobile Responsive Version */}
      <section id="features-section" className="w-full mb-4 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main heading with underline*/}
          <div className="relative mb-6 md:mb-8">
            <h1
              className="text-3xl md:text-5xl font-bold text-primary mb-2"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              WE GET IT.
            </h1>
            {/* Decorative underline */}
            <div className="hide-on-mobile absolute -bottom-2 left-20 w-80">
              <svg
                viewBox="0 0 300 20"
                className="w-full h-4 text-secondary"
                preserveAspectRatio="none"
              >
                <path
                  d="M10 12 Q150 8 200 12"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <path
                  d="M15 16 Q150 12 180 16"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>

          {/* Description text*/}
          <p
            className="text-base md:text-lg lg:text-2xl text-accent font-light leading-relaxed mb-6 md:mb-8"
            style={{
              fontFamily: "var(--font-lexend)",
            }}
          >
            You've got 11 WIPs, 3 AUs, 5 plot holes, and a very compromising
            browser history.{" "}
            <span className="text-primary font-bold underline decoration-2 underline-offset-4">
              Scribeverse
            </span>{" "}
            is your command center to finally{" "}
            <span className="text-accent font-medium underline underline-offset-4">
              complete your writing projects.
            </span>
          </p>
        </div>
      </section>

      {/* Black banner coming from the left */}
      <div className="w-full mb-4">
        <div className="bg-foreground text-white px-4 md:pl-30 md:pr-6 py-4 md:rounded-r-full max-w-full md:max-w-7xl">
          <p
            className="text-base md:text-lg lg:text-xl font-light"
            style={{
              fontFamily: "var(--font-lexend)",
            }}
          >
            <span className="font-bold">📊 Main Dashboard</span>
            <br />
            Track daily word goals, streaks, active projects, challenges, and
            more without digging through endless folders and tabs.
          </p>
        </div>
      </div>

      {/* Dashboard feature image */}
      <div className="w-full h-auto md:h-screen flex items-center justify-center mb-4 md:-mt-13">
        <img
          src="/img/features/dashboard_feature_img.png"
          alt="Main Dashboard view"
          className="w-full max-w-none h-auto md:h-full object-contain"
        />
      </div>

      {/* Black banner coming from the right */}
      <div className="w-full mb-4 md:flex md:justify-end">
        <div className="bg-foreground text-white px-4 md:pl-15 md:pr-20 py-4 md:rounded-l-full max-w-full md:max-w-7xl">
          <p
            className="text-base md:text-lg lg:text-xl font-light"
            style={{
              fontFamily: "var(--font-lexend)",
            }}
          >
            <span className="font-bold">🗂️ Organize Project & Books</span>
            <br />
            Chapters within Books within Projects, organized by 📕 Fanfiction,
            📒 OG Story. Add color-coded notes and set goals right from your
            project or book dashboard.
          </p>
        </div>

        {/* Handwritten Note with Arrow*/}
        <div className="hide-on-mobile relative inline-block mt-8">
          {/* Arrow pointing to first button */}
          <div className="absolute top-13 -left-48 transform rotate-290">
            <svg
              width="80"
              height="40"
              viewBox="0 0 80 40"
              fill="none"
              className="text-secondary"
            >
              <path
                d="M5 25 Q30 50 65 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M58 20 L65 25 L63 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Handwritten text*/}
          <p
            className="text-sm font-handwritten text-secondary absolute top-25 -left-55 transform font-serif italic"
            style={{ fontFamily: "var(--font-rock-salt)" }}
          >
            yes, with
            <br />
            due dates.
          </p>
        </div>
      </div>

      {/* Projects & Books feature image */}
      <div className="w-full h-auto md:h-screen flex items-center justify-center mb-4 md:-mt-13">
        <img
          src="/img/features/projects_books_dashboard_feature_img.png"
          alt="Books and projects dashboards"
          className="w-full max-w-none h-auto md:h-full object-contain"
        />
      </div>

      {/* Black banner coming from the left 2*/}
      <div className="w-full mb-4">
        <div className="bg-foreground text-white px-4 md:pl-30 md:pr-6 py-4 md:rounded-r-full max-w-full md:max-w-4xl">
          <p
            className="text-base md:text-lg lg:text-xl font-light"
            style={{
              fontFamily: "var(--font-lexend)",
            }}
          >
            <span className="font-bold">🏆 NaNoWriMo-Style Challenges</span>
            <br />
            Missing NaNoWriMo? Me too. Dive into community writing challenges
            and Daily/Weekly Prompts.
          </p>
        </div>
      </div>

      {/* Challenges feature image */}
      <div className="w-full h-auto md:h-screen flex items-center justify-center mb-4 md:-mt-30">
        <img
          src="/img/features/challenges_features.png"
          alt="Challenges"
          className="w-full max-w-none h-auto md:h-full object-contain"
        />
      </div>

      {/* Black banner coming from the right 2*/}
      <div className="w-full mb-4 md:flex md:justify-end">
        <div className="bg-foreground text-white px-4 md:pl-15 md:pr-20 py-4 md:rounded-l-full max-w-full md:max-w-7xl">
          <p
            className="text-base md:text-lg lg:text-xl font-light"
            style={{
              fontFamily: "var(--font-lexend)",
            }}
          >
            <span className="font-bold">🖋 Rich, Distraction-Free Writing</span>
            <br />
            Create, write, and edit stories and fanfiction with{" "}
            <span className="text-primary font-bold">Scribeverse's</span> clean,
            modern text editor.
          </p>
        </div>
      </div>

      {/* RTF feature image */}
      <div className="w-full h-auto md:h-screen flex items-center justify-center mb-4 md:-mt-23 md:-mb-20">
        <img
          src="/img/features/text_editor_feature.png"
          alt="Text Editor"
          className="w-full max-w-none h-auto md:h-full object-contain"
        />
      </div>

      {/* Black banner coming from the left 3*/}
      <div className="w-full mb-4">
        <div className="bg-foreground text-white px-4 md:pl-30 md:pr-6 py-4 md:rounded-r-full max-w-full md:max-w-4xl">
          <p
            className="text-base md:text-lg lg:text-xl font-light"
            style={{
              fontFamily: "var(--font-lexend)",
            }}
          >
            <span className="font-bold">
              🖱️ Export your work with one click.
            </span>
            <br />
            Export chapters and books in PDF, DOCX, EPUB, and AO3 formats.
          </p>
        </div>

        {/* Handwritten Note with Arrow */}
        <div className="hide-on-mobile relative inline-block mt-8">
          {/* Arrow pointing to first button */}
          <div className="absolute -top-10 left-148 transform rotate-270">
            <svg
              width="80"
              height="40"
              viewBox="0 0 80 40"
              fill="none"
              className="text-secondary"
            >
              <path
                d="M5 50 Q30 15 65 25"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
              <path
                d="M58 20 L65 25 L62 30"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>

          {/* Handwritten text */}
          <p
            className="text-sm font-handwritten text-secondary relative top-3 left-163 transform rotate-360 font-serif italic"
            style={{ fontFamily: "var(--font-rock-salt)" }}
          >
            we see you,
            <br />
            AO3 writers.
          </p>
        </div>
      </div>

      {/* Export feature image */}
      <div className="w-full h-auto md:h-screen flex items-center justify-center mb-4 md:-mt-50 md:-mb-25">
        <img
          src="/img/features/export_button.png"
          alt="Export Options"
          className="w-full max-w-none h-auto md:h-full object-contain"
        />
      </div>

      {/* Full width banner across the stage */}
      <section className="w-full bg-foreground text-white py-6 md:py-10 px-4 md:px-8">
        <p
          className="text-base md:text-lg lg:text-3xl font-medium text-center w-full"
          style={{ fontFamily: "var(--font-lexend)" }}
        >
          <span className="text-primary font-bold">SCRIBEVERSE</span> IS
          CONSTANTLY EVOLVING. FUTURE VERSIONS WILL INCLUDE:
        </p>
      </section>

      {/* Features list section */}
      <section className="w-full py-12 px-8">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Fandom Tagging */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              • 🏷️ FANDOM TAGGING + PROMPT REQUESTS
            </h3>
            <p
              className="text-lg text-accent font-light ml-6"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Submit prompts, tag your ships/fandoms, and get notified when
              someone writes your dream fic.
            </p>
          </div>

          {/* Author Social Profiles */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              • 🌐 AUTHOR SOCIAL PROFILES
            </h3>
            <p
              className="text-lg text-accent font-light ml-6"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Let the world stalk your WIPs and stats. You don't have to use
              this function if you'd like to keep your work private, this is
              absolutely optional! Scribeverse's main focus is not a social
              media, but an all-in-one tool to support writers.
            </p>
          </div>

          {/* Early Access */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              • 📸 EARLY ACCESS + SUBSCRIPTIONS
            </h3>
            <p
              className="text-lg text-accent font-light ml-6"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Let readers subscribe to your author profile for exclusive access,
              updates, and sneak peeks.
            </p>
          </div>

          {/* Pinterest + Spotify */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              • 🎧 PINTEREST + SPOTIFY INTEGRATION
            </h3>
            <p
              className="text-lg text-accent font-light ml-6"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Listen to your chapter/book/project playlists and look at your
              moodboard for inspiration while writing.
            </p>
          </div>

          {/* Beta Reader */}
          <div>
            <h3
              className="text-xl md:text-2xl font-bold text-foreground mb-2"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              • 🫂 BETA READERS + WRITER GROUPS
            </h3>
            <p
              className="text-lg text-accent font-light ml-6"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Connect with beta readers for feedback and support during your
              writing process. Join or create writer groups for collaboration
              and motivation.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <FAQSection />
    </>
  );
}
