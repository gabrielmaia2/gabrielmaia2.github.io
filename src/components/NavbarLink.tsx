import React, { PropsWithChildren } from "react";
import { Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function NavbarLink({
  children,
  ...props
}: PropsWithChildren<any>) {
  const { href } = props;
  const page = new URL(`https://www.example.com${href}`).pathname;
  const currentPage = useLocation().pathname;
  let active: string = "";
  let ariaCurrent: string | undefined = undefined;
  if (currentPage === page) {
    active = "active";
    ariaCurrent = "page";
  }

  return (
    <Nav.Link className={active} aria-current={ariaCurrent} {...props}>
      {children}
    </Nav.Link>
  );
}
