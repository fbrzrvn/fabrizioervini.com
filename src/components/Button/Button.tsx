import { BtnProps, ChildrenProps } from 'models/props';
import React from 'react';
import { Btn, BtnLink } from './styles';

const Button = React.forwardRef(
  (
    {
      primary,
      secondary,
      isBig,
      isSmall,
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
        target={target}
        rel={rel}
        ref={ref}
        primary={primary}
        secondary={secondary}
        isBig={isBig}
        isSmall={isSmall}
      >
        {children}
      </BtnLink>
    ) : (
      <Btn
        ref={ref}
        primary={primary}
        secondary={secondary}
        isBig={isBig}
        isSmall={isSmall}
      >
        {children}
      </Btn>
    );
  },
);

export default Button;
