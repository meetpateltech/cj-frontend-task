import Image from 'next/image';

export default function FeatureSection() {
  const features = [
    {
      icon: "https://i.ibb.co/8grpWDY/image.png",
      title: "Created by IIT-IIM Alumni",
      description: "We've learnt from the best and strive to bring you the best."
    },
    {
      icon: "https://i.ibb.co/4wqbtMJ/image.png",
      title: "A.I. Integration",
      description: "We have harnessed the power of A.I. to enhance and assess your knowledge"
    },
    {
      icon: "https://i.ibb.co/zQjFg1Q/image.png",
      title: "In-app Coding",
      description: "The app features in-app coding, eliminating the need for laptops"
    },
    {
      icon: "https://i.ibb.co/V9XRZv7/image.png",
      title: "Extensive E-books",
      description: "Deepen your understanding and mastery of the skills."
    },
    {
      icon: "https://i.ibb.co/2nB57Ld/image.png",
      title: "Recorded Lectures",
      description: "Access lectures anywhere and anytime at your own pace."
    },
    {
      icon: "https://i.ibb.co/0nTDDPw/image.png",
      title: "Flash cards",
      description: "Make learning convenient and fun using flash cards."
    }
  ]

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-500 to-blue-600 py-12 md:py-20">
      {/* Decorative hexagons */}
      <div className="absolute right-0 top-0 h-24 w-24 opacity-20">
        <div className="h-full w-full rotate-45 border-8 border-white" />
      </div>
      <div className="absolute bottom-0 left-0 h-24 w-24 opacity-20">
        <div className="h-full w-full rotate-45 border-8 border-white" />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          What Sets Us Apart?
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-transform hover:scale-105"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={72} 
                  height={72} 
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="mb-2 text-center text-xl font-semibold text-blue-600">
                {feature.title}
              </h3>
              <p className="text-center text-sm text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}