import React, { CSSProperties } from 'react';
// import { motion } from 'framer-motion';

type SplitTextProps = {
  text: string;
  style?: CSSProperties;
};

// const splitTextMotions = {
//   hidden: {
//     x: '-100vw',
//     opacity: 0,
//   },
//   visible: {
//     x: 0,
//     opacity: 1,
//   },
//   transition: {
//     type: 'spring',
//     mass: 5,
//     damping: 6,
//     when: 'beforeChildren',
//     staggerChildren: 0.5,
//   },
// };

// const spanMotions = {
//   hidden: {
//     opacity: 0,
//     scale: 0.1,
//   },
//   visible: {
//     opacity: 1,
//     scale: 1,
//   },
//   // transition: {
//   //   duration: 5,
//   //   type: 'spring',
//   //   stiffness: 160,
//   // },
// };
export default function SplitText({ text, style }: SplitTextProps) {
  return (
    <>
      {text.split('').map((char, index) => (
        <span style={style} key={index}>
          {char}
        </span>
      ))}
    </>
  );
}
