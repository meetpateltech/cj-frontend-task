import { BookOpen, Briefcase, FileSpreadsheet, Laptop, MessageSquare, Users } from "lucide-react";
import Image from "next/image";

export default function LearningJourney() {
  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-12 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 800 600">
          <path
            d="M 0 300 Q 200 200 400 300 Q 600 400 800 300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-cyan-500"
          />
          <path
            d="M 0 350 Q 200 250 400 350 Q 600 450 800 350"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-purple-500"
          />
        </svg>
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg
            viewBox="0 0 24 24"
            className="w-10 h-10 text-cyan-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <h1 className="text-3xl font-bold">
            Because We Offer What You Need
          </h1>
        </div>
        <div className="flex items-center justify-center gap-1">
          <span className="text-gray-600 text-xl">At</span>
          <span className="text-cyan-500 text-xl">Every Step Of Your</span>
        </div>
        <div className="text-cyan-500 text-xl">
          Transformative Learning Journey
        </div>
      </div>

      {/* Center Image */}
      <div className="relative z-10 flex justify-center mb-12">
        <div className="w-64 h-32 bg-gradient-to-b from-purple-500 to-cyan-500 rounded-[100%]">
          <Image
            src="https://i.ibb.co/GkdLvGY/image.png"
            alt="Students"
            className="w-full h-full object-cover rounded-t-[100%]"
            width={256} 
            height={256} 
          />
        </div>
      </div>

      {/* Journey Steps */}
      <div className="grid md:grid-cols-2 gap-8 relative z-10 max-w-4xl mx-auto">
        {[
          {
            icon: Users,
            title: "Custom Specialization",
            description:
              "We understand the value of clarity, so we empower you to design your unique path with a personalization that best suits your goals.",
            number: 1,
          },
          {
            icon: Laptop,
            title: "Virtual Labs",
            description:
              "We provide our students with the convenience of accessing a fully equipped lab from anywhere just with an internet connection.",
            number: 2,
          },
          {
            icon: FileSpreadsheet,
            title: "AI Tests",
            description:
              "We understand that teaching alone isn't enough, so we provide our students with AI-powered tests to assess real progress.",
            number: 3,
          },
          {
            icon: BookOpen,
            title: "Resume Builder",
            description:
              "We will help support and development for job seekers AI to highlight those skills effectively on your resume to help you stand out from the crowd.",
            number: 4,
          },
          {
            icon: Briefcase,
            title: "Placement Preparation",
            description:
              "We go beyond the tests, taking our students to the next level by providing them with thorough placement preparation.",
            number: 5,
          },
          {
            icon: MessageSquare,
            title: "AI Interviews",
            description:
              "Interviews can be challenging, so we use AI to simulate these interviews, helping our students build confidence and be fully prepared.",
            number: 6,
          },
        ].map((step, index) => (
          <div
            key={step.number}
            className={`relative p-6 bg-white rounded-lg border-2 border-cyan-500/20 shadow-lg ${
              index % 2 === 0 ? "md:translate-x-4" : "md:-translate-x-4"
            }`}
          >
            <div className="absolute -top-3 -left-3 w-8 h-8 bg-cyan-500 text-white rounded-full flex items-center justify-center font-bold">
              {step.number}
            </div>
            <div className="flex items-start gap-4">
              <step.icon className="w-8 h-8 text-cyan-500 shrink-0" />
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 space-y-2">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 border-r-2 border-b-2 border-cyan-500 transform rotate-45"
          />
        ))}
      </div>
    </div>
  );
}