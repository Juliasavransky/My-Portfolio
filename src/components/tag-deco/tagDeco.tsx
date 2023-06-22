import { La_Belle_Aurore } from 'next/font/google';
import styled from './tagDeco.module.scss';
import { CSSProperties } from 'react';

const laBelle = La_Belle_Aurore({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
});

type TagDecoProps = {
  text: string;
  style?: CSSProperties;
};

export default function TagDeco({ text, style }: TagDecoProps) {
  return (
    <div style={style} className={laBelle.className}>
      <span className={styled.tag_deco}>{text}</span>
    </div>
  );
}
