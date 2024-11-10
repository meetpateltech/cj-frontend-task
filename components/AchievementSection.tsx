'use client'

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function AchievementSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const achievements = [
    {
      image: "https://i.ibb.co/rwjdNwW/image.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum"
    },
    {
      image: "https://i.ibb.co/rwjdNwW/image.png",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % achievements.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + achievements.length) % achievements.length)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-[#E6FFFF]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Title Section */}
        <div className="flex items-center justify-center gap-4 mb-20 max-w-7xl mx-auto">
          <LeftArrow className="w-20 h-20 hidden md:block" />
          <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-bold">
            Our Efforts To{" "}
            <span className="text-[#1DDDDF]">Innovate</span> Have Been{" "}
            <br className="hidden sm:block" />
            <span className="text-[#1DDDDF]">Recognized</span> And{" "}
            <span className="text-[#1DDDDF]">Appreciated</span>
          </h2>
          <RightArrow className="w-20 h-20 hidden md:block" />
        </div>

        <div className="max-w-6xl mx-auto space-y-20">
          {/* Achievement Carousel */}
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem]">
              <div className="relative">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4">
                  <div className="relative flex-1 w-full md:w-1/2">
                    <div className="absolute -top-3 -left-3 w-full h-full bg-[#1DDDDF]/20 rounded-[2rem]" />
                    <div className="relative z-10 rounded-[2rem] overflow-hidden">
                      <Image
                        src={achievements[currentSlide].image}
                        alt={`Achievement ${currentSlide + 1}`}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -right-4 top-1/2 w-4 h-4 bg-[#1DDDDF] rounded-full" />
                    <div className="absolute right-20 -bottom-4 w-4 h-4 bg-[#1DDDDF] rounded-full" />
                  </div>
                  <div className="flex-1 w-full md:w-1/2 bg-[#4A90E2] p-8 rounded-[2rem] text-white">
                    <p className="text-lg text-center">{achievements[currentSlide].description}</p>
                  </div>
                </div>
              </div>
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>

          {/* Honored Section */}
          <div className="relative mt-20">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 p-4">
              <div className="flex-1 w-full md:w-1/2 bg-[#4A90E2] p-8 rounded-[2rem] text-white">
                <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                  <p className="font-semibold text-xl">Honored by</p>
                  <p className="font-bold text-2xl">Shri Dharmendra Pradhan ji</p>
                  <p className="font-semibold text-xl">Union Minister for Education</p>
                  <p className="font-semibold">Govt. of India - 2023</p>
                </div>
              </div>
              <div className="relative flex-1 w-full md:w-1/2">
                <div className="absolute -top-3 -left-3 w-full h-full bg-[#1DDDDF]/20 rounded-[2rem]" />
                <div className="relative z-10 rounded-[2rem] overflow-hidden">
                  <Image
                    src="https://i.ibb.co/zmgW6yd/image.png"
                    alt="Achievement with Union Minister"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -left-4 top-1/2 w-4 h-4 bg-[#1DDDDF] rounded-full" />
                <div className="absolute left-20 -top-4 w-4 h-4 bg-[#1DDDDF] rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function LeftArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 135 156" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M81.2085 93.6198L81.0396 93.4623L80.8188 93.3948L30.2634 77.9422L80.8188 62.4897L81.0396 62.4222L81.2085 62.2647L119.869 26.2087L107.973 77.7172L107.921 77.9422L107.973 78.1673L119.869 129.676L81.2085 93.6198ZM116.026 77.7173L115.974 77.9423L116.026 78.1673L133.289 152.922L77.182 100.594L77.0132 100.436L76.7923 100.369L3.42106 77.9423L76.7923 55.5159L77.0132 55.4484L77.182 55.2909L133.289 2.96273L116.026 77.7173ZM124.318 139.295L126.711 141.527L125.975 138.339L112.9422L125.975 17.5455L126.711 14.3577L124.318 16.5892L78.987 58.8669L19.7079 76.9859L16.5791 77.9422L19.7079 78.8986L78.987 97.0176L124.318 139.295Z"
        fill="white"
        stroke="#1DDDDF"
        strokeWidth="2"
      />
    </svg>
  )
}

function RightArrow(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 146 168" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M16.226 139.991L58.2313 100.952L58.4002 100.795L58.6207 100.728L113.539 83.9999L58.6207 67.2724L58.4002 67.2052L58.2313 67.0482L16.226 28.0085L29.1495 83.7742L29.2018 83.9999L29.1495 84.2257L16.226 139.991ZM20.4408 83.7742L20.4932 84L20.4408 84.2258L1.71152 165.044L62.5859 108.467L62.7548 108.311L62.9753 108.243L142.568 84L62.9753 59.7566L62.7548 59.6894L62.5859 59.5325L1.71152 2.95588L20.4408 83.7742ZM11.4954 150.066L9.10312 152.289L9.84045 149.108L24.9289 83.9999L9.84047 18.8924L9.10313 15.7107L11.4954 17.9341L60.534 63.5105L124.662 83.0433L127.802 83.9999L124.662 84.9566L60.534 104.489L11.4954 150.066Z"
        fill="white"
        stroke="#1DDDDF"
        strokeWidth="2"
      />
    </svg>
  )
}
