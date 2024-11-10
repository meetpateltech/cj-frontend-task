import React from 'react';

interface NewsCardProps {
    source: string;
    date: string;
    image: string;
    title: string;
    link: string;
  }

  const NewsCard: React.FC<NewsCardProps> = ({ source, date, image, title, link }) => (
  <div className="bg-white rounded-lg shadow-lg p-4 transition-transform duration-300 hover:scale-105">
    <div className="flex justify-between items-center mb-4">
      <span className="text-orange-600 font-bold">{source}</span>
      <span className="text-gray-500 text-sm">{date}</span>
    </div>
    <img 
      src={image} 
      alt={title}
      className="w-full h-48 object-cover rounded-lg mb-4"
    />
    <h3 className="text-gray-800 text-lg font-medium mb-4 line-clamp-2">
      {title}
    </h3>
    <a 
      href={link}
      className="text-blue-500 hover:text-blue-700 flex items-center gap-2"
    >
      Read article
      <svg 
        className="w-4 h-4" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  </div>
);

const NewsSection = () => {
  const newsItems = [
    {
      source: "ThePrint",
      date: "31 March, 2023",
      image: "https://i.ibb.co/tPytxTr/image.png",
      title: "Coding Jr's CEO, Sumit Bhat felicitated at Times 40 Under 40",
      link: "#"
    },
    {
      source: "Business Outreach",
      date: "01 March, 2023",
      image: "https://i.ibb.co/DfFCTXr/image.png",
      title: "Meet Vikas Shukla- The flag bearer of technology and innovation",
      link: "#"
    },
    {
      source: "ThePrint",
      date: "01 March, 2023",
      image: "https://i.ibb.co/GxjPpPN/image.png",
      title: "Meet Vikas Shukla- The flag bearer of technology and innovation",
      link: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12">
        We&apos;ve Also Been In <span className="text-teal-500">News!</span>
      </h2>
      
      <div className="relative">
    
        <div className="absolute -top-8 -left-8 w-24 h-24 border-t-2 border-l-2 border-blue-200 rounded-tl-full" />
        <div className="absolute -bottom-8 -right-8 w-24 h-24 border-b-2 border-r-2 border-blue-200 rounded-br-full" />
        
    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {newsItems.map((item, index) => (
            <NewsCard key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;