"use client";

import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface BetaSignupPopoverProps {
  children: React.ReactNode;
}

export default function BetaSignupPopover({
  children,
}: BetaSignupPopoverProps) {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/beta_signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        if (data.message.includes("already registered")) {
          alert(
            "✉️ You're already on our beta waitlist! We'll be in touch soon."
          );
        } else {
          alert("🎉 You're on the beta waitlist! We'll be in touch soon.");
        }
        setFormData({ email: "" });
        setIsOpen(false);
      } else {
        throw new Error(data.error || "Subscription failed");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Oops! Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent className="w-80 p-4" align="center">
        <div className="space-y-4">
          <div className="text-center">
            <h3
              className="text-lg font-bold text-primary mb-1"
              style={{ fontFamily: "var(--font-lexend)" }}
            >
              Join the Beta Waitlist! 🚀
            </h3>
            <p className="text-sm text-muted-foreground">
              Be first to try Scribeverse
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="h-9"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90 text-white h-9"
            >
              {isSubmitting ? "Joining..." : "Join Beta Waitlist"}
            </Button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
}
