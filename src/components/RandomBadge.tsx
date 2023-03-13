import React, { PropsWithChildren } from "react";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const RandomBadgeStyled = styled(Badge)<{ value: number }>`
  background-color: hsl(${({ value }) => value}, 30%, 50%) !important;
  margin: 0.2em;
`;

function RandomBadge({ children }: PropsWithChildren<{}>) {
  const value = Math.floor(Math.random() * 360);
  return <RandomBadgeStyled value={value}>{children}</RandomBadgeStyled>;
}

const RandomBadgeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: -0.2em;
`;

export { RandomBadge, RandomBadgeContainer };
