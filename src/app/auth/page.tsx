"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import Header from "@components/header";

export default function Auth() {
  const router = useRouter();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [signupData, setSignupData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Logging in...");

    // Simulate API call
    setTimeout(() => {
      toast.success("Welcome back!", {
        id: loadingToast,
        description: "You're now logged in.",
      });
      router.push("/dashboard");
    }, 1500);
  };

  const handleSignupSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const loadingToast = toast.loading("Creating account...");

    // Simulate API call
    setTimeout(() => {
      toast.success("Account created!", {
        id: loadingToast,
        description: "Welcome to Scribeverse!",
      });
      router.push("/dashboard");
    }, 1500);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGoogleAuth = () => {
    toast.info("Google Sign-in", {
      description: "Redirecting to Google...",
    });
    // Redirect to dashboard after a brief delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  const handleTwitterAuth = () => {
    toast.info("X (Twitter) Sign-in", {
      description: "Redirecting to X...",
    });
    // Redirect to dashboard after a brief delay
    setTimeout(() => {
      router.push("/dashboard");
    }, 1500);
  };

  return (
    <>
      <Header />

      <div className="min-h-screen flex items-center justify-center p-4 bg-transparent">
        <div className="w-full max-w-md bg-card/90 backdrop-blur-sm rounded-2xl shadow-2xl border border-border/20 p-8 relative overflow-hidden">
          {/* Background gradient overlay for card */}
          <div className="absolute inset-0 bg-gradient-to-br from-card via-card/95 to-accent/5 rounded-2xl"></div>

          <div className="relative z-10">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted/50 backdrop-blur-sm border border-border/30 rounded-xl">
                <TabsTrigger
                  value="login"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent/20"
                >
                  login
                </TabsTrigger>
                <TabsTrigger
                  value="signup"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground text-accent font-semibold rounded-lg transition-all duration-300 hover:bg-accent/20"
                >
                  sign up
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        placeholder="username/email"
                        value={loginData.email}
                        onChange={handleLoginChange}
                        className="w-full bg-foreground/90 text-background placeholder-primary px-4 py-3 rounded-lg border-2 border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-mono transition-all duration-300 backdrop-blur-sm group-hover:border-primary/50"
                        required
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={loginData.password}
                        onChange={handleLoginChange}
                        className="w-full bg-foreground/90 text-background placeholder-primary px-4 py-3 rounded-lg border-2 border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-mono transition-all duration-300 backdrop-blur-sm group-hover:border-primary/50"
                        required
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <Button
                    onClick={handleLoginSubmit}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-primary/20"
                  >
                    login
                  </Button>

                  {/* Social Login */}
                  <div className="flex items-center space-x-4 justify-center pt-4">
                    <button
                      type="button"
                      onClick={handleGoogleAuth}
                      className="p-3 hover:bg-muted rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-border/30"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#4285f4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34a853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#fbbc05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#ea4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={handleTwitterAuth}
                      className="p-3 hover:bg-muted rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-border/30"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-foreground"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TabsContent>

              {/* Signup Tab */}
              <TabsContent value="signup">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <div className="relative group">
                      <input
                        type="text"
                        name="username"
                        placeholder="username"
                        value={signupData.username}
                        onChange={handleSignupChange}
                        className="w-full bg-foreground/90 text-background placeholder-primary px-4 py-3 rounded-lg border-2 border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-mono transition-all duration-300 backdrop-blur-sm group-hover:border-primary/50"
                        required
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <input
                        type="email"
                        name="email"
                        placeholder="email"
                        value={signupData.email}
                        onChange={handleSignupChange}
                        className="w-full bg-foreground/90 text-background placeholder-primary px-4 py-3 rounded-lg border-2 border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-mono transition-all duration-300 backdrop-blur-sm group-hover:border-primary/50"
                        required
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>

                    <div className="relative group">
                      <input
                        type="password"
                        name="password"
                        placeholder="password"
                        value={signupData.password}
                        onChange={handleSignupChange}
                        className="w-full bg-foreground/90 text-background placeholder-primary px-4 py-3 rounded-lg border-2 border-primary/30 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 font-mono transition-all duration-300 backdrop-blur-sm group-hover:border-primary/50"
                        required
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <Button
                    onClick={handleSignupSubmit}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-foreground font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg shadow-primary/20"
                  >
                    sign up
                  </Button>

                  {/* Social Signup */}
                  <div className="flex items-center space-x-4 justify-center pt-4">
                    <button
                      type="button"
                      onClick={handleGoogleAuth}
                      className="p-3 hover:bg-muted rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-border/30"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                      >
                        <path
                          fill="#4285f4"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#34a853"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#fbbc05"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                        />
                        <path
                          fill="#ea4335"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                        />
                      </svg>
                    </button>

                    <button
                      type="button"
                      onClick={handleTwitterAuth}
                      className="p-3 hover:bg-muted rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-border/30"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-foreground"
                      >
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
