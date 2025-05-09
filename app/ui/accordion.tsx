"use client";
import { ReactNode } from "react";
import { AccordionGroup, AccordionItem } from "./accordion-group";

type Props = {
  children: ReactNode;
  title: ReactNode;
  onChange?: () => void;
};

export default function Accordion(props: Props) {
  return (
    <AccordionGroup
      onChange={() => {
        props.onChange?.();
      }}>
      <AccordionItem itemKey="1" title={props.title}>
        {props.children}
      </AccordionItem>
    </AccordionGroup>
  );
}
