
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Edit, Check, Send } from "lucide-react";

const EmailDialog = ({ mockEmailTemplate, mockInvestors, selectedInvestors, toggleInvestorSelection, handleSendEmail, setEmailContent }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-white text-primary hover:bg-white/90">
          <Send className="mr-2 h-4 w-4" />
          Send New Investor Email
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[900px] h-[600px] flex flex-col">
        <DialogHeader>
          <DialogTitle>Send Email to Investors</DialogTitle>
          <DialogDescription>
            Customize your pitch and select investors
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 flex gap-6 mt-4 h-full">
          <div className="w-1/2 bg-secondary/5 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Email Template</h4>
              <Button variant="ghost" size="sm">
                <Edit className="h-4 w-4 mr-2" />
                Edit
              </Button>
            </div>
            <textarea
              value={mockEmailTemplate}
              onChange={(e) => setEmailContent(e.target.value)}
              className="w-full h-[400px] bg-background/50 rounded-lg p-4 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="w-1/2">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium">Select Investors</h4>
              <span className="text-sm text-muted-foreground">
                {selectedInvestors.length} selected
              </span>
            </div>
            <div className="space-y-3 h-[400px] overflow-y-auto pr-2">
              {mockInvestors.map((investor) => (
                <div
                  key={investor.id}
                  className={`p-4 rounded-lg transition-all ${
                    selectedInvestors.includes(investor.id)
                      ? "bg-primary/10 border-primary"
                      : "bg-secondary/5 hover:bg-secondary/10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="font-medium flex items-center">
                        {investor.name}
                        <span className="ml-2 text-xs px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {investor.matchScore}% Match
                        </span>
                      </h5>
                      <p className="text-sm text-muted-foreground">{investor.firm}</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleInvestorSelection(investor.id)}
                    >
                      {selectedInvestors.includes(investor.id) ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        "Select"
                      )}
                    </Button>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <p>Portfolio: {investor.portfolio.join(", ")}</p>
                    <p>Investment Range: {investor.investmentRange}</p>
                    <p>{investor.previousInvestments} Previous Investments</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <DialogFooter className="mt-6">
          <Button variant="outline">
            Cancel
          </Button>
          <Button
            onClick={() => handleSendEmail(selectedInvestors)}
            disabled={selectedInvestors.length === 0}
          >
            Send to {selectedInvestors.length} Investor{selectedInvestors.length !== 1 ? 's' : ''}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EmailDialog;
