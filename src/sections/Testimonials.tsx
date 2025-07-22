"use client";
// import avatar1 from "/img/avatars/avatar-1.png";
// import avatar2 from "/img/avatars/avatar-2.png";
// import avatar3 from "/img/avatars/avatar-3.png";
// import avatar4 from "/img/avatars/avatar-4.png";
// import avatar5 from "/img/avatars/avatar-5.png";
// import avatar6 from "/img/avatars/avatar-6.png";
// import avatar7 from "/img/avatars/avatar-7.png";
// import avatar8 from "/img/avatars/avatar-8.png";
// import avatar9 from "/img/avatars/avatar-9.png";
import Image from "next/image";
import React from "react";
// import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Tag from "@/components/Tag";

const testimonials = [
  {
    text: "As a manager in a dynamic BPO environment, this tool has streamlined our operations and empowered our agents to deliver exceptional results.",
    imageSrc: "/img/avatars/avatar-1.png",
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's efficiency and client satisfaction scores have improved significantly since adopting this platform.",
    imageSrc: "/img/avatars/avatar-2.png",
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This solution has revolutionized the way we handle customer interactions and manage high-volume workloads.",
    imageSrc: "/img/avatars/avatar-3.png",
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "We were impressed by how seamlessly this platform integrated into our existing BPO processes, boosting productivity overnight.",
    imageSrc: "/img/avatars/avatar-4.png",
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Managing client projects and SLA adherence has never been this efficient. This tool ensures we're always on top of our goals.",
    imageSrc: "/img/avatars/avatar-5.png",
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The advanced reporting and analytics features have provided us with deep insights, helping us make data-driven decisions.",
    imageSrc: "/img/avatars/avatar-6.png",
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "This platform has simplified task allocation, enhanced communication, and optimized our team collaboration in real-time.",
    imageSrc: "/img/avatars/avatar-7.png",
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "The tool's versatility allows us to handle client requests, monitor agent performance, and manage documentation effortlessly.",
    imageSrc: "/img/avatars/avatar-8.png",
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its intuitive interface and tailored solutions align perfectly with the fast-paced demands of the BPO industry.",
    imageSrc: "/img/avatars/avatar-9.png",
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="card" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">
                        {name}
                      </div>
                      <div className="leading-5 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-white">
      <div className="container">
        <div className="mt-10">
          <div
            data-aos="flip-down"
            className="text-center max-w-screen-md mx-auto"
          >
            <div className="flex justify-center">
              <Tag>testimonials</Tag>
            </div>
            <h1 className="text-3xl font-bold mb-4 text-black tracking-tighter">
              What Our <span className="text-[#750000]">Users Say</span>
            </h1>
            <p className="text-gray-500">
              Prime Path Solutions is a versatile and powerful cloud-based
              solution that brings together all the tools you need to
              efficiently manage and grow your business process outsourcing
              operations.
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-6 mt-40 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
};
