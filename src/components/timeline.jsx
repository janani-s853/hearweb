import React from "react";
import "./timeline.css";
import { AlertCircle, Cpu, MapPin, Award, Footprints } from "lucide-react";

const timelineData = [
  {
    icon: <Footprints size={28} color="#1b2e59" />,
    title: "Humble Beginnings",
    year: "2018",
    description: "Started with a vision to help the hearing impaired.",
  },
  {
    icon: <AlertCircle size={28} color="#1b2e59" />,
    title: "Founding Vision",
    year: "2019",
    description: "The core team came together to launch H.E.A.R.",
  },
  {
    icon: <Cpu size={28} color="#1b2e59" />,
    title: "First Prototype",
    year: "2020",
    description: "Built and tested the first working model.",
  },
  {
    icon: <MapPin size={28} color="#1b2e59" />,
    title: "National Expansion",
    year: "2021",
    description: "Rolled out across India via online and retail.",
  },
  {
    icon: <Award size={28} color="#1b2e59" />,
    title: "Media & Awards",
    year: "2022",
    description: "Recognized nationally and trusted by users.",
  },
];

const JourneyTimeline = () => {
  return (
    <section className="journey-section">
      <div className="journey-header">
        <h2>Our Journey</h2>
      </div>
      <div className="timeline-graphic">
        <div className="timeline-line" />
        {timelineData.map((item, index) => (
          <div className="timeline-block" key={index}>
            <div className="timeline-connector">
              <div className="timeline-icon">{item.icon}</div>
            </div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <div className="timeline-year">{item.year}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JourneyTimeline;
