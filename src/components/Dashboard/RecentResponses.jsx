
import React from "react";

const RecentResponses = () => {
  return (
    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg lg:col-span-2">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Responses</h3>
      <div className="space-y-4">
        {[1, 2, 3].map((item) => (
          <div key={item} className="bg-white/5 p-4 rounded-lg">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium text-white">Investor {item}</h4>
                <p className="text-sm text-white/60">Venture Capital Firm {item}</p>
              </div>
              <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-400/10 text-green-400">
                Interested
              </span>
            </div>
            <p className="text-sm text-white/80">
              "Interesting proposition. Would love to learn more about your market strategy and growth plans."
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentResponses;
