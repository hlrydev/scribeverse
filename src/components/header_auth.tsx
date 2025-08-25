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
import { ScrollArea } from "@/components/ui/scroll-area";
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
    // Add your logout logic here
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
          <DrawerContent className="bg-white border-gray-700">
            <DrawerHeader>
              <DrawerTitle className="text-white">Menu</DrawerTitle>
            </DrawerHeader>
            <ScrollArea className="h-[400px] px-4">
              {/* Content will be added here */}
              <div className="py-4">
                <p className="text-gray-400">Menu content will go here...</p>
              </div>
            </ScrollArea>
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
                <p className="font-medium text-white">{user.username}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
            </div>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer text-white">
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="hover:bg-gray-800 cursor-pointer text-white">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="bg-gray-700" />
            <DropdownMenuItem
              className="hover:bg-red-900/20 text-red-400 cursor-pointer"
              onClick={handleLogout}
            >
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
