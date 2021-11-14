import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'hooks';
import { FLinkProps } from 'models/props';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import { BtnLink } from 'styles/mixins';

const FBtnLink = styled.a`
  ${BtnLink}
`;

const FLink = ({ text, url, noRel = false }: FLinkProps) => {
  const { t } = useTranslation();

  return (
    <Link href={url} passHref>
      <FBtnLink
        target={!noRel ? '_blank' : ''}
        rel={!noRel ? 'noopener noreferrer' : ''}
      >
        {t(text)} <FontAwesomeIcon icon={faLongArrowAltRight} />
      </FBtnLink>
    </Link>
  );
};

export default FLink;
