import {
  FireExtinguisher,
  User,
  Speech,
  Flame,
  Handshake,
  ChartLine,
} from "lucide-react";

const servicesHardCoded = [
  {
    name: "Crisis Response",
    description: "We empower leaders to be well-prepared",
    href: "/business-services/crisis-response",
    icon: FireExtinguisher,
  },
  {
    name: "Crisis Leadership",
    description: "We empower leaders to be well-prepared",
    href: "/business-services/crisis-leadership",
    icon: User,
  },
  {
    name: "Crisis Communication",
    description: "Communicating effectively is crucial in a crisis",
    href: "/business-services/crisis-communication",
    icon: Speech,
  },
  {
    name: "Risk Management",
    description: "The storm has arrived…",
    href: "/business-services/risk-management",
    icon: Flame,
  },
  {
    name: "Business Continuity",
    description: "Maintain key functionality in disruptive environments",
    href: "/business-services/business-continuity",
    icon: Handshake,
  },
  {
    name: "Assessments",
    description: "Provide senior leadership and boards with strategic plans",
    href: "/business-services/assessments",
    icon: ChartLine,
  },
];

export default servicesHardCoded;
