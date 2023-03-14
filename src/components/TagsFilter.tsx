import React, { useEffect, useState, useCallback } from "react";
import {
  ButtonGroup,
  Dropdown,
  DropdownButton,
  Form,
  FormLabel,
} from "react-bootstrap";
import styled from "styled-components";
import { useLocalStorage } from "usehooks-ts";
import Tag from "../types/Tag";

const CategoryDropdown = styled.div.attrs({
  className: "dropdown dropdown-item",
})`
  padding: 0;
  background-color: transparent;
  position: relative;
`;

const CategoryMenu = styled.div.attrs({ className: "dropdown-menu" })`
  position: relative;
`;

export default function TagsFilter<T>({
  title,
  items,
  storageKey,
}: {
  title: string;
  items: (T & { tags?: Tag[] })[];
  storageKey: string;
}) {
  const [checked, setChecked] = useState<Map<string, Map<string, boolean>>>(
    new Map()
  );

  useEffect(() => {
    const tags = new Map();
    items.forEach((i) =>
      (i.tags ?? []).forEach((t) =>
        tags.set(
          t.category,
          (tags.get(t.category) || new Map()).set(t.name, true)
        )
      )
    );

    console.log("effect changed");
    setChecked(tags);
  }, [items]);

  const onChange = useCallback(
    (c: string, t: string, v: boolean) => {
      const cMap = new Map(checked);
      const tMap = new Map(checked.get(c));
      tMap.set(t, v);
      cMap.set(c, tMap);
      setChecked(cMap);
      console.log(tMap);
      console.log(cMap);
    },
    [checked]
  );

  const categoriesJSX = Array.from(checked.keys()).map((c) => {
    const checksJSX = Array.from((checked.get(c) ?? new Map()).entries()).map(
      ([t, v]) => (
        <Dropdown.Item key={`${c}/${t}/${v}`} as={Form.Label} eventKey={t}>
          <Form.Check
            inline
            checked={v}
            onChange={({ target: { checked } }) => onChange(c, t, checked)}
          />
          <span>{t}</span>
        </Dropdown.Item>
      )
    );

    return (
      <CategoryDropdown
        key={c}
        as={ButtonGroup}
        className="dropdown-item"
        autoClose="outside"
      >
        <Dropdown.Toggle>{c}</Dropdown.Toggle>
        <CategoryMenu>{checksJSX}</CategoryMenu>
      </CategoryDropdown>
    );
  });

  return (
    <DropdownButton
      as={ButtonGroup}
      variant="dark"
      title={title}
      autoClose="outside"
    >
      {categoriesJSX}
    </DropdownButton>
  );
}
