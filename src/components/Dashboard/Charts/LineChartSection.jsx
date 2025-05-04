
import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const LineChartSection = ({ analyticsType, emailActivityData, linkedinActivityData }) => {
  return (
    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
      <h3 className="text-lg font-semibold text-white mb-4">
        {analyticsType === "email" ? "Email Activity" : "LinkedIn Activity"}
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={analyticsType === "email" ? emailActivityData : linkedinActivityData}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="rgba(255,255,255,0.6)" />
          <YAxis stroke="rgba(255,255,255,0.6)" />
          <Tooltip />
          {analyticsType === "email" ? (
            <>
              <Line type="monotone" dataKey="sent" stroke="#4F46E5" name="Emails Sent" />
              <Line type="monotone" dataKey="responses" stroke="#10B981" name="Responses" />
            </>
          ) : (
            <>
              <Line type="monotone" dataKey="connections" stroke="#4F46E5" name="New Connections" />
              <Line type="monotone" dataKey="messages" stroke="#10B981" name="Messages" />
            </>
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartSection;
