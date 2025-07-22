// import React, { HTMLAttributes } from "react";
// import { twMerge } from "tailwind-merge";
// import { TypingText } from "./CustomTexts";

// const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
//   const { className, children } = props;

//   return (
//     <div
//       className={twMerge(
//         "inline-flex border border-[#F48C06] gap-2 text-[#F48C06] px-3 py-1 rounded-full uppercase items-center mb-5",
//         className
//       )}
//     >
//       <span>&#10038;</span>
//       {/* <span className="text-sm">{children}</span> */}
//       <span>
//         <TypingText
//           title={children ? children.toString() : ""}
//           textStyles="text-center"
//         />
//       </span>
//     </div>
//   );
// };

// export default Tag;

"use client";

import React, { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

import { TypingText } from "./CustomTexts";
import { staggerContainer } from "@/utils/motion";

const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children } = props;

  return (
    <div
      className={twMerge(
        "inline-flex border border-[#750000] gap-2 text-[#750000] px-3 py-1 rounded-full uppercase items-center mb-5",
        className
      )}
    >
      <span>&#10038;</span>
      {/* <span className="text-sm">{children}</span> */}

      <motion.div
        variants={staggerContainer(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col`}
      >
        <span>
          <TypingText
            title={children ? children.toString() : ""}
            textStyles="text-center"
          />
        </span>
      </motion.div>
    </div>
  );
};

export default Tag;
