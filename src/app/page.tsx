import SplitText from '@/components/split-text/splitText';
import styled from './home.module.scss';
import Link from 'next/link';
import TagDeco from '@/components/tag-deco/tagDeco';

export default function Home() {
  return (
    <div className={styled.main_page}>
      <TagDeco text='<html>' />
      <TagDeco style={{ marginLeft: '9rem' }} text='<body>' />

      <div className={styled.header_text}>
        <TagDeco text='<h1>' />
        <div className={styled.text__line}>
          <SplitText text='Hi,' />
        </div>
        <div className={styled.text__line}>
          <SplitText text='I`m' />
          <div>&nbsp; </div>
          <span className={styled.text__line}>
            <span className={styled.text__line__FL}>J</span>
            <SplitText text='ulia' />
          </span>
        </div>

        <div className={styled.text__line}>
          <SplitText text='Frontend' />
          <div>&nbsp; </div>
          <SplitText text='Developer' />
        </div>
        <TagDeco text='</h1>' />
      </div>

      <div className={styled.btn}>
        <TagDeco text='<button>' />
        <div className={styled.btn__main_page}>
          <Link href='/projects'></Link>
        </div>
        <TagDeco text='</button>' />
      </div>
    </div>
  );
}
