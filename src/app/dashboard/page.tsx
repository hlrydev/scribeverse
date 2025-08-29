"use client";

import { Progress } from "@/components/ui/progress";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import Header from "@components/header_auth";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import Countdown from "@/components/countdown"; // Import your countdown component

export default function Dashboard() {
  const streak: number = 7;
  const wordsWritten = 176;
  const dailyGoal = 500;
  const username = "USERNAME";

  const wordsLeft = dailyGoal - wordsWritten;
  const progressValue = (wordsWritten / dailyGoal) * 100;

  // Challenge dates
  const kinktober2025 = new Date("2025-10-01");
  const thirtyDayChallenge = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
  const nanowrimo2025 = new Date("2025-11-01");

  // Project data
  const projects = [
    { name: "Late Night Devil", progress: 75 },
    { name: "Nutty & Nice", progress: 20 },
    { name: "Mascara", progress: 85 },
    { name: "such a tease", progress: 65 },
    { name: "Midnight Confessions", progress: 45 },
    { name: "Golden Hour", progress: 90 },
    { name: "Velvet Dreams", progress: 35 },
    { name: "Crimson Tales", progress: 60 },
  ];

  // Word count data - Extended with years
  const wordCountData = [
    { month: "Aug '23", count: 23000 },
    { month: "Sep '23", count: 41000 },
    { month: "Oct '23", count: 15000 },
    { month: "Nov '23", count: 58000 },
    { month: "Dec '23", count: 31000 },
    { month: "Jan '24", count: 34000 },
    { month: "Feb '24", count: 18000 },
    { month: "Mar '24", count: 49000 },
    { month: "Apr '24", count: 67000 },
    { month: "May '24", count: 7000 },
    { month: "Jun '24", count: 44000 },
    { month: "Jul '24", count: 72000 },
    { month: "Aug '24", count: 39000 },
    { month: "Sep '24", count: 52000 },
    { month: "Oct '24", count: 28000 },
  ];

  const createChartData = (progress: number) => [
    { name: "completed", value: progress, fill: "#ffae12" },
    { name: "remaining", value: 100 - progress, fill: "#1b1b1b" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Main Heading */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl text-secondary tracking-wider leading-tight mb-15"
            style={{ fontFamily: "Major Mono Display, monospace" }}
          >
            your wips miss you, {username}!
          </h1>

          {/* Progress Bar */}
          <div className="space-y-4 max-w-md mx-auto mt-12">
            <Progress value={progressValue} className="h-8 bg-foreground" />

            {/* Streak Info */}
            <p
              className="text-lg text-foreground mb-1 font-bold"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              STREAK: {streak} day{streak !== 1 ? "s" : ""}.
            </p>

            {/* Words Count */}
            <p
              className="text-base text-foreground"
              style={{ fontFamily: "Lexend, sans-serif" }}
            >
              {wordsLeft} word{wordsLeft !== 1 ? "s" : ""} left for your{" "}
              {dailyGoal}-word daily goal.
            </p>
          </div>
        </div>

        {/* Projects Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <h2
            className="text-xl font-semibold text-card-foreground mb-6 text-center"
            style={{ fontFamily: "Lexend, sans-serif" }}
          >
            PROJECTS
          </h2>

          <ScrollArea className="w-full">
            <div
              className="flex gap-12 pb-4 px-4"
              style={{ width: `${Math.max(projects.length * 180, 100)}px` }}
            >
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center space-y-4 flex-shrink-0"
                >
                  {/* Radial Chart */}
                  <div className="relative w-32 h-32 drop-shadow-lg">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={createChartData(project.progress)}
                          cx="50%"
                          cy="50%"
                          innerRadius={45}
                          outerRadius={62}
                          startAngle={90}
                          endAngle={-270}
                          dataKey="value"
                          strokeWidth={0}
                        >
                          {createChartData(project.progress).map((entry, i) => (
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

                    {/* Progress percentage in center */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span
                        className="text-lg font-bold text-primary"
                        style={{ fontFamily: "Lexend, sans-serif" }}
                      >
                        {project.progress}%
                      </span>
                    </div>
                  </div>

                  {/* Project Name */}
                  <p
                    className="text-sm text-foreground text-center max-w-[120px]"
                    style={{ fontFamily: "Lexend, sans-serif" }}
                  >
                    {project.name}
                  </p>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" className="w-full" />
          </ScrollArea>
        </div>

        {/* Bottom Section */}
        <div className="max-w-6xl mx-auto mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Word Count Chart - Left Side */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2
                className="text-xl font-semibold text-card-foreground mb-6 text-center"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                WORD COUNT
              </h2>

              <ScrollArea className="h-64 w-full">
                <div
                  className="h-64"
                  style={{ minWidth: `${wordCountData.length * 90}px` }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={wordCountData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="var(--color-border)"
                      />
                      <XAxis
                        dataKey="month"
                        stroke="var(--color-muted-foreground)"
                        style={{ fontFamily: "Lexend, sans-serif" }}
                      />
                      <YAxis
                        stroke="var(--color-muted-foreground)"
                        tickFormatter={(value) => `${value / 1000}k`}
                        style={{ fontFamily: "Lexend, sans-serif" }}
                        domain={[0, 100000]}
                        tickCount={6}
                      />
                      <Tooltip
                        formatter={(value) => [
                          `${(Number(value) / 1000).toFixed(0)}k`,
                          "Words",
                        ]}
                        labelStyle={{ fontFamily: "Lexend, sans-serif" }}
                        contentStyle={{
                          backgroundColor: "var(--color-card)",
                          border: "1px solid var(--color-border)",
                          borderRadius: "8px",
                          fontFamily: "Lexend, sans-serif",
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="count"
                        stroke="#ffae12"
                        strokeWidth={3}
                        dot={{ fill: "#ffae12", strokeWidth: 2, r: 6 }}
                        activeDot={{ r: 8, stroke: "#ffae12", strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <ScrollBar orientation="horizontal" />
              </ScrollArea>
            </div>

            {/* Challenges & Countdowns - Right Side */}
            <div className="bg-card border border-border rounded-lg p-6 shadow-lg">
              <h2
                className="text-xl font-semibold text-card-foreground mb-6 text-center"
                style={{ fontFamily: "Lexend, sans-serif" }}
              >
                CHALLENGES
              </h2>

              <ScrollArea className="h-80">
                <div className="space-y-8 pr-4 font-light">
                  <Countdown
                    targetDate={kinktober2025}
                    title="Kinktober 2025"
                  />

                  <div className="border-t border-border pt-6">
                    <Countdown
                      targetDate={thirtyDayChallenge}
                      title="30K in 30 Days"
                    />
                  </div>

                  <div className="border-t border-border pt-6">
                    <Countdown
                      targetDate={nanowrimo2025}
                      title="NaNoWriMo 2025"
                    />
                  </div>
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
