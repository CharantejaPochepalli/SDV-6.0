import React from "react";
import "./EventTimeline.css"; // Include custom styles if needed

const DayOneEvents = [
  { time: "09:00 AM", event: "Registration & Welcome" },
  { time: "10:00 AM", event: "Keynote Speech" },
  { time: "11:30 AM", event: "Teaching" },
  { time: "01:30 PM", event: "Lunch Break" },
  { time: "03:00 PM", event: "Bot testing" },
  { time: "05:00 PM", event: "Closing Remarks" },
];

const EventTimeline = () => {
  return (
    <div className="evetimeline-container">
      <h3> DnD Workflow</h3>
      <ul className="evetimeline">
        {DayOneEvents.map((item, index) => (
          <li key={index} className="evetimeline-item">
            <span className="evetime">{item.time}</span>
            <span className="eveevent">{item.event}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventTimeline;
