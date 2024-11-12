import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Using NestPay has been a game-changer for our business. The real-time rates and ability to make payments in multiple currencies and several countries have saved us both time and money. Highly recommended!",
      name: "Folashade Omidiora",
      email: "folashade@nestpay.com",
      profileImage: "/img/brownMan.png",
    },
    {
      id: 2,
      text: "The setup of the API for our dev team was effortless. The security for our users through the SMS OTP code was a game-changer. And I've never had downtime in a year. We've saved a tremendous amount of time.",
      name: "Ololade Aderonke",
      email: "ololade@nestpay.com",
      profileImage: "/img/brownMan.png",
    },
    {
      id: 3,
      text: "Using NestPay has been a game-changer for our business. The real-time rates and ability to make payments in multiple currencies and several countries have saved us both time and money. Highly recommended!",
      name: "Folashade Omidiora",
      email: "folashade@nestpay.com",
      profileImage: "/img/brownMan.png",
    },
    {
      id: 4,
      text: "Using NestPay has been a game-changer for our business. The real-time rates and ability to make payments in multiple currencies and several countries have saved us both time and money. Highly recommended!",
      name: "Folashade Omidiora",
      email: "folashade@nestpay.com",
      profileImage: "/img/brownMan.png",
    },
    {
      id: 5,
      text: "Using NestPay has been a game-changer for our business. The real-time rates and ability to make payments in multiple currencies and several countries have saved us both time and money. Highly recommended!",
      name: "Folashade Omidiora",
      email: "folashade@nestpay.com",
      profileImage: "/img/brownMan.png",
    },
  ];

  return (
    <div
      id="Testimonials"
      className=" bg-blue-600 text-white py-14 px-4 md:px-28"
    >
      {" "}
      <div className=" container mx-auto">
        <h2 className="text-left text-3xl md:text-4xl font-semibold mb-10 max-w-md">
          Here&apos;s what our users have to say About Us
        </h2>
        <Carousel>
          <CarouselContent className="hidden md:flex">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="basis-1/3 p-4">
                <div className="bg-blue-500 text-white rounded-xl h-[541px] p-6 shadow-lg flex flex-col justify-between ">
                  <div className="">
                    {" "}
                    <p className="text-sm font-semibold mb-2">
                      TESTIMONIAL {testimonial.id}
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      “{testimonial.text}”
                    </p>
                  </div>

                  <div className="flex items-center mt-4">
                    <Image
                      src={testimonial.profileImage}
                      alt={`${testimonial.name}'s profile`}
                      className=" rounded-full object-cover"
                      width={50}
                      height={50}
                    />

                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-200">
                        {testimonial.email}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* Mobile Carousel */}
          <CarouselContent className="md:hidden">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="p-4">
                <div className="bg-blue-500 text-white rounded-xl h-[541px] p-6 shadow-lg flex flex-col justify-between ">
                  <div className="">
                    {" "}
                    <p className="text-sm font-semibold mb-2">
                      TESTIMONIAL {testimonial.id}
                    </p>
                    <p className="text-lg leading-relaxed mb-4">
                      “{testimonial.text}”
                    </p>
                  </div>

                  <div className="flex items-center mt-4">
                    <Image
                      src={testimonial.profileImage}
                      alt={`${testimonial.name}'s profile`}
                      className=" rounded-full object-cover"
                      width={50}
                      height={50}
                    />

                    <div className="ml-3">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-200">
                        {testimonial.email}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="text-white hidden md:flex">
            Previous
          </CarouselPrevious>
          <CarouselNext className="text-white hidden md:flex">
            Next
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
