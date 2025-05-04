
import React from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from 'lucide-react';

const MeetingScheduler = ({ selectedDate, setSelectedDate, handleScheduleMeeting }) => {
  return (
    <div className="bg-white/10 rounded-xl p-6 backdrop-blur-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Schedule Meeting</h3>
      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={setSelectedDate}
        className="rounded-md border text-white"
      />
      <Button 
        className="w-full mt-4"
        onClick={() => handleScheduleMeeting(selectedDate)}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        Schedule Meeting
      </Button>
    </div>
  );
};

export default MeetingScheduler;
