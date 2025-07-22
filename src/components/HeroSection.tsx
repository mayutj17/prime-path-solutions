"use client";

import Image from "next/image";

import { withSoftMask } from "@/framer/WithSoftMask";
import { useState } from "react";

const ParagraphWithSoftMask = withSoftMask(() => (
  <p className="leading-normal text-2xl mb-8">
    Prime Path Solutions delivers top-notch BPO services, boosting efficiency
    and driving growth for businesses across industries.
  </p>
));

const HeroSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <div
        className="pt-8 mb-20 md:pt-5 md:mb-10 overflow-x-clip overflow-hidden w-full"
        style={{
          background:
            "radial-gradient(ellipse 200% 100% at bottom, #991b1b, #FFFFFF 100%)",
        }}
      >
        <link
          rel="preload"
          as="image"
          href="/img/companypng/Gabriella.png"
          className="hidden"
        />

        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row justify-between sm:px-3">
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-6/12 justify-center lg:pt-24 items-start text-center lg:text-left mb-5 md:mb-0">
            <h1 className="my-4 text-5xl font-bold leading-tight text-[var(--text-blue)]">
              <span className="text-[#750000]">Empowering</span> Business Growth
              with Expert BPO Solutions
            </h1>

            <ParagraphWithSoftMask />
          </div>

          {/* Right Column */}
          <div
            className="w-full md:w-8/12 lg:w-6/12 relative mx-auto"
            id="girl"
          >
            <Image
              data-aos="fade-up"
              data-aos-once="true"
              className="object-contain w-full h-[800px] w-[800px] object-contain -mb-[100px]"
              src="/img/girl.png"
              alt="Boost Your Business Efficiency with Prime Path Solutions"
              width={800}
              height={800}
              priority
              placeholder="blur"
              blurDataURL="data:image/png;base64,<base64-placeholder>"
            />

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-once="true"
              className="absolute top-[10%] -left-2 sm:top-[15%] sm:left-[5%] md:top-[20%] md:left-[10%] lg:top-[25%] lg:left-0 animate-floating"
            >
              <div className="relative">
                {/* Show skeleton while loading */}
                {isLoading && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                )}

                <Image
                  src="/img/companypng/Gabriella.png"
                  alt="Description"
                  width={200}
                  height={200}
                  quality={100}
                  priority
                  loading="eager"
                  className={`rounded-lg transition-opacity duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoadingComplete={() => setIsLoading(false)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARAVFhgeFxgeHRkdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-once="true"
              className="absolute top-[12%] -right-2 sm:top-[15%] sm:right-[10%] md:top-[18%] md:right-[15%] lg:top-[15%] lg:right-0 animate-floating"
            >
              <div className="relative">
                {/* Show skeleton while loading */}
                {isLoading && (
                  <div className="absolute inset-0 bg-red-300 bg-opacity-60 animate-pulse rounded-lg" />
                )}

                <Image
                  src="/img/companypng/img2.png"
                  alt="Description"
                  width={200}
                  height={200}
                  quality={100}
                  priority
                  loading="eager"
                  className={`rounded-lg transition-opacity duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoadingComplete={() => setIsLoading(false)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARAVFhgeFxgeHRkdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-once="true"
              className="absolute bottom-[10%] -left-1 sm:bottom-[15%] sm:left-[5%] md:bottom-[20%] md:left-[8%] lg:bottom-[15%] lg:left-0 animate-floating3"
            >
              <div className="relative">
                {/* Show skeleton while loading */}
                {isLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-80 animate-pulse rounded-lg" />
                )}

                <Image
                  src="/img/companypng/img3.png"
                  alt="Description"
                  width={200}
                  height={200}
                  quality={100}
                  priority
                  loading="eager"
                  className={`rounded-lg transition-opacity duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoadingComplete={() => setIsLoading(false)}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx0fHRsdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/2wBDARAVFhgeFxgeHRkdHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR0dHR3/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-once="true"
              className="absolute bottom-[15%] -right-1 sm:bottom-[20%] sm:right-[5%] md:bottom-[25%] md:right-[10%] lg:bottom-[20%] lg:right-[5%] animate-floating2"
            >
              <div className="relative">
                {isLoading && (
                  <div className="absolute inset-0 bg-white bg-opacity-80 animate-pulse rounded-lg" />
                )}

                <Image
                  src="/img/companypng/img4.png"
                  alt="Description"
                  width={200}
                  height={200}
                  quality={100}
                  priority
                  className={`bg-white bg-opacity-80 rounded-lg transition-opacity duration-300 ${
                    isLoading ? "opacity-0" : "opacity-100"
                  }`}
                  onLoadingComplete={() => setIsLoading(false)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

{
  /* <div className="w-full md:w-8/12 lg:w-6/12 relative mx-auto">
  <div className="relative">
    <Image
      data-aos="fade-up"
      data-aos-once="true"
      className="object-contain w-full h-auto max-w-[500px] md:max-w-[600px] lg:max-w-[800px] mx-auto -mb-[50px] md:-mb-[75px] lg:-mb-[100px]"
      src="/img/girlnew.png"
      alt="Boost Your Business Efficiency with Prime Path Solutions"
      width={800}
      height={800}
      priority
    />
  </div>

  <div
    data-aos="fade-up"
    data-aos-delay="300"
    data-aos-once="true"
    className="absolute top-[10%] -left-2 
          sm:top-[15%] sm:left-[5%]
          md:top-[20%] md:left-[10%]
          lg:top-[25%] lg:left-0
          animate-floating1"
  >
    <img
      className="bg-black rounded-lg h-8 w-auto
            sm:h-12 md:h-16"
      src="img/calendar.svg"
      alt="Calendar"
    />
  </div>

  <div
    data-aos="fade-up"
    data-aos-delay="400"
    data-aos-once="true"
    className="absolute top-[12%] -right-2
          sm:top-[15%] sm:right-[10%]
          md:top-[18%] md:right-[15%]
          lg:top-[15%] lg:right-0
          animate-floating"
  >
    <img
      className="bg-red-300 bg-opacity-60 rounded-lg h-10 w-auto
            sm:h-14 md:h-20"
      src="img/gabriella.svg"
      alt="Gabriella"
    />
  </div>

  <div
    data-aos="fade-up"
    data-aos-delay="500"
    data-aos-once="true"
    className="absolute bottom-[10%] -left-1
          sm:bottom-[15%] sm:left-[5%]
          md:bottom-[20%] md:left-[8%]
          lg:bottom-[15%] lg:left-0
          animate-floating3"
  >
    <img
      className="bg-white bg-opacity-80 rounded-lg h-10 w-auto
            sm:h-14 md:h-20"
      src="img/ux-class.svg"
      alt="UX Class"
    />
  </div>

  <div
    data-aos="fade-up"
    data-aos-delay="600"
    data-aos-once="true"
    className="absolute bottom-[15%] -right-1
          sm:bottom-[20%] sm:right-[5%]
          md:bottom-[25%] md:right-[10%]
          lg:bottom-[20%] lg:right-[5%]
          animate-floating2"
  >
    <img
      className="bg-green-600 bg-opacity-70 rounded-lg h-12 w-auto
            sm:h-16 md:h-20"
      src="img/congrat.svg"
      alt="Congratulations"
    />
  </div>
</div>; */
}
