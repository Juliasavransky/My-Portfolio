'use client';
import { FormEvent, useState } from 'react';
import TagDeco from '@/components/tag-deco/tagDeco';
import styled from './contact.module.scss';
import SplitText from '@/components/split-text/splitText';
import handler from './contact';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [massage, setMassage] = useState<string>('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      console.log(name, email, subject, massage);
      const res = await fetch('./contact.ts', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          subject,
          massage,
        }),
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error: any) {
      console.log('Error', error);
    }
  };
  return (
    <>
      <div className={styled.contact_page}>
        <div className={styled.contact_page_content}>
          <div className={styled.contact_page_content_header}>
            <TagDeco text='<h2>' />
            <div>
              <SplitText text='Contact ' />
              <SplitText text=' me' />
            </div>
            <TagDeco text='</h2>' />
          </div>

          <div className={styled.contact_page_content_text}>
            <TagDeco text='<p>' />
            <p>
              I would love to hear from you and promising to return an email
              &#128526;
            </p>
            <TagDeco text='</p>' />
          </div>
        </div>

        <div className={styled.form}>
          <TagDeco text='<form>' />

          <form onSubmit={handleSubmit}>
            <div className={styled.form_group}>
              <input
                className={styled.form__input}
                type='text'
                name='name'
                placeholder='Name'
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ width: '49%' }}
              />
              <input
                className={styled.form__input}
                type='email'
                name='email'
                placeholder='Email Address'
                required
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                style={{ width: '49%' }}
              />
            </div>

            <input
              className={styled.form__input}
              type='text'
              name='subject'
              placeholder='Subject'
              required
              onChange={(e) => setSubject(e.target.value)}
              value={subject}
            />
            <input
              className={styled.form__input}
              name='message'
              placeholder='Massage'
              required
              onChange={(e) => setMassage(e.target.value)}
              value={massage}
            />

            <button
              disabled={!name || !email || !subject || !massage}
              className={styled.form__btn}
            >
              Send message!
            </button>
          </form>
          <TagDeco text='</form>' />
        </div>
      </div>
      <TagDeco style={{ marginLeft: '9rem' }} text='</body>' />
      <TagDeco text='</html>' />
    </>
  );
}
