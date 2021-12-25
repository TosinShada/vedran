/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui';
import NextLink from 'next/link';
import { HiOutlineChevronRight } from 'react-icons/hi';

export function NavLink({ path, label, isExternal, children, ...rest }) {
  return (
    <MenuLink
      path={path}
      spy={true}
      offset={-70}
      smooth={true}
      duration={500}
      className="nav-item"
      activeClass="active"
      label={label}
      isExternal={isExternal}
      {...rest}
    />
  );
}
export function MenuLink({ path, label, isExternal, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A href={path} {...rest} sx={styles.navigation} target={isExternal ? '_blank' : ''}>{children ? children : label}</A>
    </NextLink>
  );
}

export function Link({ path, label, children, ...rest }) {
  return (
      <A href={path} {...rest}>{children ? children : label}</A>
  );
}

export function LearnMore({ path, label, children, ...rest }) {
  return (
    <NextLink href={path}>
      <A sx={styles.learnMore} {...rest}>
        {label ?? 'Learn More'} <HiOutlineChevronRight />
      </A>
    </NextLink>
  );
}

const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transition: 'margin-left 0.3s ease-in-out 0s',
      ml: '3px',
    },
    ':hover': {
      svg: {
        ml: '8px',
      },
    },
  },
  navigation: {
    textDecoration: 'none',
    color: 'primary',
  },
};
