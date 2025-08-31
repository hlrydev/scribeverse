"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Header from "@components/header_auth";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ColorCodedNotes from "@components/notes";

export default function ProjectPage({ params }: { params: { id: string } }) {
  const router = useRouter();

  const handleDelete = async () => {
    // call your backend to delete the project
    await fetch(`/api/projects/${params.id}`, {
      method: "DELETE",
    });

    // once deleted, send user back to dashboard
    router.push("/dashboard");
  };

  // Chart data for 347856/600000 words
  const wordsWritten = 347856;
  const totalGoal = 600000;
  const progressPercentage = Math.round((wordsWritten / totalGoal) * 100);

  const chartData = [
    { name: "completed", value: progressPercentage, fill: "#ffae12" },
    { name: "remaining", value: 100 - progressPercentage, fill: "#1b1b1b" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left side - Radial Chart (1/4 space on desktop) */}
          <div className="w-full lg:w-1/4 flex flex-col items-center">
            <div className="w-48 h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    startAngle={90}
                    endAngle={-270}
                    dataKey="value"
                    strokeWidth={0}
                  >
                    {chartData.map((entry, i) => (
                      <Cell
                        key={`cell-${i}`}
                        fill={entry.fill}
                        style={{
                          filter:
                            entry.name === "completed"
                              ? "drop-shadow(0 0 8px rgba(255, 174, 18, 0.3))"
                              : "none",
                        }}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <p
              className="text-sm text-foreground mt-4 text-center"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              {wordsWritten.toLocaleString()}/{totalGoal.toLocaleString()} words
            </p>
          </div>

          {/* Right side - Content (3/4 space on desktop) */}
          <div className="w-full lg:w-3/4">
            <div className="flex justify-between items-center mb-4 max-w-4xl">
              <h1
                className="text-3xl font-normal text-secondary"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                {params.id}
              </h1>

              <Button
                variant="outline"
                size="icon"
                className="bg-white bg-opacity-20 hover:primary rounded-full p-2 transition-colors"
                onClick={() => {
                  // Add logic to create new book
                  console.log("Create new book");
                }}
              >
                <span className="text-lg font-bold">+</span>
              </Button>
            </div>

            {/* Books Horizontal Scroll */}
            <ScrollArea className="w-full max-w-4xl">
              <div className="flex gap-4 mb-8 pb-4">
                {[
                  "Forbidden Yearning",
                  "Dangerous Limits",
                  "Dangerous Limits",
                  "Secret Desires",
                  "Hidden Passion",
                  "Midnight Whispers",
                  "Stolen Moments",
                  "Burning Hearts",
                  "Lost in Love",
                  "Tempting Fate",
                  "Wicked Games",
                  "Sweet Surrender",
                  "Dark Romance",
                  "Stolen Kiss",
                  "Forbidden Love",
                ].map((bookTitle, index) => (
                  <div
                    key={index}
                    className="bg-[#6b2c2c] rounded-sm shadow-lg border border-gray-400 cursor-pointer hover:shadow-xl transition-shadow flex-shrink-0 w-32 h-44 p-2"
                    onClick={() => {
                      // Add logic to open/edit book
                      console.log(`Opening ${bookTitle}`);
                    }}
                  >
                    <div className="h-full flex flex-col justify-end">
                      <h3
                        className="text-white text-xs font-normal text-center leading-tight"
                        style={{ fontFamily: "Lexend, sans-serif" }}
                      >
                        {bookTitle}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>

            {/* Description Section */}
            <div className=" max-w-4xl">
              <h2
                className="text-xl font-medium text-secondary mb-4 uppercase tracking-wider"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                Description
              </h2>
              <p
                className="text-foreground leading-relaxed -mt-2"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                Run around the house at 4 in the morning sleep in the bathroom
                sink immediately regret falling into bathtub and cats go for
                world domination. Eat plants, meow, and throw up because I ate
                plants mmmmmmmmeeeeeeooooooowwwww or pet and window, chatter at
                birds, lure them to mouth. Find a way to fit in tiny box
                catching very fast laser pointer but cough. Meow meow you are my
                owner so here is a dead bird slap kitten brother with paw. Chase
                little red dot someday it will be mine!
              </p>
            </div>

            <div className="mt-8 max-w-4xl">
              <ColorCodedNotes />
            </div>

            <div className="mt-14 max-w-4xl flex justify-end">
              <Button variant="destructive" onClick={handleDelete}>
                Delete Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
