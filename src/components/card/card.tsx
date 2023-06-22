import Link from 'next/link';
import Image from 'next/image';
import styled from './card.module.scss';

type CardProps = {
  projectName?: string;
  gitHubLink?: URL | string;
  pageLink?: URL | string;
  summary?: string;
  img?: string;
};
export default function Card({
  projectName,
  gitHubLink = 'https://github.com',
  pageLink = 'https://github.com',
  summary,
  img = 'test p',
}: CardProps): JSX.Element {
  return (
    <>
      <div className={styled.project_card}>
        <div className={styled.project_card__item}>
          <div className={styled.project_card__image}>
            <Image src={img} height={390} width={750} alt='project' />
          </div>

          <div className={styled.project_card__details}>
            <h2 className={styled.project_card__details__title}>
              {projectName}
            </h2>
            <p className={styled.project_card__details__description}>
              {summary}
            </p>

            <div className={styled.project_card__details__btn}>
              <Link
                target='_blank'
                href={gitHubLink}
                className={styled.project_card__details__link}
              >
                Visit the page
                <span>&#8594;</span>
              </Link>
              <Link
                target='_blank'
                href={pageLink}
                className={styled.project_card__details__link}
              >
                See the code
                <span>&#8594;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
