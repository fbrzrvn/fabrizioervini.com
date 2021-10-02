import React from 'react';
import { TranslateProps } from '../../models/props';
import ROUTES from '../../routes';
import BtnLinkRouter from '../BtnLinkRouter';
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
        <ContactH1>{t('contactTitle')}</ContactH1>
        <ContactP>{t('contactText')}</ContactP>
        <ContactBtn>
          <BtnLinkRouter to={ROUTES.CONTACT}>
            {t('contactBtnLabel')}
          </BtnLinkRouter>
        </ContactBtn>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact;
