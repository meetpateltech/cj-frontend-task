'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function EnquireSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    city: '',
    acceptTerms: false
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className="w-full max-w-6xl mx-auto p-4 md:p-6">
      <div className="rounded-2xl bg-white shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="relative overflow-hidden md:rounded-tr-3xl md:rounded-br-3xl h-[400px] md:h-[600px]">
            <div className="absolute inset-0 md:p-4">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  src="https://i.ibb.co/P5XrT5G/image.png"
                  alt="Developer working with multiple screens"
                  fill
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
          <div className="p-6 md:p-8 lg:p-12">
            <div className="space-y-6">
              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#4285f4]">
                  Find Out More
                </h2>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#4285f4]">
                  Reasons To Stay
                </h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input
                    id="fullName"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Mobile no.</Label>
                  <Input
                    id="mobile"
                    type="tel"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    required
                  />
                </div>
                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.acceptTerms}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, acceptTerms: checked as boolean })
                    }
                    required
                  />
                  <Label htmlFor="terms" className="text-sm leading-none">
                    Creating an account means you&apos;re okay with our Terms of Service, Privacy
                    Policy, and default Notification Settings
                  </Label>
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#4285f4] hover:bg-[#3367d6] text-white"
                >
                  Enquire Now
                </Button>
                <div className="text-center text-sm">
                  Already Have An Account?{' '}
                  <Link href="/sign-in" className="text-[#4285f4] hover:underline">
                    Sign In
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}