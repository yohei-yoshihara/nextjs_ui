"use client";

import {
  createContext,
  useContext,
  useRef,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { SlArrowDown } from "react-icons/sl";

type ContextType = {
  selected: ItemKey;
  setSelected: (key: ItemKey) => void;
};

const AccordianContext = createContext<ContextType>({
  selected: null,
  setSelected: () => {},
});

type ItemKey = string | null;

type Props = {
  children: ReactNode;
  onChange?: (key: ItemKey) => void;
};

export function AccordionGroup({ children, onChange, ...props }: Props) {
  const [selected, setSelected] = useState<ItemKey>(null);

  useEffect(() => {
    onChange?.(selected);
  }, [selected, onChange]);

  return (
    <div {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </div>
  );
}

type ItemProps = {
  children: ReactNode;
  itemKey: ItemKey;
  title: ReactNode;
};

export function AccordionItem({
  children,
  itemKey,
  title,
  ...props
}: ItemProps) {
  const { selected, setSelected } = useContext(AccordianContext);
  const open = selected === itemKey;
  console.log(`itemKey = ${itemKey}, selected = ${selected}, open = ${open}`);

  const ref = useRef<HTMLDivElement>(null);

  return (
    <div {...props}>
      <div
        role="button"
        onClick={() => setSelected(open ? null : itemKey)}
        className="flex justify-between items-center p-4 font-medium">
        {title}
        <SlArrowDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>
      <div
        className="overflow-y-hidden transition-[height] duration-300"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}>
        <div className="pt-2 p-4" ref={ref}>
          {children}
        </div>
      </div>
    </div>
  );
}
