import { links } from 'data/links';
import { RoutesType } from 'models/enums';
import { NavLinksProps, TranslateProps } from 'models/props';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { NavLink, NavLinksList, NavLinksListItem } from './styles';

const NavLinks = ({ isSidebar, t }: NavLinksProps & TranslateProps) => {
  const { pathname } = useRouter();

  const isActive = links.find(
    (link) => link.url === RoutesType.BLOG && pathname.includes(link.url),
  );

  return (
    <NavLinksList isSidebar={isSidebar}>
      {links.map((link) => (
        <NavLinksListItem key={link.id}>
          <Link href={link.url} passHref>
            <NavLink
              className={pathname === link.url ? 'active' : ''}
              isActive={!!isActive && link.url === RoutesType.BLOG}
              isSidebar={isSidebar}
            >
              {t(link.label)}
            </NavLink>
          </Link>
        </NavLinksListItem>
      ))}
    </NavLinksList>
  );
};

export default NavLinks;
