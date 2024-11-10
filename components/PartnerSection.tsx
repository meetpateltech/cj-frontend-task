export default function PartnerSection() {
  return (
    <section className="flex justify-center items-center w-full py-12 bg-white">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8">
          <h2 className="text-xl font-medium text-center text-muted-foreground">RECOGNISED BY</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-center justify-items-center w-full">
            <div className="flex items-center justify-center w-full max-w-[240px]">
              <img
                alt="Ministry of Commerce and Industry logo"
                className="w-full h-auto object-contain"
                height="80"
                src="https://i.ibb.co/RT4P1Xr/Screenshot-2024-11-09-104948.png"
                style={{
                  aspectRatio: "240/80",
                }}
                width="240"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-[200px]">
              <img
                alt="NSDC logo"
                className="w-full h-auto object-contain"
                height="80"
                src="https://i.ibb.co/ck0ntH4/Screenshot-2024-11-09-110233.png"
                style={{
                  aspectRatio: "200/80",
                }}
                width="200"
              />
            </div>
            <div className="flex items-center justify-center w-full max-w-[180px]">
              <img
                alt="Startup India logo"
                className="w-full h-auto object-contain"
                height="60"
                src="https://i.ibb.co/fYwkB4D/Screenshot-2024-11-09-110330.png"
                style={{
                  aspectRatio: "180/60",
                }}
                width="180"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}