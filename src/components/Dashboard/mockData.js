
export const mockData = {
  mockInvestors: [
    { 
      id: 1, 
      name: "John Smith", 
      firm: "Venture Capital A", 
      interest: "High",
      matchScore: 95,
      portfolio: ["Tech", "SaaS", "AI"],
      investmentRange: "$1M - $5M",
      previousInvestments: 12
    },
    { 
      id: 2, 
      name: "Sarah Johnson", 
      firm: "Angel Investors B", 
      interest: "Medium",
      matchScore: 85,
      portfolio: ["FinTech", "E-commerce"],
      investmentRange: "$500K - $2M",
      previousInvestments: 8
    },
    { 
      id: 3, 
      name: "Michael Chen", 
      firm: "Tech Fund C", 
      interest: "High",
      matchScore: 90,
      portfolio: ["AI", "Enterprise", "Cloud"],
      investmentRange: "$2M - $10M",
      previousInvestments: 15
    },
  ].sort((a, b) => b.matchScore - a.matchScore),

  mockEmailTemplate: `Dear [Investor Name],

I hope this email finds you well. I'm reaching out regarding an exciting investment opportunity in our startup, [Company Name].

We're developing [Brief Description] that addresses [Problem] in the [Industry] market.

Key highlights:
- Market size: $[X]B
- Current traction: [Key Metrics]
- Team: [Brief Team Background]

Would you be interested in scheduling a brief call to discuss this opportunity?

Best regards,
[Your Name]`,

  emailResponseData: [
    { name: "Positive", value: 35, color: "#4ade80" },
    { name: "Neutral", value: 45, color: "#facc15" },
    { name: "Negative", value: 20, color: "#f87171" }
  ],

  linkedinResponseData: [
    { name: "Connections", value: 45, color: "#4ade80" },
    { name: "Pending", value: 35, color: "#facc15" },
    { name: "No Response", value: 20, color: "#f87171" }
  ],

  emailActivityData: [
    { date: "Mon", sent: 12, responses: 5 },
    { date: "Tue", sent: 15, responses: 8 },
    { date: "Wed", sent: 18, responses: 10 },
    { date: "Thu", sent: 20, responses: 12 },
    { date: "Fri", sent: 25, responses: 15 }
  ],

  linkedinActivityData: [
    { date: "Mon", connections: 8, messages: 4 },
    { date: "Tue", connections: 12, messages: 6 },
    { date: "Wed", connections: 15, messages: 8 },
    { date: "Thu", connections: 18, messages: 10 },
    { date: "Fri", connections: 22, messages: 12 }
  ]
};
