import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Features = () => {
  const featureData = [
    {
      title: "Foreign Accounts",
      description:
        "Open US, UK, and EU bank accounts to effortlessly receive payments from clients worldwide and manage foreign currency accounts alongside your local accounts, all within one seamless platform.",
      iconPath: "/img/internet.png",
      iconAlt: "Foreign Accounts Icon",
    },
    {
      title: "Money Transfer",
      description:
        "Pay suppliers and vendors locally and globally with ease, and swap between local and foreign currencies as needed for convenient payments.",
      iconPath: "/img/search.png",
      iconAlt: "Money Transfer Icon",
    },
    {
      title: "Security & Compliance",
      description:
        "Ensure adherence to regulatory standards with continuous monitoring and auditing, and enjoy robust security with 24/7 customer support.",
      iconPath: "/img/headphone.png",
      iconAlt: "Security & Compliance Icon",
    },
    {
      title: "Currency Exchange",
      description:
        "Swap local and foreign currencies to your preferred currency",
      iconPath: "/img/bitcoin.png",
      iconAlt: "Currency Exchange Icon",
    },
    {
      title: "Account Reporting",
      description:
        "Access and download comprehensive reports of all your transactions, view up-to-date ledger balances, and customize reports based on your needs.",
      iconPath: "/img/report.png",
      iconAlt: "Account Reporting Icon",
    },
    {
      title: "Trade Currencies",
      description:
        "Set your exchange rates and trade currencies at your desired rate",
      iconPath: "/img/internet.png",
      iconAlt: "Trade Currencies Icon",
    },
  ];

  return (
    <div
      id="features"
      className="container mx-auto bg-white py-16 px-4 md:px-0"
    >
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-5 lg:text-5xl">
          Our Core Feature is just <br /> for you
        </h2>
        <p className="text-gray-600 text-md">
          Nestpay provides the right tool to enjoy the most seamless <br />{" "}
          payment processing system
        </p>
      </div>

      {/* Features Display */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
        {featureData.map((feature, index) => (
          <div
            key={index}
            className="bg-primary text-white rounded-xl px-6 py-12 flex flex-col items-center shadow-lg gap-6 "
          >
            <div
              className="w-14 h-14 rounded-full bg-blue-800"
              style={{
                backgroundImage: `url(${feature.iconPath})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-label={feature.iconAlt}
            ></div>

            <div className="space-y-6">
              {" "}
              <h3 className="text-xl text-center font-bold font-greycliff-medium mb-2">
                {feature.title}
              </h3>
              <p className="text-center text-md">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel for Small Screens */}
      <div className="md:hidden">
        <Carousel>
          <CarouselContent>
            {featureData.map((feature, index) => (
              <CarouselItem key={index}>
                <div className="bg-primary  text-white rounded-xl p-6 flex flex-col items-center shadow-lg gap-6">
                  <div
                    className="w-16 h-16 rounded-full bg-blue-800"
                    style={{
                      backgroundImage: `url(${feature.iconPath})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                    aria-label={feature.iconAlt}
                  ></div>
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-center text-md">{feature.description}</p>
                </div>
              </CarouselItem>
            ))}{" "}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Features;
