import Link from "next/link"
import { Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* First Column */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Let&apos;s keep in touch!</h2>
            <p className="text-sm text-gray-200">Request a CodingPro Institute enquiry!</p>
            
            <div className="flex gap-2">
              <Input 
                placeholder="Institute name" 
                className="bg-transparent border-white/20 text-white placeholder:text-gray-300"
              />
              <Button size="icon" variant="ghost" className="border border-white/20">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-2">
              <Link href="#" className="block hover:text-gray-200">Create Account</Link>
              <Link href="#" className="block hover:text-gray-200">Sign in</Link>
            </div>

            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <span>+91 97973 59144</span>
              </p>
              <p className="flex items-center gap-2">
                <span>codinglr.in@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <span>AIC-BHU, Varanasi, 421004</span>
              </p>
            </div>
          </div>

          {/* Second Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Courses</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-gray-200">Campus Training Program</Link>
              <Link href="#" className="hover:text-gray-200">Professional Training Program</Link>
              <Link href="#" className="hover:text-gray-200">B. Tech</Link>
              <Link href="#" className="hover:text-gray-200">B. Des.</Link>
            </nav>
          </div>

          {/* Third Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#" className="hover:text-gray-200">About Us</Link>
              <Link href="#" className="hover:text-gray-200">Blog</Link>
              <Link href="#" className="hover:text-gray-200">Our Team</Link>
              <Link href="#" className="hover:text-gray-200">Privacy</Link>
              <Link href="#" className="hover:text-gray-200">Terms & Conditions</Link>
              <Link href="#" className="hover:text-gray-200">FAQ</Link>
            </nav>
          </div>

          {/* Fourth Column */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-200">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-gray-200">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}