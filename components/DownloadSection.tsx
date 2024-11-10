import Image from "next/image"
import Link from "next/link"
import { Book, Cloud, Code, FileText, Infinity, Keyboard, MonitorPlay, ScrollText } from "lucide-react"

export default function DownloadSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16">
      <div className="absolute right-0 top-0 h-full w-1/3 bg-[repeating-linear-gradient(45deg,#00ffff1a,#00ffff1a_10px,transparent_10px,transparent_20px)]" />
      <div className="container relative mx-auto px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="hidden lg:block">
            <div className="relative mx-auto w-[300px]">
              <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-[repeating-linear-gradient(45deg,#4169e11a,#4169e11a_10px,transparent_10px,transparent_20px)]" />
              <Image
                src="https://i.ibb.co/cDLXSKL/image.png"
                alt="Coding Pro App Interface"
                width={300}
                height={600}
                className="relative z-10 "
              />
              <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-[repeating-linear-gradient(45deg,#00ffff1a,#00ffff1a_10px,transparent_10px,transparent_20px)]" />
            </div>
          </div>
          <div className="text-center lg:text-left">
            <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
              Wanna See More?
            </h2>
            <h3 className="mb-8 text-3xl font-semibold text-gray-700">Join Us!</h3>
            <div className="mb-8 grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <MonitorPlay className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Recorded Lectures</span>
              </div>
              <div className="flex items-center gap-3">
                <Keyboard className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Language-specific keyboard</span>
              </div>
              <div className="flex items-center gap-3">
                <ScrollText className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Online Quizzes</span>
              </div>
              <div className="flex items-center gap-3">
                <Infinity className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Infinite Project Size</span>
              </div>
              <div className="flex items-center gap-3">
                <Code className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">In-app Coding</span>
              </div>
              <div className="flex items-center gap-3">
                <Cloud className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Cloud Computation</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Evaluation Reports</span>
              </div>
              <div className="flex items-center gap-3">
                <Book className="h-8 w-8 text-cyan-500" />
                <span className="text-sm">Coding Magazine</span>
              </div>
            </div>
            <p className="mb-6 text-center text-sm text-gray-600">50k+ Active Users</p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="#" className="w-48">
                <Image
                  src="https://i.ibb.co/dWSX6TZ/image.png"
                  alt="Get it on Google Play"
                  width={200}
                  height={60}
                  className="h-[60px] w-full"
                />
              </Link>
              <Link href="#" className="w-48">
                <Image
                  src="https://i.ibb.co/9tBkxYY/image.png"
                  alt="Download on the App Store"
                  width={200}
                  height={60}
                  className="h-[60px] w-full"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}