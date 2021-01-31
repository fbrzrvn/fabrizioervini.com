import React from 'react';
import SvgSent from '../../assets/images/mail_sent.svg';
import {
  FormContent,
  FormH1,
  Img } from './ContactElements';

const Success = () => {
  return (
    <>
      <FormContent>
        <FormH1>Your message was successfully sent!</FormH1>
        <Img src={SvgSent} alt="mail-sent" />
      </FormContent>
    </>
  )
}

export default Success;