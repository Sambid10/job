import { BsApple, BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaGoogle, FaInstagram, FaReddit } from "react-icons/fa";

export const JobData = [
  {
    id: 1,
    jobTitle: "Frontend Developer",
    companyName: "Google",
    jobDescription:
      "We are looking for a passionate Frontend Developer to build modern, responsive web applications.",
    requiredSkills: ["React", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    bgColor: "#E0F2FE",
    logo:FaGoogle
  },
  {
    id: 2,
    jobTitle: "Backend Developer",
    companyName: "Instagram",
    jobDescription:
      "Responsible for designing and maintaining scalable server-side applications and APIs.",
    requiredSkills: ["Node.js", "Express", "MongoDB", "REST APIs"],
    bgColor: "#ECFDF5" ,
    logo:FaInstagram
  },
  {
    id: 3,
    jobTitle: "MERN Stack Developer",
    companyName: "X (Twitter)",
    jobDescription:
      "Build full-stack applications using the MERN stack and modern development practices.",
    requiredSkills: ["MongoDB", "Express", "React", "Node.js"],
    bgColor: "#FFF7ED",
    logo:BsTwitterX
  },
  {
    id: 4,
    jobTitle: "UI/UX Designer",
    companyName: "Facebook",
    jobDescription:
      "Design clean and intuitive user interfaces with a strong focus on user experience.",
    requiredSkills: ["Figma", "Adobe XD", "Wireframing"],
    bgColor: "#FDF2F8" ,
    logo:FaFacebook
  },
  {
    id: 5,
    jobTitle: "Mobile App Developer",
    companyName: "Apple",
    jobDescription:
      "Develop high-quality mobile applications for Android and iOS platforms.",
    requiredSkills: ["React Native", "Flutter", "API Integration"],
    bgColor: "#EEF2FF" ,
    logo:BsApple
  },
  {
    id: 6,
    jobTitle: "Junior Software Engineer",
    companyName: "Reddit",
    jobDescription:
      "Great opportunity for freshers to start their career in software development.",
    requiredSkills: ["JavaScript", "Git", "Problem Solving"],
    bgColor: "#F0FDF4" ,
    logo:FaReddit
  }
];
