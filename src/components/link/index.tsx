import * as React from 'react';
import { NavLink } from 'react-router-dom';

/*
  Link Helpers
*/
interface LinkProps {
  to: string;
  state?: object;
  activeClassName?: string;
  onClick?: () => void;
  className?: string;
}

/*
  Link Styles
*/

const _Link: React.SFC<LinkProps> = props => {
  return (
    <NavLink
      className={props.className}
      to={{ pathname: props.to, state: props.state }}
      activeClassName={props.activeClassName}
      onClick={props.onClick}
    >
      {props.children}
    </NavLink>
  );
};

const UILink = _Link;

export { UILink };
