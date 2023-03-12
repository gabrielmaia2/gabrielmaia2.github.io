import React, { useRef, PropsWithChildren } from "react";
import { StyledComponent } from "styled-components";
import { useIntersectionObserver } from "usehooks-ts";

export default function ViewTransition({
  styledComponent: StyledComponent,
  children,
  ...props
}: PropsWithChildren<{
  styledComponent: StyledComponent<"div", any, { visible?: boolean }, never>;
}> &
  Record<string, any>) {
  const ref = useRef<any>(null);
  const entry = useIntersectionObserver(ref, {});
  const visible = !!entry?.isIntersecting;

  return (
    <StyledComponent ref={ref} visible={visible} {...props}>
      {children}
    </StyledComponent>
  );
}
