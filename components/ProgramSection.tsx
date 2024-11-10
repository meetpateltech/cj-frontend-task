import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function ProgramSection() {
  return (
    <section className="relative overflow-hidden py-16 px-4 md:px-6 lg:px-8">
      {/* Background Patterns */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 grid grid-cols-8 gap-1 text-xs text-muted-foreground/20">
          {Array.from({ length: 160 }).map((_, i) => (
            <div key={i}>{Math.round(Math.random())}</div>
          ))}
        </div>
      </div>
      
      {/* Decorative Dots */}
      <div className="absolute right-0 top-20 w-48 h-48 opacity-20">
        <div className="grid grid-cols-8 gap-2">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-primary" />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="w-20 h-20 mb-6 rounded-full bg-primary/10 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full border-2 border-dashed border-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Check Out Our <span className="text-primary">Holistic Programs</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Designed To Help You Reach Your <span className="text-primary">Goals</span>
          </p>
        </div>

        {/* Programs */}
        <div className="space-y-8">
          {/* Campus Training */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://i.ibb.co/BnJFrXC/image.png"
                    alt="Campus Training"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="text-2xl font-bold mb-2">Campus Training</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For students| 24+ Modules | 10 instructors
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.
                  </p>
                  <Button>
                    Explore
                    <svg
                      className="ml-2 h-4 w-4"
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
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Training */}
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/3">
                  <img
                    src="https://i.ibb.co/cF4CPw2/image.png"
                    alt="Professional Training"
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-8 flex-1">
                  <h3 className="text-2xl font-bold mb-2">Professional Training</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    For Professionals| 24+ Modules | 10 instructors
                  </p>
                  <p className="mb-6 text-muted-foreground">
                    The app features in-app coding, eliminating the need for laptops. With cloud-based virtual machines and labs, students can practice freely, cutting hardware and maintenance costs.
                  </p>
                  <Button>
                    Explore
                    <svg
                      className="ml-2 h-4 w-4"
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
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}