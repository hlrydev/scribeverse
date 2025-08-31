// components/AuthenticatedHeader.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Menu, Settings, LogOut, User } from "lucide-react";

export default function AuthenticatedHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Mock user data - replace with actual auth context
  const user = {
    username: "username",
    email: "user@example.com",
  };

  const handleLogout = () => {
    console.log("Logging out...");
    window.location.href = "/auth";
  };

  const handleMenuClick = () => {
    setDrawerOpen(true);
  };

  return (
    <header className="w-full bg-[#1a1a1a] text-white px-4 sm:px-6 py-2 sm:py-4 flex items-center justify-between">
      {/* Left: Menu Icon */}
      <div className="flex items-center">
        <Drawer open={drawerOpen} onOpenChange={setDrawerOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/10 p-2"
              onClick={handleMenuClick}
            >
              <Menu className="w-6 h-6" />
            </Button>
          </DrawerTrigger>
          <DrawerContent
            className="bg-white w-full max-w-none fixed inset-0"
            style={{ width: "100vw", maxWidth: "100vw" }}
          >
            <div className="flex flex-col overflow-y-auto h-full">
              {/* Projects Banner */}
              <div className="bg-[#2a2a2a] text-center py-7 mb-4 w-full relative">
                <h2
                  className="text-white text-lg font-semibold tracking-wider"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  PROJECTS
                </h2>
                {/* Add Project Button */}
                <button
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-primary hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group"
                  onClick={() => {
                    // Add your project creation logic here
                    console.log("Create new project");
                  }}
                  title="Create New Project"
                >
                  <svg
                    className="w-4 h-4 text-secondary group-hover:text-white/90"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div>

              <div className="py-5 text-center">
                <h3
                  className="text-foreground text-base font-medium mb-3"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  ONGOING PROJECTS
                </h3>
              </div>

              {/* make scroll area full width of banner bc the w-full is not working*/}
              <div className="flex">
                <ScrollArea type="always" className="w-1 flex-1">
                  <div className="flex gap-2 pb-4">
                    {/* link all folders to /projects/[id] */}

                    <div className="overflow-x-auto w-full ">
                      <div
                        className="flex gap-10 px-10"
                        style={{ width: "max-content" }}
                      >
                        {/* Mock folder data - replace with actual data */}
                        {[
                          {
                            id: 1,
                            title: "Project Alpha",
                            color: "bg-primary",
                          },
                          { id: 2, title: "Project Beta", color: "bg-primary" },
                          {
                            id: 3,
                            title: "Project Gamma",
                            color: "bg-primary",
                          },
                          {
                            id: 4,
                            title: "Project Delta",
                            color: "bg-secondary",
                          },
                          {
                            id: 5,
                            title: "Project Epsilon",
                            color: "bg-primary",
                          },
                          {
                            id: 6,
                            title: "Project Zeta",
                            color: "bg-secondary",
                          },
                          {
                            id: 7,
                            title: "Project Eta",
                            color: "bg-secondary",
                          },
                          {
                            id: 8,
                            title: "Project Theta",
                            color: "bg-primary",
                          },
                          {
                            id: 9,
                            title: "Project Iota",
                            color: "bg-secondary",
                          },
                          {
                            id: 10,
                            title: "Project Kappa",
                            color: "bg-primary",
                          },
                        ].map((folder) => (
                          <Link
                            key={folder.id}
                            href={`/projects/${folder.id}`}
                            className="flex-shrink-0"
                          >
                            <div
                              key={folder.id}
                              className="flex flex-col items-center flex-shrink-0"
                              style={{ width: "180px" }} // Fixed width for consistent layout
                            >
                              <div
                                className={`w-full h-32 ${folder.color} rounded-lg rounded-tr-none relative cursor-pointer hover:opacity-80 transition-opacity`}
                              >
                                {/* Folder tab */}
                                <div
                                  className={`absolute -top-2 right-2 w-4 h-3 ${folder.color} rounded-t-md`}
                                ></div>
                              </div>
                              <p
                                className="text-foreground text-xs mt-2 text-center truncate w-full px-1"
                                style={{ fontFamily: "var(--font-lexend)" }}
                                title={folder.title} // Show full title on hover
                              >
                                {folder.title}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" className="w-full" />
                </ScrollArea>
              </div>

              <div className="py-5 text-center">
                <h3
                  className="text-foreground text-base font-medium mb-3"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  COMPLETED PROJECTS
                </h3>
              </div>

              {/* make scroll area full width of banner bc the w-full is not working*/}
              <div className="flex">
                <ScrollArea type="always" className="w-1 flex-1">
                  <div className="flex gap-2 pb-4">
                    {/* Updated container for horizontal scrolling with EXACTLY 5 visible folders */}
                    <div className="overflow-x-auto w-full ">
                      <div
                        className="flex gap-10 px-10"
                        style={{ width: "max-content" }}
                      >
                        {/* Mock folder data - replace with actual data */}
                        {[
                          {
                            id: 1,
                            title: "Project Alpha",
                            color: "bg-primary",
                          },
                          { id: 2, title: "Project Beta", color: "bg-primary" },
                          {
                            id: 3,
                            title: "Project Gamma",
                            color: "bg-primary",
                          },
                          {
                            id: 4,
                            title: "Project Delta",
                            color: "bg-secondary",
                          },
                        ].map((folder) => (
                          <div
                            key={folder.id}
                            className="flex flex-col items-center flex-shrink-0"
                            style={{ width: "180px" }} // Fixed width for consistent layout
                          >
                            <div
                              className={`w-full h-32 ${folder.color} rounded-lg rounded-tr-none relative cursor-pointer hover:opacity-80 transition-opacity`}
                            >
                              {/* Folder tab */}
                              <div
                                className={`absolute -top-2 right-2 w-4 h-3 ${folder.color} rounded-t-md`}
                              ></div>
                            </div>
                            <p
                              className="text-foreground text-xs mt-2 text-center truncate w-full px-1"
                              style={{ fontFamily: "var(--font-lexend)" }}
                              title={folder.title} // Show full title on hover
                            >
                              {folder.title}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" className="w-full" />
                </ScrollArea>
              </div>

              <div className="bg-[#2a2a2a] text-center py-7 mb-4 w-full relative">
                <h2
                  className="text-white text-lg font-semibold tracking-wider"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  CHALLENGES
                </h2>
              </div>

              <div className="py-5 text-center">
                <h3
                  className="text-foreground text-base font-medium mb-3"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  JOIN A CHALLENGE!
                </h3>
              </div>

              {/* make scroll area full width of banner bc the w-full is not working*/}
              <div className="flex">
                <ScrollArea type="always" className="w-1 flex-1">
                  <div className="flex gap-2 pb-4">
                    {/* Updated container for horizontal scrolling with EXACTLY 5 visible folders */}
                    <div className="overflow-x-auto w-full ">
                      <div
                        className="flex gap-10 px-10"
                        style={{ width: "max-content" }}
                      >
                        {/* Mock folder data - replace with actual data */}
                        {[
                          {
                            id: 1,
                            title: "Project Alpha",
                            color: "bg-primary",
                          },
                          { id: 2, title: "Project Beta", color: "bg-primary" },
                          {
                            id: 3,
                            title: "Project Gamma",
                            color: "bg-primary",
                          },
                          {
                            id: 4,
                            title: "Project Delta",
                            color: "bg-secondary",
                          },
                          {
                            id: 5,
                            title: "Project Epsilon",
                            color: "bg-primary",
                          },
                          {
                            id: 6,
                            title: "Project Zeta",
                            color: "bg-secondary",
                          },
                          {
                            id: 7,
                            title: "Project Eta",
                            color: "bg-secondary",
                          },
                        ].map((folder) => (
                          <div
                            key={folder.id}
                            className="flex flex-col items-center flex-shrink-0 group"
                            style={{ width: "180px" }}
                          >
                            {/* Pill-shaped folder container */}
                            <div
                              className={`w-full h-20 ${folder.color} rounded-full cursor-pointer transition-all duration-200 group-hover:shadow-lg group-hover:scale-90 shadow-md flex items-center justify-center`}
                            >
                              {/* Title inside the pill */}
                              <p
                                className="text-white text-sm font-medium text-center px-4"
                                style={{ fontFamily: "var(--font-lexend)" }}
                              >
                                {folder.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" className="w-full" />
                </ScrollArea>
              </div>

              <div className="py-5 text-center">
                <h3
                  className="text-foreground text-base font-medium mb-3"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  MY CHALLENGES
                </h3>
              </div>

              {/* make scroll area full width of banner bc the w-full is not working*/}
              <div className="flex">
                <ScrollArea type="always" className="w-1 flex-1">
                  <div className="flex gap-2 pb-4">
                    {/* Updated container for horizontal scrolling with EXACTLY 5 visible folders */}
                    <div className="overflow-x-auto w-full ">
                      <div
                        className="flex gap-10 px-10"
                        style={{ width: "max-content" }}
                      >
                        {/* Mock folder data - replace with actual data */}
                        {[
                          {
                            id: 1,
                            title: "Project Alpha",
                            color: "bg-primary",
                          },
                          { id: 2, title: "Project Beta", color: "bg-primary" },
                        ].map((folder) => (
                          <div
                            key={folder.id}
                            className="flex flex-col items-center flex-shrink-0 group"
                            style={{ width: "180px" }}
                          >
                            {/* Pill-shaped folder container */}
                            <div
                              className={`w-full h-20 ${folder.color} rounded-full cursor-pointer transition-all duration-200 group-hover:shadow-lg group-hover:scale-90 shadow-md flex items-center justify-center`}
                            >
                              {/* Title inside the pill */}
                              <p
                                className="text-white text-sm font-medium text-center px-4"
                                style={{ fontFamily: "var(--font-lexend)" }}
                              >
                                {folder.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" className="w-full" />
                </ScrollArea>
              </div>

              <div className="py-5 text-center">
                <h3
                  className="text-foreground text-base font-medium mb-3"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  COMPLETED CHALLENGES
                </h3>
              </div>

              {/* make scroll area full width of banner bc the w-full is not working*/}
              <div className="flex">
                <ScrollArea type="always" className="w-1 flex-1">
                  <div className="flex gap-2 pb-4">
                    {/* Updated container for horizontal scrolling with EXACTLY 5 visible folders */}
                    <div className="overflow-x-auto w-full ">
                      <div
                        className="flex gap-10 px-10"
                        style={{ width: "max-content" }}
                      >
                        {/* Mock folder data - replace with actual data */}
                        {[
                          {
                            id: 1,
                            title: "Project Alpha",
                            color: "bg-primary",
                          },
                          { id: 2, title: "Project Beta", color: "bg-primary" },
                          {
                            id: 3,
                            title: "Project Gamma",
                            color: "bg-primary",
                          },
                          {
                            id: 4,
                            title: "Project Delta",
                            color: "bg-secondary",
                          },
                        ].map((folder) => (
                          <div
                            key={folder.id}
                            className="flex flex-col items-center flex-shrink-0 group"
                            style={{ width: "180px" }}
                          >
                            {/* Pill-shaped folder container */}
                            <div
                              className={`w-full h-20 ${folder.color} rounded-full cursor-pointer transition-all duration-200 group-hover:shadow-lg group-hover:scale-90 shadow-md flex items-center justify-center`}
                            >
                              {/* Title inside the pill */}
                              <p
                                className="text-white text-sm font-medium text-center px-4"
                                style={{ fontFamily: "var(--font-lexend)" }}
                              >
                                {folder.title}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <ScrollBar orientation="horizontal" className="w-full" />
                </ScrollArea>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      {/* Center: Logo */}
      <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="/dashboard"
          className="flex items-center gap-1 sm:gap-2 cursor-pointer"
        >
          <img
            src="/img/logo_owl.png"
            alt="Scribeverse Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 lg:w-15 lg:h-15 flex-shrink-0"
          />
          <img
            src="/img/logo_text.png"
            alt="Scribeverse Text"
            className="w-40 h-8 sm:w-50 sm:h-10 lg:w-70 lg:h-15 flex-shrink-0"
          />
        </Link>
      </div>

      {/* Right: Username Dropdown */}
      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="text-yellow-500 font-semibold hover:text-yellow-400 px-2 py-1 text-sm"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              {user.username}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-56 bg-[#1a1a1a] border border-gray-700"
            align="end"
          >
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-black font-semibold">
                {user.username.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col space-y-1 leading-none">
                <p
                  className="font-medium text-white"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  {user.username}
                </p>
                <p
                  className="text-xs text-gray-400"
                  style={{ fontFamily: "var(--font-lexend)" }}
                >
                  {user.email}
                </p>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer text-white">
              <User className="mr-2 h-4 w-4" />
              <span style={{ fontFamily: "var(--font-lexend)" }}>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer text-white">
              <Settings className="mr-2 h-4 w-4" />
              <span style={{ fontFamily: "var(--font-lexend)" }}>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem
              className="hover:bg-red-900/20 text-red-400 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span style={{ fontFamily: "var(--font-lexend)" }}>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
