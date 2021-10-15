import { BtnProps, ChildrenProps } from 'models/props';
import React from 'react';
import { Btn, BtnLink } from './styles';

const Button = React.forwardRef(
  (
    {
      primary,
      secondary,
      isBig,
      href,
      target,
      rel,
      children,
    }: BtnProps & ChildrenProps,
    ref,
  ) => {
    return href ? (
      <BtnLink
        href={href}
        primary={primary}
        secondary={secondary}
        target={target}
        rel={rel}
        ref={ref}
      >
        {children}
      </BtnLink>
    ) : (
      <Btn primary={primary} secondary={secondary} isBig={isBig} ref={ref}>
        {children}
      </Btn>
    );
  },
);

export default Button;
