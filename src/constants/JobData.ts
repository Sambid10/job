import { BsApple, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaInstagram, FaReddit } from "react-icons/fa";
import type { IconType } from "react-icons";

export type JobDataType = {
  id: number;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  requiredSkills: string[];
  bgColor: string;
  logo: IconType;
  lastDate: string;
  salary: string;
  address: string; 
  responsibilities:string[];
  jobType:"Full-time" | "Remote" | "Internship"
};

export const JobData: JobDataType[] = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    companyName: "Google",
    jobDescription:
      "We are looking for a passionate Frontend Developer to build modern, responsive web applications.",
    requiredSkills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    responsibilities: [
      "Build reusable UI components",
      "Optimize applications for performance",
      "Collaborate with designers and backend teams",
      "Maintain clean and scalable code",
    ],
    bgColor: "#E0F2FE",
    logo: FaGoogle,
    lastDate: "21 Feb, 2026",
    salary: "NPR 25,000",
    address: "Kathmandu, Nepal",
    jobType: "Full-time",
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    companyName: "Instagram",
    jobDescription:
      "Responsible for designing and maintaining scalable server-side applications and APIs.",
    requiredSkills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    responsibilities: [
      "Develop RESTful APIs",
      "Manage databases and server logic",
      "Ensure application security",
      "Improve backend performance",
    ],
    bgColor: "#ECFDF5",
    logo: FaInstagram,
    lastDate: "12 Feb, 2026",
    salary: "NPR 40,000",
    address: "Lalitpur, Nepal",
    jobType: "Remote",
  },
  {
    id: 3,
    jobTitle: "MERN Stack Developer",
    companyName: "X (Twitter)",
    jobDescription:
      "Build full-stack applications using the MERN stack and modern development practices.",
    requiredSkills: ["MongoDB", "Express", "React", "Node.js"],
    responsibilities: [
      "Develop full-stack features",
      "Integrate frontend with backend APIs",
      "Write clean and testable code",
      "Participate in code reviews",
    ],
    bgColor: "#FFF7ED",
    logo: BsTwitterX,
    lastDate: "17 Feb, 2026",
    salary: "NPR 80,000/-",
    address: "Bhaktapur, Nepal",
    jobType: "Full-time",
  },
  {
    id: 4,
    jobTitle: "UI/UX Designer",
    companyName: "Facebook",
    jobDescription:
      "Design clean and intuitive user interfaces with a strong focus on user experience.",
    requiredSkills: ["Figma", "Adobe XD", "Wireframing"],
    responsibilities: [
      "Create wireframes and prototypes",
      "Design user-friendly interfaces",
      "Collaborate with developers",
      "Conduct usability testing",
    ],
    bgColor: "#FDF2F8",
    logo: FaFacebook,
    lastDate: "26 Feb, 2026",
    salary: "NPR 42,000",
    address: "Pokhara, Nepal",
    jobType: "Internship",
  },
  {
    id: 5,
    jobTitle: "Mobile App Developer",
    companyName: "Apple",
    jobDescription:
      "Develop high-quality mobile applications for Android and iOS platforms.",
    requiredSkills: ["React Native", "Flutter", "API Integration"],
    responsibilities: [
      "Build cross-platform mobile apps",
      "Integrate APIs and third-party services",
      "Test and debug applications",
      "Publish apps to app stores",
    ],
    bgColor: "#EEF2FF",
    logo: BsApple,
    lastDate: "28 Feb, 2026",
    salary: "NPR 24,000",
    address: "Biratnagar, Nepal",
    jobType: "Remote",
  },
  {
    id: 6,
    jobTitle: "Junior Software Engineer",
    companyName: "Reddit",
    jobDescription:
      "Great opportunity for freshers to start their career in software development.",
    requiredSkills: ["JavaScript", "Git", "Problem Solving"],
    responsibilities: [
      "Assist in software development tasks",
      "Fix bugs and write basic features",
      "Learn best coding practices",
      "Work under senior engineers",
    ],
    bgColor: "#F0FDF4",
    logo: FaReddit,
    lastDate: "11 Feb, 2026",
    salary: "NPR 60,000",
    address: "Butwal, Nepal",
    jobType: "Internship",
  },
];
