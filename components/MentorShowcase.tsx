import React from 'react';
import Image from 'next/image';

interface Mentor {
  name: string;
  designation: string;
  college: string;
  description: string;
  bgColor: string;
  image: string;
}

const MentorCard: React.FC<Mentor> = ({ name, designation, college, description, bgColor, image }) => (
  <div className={`${bgColor} rounded-xl overflow-hidden shadow-lg relative h-[500px]`}>
    {/* Image Container */}
    <div className="w-full h-full relative">
      {/* Mentor Image */}
      <Image 
        src={image} 
        alt={name}
        layout="fill" 
        objectFit="cover" 
      />
      
      {/* Name Overlay at Top */}
      <div className="absolute top-6 left-6">
        <h2 className="text-white text-3xl font-bold">{name}</h2>
      </div>

      {/* Bottom Dark Overlay with Content */}
      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-30 backdrop-blur-sm p-6">
        <div className="bg-black bg-opacity-20 rounded p-3 mb-4">
          <p className="text-white font-medium">{designation}</p>
          <p className="text-white text-sm">{college}</p>
        </div>
        <p className="text-white text-sm">&apos;{description}&apos;</p>
      </div>
    </div>
  </div>
);

const MentorShowcase: React.FC = () => {
  const mentors: Mentor[] = [
    {
      name: "Vikas Shukla",
      designation: "Software Engineering",
      college: "IIT- BHU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgColor: "bg-cyan-400",
      image: "https://i.ibb.co/F6gftTd/image.png"  
    },
    {
      name: "Sumit Bhatt",
      designation: "Software Engineering",
      college: "IIT- BHU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgColor: "bg-blue-500",
      image: "https://i.ibb.co/rt5N9rn/image.png"  
    },
    {
      name: "Neelu Verma",
      designation: "Software Engineering",
      college: "IIT- BHU",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      bgColor: "bg-cyan-400",
      image: "https://i.ibb.co/tDMH9fn/image.png"  
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative text-center mb-16">
        <div className="absolute -top-8 left-4 opacity-50">
          <svg width="80" height="80" viewBox="0 0 80 80" className="fill-none stroke-cyan-400">
            <path d="M20,20 L40,20 L40,40 L20,40 Z" strokeWidth="2" strokeDasharray="4 4"/>
            <polygon points="30,10 50,10 50,30 30,30" strokeWidth="2"/>
          </svg>
        </div>
        
        <h3 className="text-gray-600 text-xl mb-2">
          We Know Just Education Is Not Enough Anymore
        </h3>
        <h2 className="text-gray-800 text-4xl font-bold">
          So We&apos;ve Got The{" "}
          <span className="text-cyan-500">Best Mentors</span>{" "}
          For You.
        </h2>

        <div className="absolute -top-4 right-4 opacity-50">
          <svg width="80" height="80" viewBox="0 0 80 80" className="fill-none stroke-blue-400">
            <path d="M40,20 L60,20 L60,40 L40,40 Z" strokeWidth="2" strokeDasharray="4 4"/>
          </svg>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mentors.map((mentor, index) => (
          <MentorCard
            key={index}
            {...mentor}
          />
        ))}
      </div>
    </div>
  );
};

export default MentorShowcase;
