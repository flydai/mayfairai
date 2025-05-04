
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Target, Users, DollarSign } from "lucide-react";

function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Launch Your Startup",
      description: "Get your innovative ideas off the ground with expert guidance and support"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Reach Investors",
      description: "Connect with potential investors who believe in your vision"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Build Networks",
      description: "Join a community of entrepreneurs and industry experts"
    },
    {
      icon: <DollarSign className="h-6 w-6" />,
      title: "Secure Funding",
      description: "Access the capital you need to grow your startup"
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-white text-2xl font-bold"
          >
            StartupLaunch
          </motion.div>
          <div className="space-x-4">
            <Button
              variant="ghost"
              className="text-white hover:text-white/80"
              onClick={() => navigate("/campaign")}
            >
              Login
            </Button>
            <Button
              onClick={() => navigate("/campaign")}
              className="bg-white text-primary hover:bg-white/90"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Launch Your Startup
            <br />
            <span className="text-white/80">With Confidence</span>
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto"
          >
            Connect with investors, showcase your vision, and get the funding you need
            to bring your ideas to life.
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Button
              onClick={() => navigate("/campaign")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Start Your Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white hover:bg-white/20 transition-colors"
            >
              <div className="bg-white/20 rounded-lg p-3 inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg rounded-xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <p className="text-white/80 mb-6">
              Join thousands of entrepreneurs who have successfully launched their
              startups through our platform.
            </p>
            <Button
              onClick={() => navigate("/campaign")}
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
            >
              Create Your Campaign
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </main>
    </div>
  );
}

export default LandingPage;
