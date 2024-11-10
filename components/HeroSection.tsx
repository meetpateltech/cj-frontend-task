import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Building2, MapPin, BookOpen } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative">
          <Image
            src="https://i.ibb.co/RQ6cx2z/image.png"
            alt="Desktop Monitor"
            className="w-full"
            width={600} 
            height={600} 
            layout="responsive" 
          />
        </div>

        <div className="space-y-8">
          <div className="relative">
            <h1 className="text-4xl font-bold leading-tight text-[#2D4356] md:text-5xl lg:text-6xl">
              Where The World <br />
              Learns To Code
            </h1>
            <div className="absolute -right-4 top-0 text-blue-500">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="absolute -right-8 -top-8 h-16 w-16 rotate-45 bg-teal-200/20" />
          </div>

          {/* Training Cards */}
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="p-6">
              <div className="mb-4 text-blue-600">
                <Building2 className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-600">Campus Training</h3>
              <p className="mb-4 text-sm text-gray-600">
                Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum dolor
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Explore
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </Button>
            </Card>

            <Card className="p-6">
              <div className="mb-4 text-blue-600">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-blue-600">Professional Training</h3>
              <p className="mb-4 text-sm text-gray-600">
                Designed for college students with a focus on xyz, xyz, xyz Lorem ipsum
              </p>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Explore
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14m0 0l-6-6m6 6l-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
                </svg>
              </Button>
            </Card>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <Card className="flex items-center gap-2 p-4">
              <MapPin className="h-6 w-6 text-blue-500" />
              <div>
                <span className="text-xl font-bold text-blue-500">50+</span>
                <p className="text-sm text-gray-600">Cities</p>
              </div>
            </Card>

            <Card className="flex items-center gap-2 p-4">
              <BookOpen className="h-6 w-6 text-blue-500" />
              <div>
                <span className="text-xl font-bold text-blue-500">80+</span>
                <p className="text-sm text-gray-600">Modules</p>
              </div>
            </Card>

            <Card className="flex items-center gap-2 p-4">
              <GraduationCap className="h-6 w-6 text-blue-500" />
              <div>
                <span className="text-xl font-bold text-blue-500">10K+</span>
                <p className="text-sm text-gray-600">Students</p>
              </div>
            </Card>

            <Card className="flex items-center gap-2 p-4">
              <Building2 className="h-6 w-6 text-blue-500" />
              <div>
                <span className="text-xl font-bold text-blue-500">100+</span>
                <p className="text-sm text-gray-600">Institutes</p>
              </div>
            </Card>
          </div>

          <div className="absolute bottom-0 right-0 hidden lg:block">
            <div className="flex gap-1">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="h-8 w-1 bg-blue-500/20 rotate-45" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}