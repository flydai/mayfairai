
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === "123" && password === "123") {
      localStorage.setItem("isAuthenticated", "true");
      navigate("/dashboard");
      toast({
        title: "Success",
        description: "Successfully logged in!",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials. Use '123' for both username and password.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-white/60" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Username"
                />
              </div>
            </div>
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-white/60" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-10 py-3 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/20"
                  placeholder="Password"
                />
              </div>
            </div>
            <Button type="submit" className="w-full bg-white text-primary hover:bg-white/90">
              Sign In
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-white/60">
              Don't have an account?{" "}
              <Button
                variant="link"
                className="text-white hover:text-white/80"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </Button>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
