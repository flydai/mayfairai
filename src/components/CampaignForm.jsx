
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { motion, AnimatePresence } from "framer-motion";
import { Upload, Send, ArrowLeft, ArrowRight } from "lucide-react";

function CampaignForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    name: "",
    email: "",
    companyName: "",
    
    // Company Details
    sector: "",
    fundingNeeded: "",
    stage: "",
    
    // Pitch Details
    description: "",
    problem: "",
    solution: "",
    file: null,
  });
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const campaigns = JSON.parse(localStorage.getItem("campaigns") || "[]");
    const newCampaign = {
      id: Date.now(),
      ...formData,
      emailsSent: 0,
      emailsReceived: 0,
      createdAt: new Date().toISOString(),
    };
    campaigns.push(newCampaign);
    localStorage.setItem("campaigns", JSON.stringify(campaigns));
    
    toast({
      title: "Campaign Created!",
      description: "Your campaign has been successfully created.",
    });
    
    navigate("/dashboard");
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, file: file.name });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email Address</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Company Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  required
                />
              </div>
            </div>
          </motion.div>
        );
      case 2:
        return (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Company Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Industry Sector</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  required
                >
                  <option value="">Select Sector</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Funding Needed</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  value={formData.fundingNeeded}
                  onChange={(e) => setFormData({ ...formData, fundingNeeded: e.target.value })}
                  required
                >
                  <option value="">Select Amount</option>
                  <option value="seed">Seed ($10k - $100k)</option>
                  <option value="angel">Angel ($100k - $500k)</option>
                  <option value="series-a">Series A ($500k - $2M)</option>
                  <option value="series-b">Series B ($2M+)</option>
                </select>
              </div>
              <div>
                <label className="block text-white mb-2">Company Stage</label>
                <select
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white"
                  value={formData.stage}
                  onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                  required
                >
                  <option value="">Select Stage</option>
                  <option value="idea">Idea Stage</option>
                  <option value="mvp">MVP</option>
                  <option value="early-revenue">Early Revenue</option>
                  <option value="growth">Growth</option>
                  <option value="scaling">Scaling</option>
                </select>
              </div>
            </div>
          </motion.div>
        );
      case 3:
        return (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
          >
            <h2 className="text-2xl font-semibold text-white mb-6">Pitch Details</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-white mb-2">Problem Statement</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white h-24"
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  placeholder="What problem does your startup solve?"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Solution Overview</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white h-24"
                  value={formData.solution}
                  onChange={(e) => setFormData({ ...formData, solution: e.target.value })}
                  placeholder="How does your solution work?"
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Detailed Description</label>
                <textarea
                  className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white h-32"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Tell us more about your startup..."
                  required
                />
              </div>
              <div>
                <label className="block text-white mb-2">Upload Pitch Deck (PDF/PPT)</label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    accept=".pdf,.ppt,.pptx"
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                    required
                  />
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => document.getElementById("file-upload").click()}
                    className="w-full"
                  >
                    <Upload className="mr-2 h-4 w-4" />
                    {formData.file ? formData.file : "Choose File"}
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto glass-card rounded-xl p-8"
      >
        <h1 className="text-3xl font-bold text-white mb-6">Create Your Startup Campaign</h1>
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`flex items-center ${num !== 3 ? 'flex-1' : ''}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step >= num ? 'bg-primary text-white' : 'bg-white/20 text-white/50'
                  }`}
                >
                  {num}
                </div>
                {num !== 3 && (
                  <div
                    className={`flex-1 h-1 mx-2 ${
                      step > num ? 'bg-primary' : 'bg-white/20'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-white/80">
            <span>Personal Info</span>
            <span>Company Details</span>
            <span>Pitch Details</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          <div className="flex justify-between mt-8">
            {step > 1 && (
              <Button type="button" onClick={prevStep} variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
            )}
            {step < 3 ? (
              <Button type="button" onClick={nextStep} className={`${step === 1 ? 'ml-auto' : ''}`}>
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" className="ml-auto">
                <Send className="mr-2 h-4 w-4" />
                Launch Campaign
              </Button>
            )}
          </div>
        </form>
      </motion.div>
    </div>
  );
}

export default CampaignForm;
