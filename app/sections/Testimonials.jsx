export default function TestimonialSection() {
    const testimonials = [
      {
        text: "Working with Hokage was a game-changer for our brand. Their attention to detail and creativity in designing our brand identity truly set us apart. We’ve never looked better!",
        name: "Joao M.",
        role: "Startup Founder",
      },
      {
        text: "Our website's transformation was incredible. The development team built a lightning-fast, responsive site that perfectly captures our brand’s essence. We’ve seen a significant boost in traffic and engagement!",
        name: "Chinwe Obi",
        role: "Marketing Lead at GreenSprout",
      },
      {
        text: "We needed a custom dashboard for our analytics, and Hokage delivered a masterpiece. Now, our decision-making process is faster and more informed than ever.",
        name: "Lais A.",
        role: "E-commerce Manager at StyleBay",
      },
    ];
  
    return (
      <section className="w-full max-w-[1440px] mx-auto flex flex-col items-center gap-8 px-4 pt-16">
        <div className="flex items-center justify-center px-6 py-2 border rounded-full border-gray-300">
          <h2 className="text-[24px] md:text-[36px] font-vastago font-medium leading-[125%] text-center">
            Testimonials
          </h2>
        </div>
        <h2 className="text-[20px] md:text-[28px] font-vastago font-medium leading-[125%] text-center">
          Feedback from past clients
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="tracking-wide w-full max-w-[400px] h-auto p-6 gap-5 border border-gray-300 rounded-[12px] shadow-lg flex flex-col justify-center items-center text-center"
            >
              <p className="font-nohemi font-normal text-[16px] leading-[140%] mb-4">
                "{testimonial.text}"
              </p>
              <h3 className="font-nohemi font-bold text-[16px] leading-[140%]">
                {testimonial.name}
              </h3>
              <p className="font-nohemi font-normal text-[14px] leading-[140%]">
                {testimonial.role}
              </p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  