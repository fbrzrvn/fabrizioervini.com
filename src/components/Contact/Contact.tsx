import { RoutesType } from 'models/enums';
import { TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import Button from '../Button';
import {
  ContactBtn,
  ContactContainer,
  ContactContent,
  ContactH1,
  ContactP,
} from './styles';

const Contact = ({ t }: TranslateProps) => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ScrollAnimation animateIn="fadeInDown" delay={0.15 * 1000}>
          <ContactH1>{t('contactTitle')}</ContactH1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInRight" delay={0.25 * 1000}>
          <ContactP>{t('contactText')}</ContactP>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.5 * 1000}>
          <ContactBtn>
            <Link href={RoutesType.CONTACT} passHref>
              <Button primary>{t('contactBtnLabel')}</Button>
            </Link>
          </ContactBtn>
        </ScrollAnimation>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
