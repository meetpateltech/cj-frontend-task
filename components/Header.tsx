'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4">
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://i.ibb.co/7NtFfGs/image.png"
              alt="Coding Pro Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold">
              <span className="text-[#00E5BE]">CODING</span>{' '}
              <span className="text-[#2563EB]">PRO</span>
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            <Link
              href="/about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              href="/labs"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Virtual Labs
            </Link>
            <Link
              href="/programs"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              Programs
            </Link>
            <Link
              href="/colleges"
              className="text-sm font-medium text-gray-600 hover:text-gray-900"
            >
              For Colleges
            </Link>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Button variant="outline" className="text-[#2563EB]">
              Log in
            </Button>
            <Button className="bg-[#2563EB] hover:bg-[#1d4ed8]">Register</Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="absolute left-0 right-0 top-16 z-50 bg-white p-4 shadow-lg lg:hidden">
              <div className="flex flex-col gap-4">
                <Link
                  href="/about"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
                <Link
                  href="/labs"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Virtual Labs
                </Link>
                <Link
                  href="/programs"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  Programs
                </Link>
                <Link
                  href="/colleges"
                  className="text-sm font-medium text-gray-600 hover:text-gray-900"
                >
                  For Colleges
                </Link>
                <div className="flex flex-col gap-2">
                  <Button variant="outline" className="text-[#2563EB] w-full">
                    Log in
                  </Button>
                  <Button className="bg-[#2563EB] hover:bg-[#1d4ed8] w-full">
                    Register
                  </Button>
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}