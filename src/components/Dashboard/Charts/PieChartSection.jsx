
import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { ThumbsUp, ThumbsDown, Meh, Users, Clock, X } from 'lucide-react';

const PieChartSection = ({ analyticsType, emailResponseData, linkedinResponseData }) => {
  return (
    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        {analyticsType === "email" ? "Investor Response Sentiment" : "LinkedIn Connection Status"}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={analyticsType === "email" ? emailResponseData : linkedinResponseData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            paddingAngle={5}
            dataKey="value"
          >
            {(analyticsType === "email" ? emailResponseData : linkedinResponseData).map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex justify-center space-x-4 mt-4">
        {analyticsType === "email" ? (
          <>
            <div className="flex items-center">
              <ThumbsUp className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white/60">Positive</span>
            </div>
            <div className="flex items-center">
              <Meh className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white/60">Neutral</span>
            </div>
            <div className="flex items-center">
              <ThumbsDown className="h-4 w-4 text-red-400 mr-2" />
              <span className="text-white/60">Negative</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center">
              <Users className="h-4 w-4 text-green-400 mr-2" />
              <span className="text-white/60">Connected</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 text-yellow-400 mr-2" />
              <span className="text-white/60">Pending</span>
            </div>
            <div className="flex items-center">
              <X className="h-4 w-4 text-red-400 mr-2" />
              <span className="text-white/60">No Response</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PieChartSection;
