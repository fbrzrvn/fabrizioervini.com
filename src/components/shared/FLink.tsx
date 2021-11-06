import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TranslateProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BtnLink } from 'styles/mixins';

type FLinkProps = {
  url: string;
};

const FBtnLink = styled.a`
  ${BtnLink}
`;

const FLink = ({ t, url }: TranslateProps & FLinkProps) => {
  return (
    <Link href={url} passHref>
      <FBtnLink target="_blank" rel="noopener noreferrer">
        {t('visitWebsite')} <FontAwesomeIcon icon={faLongArrowAltRight} />
      </FBtnLink>
    </Link>
  );
};

export default FLink;
