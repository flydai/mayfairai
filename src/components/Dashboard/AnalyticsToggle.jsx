
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const AnalyticsToggle = ({ analyticsType, setAnalyticsType }) => {
  return (
    <div className="flex items-center bg-white/10 rounded-lg p-1">
      <Button
        variant={analyticsType === "email" ? "default" : "ghost"}
        className={`${analyticsType === "email" ? "bg-white text-primary" : "text-white"}`}
        onClick={() => setAnalyticsType("email")}
      >
        <Mail className="mr-2 h-4 w-4" />
        Email
      </Button>
      <Button
        variant={analyticsType === "linkedin" ? "default" : "ghost"}
        className={`${analyticsType === "linkedin" ? "bg-white text-primary" : "text-white"}`}
        onClick={() => setAnalyticsType("linkedin")}
      >
        <Linkedin className="mr-2 h-4 w-4" />
        LinkedIn
      </Button>
    </div>
  );
};

export default AnalyticsToggle;
