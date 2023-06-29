'use client';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import styled from './typeWriter.module.scss';
import Typed from 'typed.js';

export default function TypeWriter() {
  const el = useRef<HTMLDivElement>(null);
  let typed: Typed | null = null;
  useEffect(() => {
    const options = {
      strings: [
        'My Skills:\n ^1000\nHTML^1000\n`CSS` ^1000\n`Java-Script`^1000\n`React js` ^1000\n`Hooks` ^1000\n`Mongoose` ^1000\n`Sass` ^1000\n`Type-Script` ^1000\n`Context` ^1000\n`Node-js` ^1000\n`Mongo DB` ^1000\n`Express` ^1000\n`Git` ^1000\n`MUI` ^1000\n`Figma` ^1000\n`Next-js` ^1000\n`and more...``',
      ],
      typeSpeed: 100,
      fadeOut: true,
      loop: true,
    };

    // elRef refers to the <span> rendered below
    typed = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed?.destroy();
    };
  }, []);

  return (
    <>
      {/* <h1 className={styled.text}>My Skills</h1> */}
      <div className={styled.container}>
        <div className={styled.text}>
          <span style={{ whiteSpace: 'pre' }} ref={el} />
        </div>
      </div>
    </>
  );
}
