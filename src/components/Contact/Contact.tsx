import { RoutesType } from 'models/enums';
import { TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import {
  ContactBtn,
  ContactBtnLink,
  ContactContainer,
  ContactContent,
  ContactH1,
  ContactP,
} from './styles';

const Contact = ({ t }: TranslateProps) => {
  return (
    <ContactContainer id="contact">
      <ContactContent>
        <ContactH1>{t('contactTitle')}</ContactH1>
        <ContactP>{t('contactText')}</ContactP>
        <ContactBtn>
          <Link href={RoutesType.CONTACT}>
            <ContactBtnLink>{t('contactBtnLabel')}</ContactBtnLink>
          </Link>
        </ContactBtn>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
