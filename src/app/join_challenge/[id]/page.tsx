"use client";

import Header from "@components/header_auth";
import { BookOpen } from "lucide-react";
import Countdown from "@components/countdown";

export default function ChallengePage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Container */}
      <div className="container mx-auto px-8 py-20">
        {/* Challenge Title - Aligned with countdown */}
        <div className="max-w-6xl mx-auto mb-16">
          <h1
            className="text-5xl md:text-6xl font-bold text-[#720920] tracking-wider text-center md:text-left md:ml-85 leading-tight"
            style={{ fontFamily: "var(--font-lexend)" }}
          >
            CHALLENGE TITLE
          </h1>
        </div>

        {/* Book Icon and Countdown Section */}
        <div className="flex flex-col md:flex-row items-start gap-16 max-w-6xl mx-auto mb-20">
          {/* Book Icon - Left side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-start pt-4">
            <BookOpen size={160} className="text-[#720920]" strokeWidth={1.5} />
          </div>

          {/* Countdown Timer - Right side beside icon */}
          <div className="w-full md:w-2/3 flex justify-center md:justify-start items-center transform scale-125">
            <Countdown
              targetDate={new Date("2025-11-26T23:59:59")}
              title="TIME REMAINING"
            />
          </div>
        </div>

        {/* Ribbon Tags Section with Description. FIX THE OVERFLOW TO THE LEFT WHEN IN MOBILE VERSION */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
          {/* Ribbons - Left side */}
          <div className="-mx-8 space-y-6 flex flex-col flex-shrink-0">
            {/* Type Ribbon */}
            <div className="bg-black text-white px-10 py-5 rounded-r-full min-w-[450px] w-fit shadow-lg">
              <span
                className="text-lg font-medium"
                style={{ fontFamily: "var(--font-lexend)" }}
              >
                TYPE: Fanfiction
              </span>
            </div>

            {/* Due Date Ribbon */}
            <div className="bg-black text-white px-10 py-5 rounded-r-full min-w-[450px] w-fit shadow-lg">
              <span
                className="text-lg font-medium"
                style={{ fontFamily: "var(--font-lexend)" }}
              >
                DUE DATE: Nov 26, 2025
              </span>
            </div>

            {/* Status Ribbon */}
            <div className="bg-black text-white px-10 py-5 rounded-r-full min-w-[450px] w-fit shadow-lg">
              <span
                className="text-lg font-medium"
                style={{ fontFamily: "var(--font-lexend)" }}
              >
                STATUS: Open
              </span>
            </div>
          </div>

          {/* Challenge Description - Right side beside ribbons */}
          <div className="flex-grow lg:pl-8">
            <p
              className="text-xl leading-relaxed text-foreground text-center md:text-left max-w-4xl"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Run around the house at 4 in the morning sleep in the bathroom
              sink immediately regret falling into bathtub and cats go for world
              domination. Eat plants, meow, and throw up because i ate plants
              mmmmmmmmeeeeeeeoooooooowwwwww or peer out window, chatter at
              birds, lure them to mouth. Find a way to fit in tiny box catching
              very fast laser pointer but cough.
            </p>
          </div>
        </div>

        {/* Join Challenge Button */}
        <div className="mt-20 flex justify-center px-4">
          <button
            className="bg-primary text-white text-lg md:text-2xl font-bold px-8 md:px-16 py-6 md:py-8 rounded-full shadow-md hover:bg-accent transition w-full max-w-xs md:max-w-none md:min-w-[200px]"
            style={{ fontFamily: "var(--font-lexend)" }}
          >
            JOIN CHALLENGE
          </button>
        </div>
      </div>
    </div>
  );
}
