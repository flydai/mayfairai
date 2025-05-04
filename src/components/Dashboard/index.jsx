
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion } from "framer-motion";
import { 
  Mail, 
  ArrowLeft, 
  Users, 
  DollarSign, 
  Calendar as CalendarIcon,
  Star
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
import StatCard from "./StatCard";
import EmailDialog from "./EmailDialog";
import AnalyticsToggle from "./AnalyticsToggle";
import PieChartSection from "./Charts/PieChartSection";
import LineChartSection from "./Charts/LineChartSection";
import RecentResponses from "./RecentResponses";
import MeetingScheduler from "./MeetingScheduler";
import { mockData } from "./mockData";

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedInvestors, setSelectedInvestors] = useState([]);
  const [emailContent, setEmailContent] = useState("");
  const [analyticsType, setAnalyticsType] = useState("email");
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    mockInvestors,
    mockEmailTemplate,
    emailResponseData,
    linkedinResponseData,
    emailActivityData,
    linkedinActivityData
  } = mockData;

  const handleSendEmail = (investors) => {
    toast({
      title: "Emails Sent",
      description: `Emails sent to ${investors.length} selected investors`,
    });
    setSelectedInvestors([]);
  };

  const toggleInvestorSelection = (investorId) => {
    setSelectedInvestors(prev => 
      prev.includes(investorId)
        ? prev.filter(id => id !== investorId)
        : [...prev, investorId]
    );
  };

  const handleScheduleMeeting = (date) => {
    toast({
      title: "Meeting Scheduled",
      description: `Meeting scheduled for ${date.toLocaleDateString()}`,
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="text-white hover:text-white/80"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <AnalyticsToggle 
            analyticsType={analyticsType}
            setAnalyticsType={setAnalyticsType}
          />
        </div>
        <div className="flex items-center space-x-4">
          <EmailDialog
            mockEmailTemplate={mockEmailTemplate}
            mockInvestors={mockInvestors}
            selectedInvestors={selectedInvestors}
            toggleInvestorSelection={toggleInvestorSelection}
            handleSendEmail={handleSendEmail}
            setEmailContent={setEmailContent}
          />
          <Button
            variant="ghost"
            className="text-white hover:text-white/80"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {analyticsType === "email" ? (
          <>
            <StatCard
              title="Emails Sent"
              value="156"
              subValue="This Month"
              icon={Mail}
            />
            <StatCard
              title="Response Rate"
              value="42%"
              subValue="Average"
              icon={Users}
            />
            <StatCard
              title="Meetings Scheduled"
              value="28"
              subValue="This Month"
              icon={CalendarIcon}
            />
            <StatCard
              title="Investment Interest"
              value="$2.4M"
              subValue="Potential"
              icon={DollarSign}
            />
          </>
        ) : (
          <>
            <StatCard
              title="Connections"
              value="324"
              subValue="Total"
              icon={Users}
            />
            <StatCard
              title="Message Rate"
              value="68%"
              subValue="Response Rate"
              icon={Mail}
            />
            <StatCard
              title="Profile Views"
              value="892"
              subValue="Last 30 Days"
              icon={Users}
            />
            <StatCard
              title="Post Engagement"
              value="2.1K"
              subValue="This Month"
              icon={Star}
            />
          </>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <PieChartSection 
          analyticsType={analyticsType}
          emailResponseData={emailResponseData}
          linkedinResponseData={linkedinResponseData}
        />
        <LineChartSection 
          analyticsType={analyticsType}
          emailActivityData={emailActivityData}
          linkedinActivityData={linkedinActivityData}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <RecentResponses />
        <MeetingScheduler 
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          handleScheduleMeeting={handleScheduleMeeting}
        />
      </div>
    </div>
  );
};

export default Dashboard;
