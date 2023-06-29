'use client';
import React, { useEffect } from 'react';
import TagCloud from 'TagCloud';

const TextCloud = () => {
  useEffect(() => {
    return () => {
      const container = '.tagcloud';
      const text = [
        'HTML',
        'CSS',
        'Java-Script',
        'Hooks',
        'Mongoose',
        'React JS',
        'Redux',
        'SCSS',
        'TypeScript',
        'Context',
        'Node-js',
        'Mongo DB',
        'Express',
        'Git',
        'Bootstrap',
        'Git-hub',
        'BEM',
        'Material-UI',
        'Figma',
        'JSON',
        'Postman',
        'Zeplin',
        'OOP',
        'Ajax',
        'API',
        'Next.js',
        'MUI',
        'WordPress',
        'UX',
        'UI',
      ];

      const options = {
        radius: 455,
        keep: true,
        maxSpeed: 'normal',
        initSpeed: 'fast',
        direction: 135,
      };
      //@ts-ignore
      TagCloud(container, text, options);
    };
  }, []);

  return (
    <div style={{ width: '54%' }}>
      <div
        style={{
          color: '#ffcc00',
          fontSize: '1.8rem',
          letterSpacing: '3px',
        }}
        className='tagcloud'
      >
        <span
          className='tagcloud--item'
          //@ts-ignore
          style={{ ':hover': { color: '#fff' } }}
        ></span>
      </div>
    </div>
  );
};

export default TextCloud;
